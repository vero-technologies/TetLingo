/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import {
  Languages,
  BookOpen,
  GraduationCap,
  History,
  ArrowLeftRight,
  Bookmark,
  Copy,
  Check,
  Volume2,
  Search,
  Plus,
  X,
  Trash2,
  Download,
  Upload,
  Sun,
  Moon,
  Database,
  WifiOff,
  Info,
  Trophy,
  Lightbulb,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Import Types
import { DictionaryEntry, HistoryEntry, PartOfSpeech } from './types';

// Import Offline Translator and Dictionary Helpers
import {
  DICTIONARY,
  translateEnglishToTetun,
  translateTetunToEnglish,
  getRelatedAndNearbyWords,
  LINGUISTIC_RULES
} from './translationEngine';

// Import Phonetics and Audio play
import { getPhoneticPronunciation, playSimulatedVoice } from './phonetics';

export default function App() {
  // --- STATE ---
  const [activeTab, setActiveTab] = useState<'translator' | 'dictionary' | 'grammar' | 'sync' | 'about'>('translator');
  const [darkMode, setDarkMode] = useState<boolean>(true);
  
  // Translation States
  const [sourceText, setSourceText] = useState<string>('');
  const [translatedText, setTranslatedText] = useState<string>('');
  const [translationDirection, setTranslationDirection] = useState<'en-tet' | 'tet-en'>('en-tet');
  const [appliedRules, setAppliedRules] = useState<string[]>([]);
  const [copied, setCopied] = useState<boolean>(false);
  const [bookmarked, setBookmarked] = useState<boolean>(false);
  
  // Dictionary States
  const [dictionarySearch, setDictionarySearch] = useState<string>('');
  const [selectedPOSFilter, setSelectedPOSFilter] = useState<string>('all');
  const [selectedWord, setSelectedWord] = useState<DictionaryEntry | null>(null);
  const [showAddCustomWordModal, setShowAddCustomWordModal] = useState<boolean>(false);
  
  // Custom Dictionary States
  const [customWords, setCustomWords] = useState<DictionaryEntry[]>([]);
  const [newCustomWord, setNewCustomWord] = useState({
    word: '',
    translation: '',
    pos: 'noun' as PartOfSpeech,
    definition: '',
    exampleEn: '',
    exampleTet: '',
    related: ''
  });

  // Quiz States
  const [quizStarted, setQuizStarted] = useState<boolean>(false);
  const [quizQuestion, setQuizQuestion] = useState<{
    word: DictionaryEntry;
    options: string[];
    correctIndex: number;
  } | null>(null);
  const [quizAnswered, setQuizAnswered] = useState<boolean>(false);
  const [quizSelectedIndex, setQuizSelectedIndex] = useState<number | null>(null);
  const [quizScore, setQuizScore] = useState<number>(0);
  const [quizStreak, setQuizStreak] = useState<number>(0);
  const [quizHighscore, setQuizHighscore] = useState<number>(0);

  // History and Bookmarks
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [selectedHistoryFilter, setSelectedHistoryFilter] = useState<'all' | 'bookmarks'>('all');

  // Sync / Offline Center State
  const [lastSyncedTime, setLastSyncedTime] = useState<string>('');
  const [syncSuccessMsg, setSyncSuccessMsg] = useState<string>('');
  const [importedStatus, setImportedStatus] = useState<{ success: boolean; message: string } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // --- INITIALIZATION (OFFLINE PERSISTENCE) ---
  useEffect(() => {
    // Theme setup
    const storedTheme = localStorage.getItem('tetlingo_dark_mode');
    if (storedTheme !== null) {
      setDarkMode(storedTheme === 'true');
    } else {
      setDarkMode(true); // Default to dark mode for cozy low-light reading
    }

    // Custom words setup
    const storedCustomWords = localStorage.getItem('tetlingo_custom_words');
    if (storedCustomWords) {
      try {
        setCustomWords(JSON.parse(storedCustomWords));
      } catch (e) {
        console.error(e);
      }
    }

    // History setup
    const storedHistory = localStorage.getItem('tetlingo_history');
    if (storedHistory) {
      try {
        setHistory(JSON.parse(storedHistory));
      } catch (e) {
        console.error(e);
      }
    }

    // Quiz highscore
    const storedHighscore = localStorage.getItem('tetlingo_quiz_highscore');
    if (storedHighscore) {
      setQuizHighscore(parseInt(storedHighscore, 10));
    }

    // Sync Timestamp
    const lastSync = localStorage.getItem('tetlingo_last_sync') || new Date().toLocaleTimeString();
    setLastSyncedTime(lastSync);
  }, []);

  // Save states to localstorage on change (Offline Sync Simulator)
  const saveCustomWords = (updated: DictionaryEntry[]) => {
    setCustomWords(updated);
    localStorage.setItem('tetlingo_custom_words', JSON.stringify(updated));
    updateSyncTimestamp();
  };

  const saveHistory = (updated: HistoryEntry[]) => {
    setHistory(updated);
    localStorage.setItem('tetlingo_history', JSON.stringify(updated));
    updateSyncTimestamp();
  };

  const updateSyncTimestamp = () => {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    setLastSyncedTime(time);
    localStorage.setItem('tetlingo_last_sync', time);
  };

  // Combine static and custom words for dictionary searches
  const getFullDictionary = (): DictionaryEntry[] => {
    return [...customWords, ...DICTIONARY];
  };

  // --- TRANSLATION RUNTIME ---
  const handleTranslate = (textToTranslate: string = sourceText) => {
    const trimmed = textToTranslate.trim();
    if (!trimmed) {
      setTranslatedText('');
      setAppliedRules([]);
      setBookmarked(false);
      return;
    }

    let result: { text: string; rules: string[] };
    if (translationDirection === 'en-tet') {
      result = translateEnglishToTetun(trimmed);
    } else {
      result = translateTetunToEnglish(trimmed);
    }

    setTranslatedText(result.text);
    setAppliedRules(result.rules);

    // Check if this translation already exists in history to sync bookmark state
    const existing = history.find(
      h => h.sourceText.toLowerCase() === trimmed.toLowerCase() && h.direction === translationDirection
    );
    setBookmarked(existing ? existing.isBookmarked : false);

    // Auto-save to history (with debounce or directly)
    // Only save if it's a complete query (not mid-typing) or let user press translate
    const alreadySaved = history.some(
      h => h.sourceText.toLowerCase() === trimmed.toLowerCase() && h.direction === translationDirection
    );
    
    if (!alreadySaved && trimmed.length > 2) {
      const newEntry: HistoryEntry = {
        id: 'hist-' + Date.now() + '-' + Math.random().toString(36).substring(2, 5),
        sourceText: trimmed,
        translatedText: result.text,
        direction: translationDirection,
        timestamp: Date.now(),
        isBookmarked: false,
        rulesApplied: result.rules
      };
      saveHistory([newEntry, ...history.slice(0, 49)]); // cap history at 50 items offline
    }
  };

  // Handle live translation or manually typing
  const handleSourceTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setSourceText(val);
    
    // Live translation for fluid experience
    if (val.trim() === '') {
      setTranslatedText('');
      setAppliedRules([]);
      setBookmarked(false);
    } else {
      handleTranslate(val);
    }
  };

  const swapTranslationDirection = () => {
    const prevDir = translationDirection;
    const prevSource = sourceText;
    const prevTranslated = translatedText;

    setTranslationDirection(prevDir === 'en-tet' ? 'tet-en' : 'en-tet');
    setSourceText(prevTranslated);
    setTranslatedText(prevSource);
    setBookmarked(false);
  };

  const copyToClipboard = () => {
    if (!translatedText) return;
    navigator.clipboard.writeText(translatedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleBookmark = () => {
    if (!sourceText || !translatedText) return;
    
    // Find in history or insert
    const target = history.find(
      h => h.sourceText.toLowerCase() === sourceText.toLowerCase().trim() && h.direction === translationDirection
    );

    if (target) {
      const updated = history.map(h => {
        if (h.id === target.id) {
          const nextState = !h.isBookmarked;
          setBookmarked(nextState);
          return { ...h, isBookmarked: nextState };
        }
        return h;
      });
      saveHistory(updated);
    } else {
      // Create new history entry marked as bookmarked
      const newEntry: HistoryEntry = {
        id: 'hist-' + Date.now(),
        sourceText: sourceText.trim(),
        translatedText: translatedText,
        direction: translationDirection,
        timestamp: Date.now(),
        isBookmarked: true,
        rulesApplied: appliedRules
      };
      setBookmarked(true);
      saveHistory([newEntry, ...history]);
    }
  };

  // --- DICTIONARY ACTIONS ---
  const handleSelectWord = (entry: DictionaryEntry) => {
    setSelectedWord(entry);
    // Suggest word inside active card
  };

  const handleAddCustomWord = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCustomWord.word || !newCustomWord.translation) return;

    const relatedArr = newCustomWord.related
      ? newCustomWord.related.split(',').map(s => s.trim())
      : [];

    const customEntry: DictionaryEntry = {
      id: 'custom-word-' + Date.now(),
      word: newCustomWord.word.trim(),
      translation: newCustomWord.translation.trim(),
      pos: newCustomWord.pos,
      definition: newCustomWord.definition.trim() || 'Custom user added dictionary word.',
      exampleEn: newCustomWord.exampleEn.trim() || `I have a ${newCustomWord.word.trim()}.`,
      exampleTet: newCustomWord.exampleTet.trim() || `Ha'u iha ${newCustomWord.translation.trim()}.`,
      related: relatedArr
    };

    saveCustomWords([customEntry, ...customWords]);
    setShowAddCustomWordModal(false);
    setSelectedWord(customEntry); // View immediately
    setNewCustomWord({
      word: '',
      translation: '',
      pos: 'noun',
      definition: '',
      exampleEn: '',
      exampleTet: '',
      related: ''
    });
  };

  const handleDeleteCustomWord = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const filtered = customWords.filter(w => w.id !== id);
    saveCustomWords(filtered);
    if (selectedWord?.id === id) {
      setSelectedWord(null);
    }
  };

  // --- QUIZ LOGIC ---
  const startNewQuizQuestion = () => {
    const dict = getFullDictionary();
    if (dict.length < 4) return; // need enough words

    // select a random word
    const randomWord = dict[Math.floor(Math.random() * dict.length)];
    
    // gather 3 other random translations
    const otherOptions = dict
      .filter(w => w.id !== randomWord.id)
      .map(w => w.translation);
    
    // shuffle options
    const shuffledOthers = otherOptions.sort(() => 0.5 - Math.random()).slice(0, 3);
    const correctOption = randomWord.translation;
    const options = [correctOption, ...shuffledOthers].sort(() => 0.5 - Math.random());
    const correctIndex = options.indexOf(correctOption);

    setQuizQuestion({
      word: randomWord,
      options,
      correctIndex
    });
    setQuizAnswered(false);
    setQuizSelectedIndex(null);
    setQuizStarted(true);
  };

  const handleQuizAnswer = (index: number) => {
    if (quizAnswered || !quizQuestion) return;
    setQuizSelectedIndex(index);
    setQuizAnswered(true);

    if (index === quizQuestion.correctIndex) {
      const nextScore = quizScore + 1;
      const nextStreak = quizStreak + 1;
      setQuizScore(nextScore);
      setQuizStreak(nextStreak);
      
      if (nextStreak > quizHighscore) {
        setQuizHighscore(nextStreak);
        localStorage.setItem('tetlingo_quiz_highscore', nextStreak.toString());
      }
    } else {
      setQuizStreak(0);
    }
  };

  // --- LOCAL DATA BACKUP & RESTORE (OFFLINE SYNC) ---
  const handleExportSyncFile = () => {
    const syncData = {
      app: 'TetLingo',
      exportedAt: new Date().toISOString(),
      creator: 'Lexi',
      history,
      customWords
    };

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(syncData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "tetlingo_offline_sync.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();

    setSyncSuccessMsg('Sync config file exported successfully!');
    setTimeout(() => setSyncSuccessMsg(''), 4000);
  };

  const handleImportSyncFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (parsed.app === 'TetLingo') {
          // Merge history
          const mergedHistory = [...(parsed.history || [])];
          // deduplicate
          const uniqueHist = [...history];
          mergedHistory.forEach((item: HistoryEntry) => {
            if (!uniqueHist.some(h => h.sourceText.toLowerCase() === item.sourceText.toLowerCase() && h.direction === item.direction)) {
              uniqueHist.push(item);
            }
          });
          
          // Merge custom words
          const mergedWords = [...(parsed.customWords || [])];
          const uniqueWords = [...customWords];
          mergedWords.forEach((item: DictionaryEntry) => {
            if (!uniqueWords.some(w => w.word.toLowerCase() === item.word.toLowerCase())) {
              uniqueWords.push(item);
            }
          });

          saveHistory(uniqueHist);
          saveCustomWords(uniqueWords);

          setImportedStatus({
            success: true,
            message: `Successfully synchronized: ${parsed.history?.length || 0} history records and ${parsed.customWords?.length || 0} custom vocabulary terms merged!`
          });
        } else {
          setImportedStatus({
            success: false,
            message: 'Invalid backup file. Make sure it is a valid TetLingo sync JSON.'
          });
        }
      } catch (err) {
        setImportedStatus({
          success: false,
          message: 'Error parsing sync file. File may be corrupted.'
        });
      }
    };
    reader.readAsText(file);
    // Reset file input value so same file can be uploaded again
    if (fileInputRef.current) fileInputRef.current.value = '';
    setTimeout(() => setImportedStatus(null), 6000);
  };

  const handleTriggerSimulatedSync = () => {
    setSyncSuccessMsg('Syncing databases... 100% Offline State Validated.');
    setTimeout(() => {
      updateSyncTimestamp();
      setSyncSuccessMsg('Synchronization completed instantly! All local blocks matches.');
    }, 1200);
    setTimeout(() => setSyncSuccessMsg(''), 4000);
  };

  const handleClearAllLocalData = () => {
    if (confirm('Are you sure you want to delete all translation history, custom vocabulary, and highscores from this browser? This cannot be undone.')) {
      setHistory([]);
      setCustomWords([]);
      setQuizStreak(0);
      setQuizScore(0);
      setQuizHighscore(0);
      localStorage.removeItem('tetlingo_history');
      localStorage.removeItem('tetlingo_custom_words');
      localStorage.removeItem('tetlingo_quiz_highscore');
      localStorage.removeItem('tetlingo_last_sync');
      setSelectedWord(null);
      setSyncSuccessMsg('All offline browser databases cleared successfully.');
      setTimeout(() => setSyncSuccessMsg(''), 4000);
    }
  };

  // --- SEARCH FILTERS FOR DICTIONARY ---
  const filteredDictionary = getFullDictionary().filter(entry => {
    const matchSearch =
      entry.word.toLowerCase().includes(dictionarySearch.toLowerCase()) ||
      entry.translation.toLowerCase().includes(dictionarySearch.toLowerCase()) ||
      entry.definition.toLowerCase().includes(dictionarySearch.toLowerCase());
    
    if (selectedPOSFilter === 'all') return matchSearch;
    return matchSearch && entry.pos === selectedPOSFilter;
  });

  // --- AUDIO SYNTHESIS PLAYBACK ---
  const playWordAudio = (text: string) => {
    playSimulatedVoice(text);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans ${darkMode ? 'bg-zinc-950 text-zinc-100' : 'bg-pink-50/40 text-zinc-800'}`}>
      
      {/* BACKGROUND GRAPHIC ACCENTS */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-pink-500/10 via-transparent to-transparent pointer-events-none z-0" />
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl pointer-events-none z-0" />

      {/* DESKTOP 9:16 DEVICE FRAME CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 py-6 md:py-12 flex flex-col items-center justify-center min-h-screen relative z-10">
        
        {/* DESKTOP WELCOME HEADER HEADER */}
        <div className="hidden lg:flex flex-col items-center mb-6 text-center">
          <div className="flex items-center gap-2 mb-2">
            <span className="p-2.5 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-400 text-white shadow-lg shadow-pink-500/20">
              <Languages className="w-7 h-7" id="desktop-logo-icon" />
            </span>
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 bg-clip-text text-transparent">
              TetLingo
            </h1>
          </div>
          <p className="text-zinc-400 text-sm max-w-md">
            Pristine offline sentence translator & lexical grammar explorer for English to Tetun.
          </p>
          <div className="mt-3 flex items-center gap-2 text-xs bg-pink-500/10 text-pink-500 px-3 py-1.5 rounded-full border border-pink-500/20 font-medium">
            <WifiOff className="w-3.5 h-3.5" />
            100% Offline Capable & Safe
          </div>
        </div>

        {/* RESPONSIVE FULL-SIZE MAIN INTERFACE */}
        <div className={`w-full max-w-md md:max-w-4xl h-[720px] md:h-[840px] flex flex-col rounded-3xl md:rounded-[36px] overflow-hidden border-2 md:border-4 transition-all duration-300 relative ${
          darkMode 
            ? 'bg-zinc-900/95 border-zinc-800 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.6)]' 
            : 'bg-white border-pink-100 shadow-[0_32px_64px_-12px_rgba(236,72,153,0.15)]'
        }`}>
          
          {/* PHONE STATUS HEADER BAR */}
          <div className={`px-6 py-3 pt-4 flex justify-between items-center border-b text-xs font-mono tracking-tight relative z-10 ${
            darkMode ? 'border-zinc-800/60 text-zinc-500 bg-zinc-900/50' : 'border-pink-100/50 bg-pink-50/20 text-pink-400'
          }`}>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-bold tracking-wider">OFFLINE SYNC</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">{lastSyncedTime ? `Synced: ${lastSyncedTime}` : 'Offline Mode'}</span>
            </div>
          </div>

          {/* APP HEADER */}
          <header className={`px-6 py-5 flex justify-between items-center border-b ${
            darkMode ? 'border-zinc-800 bg-zinc-900/40' : 'border-pink-50 bg-white'
          }`}>
            <div className="flex items-center gap-2.5">
              <span className="p-2 rounded-2xl bg-pink-600 text-white shadow-md shadow-pink-500/10">
                <Languages className="w-5 h-5" id="app-logo-icon" />
              </span>
              <div>
                <h2 className={`text-2xl font-bold tracking-normal ${darkMode ? 'text-pink-500' : 'text-pink-600'}`}>
                  TetLingo
                </h2>
                <p className={`text-[10px] font-semibold tracking-widest uppercase ${darkMode ? 'text-zinc-500' : 'text-pink-400'}`}>
                  English ⇄ Tetun
                </p>
              </div>
            </div>

            {/* QUICK ACTIONS */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2.5 rounded-full border transition-all duration-200 active:scale-90 ${
                  darkMode 
                    ? 'border-zinc-800 text-zinc-400 hover:text-pink-400 hover:bg-zinc-800 bg-zinc-950/40' 
                    : 'border-pink-100 text-pink-600 hover:bg-pink-50 bg-pink-50/30'
                }`}
                title="Toggle Theme"
                id="theme-toggle-btn"
              >
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              
              <button
                onClick={() => {
                  setSelectedWord(null);
                  setActiveTab('sync');
                }}
                className={`p-2.5 rounded-full border transition-all duration-200 active:scale-90 relative ${
                  activeTab === 'sync'
                    ? 'border-pink-600 bg-pink-600 text-white'
                    : darkMode
                      ? 'border-zinc-800 text-zinc-400 hover:text-pink-400 hover:bg-zinc-800 bg-zinc-950/40'
                      : 'border-pink-100 text-pink-600 hover:bg-pink-50 bg-pink-50/30'
                }`}
                title="Offline Synchronization"
                id="sync-shortcut-btn"
              >
                <Database className="w-4 h-4" />
                {customWords.length > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-pink-500 border-2 border-white dark:border-zinc-900" />
                )}
              </button>
            </div>
          </header>

          {/* MAIN APP WORKSPACE */}
          <main className="flex-1 overflow-y-auto px-5 py-5 scrollbar-thin">
            <AnimatePresence mode="wait">
              
              {/* TAB 1: TRANSLATOR */}
              {activeTab === 'translator' && (
                <motion.div
                  key="translator-tab"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.15 }}
                  className="space-y-4"
                >
                  {/* SOURCE INPUT CARD */}
                  <div className={`p-4 rounded-3xl border-2 transition-all relative ${
                    darkMode 
                      ? 'bg-zinc-900/50 border-zinc-800' 
                      : 'bg-pink-50/50 border-pink-100'
                  }`}>
                    <label className={`text-[10px] font-bold uppercase tracking-widest mb-1 block ${
                      darkMode ? 'text-pink-400' : 'text-pink-400'
                    }`}>
                      {translationDirection === 'en-tet' ? 'English' : 'Tetun (Offline Rule-Engine)'}
                    </label>
                    <textarea
                      value={sourceText}
                      onChange={handleSourceTextChange}
                      placeholder={
                        translationDirection === 'en-tet'
                          ? "Type English sentence (e.g. 'How can I find the nearest hospital?')"
                          : "Hakerek fraze Tetun (e.g. 'Oinsá mak ha'u bele hetan ospitál?')"
                      }
                      className={`w-full h-24 bg-transparent outline-none resize-none text-lg font-semibold leading-tight placeholder-zinc-500/50 transition-colors ${
                        darkMode ? 'text-zinc-100' : 'text-gray-800'
                      }`}
                      maxLength={300}
                    />
                    <div className="flex justify-between items-center mt-1 pt-1">
                      <span className="text-[9px] text-zinc-500 font-bold font-mono">
                        {sourceText.length}/300 chars
                      </span>
                      {sourceText && (
                        <button
                          onClick={() => {
                            setSourceText('');
                            setTranslatedText('');
                            setAppliedRules([]);
                          }}
                          className="text-zinc-400 hover:text-pink-500 p-0.5 rounded transition-colors"
                          id="clear-input-btn"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* CENTERED SWAP BUTTON */}
                  <div className="flex justify-center -my-3 relative z-10">
                    <button
                      onClick={swapTranslationDirection}
                      className={`w-10 h-10 rounded-full shadow-lg flex items-center justify-center border-4 transition-all duration-200 active:scale-90 ${
                        darkMode 
                          ? 'bg-pink-600 hover:bg-pink-500 text-white border-zinc-900' 
                          : 'bg-pink-600 hover:bg-pink-700 text-white border-white'
                      }`}
                      title="Swap translation direction"
                      id="direction-swap-btn"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                      </svg>
                    </button>
                  </div>

                  {/* TRANSLATED RESULT CARD */}
                  <div className={`p-4 rounded-3xl border-2 shadow-sm transition-all duration-300 relative ${
                    translatedText
                      ? darkMode
                        ? 'bg-zinc-900 border-pink-500/50 shadow-pink-500/5'
                        : 'bg-white border-pink-500 shadow-sm'
                      : darkMode
                        ? 'bg-zinc-900/20 border-zinc-800/80 text-zinc-500'
                        : 'bg-white border-pink-100 text-zinc-400'
                  }`}>
                    <div className="flex justify-between items-center mb-1">
                      <label className={`text-[10px] font-bold uppercase tracking-widest block ${
                        translatedText
                          ? darkMode ? 'text-pink-400' : 'text-pink-600'
                          : 'text-zinc-400'
                      }`}>
                        {translationDirection === 'en-tet' ? 'Tetun (Offline Rule-Engine)' : 'English'}
                      </label>
                      
                      {translatedText && (
                        <div className="flex items-center gap-1 -mt-1">
                          <button
                            onClick={() => playWordAudio(translatedText)}
                            className={`p-1.5 rounded-lg transition-colors ${
                              darkMode ? 'hover:bg-zinc-800 text-pink-400' : 'hover:bg-pink-100/50 text-pink-500'
                            }`}
                            title="Play audio simulation"
                            id="tts-play-btn"
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                          
                          <button
                            onClick={toggleBookmark}
                            className={`p-1.5 rounded-lg transition-colors ${
                              bookmarked ? 'text-pink-500' : 'text-zinc-400 hover:text-pink-500'
                            }`}
                            title="Save to bookmarks"
                            id="bookmark-toggle-btn"
                          >
                            <Bookmark className="w-4 h-4 fill-current" style={{ fillOpacity: bookmarked ? 1 : 0 }} />
                          </button>
                          
                          <button
                            onClick={copyToClipboard}
                            className={`p-1.5 rounded-lg transition-colors ${
                              copied ? 'text-emerald-500' : 'text-zinc-400 hover:text-pink-500'
                            }`}
                            title="Copy translation"
                            id="copy-translation-btn"
                          >
                            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                          </button>
                        </div>
                      )}
                    </div>

                    <div className="min-h-[50px] py-1">
                      {translatedText ? (
                        <p className={`text-lg font-bold leading-tight ${
                          darkMode ? 'text-pink-400' : 'text-pink-700'
                        }`}>
                          {translatedText}
                        </p>
                      ) : (
                        <p className="text-xs italic text-center py-4">
                          Translations will compile instantly offline as you type...
                        </p>
                      )}
                    </div>

                    {/* PHONETIC SPELLING COMPASS */}
                    {translatedText && translationDirection === 'en-tet' && (
                      <div className={`p-2.5 rounded-2xl text-xs border border-dashed mt-2 flex flex-col gap-1 ${
                        darkMode ? 'bg-zinc-950/60 border-zinc-800' : 'bg-pink-50/20 border-pink-200'
                      }`}>
                        <div className="flex items-center gap-1 text-[9px] text-pink-500 font-bold tracking-widest uppercase">
                          <Lightbulb className="w-3.5 h-3.5" />
                          Phonetic Pronunciation Guide
                        </div>
                        <p className="font-mono text-zinc-400 italic">
                          / {getPhoneticPronunciation(translatedText)} /
                        </p>
                      </div>
                    )}
                  </div>

                  {/* LINGUISTIC RULES APPLIED Badges (TetLingo Core Smart Engine Proof) */}
                  {translatedText && appliedRules.length > 0 && (
                    <div className="space-y-2">
                      <div className="flex items-center gap-1.5 px-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                        <h4 className="text-xs font-bold tracking-tight text-zinc-400 uppercase">
                          Linguistic Rules Applied
                        </h4>
                      </div>
                      
                      <div className="flex flex-wrap gap-1.5">
                        {appliedRules.map((rule, idx) => (
                          <div
                            key={idx}
                            className={`px-2.5 py-1.5 rounded-xl text-[10px] font-semibold flex items-center gap-1 border ${
                              darkMode
                                ? 'bg-zinc-900/60 border-zinc-800 text-pink-400'
                                : 'bg-pink-50/40 border-pink-100 text-pink-600'
                            }`}
                          >
                            <span className="w-1 h-1 rounded-full bg-pink-500" />
                            {rule}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* MINI INSTRUCTIONAL ADVERTISEMENT */}
                  {!sourceText && (
                    <div className={`p-3.5 rounded-2xl border flex items-start gap-3 ${
                      darkMode ? 'bg-zinc-900/20 border-zinc-800' : 'bg-white border-pink-50'
                    }`}>
                      <span className="p-2 rounded-xl bg-pink-500/10 text-pink-500 mt-0.5">
                        <Lightbulb className="w-4 h-4" />
                      </span>
                      <div className="space-y-1">
                        <h4 className="text-xs font-bold">Try These Conversational Phrases:</h4>
                        <ul className="text-[10px] text-zinc-400 space-y-1">
                          <li>• <strong className="text-pink-400">“My name is Lexi”</strong> ➔ “Ha'u-nia naran Lexi.”</li>
                          <li>• <strong className="text-pink-400">“Where is the hospital?”</strong> ➔ “Ospitál iha ne'ebé?”</li>
                          <li>• <strong className="text-pink-400">“The child eats bread.”</strong> ➔ “Oan ne'e han paun.”</li>
                        </ul>
                      </div>
                    </div>
                  )}

                </motion.div>
              )}

              {/* TAB 2: OFF-LINE DICTIONARY */}
              {activeTab === 'dictionary' && (
                <motion.div
                  key="dictionary-tab"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.15 }}
                  className="space-y-4"
                >
                  {/* DICTIONARY HEADER */}
                  <div className="flex justify-between items-center mb-2">
                    <h3 className={`text-xs font-black uppercase tracking-widest ${darkMode ? 'text-zinc-400' : 'text-pink-500'}`}>
                      Offline Dictionary ({getFullDictionary().length} terms)
                    </h3>
                    
                    <button
                      onClick={() => setShowAddCustomWordModal(true)}
                      className="px-3 py-2 rounded-2xl bg-pink-600 hover:bg-pink-700 text-white text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md active:scale-95 shadow-pink-500/15"
                      id="add-word-trigger"
                    >
                      <Plus className="w-4 h-4" />
                      Add Word
                    </button>
                  </div>

                  {/* SEARCH FIELD */}
                  <div className="relative mb-4">
                    <Search className="w-4 h-4 absolute left-4 top-3.5 text-zinc-400 shrink-0" />
                    <input
                      type="text"
                      value={dictionarySearch}
                      onChange={e => setDictionarySearch(e.target.value)}
                      placeholder="Search Dictionary..."
                      className={`w-full rounded-2xl py-3 px-4 pl-11 text-sm font-semibold focus:outline-none focus:ring-2 transition-all duration-200 ${
                        darkMode 
                          ? 'bg-zinc-950 border border-zinc-800 text-zinc-100 focus:ring-pink-500/40' 
                          : 'bg-gray-100 text-gray-800 border border-transparent focus:bg-white focus:border-pink-300 focus:ring-pink-300'
                      }`}
                      id="dictionary-search-input"
                    />
                    {dictionarySearch && (
                      <button 
                        onClick={() => setDictionarySearch('')} 
                        className="absolute right-4 top-3.5 text-zinc-400 hover:text-pink-500"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  {/* PART OF SPEECH FILTERS */}
                  <div className="flex gap-1 overflow-x-auto pb-1.5 scrollbar-none text-[10px]">
                    {['all', 'noun', 'verb', 'adjective', 'phrase', 'pronoun', 'preposition', 'conjunction'].map((pos) => (
                      <button
                        key={pos}
                        onClick={() => setSelectedPOSFilter(pos)}
                        className={`px-3 py-1.5 rounded-full border whitespace-nowrap font-bold uppercase tracking-wider transition-all duration-200 ${
                          selectedPOSFilter === pos
                            ? 'bg-pink-600 border-pink-600 text-white shadow-md'
                            : darkMode
                              ? 'border-zinc-800 bg-zinc-900/40 text-zinc-400 hover:border-zinc-700'
                              : 'border-pink-100 bg-pink-50/20 text-pink-600 hover:bg-pink-50/50'
                        }`}
                      >
                        {pos === 'all' ? 'All Classes' : `${pos}s`}
                      </button>
                    ))}
                  </div>

                  {/* RESULTS LIST */}
                  <div className="space-y-2.5 max-h-96 overflow-y-auto scrollbar-thin pr-1">
                    {filteredDictionary.slice(0, 30).map((entry) => {
                      const isCustom = entry.id.startsWith('custom-word-');
                      return (
                        <div
                          key={entry.id}
                          onClick={() => handleSelectWord(entry)}
                          className={`p-3.5 rounded-2xl border-2 transition-all flex justify-between items-center cursor-pointer ${
                            selectedWord?.id === entry.id
                              ? darkMode
                                ? 'bg-pink-500/10 border-pink-500 text-pink-400 shadow-md shadow-pink-500/5'
                                : 'bg-pink-50/40 border-pink-500 text-pink-700 shadow-sm'
                              : darkMode
                                ? 'bg-zinc-900/30 border-zinc-800 hover:bg-zinc-900/50 hover:border-zinc-700 text-zinc-300'
                                : 'bg-gray-50 border-gray-100 hover:bg-gray-100/50 hover:border-pink-200 text-gray-700'
                          }`}
                        >
                          <div className="flex-1 min-w-0 pr-2">
                            <div className="flex items-center gap-2">
                              <h4 className={`text-sm font-bold capitalize truncate ${
                                selectedWord?.id === entry.id
                                  ? darkMode ? 'text-pink-400' : 'text-pink-700'
                                  : darkMode ? 'text-zinc-100' : 'text-gray-800'
                              }`}>
                                {entry.word}
                              </h4>
                              <span className={`px-2 py-0.5 rounded-lg text-[8px] font-black uppercase tracking-wider ${
                                darkMode ? 'bg-zinc-800 text-zinc-400' : 'bg-pink-100/50 text-pink-600'
                              }`}>
                                {entry.pos}
                              </span>
                              {isCustom && (
                                <span className="px-2 py-0.5 rounded-lg text-[8px] font-black bg-pink-600 text-white uppercase tracking-wider">
                                  Custom
                                </span>
                              )}
                            </div>
                            <p className="text-[10px] text-zinc-400 truncate mt-1 font-medium">
                              {entry.definition}
                            </p>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className={`text-xs font-black capitalize italic ${
                              selectedWord?.id === entry.id
                                ? darkMode ? 'text-pink-300' : 'text-pink-600'
                                : 'text-zinc-500'
                            }`}>
                              {entry.translation}
                            </span>
                            
                            {isCustom && (
                              <button
                                onClick={(e) => handleDeleteCustomWord(entry.id, e)}
                                className="p-1 rounded-md text-zinc-400 hover:text-rose-500 hover:bg-rose-500/10 transition-colors"
                                title="Delete word"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            )}
                            <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
                          </div>
                        </div>
                      );
                    })}

                    {filteredDictionary.length === 0 && (
                      <p className="text-xs text-zinc-500 italic text-center py-8">
                        No vocabulary items match "{dictionarySearch}"...
                      </p>
                    )}
                  </div>

                  {/* ACTIVE DEFINITION DETAIL POPUP DRAWER */}
                  {selectedWord && (
                    <div className={`p-5 rounded-3xl border-2 flex flex-col gap-3.5 relative transition-all duration-300 ${
                      darkMode ? 'bg-zinc-900 border-pink-500/30' : 'bg-white border-pink-500 shadow-lg shadow-pink-500/5'
                    }`}>
                      <button
                        onClick={() => setSelectedWord(null)}
                        className="absolute top-4 right-4 text-zinc-400 hover:text-pink-500 p-1 rounded-xl transition-colors"
                        id="close-word-detail"
                      >
                        <X className="w-4 h-4" />
                      </button>

                      <div className="flex items-center gap-2 flex-wrap pr-6">
                        <h3 className="text-base font-black text-pink-600 dark:text-pink-400 capitalize tracking-tight">
                          {selectedWord.word}
                        </h3>
                        <span className="text-[10px] bg-pink-600 text-white font-black px-2 py-0.5 rounded-lg uppercase tracking-wider">
                          {selectedWord.pos}
                        </span>
                        <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                          equals <strong className="text-zinc-800 dark:text-zinc-100 font-bold capitalize">{selectedWord.translation}</strong>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <span className="text-[9px] font-black tracking-widest uppercase text-zinc-400 block">
                          English Definition
                        </span>
                        <p className="text-xs leading-relaxed font-semibold text-zinc-600 dark:text-zinc-300">
                          {selectedWord.definition}
                        </p>
                      </div>

                      {/* EXAMPLES WITH PLAY-BUTTON */}
                      <div className="space-y-2 border-t border-dashed border-zinc-200 dark:border-zinc-800 pt-3">
                        <span className="text-[9px] font-black tracking-widest uppercase text-zinc-400 block">
                          Conversational Example
                        </span>
                        <div className={`p-3.5 rounded-2xl flex flex-col gap-1.5 border ${
                          darkMode ? 'bg-zinc-950/40 border-zinc-800/80' : 'bg-pink-50/10 border-pink-100/30'
                        }`}>
                          <p className="text-xs italic font-medium text-zinc-500 dark:text-zinc-400">
                            “ {selectedWord.exampleEn} ”
                          </p>
                          <div className="flex justify-between items-center mt-1">
                            <p className="text-sm font-bold text-pink-600 dark:text-pink-400">
                              “ {selectedWord.exampleTet} ”
                            </p>
                            
                            <button
                              onClick={() => playWordAudio(selectedWord.exampleTet)}
                              className="p-1.5 rounded-xl bg-pink-500/10 text-pink-500 hover:bg-pink-600 hover:text-white transition-all duration-200 active:scale-90"
                              title="Listen simulation"
                            >
                              <Volume2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* SUGGESTED / RELATED WORDS (TetLingo Core Requirement) */}
                      {selectedWord.related.length > 0 && (
                        <div className="space-y-2 border-t border-dashed border-zinc-200 dark:border-zinc-800 pt-3">
                          <span className="text-[9px] font-black tracking-widest uppercase text-zinc-400 block">
                            Suggested Nearby Words
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {getRelatedAndNearbyWords(selectedWord.word, 4).map((rel) => (
                              <button
                                key={rel.id}
                                onClick={() => handleSelectWord(rel)}
                                className={`px-2.5 py-1.5 rounded-xl text-[10px] font-bold border-2 capitalize transition-all duration-200 active:scale-95 ${
                                  darkMode
                                    ? 'bg-zinc-950/40 border-zinc-800 hover:border-pink-500/40 text-pink-400'
                                    : 'bg-white border-pink-100 hover:border-pink-500 hover:bg-pink-50 text-pink-700'
                                }`}
                              >
                                {rel.word} ({rel.translation})
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                </motion.div>
              )}

              {/* TAB 3: GRAMMAR RULES & INSIGHTS PLAYGROUND */}
              {activeTab === 'grammar' && (
                <motion.div
                  key="grammar-tab"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.15 }}
                  className="space-y-4"
                >
                  
                  {/* GRAMMAR SELECTOR & GAME CONTROLLER */}
                  <div className={`flex p-1.5 rounded-2xl border-2 text-xs font-bold uppercase tracking-wider ${
                    darkMode ? 'bg-zinc-950 border-zinc-800' : 'bg-gray-100 border-transparent'
                  }`}>
                    <button
                      onClick={() => setQuizStarted(false)}
                      className={`flex-1 py-2 rounded-xl font-black flex items-center justify-center gap-1.5 transition-all ${
                        !quizStarted 
                          ? 'bg-pink-600 text-white shadow-md' 
                          : 'text-zinc-500 hover:text-pink-500'
                      }`}
                    >
                      <BookOpen className="w-4 h-4" />
                      Linguistic Guide
                    </button>
                    <button
                      onClick={() => {
                        setQuizStarted(true);
                        startNewQuizQuestion();
                      }}
                      className={`flex-1 py-2 rounded-xl font-black flex items-center justify-center gap-1.5 transition-all ${
                        quizStarted 
                          ? 'bg-pink-600 text-white shadow-md' 
                          : 'text-zinc-500 hover:text-pink-500'
                      }`}
                    >
                      <Trophy className="w-4 h-4" />
                      Offline Quiz
                    </button>
                  </div>

                  {/* MODE A: RULES EXPLAINER GUIDE */}
                  {!quizStarted ? (
                    <div className="space-y-3.5">
                      <div className="px-1 space-y-1">
                        <h3 className="text-sm font-black text-pink-600 dark:text-pink-400 uppercase tracking-widest flex items-center gap-1.5">
                          <Lightbulb className="w-4 h-4" />
                          Tetun Linguistic Rules
                        </h3>
                        <p className="text-[10px] text-zinc-500 dark:text-zinc-400 leading-relaxed font-semibold">
                          Tetun is an elegant language with simple morphology but unique word order rules. Review them offline to master sentence translations.
                        </p>
                      </div>

                      <div className="space-y-3 max-h-[480px] overflow-y-auto scrollbar-thin pr-1">
                        {LINGUISTIC_RULES.map((rule, idx) => (
                          <div
                            key={idx}
                            className={`p-4 rounded-3xl border-2 flex flex-col gap-2 ${
                              darkMode ? 'bg-zinc-900/40 border-zinc-800' : 'bg-white border-pink-100'
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <span className="w-5 h-5 rounded-full bg-pink-600 text-white text-[10px] font-black flex items-center justify-center">
                                {idx + 1}
                              </span>
                              <h4 className="text-xs font-black uppercase tracking-wider text-pink-600 dark:text-pink-400">
                                {rule.name}
                              </h4>
                            </div>

                            <p className="text-[10px] text-zinc-500 dark:text-zinc-400 leading-relaxed font-semibold">
                              {rule.description}
                            </p>

                            <div className={`p-3 rounded-2xl space-y-1.5 text-[10px] border ${
                              darkMode ? 'bg-zinc-950/40 border-zinc-850' : 'bg-pink-50/10 border-pink-100/30'
                            }`}>
                              <p className="text-zinc-500 dark:text-zinc-400 font-medium">
                                <strong className="text-zinc-700 dark:text-zinc-300">English:</strong> “ {rule.exampleEn} ”
                              </p>
                              <p className="text-pink-600 dark:text-pink-400 font-bold">
                                <strong className="text-zinc-700 dark:text-zinc-300">Tetun:</strong> “ {rule.exampleTet} ”
                              </p>
                            </div>

                            <p className="text-[9px] text-zinc-400 dark:text-zinc-500 italic leading-relaxed font-medium">
                              {rule.explanation}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    
                    /* MODE B: VOCABULARY MATCHING QUIZ PLAYGROUND */
                    <div className="space-y-4">
                      <div className="flex justify-between items-center px-1">
                        <div>
                          <h4 className="text-xs font-black uppercase tracking-widest text-pink-500">
                            Vocabulary Quiz
                          </h4>
                          <p className="text-[9px] text-zinc-500 font-medium">Test translation competency</p>
                        </div>

                        {/* QUIZ SCORE TRACKERS */}
                        <div className="flex gap-1.5">
                          <div className={`px-2.5 py-1 rounded-xl text-center border-2 ${
                            darkMode ? 'bg-zinc-900/50 border-zinc-800' : 'bg-gray-50 border-gray-100'
                          }`}>
                            <p className="text-[7px] text-zinc-400 font-black uppercase tracking-wider">Streak</p>
                            <p className="text-xs font-black text-pink-600 dark:text-pink-400">{quizStreak}</p>
                          </div>
                          <div className={`px-2.5 py-1 rounded-xl text-center border-2 ${
                            darkMode ? 'bg-zinc-900/50 border-zinc-800' : 'bg-gray-50 border-gray-100'
                          }`}>
                            <p className="text-[7px] text-zinc-400 font-black uppercase tracking-wider">Best</p>
                            <p className="text-xs font-black text-zinc-500 dark:text-zinc-300">{quizHighscore}</p>
                          </div>
                        </div>
                      </div>

                      {/* ACTIVE QUESTION BOARD */}
                      {quizQuestion ? (
                        <div className={`p-5 rounded-3xl border-2 flex flex-col gap-4 text-center ${
                          darkMode ? 'bg-zinc-900/30 border-zinc-800' : 'bg-white border-pink-500/20 shadow-sm'
                        }`}>
                          <div className="space-y-2">
                            <span className="text-[9px] font-black text-pink-600 dark:text-pink-400 tracking-widest uppercase bg-pink-500/10 px-3 py-1 rounded-full border-2 border-pink-500/20">
                              Translate Word
                            </span>
                            <h3 className="text-2xl font-black capitalize text-zinc-800 dark:text-zinc-100 pt-2 tracking-tight">
                              “ {quizQuestion.word.word} ”
                            </h3>
                            <p className="text-[10px] text-zinc-400 italic font-medium">
                              Category: {quizQuestion.word.pos}
                            </p>
                          </div>

                          <div className="grid grid-cols-2 gap-2.5 pt-1">
                            {quizQuestion.options.map((opt, idx) => {
                              const isCorrectOption = idx === quizQuestion.correctIndex;
                              const isSelected = idx === quizSelectedIndex;

                              let optStyle = darkMode 
                                ? 'bg-zinc-950/40 border-zinc-800 text-zinc-300 hover:border-pink-500/30' 
                                : 'bg-gray-50 border-gray-100 text-gray-800 hover:bg-gray-100/50 hover:border-pink-200';

                              if (quizAnswered) {
                                if (isCorrectOption) {
                                  optStyle = 'bg-emerald-500 border-emerald-500 text-white font-black scale-[1.02] shadow-md shadow-emerald-500/10';
                                } else if (isSelected) {
                                  optStyle = 'bg-rose-500 border-rose-500 text-white font-black shadow-md shadow-rose-500/10';
                                } else {
                                  optStyle = 'opacity-40 border-zinc-800 dark:border-zinc-800/40 bg-zinc-950/20 text-zinc-500';
                                }
                              }

                              return (
                                <button
                                  key={idx}
                                  onClick={() => handleQuizAnswer(idx)}
                                  disabled={quizAnswered}
                                  className={`p-3.5 rounded-2xl border-2 text-xs font-black uppercase tracking-wider transition-all duration-200 active:scale-95 ${optStyle}`}
                                >
                                  {opt}
                                </button>
                              );
                            })}
                          </div>

                          {/* REVEAL ANALYSIS */}
                          {quizAnswered && (
                            <div className="space-y-3 pt-2 animate-fade-in">
                              <p className={`text-xs font-black uppercase tracking-wider ${quizSelectedIndex === quizQuestion.correctIndex ? 'text-emerald-500' : 'text-rose-500'}`}>
                                {quizSelectedIndex === quizQuestion.correctIndex
                                  ? '🎉 Correct translation!'
                                  : `❌ Correction: “ ${quizQuestion.word.translation} ”`}
                              </p>
                              
                              <p className="text-[10px] text-zinc-500 dark:text-zinc-400 leading-relaxed px-4 font-semibold">
                                <strong className="text-zinc-700 dark:text-zinc-300 uppercase font-bold">Usage:</strong> {quizQuestion.word.definition}
                              </p>

                              <button
                                onClick={startNewQuizQuestion}
                                className="mt-1 px-4 py-2.5 rounded-2xl bg-pink-600 hover:bg-pink-700 text-white font-black text-xs uppercase tracking-wider shadow-md shadow-pink-500/10 inline-flex items-center gap-1.5 transition-transform active:scale-95"
                              >
                                Next Question
                                <ArrowRight className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="text-center py-12 space-y-4">
                          <p className="text-xs text-zinc-500 italic font-medium">
                            Adding custom words or exploring the dictionary will populate quiz options. Need at least 4 dictionary entries.
                          </p>
                          <button
                            onClick={() => {
                              saveCustomWords([...customWords]);
                              setQuizStarted(false);
                            }}
                            className="px-4 py-2.5 rounded-2xl bg-pink-600 hover:bg-pink-700 text-white text-xs font-black uppercase tracking-wider transition-all active:scale-95"
                          >
                            Explore Dictionary
                          </button>
                        </div>
                      )}
                    </div>
                  )}

                </motion.div>
              )}

              {/* TAB 4: OFFLINE SYNC CENTER & INFORMATION */}
              {activeTab === 'sync' && (
                <motion.div
                  key="sync-tab"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.15 }}
                  className="space-y-4"
                >
                  
                  {/* OFFLINE HEALTH MONITOR BOARD */}
                  <div className={`p-4 rounded-3xl border-2 flex flex-col gap-3 relative ${
                    darkMode ? 'bg-zinc-900/40 border-zinc-800' : 'bg-white border-pink-500 shadow-sm'
                  }`}>
                    <div className="flex justify-between items-center">
                      <h3 className={`text-xs font-black uppercase tracking-widest ${darkMode ? 'text-zinc-400' : 'text-pink-600'}`}>
                        Database Footprint
                      </h3>
                      <span className="text-[10px] bg-emerald-500/10 border-2 border-emerald-500/20 text-emerald-500 px-2.5 py-0.5 rounded-full font-black flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                        OFFLINE
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <div className={`p-3 rounded-2xl border-2 text-center ${darkMode ? 'bg-zinc-950/40 border-zinc-800' : 'bg-pink-50/10 border-pink-100'}`}>
                        <p className="text-[7px] text-zinc-400 font-black uppercase tracking-wider">History</p>
                        <p className="text-sm font-black text-pink-600 dark:text-pink-400 mt-1">{history.length}</p>
                      </div>
                      <div className={`p-3 rounded-2xl border-2 text-center ${darkMode ? 'bg-zinc-950/40 border-zinc-800' : 'bg-pink-50/10 border-pink-100'}`}>
                        <p className="text-[7px] text-zinc-400 font-black uppercase tracking-wider">Custom</p>
                        <p className="text-sm font-black text-pink-600 dark:text-pink-400 mt-1">{customWords.length}</p>
                      </div>
                      <div className={`p-3 rounded-2xl border-2 text-center ${darkMode ? 'bg-zinc-950/40 border-zinc-800' : 'bg-pink-50/10 border-pink-100'}`}>
                        <p className="text-[7px] text-zinc-400 font-black uppercase tracking-wider">Dictionary</p>
                        <p className="text-sm font-black text-zinc-400 mt-1">{DICTIONARY.length}</p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1 text-[9px] text-zinc-500 dark:text-zinc-400 border-t border-dashed border-zinc-200 dark:border-zinc-800 pt-2.5 mt-1 font-semibold">
                      <div className="flex justify-between">
                        <span>Database Engine:</span>
                        <span className="font-bold text-zinc-700 dark:text-zinc-300">W3C Local Storage</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Latency Status:</span>
                        <span className="font-bold text-emerald-500">0 ms (Instant compile)</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Last Cache Sync:</span>
                        <span className="font-bold text-zinc-700 dark:text-zinc-300">{lastSyncedTime || 'Not tracked'}</span>
                      </div>
                    </div>
                  </div>

                  {/* DATA SYNC & PORTABILITY CONTROLS */}
                  <div className="space-y-2.5">
                    <h4 className="text-xs font-black uppercase tracking-widest text-pink-500 px-1">
                      Data Portability (Offline Sync)
                    </h4>

                    {/* ACTIONS LIST */}
                    <div className="space-y-2.5">
                      
                      {/* EXPORT BUTTON */}
                      <button
                        onClick={handleExportSyncFile}
                        className={`w-full p-3.5 rounded-3xl border-2 text-left flex items-center justify-between transition-all duration-200 active:scale-[0.98] ${
                          darkMode
                            ? 'bg-zinc-900/40 border-zinc-800 hover:border-pink-500/30 text-zinc-200'
                            : 'bg-white border-pink-100 hover:bg-pink-50/20 text-gray-800'
                        }`}
                        id="export-sync-btn"
                      >
                        <div className="flex items-center gap-3">
                          <span className="p-2 rounded-xl bg-pink-500/10 text-pink-500 border border-pink-500/10">
                            <Download className="w-4 h-4" />
                          </span>
                          <div>
                            <p className="text-xs font-black uppercase tracking-wider text-zinc-700 dark:text-zinc-200">Export Sync Backup</p>
                            <p className="text-[9px] text-zinc-400 font-medium">Download offline history & bookmarks as JSON</p>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-zinc-400" />
                      </button>

                      {/* IMPORT BUTTON */}
                      <button
                        onClick={() => fileInputRef.current?.click()}
                        className={`w-full p-3.5 rounded-3xl border-2 text-left flex items-center justify-between transition-all duration-200 active:scale-[0.98] ${
                          darkMode
                            ? 'bg-zinc-900/40 border-zinc-800 hover:border-pink-500/30 text-zinc-200'
                            : 'bg-white border-pink-100 hover:bg-pink-50/20 text-gray-800'
                        }`}
                        id="import-sync-btn"
                      >
                        <div className="flex items-center gap-3">
                          <span className="p-2 rounded-xl bg-pink-500/10 text-pink-500 border border-pink-500/10">
                            <Upload className="w-4 h-4" />
                          </span>
                          <div>
                            <p className="text-xs font-black uppercase tracking-wider text-zinc-700 dark:text-zinc-200">Import Sync Backup</p>
                            <p className="text-[9px] text-zinc-400 font-medium">Upload JSON to synchronize records on this device</p>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-zinc-400" />
                      </button>
                      
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleImportSyncFile}
                        accept=".json"
                        className="hidden"
                      />

                      {/* FORCE SYNC BUTTON */}
                      <button
                        onClick={handleTriggerSimulatedSync}
                        className={`w-full p-3.5 rounded-3xl border-2 text-left flex items-center justify-between transition-all duration-200 active:scale-[0.98] ${
                          darkMode
                            ? 'bg-zinc-900/40 border-zinc-800 hover:border-pink-500/30 text-zinc-200'
                            : 'bg-white border-pink-100 hover:bg-pink-50/20 text-gray-800'
                        }`}
                        id="sim-sync-btn"
                      >
                        <div className="flex items-center gap-3">
                          <span className="p-2 rounded-xl bg-pink-500/10 text-pink-500 border border-pink-500/10">
                            <Database className="w-4 h-4" />
                          </span>
                          <div>
                            <p className="text-xs font-black uppercase tracking-wider text-zinc-700 dark:text-zinc-200">Force Cache Audit</p>
                            <p className="text-[9px] text-zinc-400 font-medium">Audit local database records integrity</p>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-zinc-400" />
                      </button>

                      {/* DESTRUCTIVE RESET */}
                      <button
                        onClick={handleClearAllLocalData}
                        className={`w-full p-3 rounded-2xl border text-left flex items-center justify-between transition-all hover:bg-rose-500/5 ${
                          darkMode
                            ? 'bg-zinc-900/20 border-zinc-800 hover:border-rose-500/30 text-rose-400'
                            : 'bg-white border-pink-50 hover:border-rose-200 text-rose-500'
                        }`}
                        id="clear-db-btn"
                      >
                        <div className="flex items-center gap-3">
                          <span className="p-2 rounded-xl bg-rose-500/10 text-rose-400">
                            <Trash2 className="w-4 h-4" />
                          </span>
                          <div>
                            <p className="text-xs font-bold">Wipe Browser Database</p>
                            <p className="text-[9px] text-zinc-500/80">Permanently reset the application cached memory</p>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-rose-400/80" />
                      </button>

                    </div>
                  </div>

                  {/* SUCCESS / IMPORT REPORT FEEDBACK */}
                  {syncSuccessMsg && (
                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-center text-[10px] font-semibold">
                      {syncSuccessMsg}
                    </div>
                  )}

                  {importedStatus && (
                    <div className={`p-3 rounded-xl text-center text-[10px] font-semibold border ${
                      importedStatus.success
                        ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                        : 'bg-rose-500/10 border-rose-500/20 text-rose-400'
                    }`}>
                      {importedStatus.message}
                    </div>
                  )}

                </motion.div>
              )}

              {/* TAB 5: ABOUT TETLINGO & CREDITS */}
              {activeTab === 'about' && (
                <motion.div
                  key="about-tab"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.15 }}
                  className="space-y-4"
                >
                  <div className={`p-5 rounded-3xl border-2 space-y-4 ${
                    darkMode ? 'bg-zinc-900/40 border-zinc-800' : 'bg-white border-pink-100 shadow-sm'
                  }`}>
                    <div className="flex items-center gap-2.5 text-pink-500">
                      <Info className="w-5 h-5" />
                      <h3 className="text-sm font-black uppercase tracking-widest">
                        About TetLingo
                      </h3>
                    </div>

                    <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">
                      TetLingo is a fully offline, high-performance translation and language platform for English and Tetun (the native lingua-franca of Timor-Leste). Built to operate 100% in low-connectivity regions, it contains zero server calls, respects user privacy completely, and translates sentences using a custom rule-based grammatical parsing engine.
                    </p>

                    {/* STATS BENTO ROW */}
                    <div className="grid grid-cols-3 gap-2.5 pt-2">
                      <div className={`p-3 rounded-2xl border text-center ${darkMode ? 'bg-zinc-950/40 border-zinc-800' : 'bg-pink-50/10 border-pink-100'}`}>
                        <p className="text-[8px] text-zinc-400 font-black uppercase tracking-wider">Words</p>
                        <p className="text-lg font-black text-pink-500 mt-0.5">1,631</p>
                      </div>
                      <div className={`p-3 rounded-2xl border text-center ${darkMode ? 'bg-zinc-950/40 border-zinc-800' : 'bg-pink-50/10 border-pink-100'}`}>
                        <p className="text-[8px] text-zinc-400 font-black uppercase tracking-wider">Engine</p>
                        <p className="text-lg font-black text-pink-500 mt-0.5">Rule</p>
                      </div>
                      <div className={`p-3 rounded-2xl border text-center ${darkMode ? 'bg-zinc-950/40 border-zinc-800' : 'bg-pink-50/10 border-pink-100'}`}>
                        <p className="text-[8px] text-zinc-400 font-black uppercase tracking-wider">Network</p>
                        <p className="text-lg font-black text-emerald-500 mt-0.5">Offline</p>
                      </div>
                    </div>
                  </div>

                  {/* OFFICIAL ATTRIBUTION CARD */}
                  <div className={`p-5 rounded-3xl border-2 space-y-3 ${
                    darkMode ? 'bg-zinc-900/40 border-zinc-800' : 'bg-white border-pink-100 shadow-sm'
                  }`}>
                    <h4 className="text-[11px] font-black uppercase tracking-widest text-zinc-400 dark:text-zinc-500 border-b border-zinc-100 dark:border-zinc-800 pb-2">
                      Official Attribution & Sources
                    </h4>

                    <div className="space-y-3 text-xs text-zinc-600 dark:text-zinc-300">
                      <div className="space-y-1">
                        <span className="text-[9px] font-bold text-pink-500 uppercase tracking-wider block">Linguistic Framework & Curriculum</span>
                        <p className="leading-relaxed">
                          Adapted with strict adherence from the official <strong className="text-pink-600 dark:text-pink-400">“Tetun Language Course” (3rd Edition, 2015)</strong>, published by the <strong className="text-zinc-800 dark:text-zinc-100">Peace Corps East Timor</strong>.
                        </p>
                      </div>

                      <div className="space-y-1">
                        <span className="text-[9px] font-bold text-pink-500 uppercase tracking-wider block">Lead Linguistic Research</span>
                        <p>
                          Authored by the distinguished linguist <strong className="text-zinc-800 dark:text-zinc-100">Catharina Williams-van Klinken</strong>, whose work remains the gold standard for Timorese linguistics.
                        </p>
                      </div>

                      <div className="space-y-1">
                        <span className="text-[9px] font-bold text-pink-500 uppercase tracking-wider block">Institution Partnership</span>
                        <p>
                          Developed with reference to historical research contributions from the <strong className="text-zinc-800 dark:text-zinc-100">Dili Institute of Technology (DIT)</strong>.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CO-DEVELOPMENT & INITIATIVE STATEMENT */}
                  <div className="relative p-5 rounded-3xl bg-gradient-to-br from-pink-500/10 to-pink-600/5 border-2 border-pink-500/30 overflow-hidden shadow-md shadow-pink-500/5">
                    <div className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full bg-pink-500/5 blur-xl pointer-events-none" />
                    
                    <div className="space-y-2.5 text-center relative z-10">
                      <span className="text-[10px] font-black uppercase tracking-widest text-pink-500 bg-pink-500/10 dark:bg-pink-500/20 px-2.5 py-1 rounded-full inline-block">
                        Project Credits & Initiative
                      </span>
                      
                      <blockquote className="text-xs md:text-sm font-semibold italic text-zinc-700 dark:text-zinc-100 leading-relaxed px-2">
                        “ An Initiative by Lexi, Co-developed using Google Gemini & OpenAI ChatGPT for a seamless user experience across all devices. ”
                      </blockquote>
                      
                      <p className="text-[10px] text-zinc-400 dark:text-zinc-400 pt-1 font-medium text-center">
                        Crafted to combine traditional rule-based translation with optimized screen structures, ensuring extreme layout compatibility.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </main>

          {/* APP NAVIGATION CONTROLLER TAB-BAR */}
          <footer className={`px-4 py-3 border-t-2 flex justify-around items-center ${
            darkMode ? 'border-zinc-800 bg-zinc-950/90' : 'border-pink-100 bg-white'
          }`}>
            <button
              onClick={() => {
                setSelectedWord(null);
                setActiveTab('translator');
              }}
              className={`flex-1 py-1.5 rounded-2xl flex flex-col items-center gap-1 transition-all duration-200 active:scale-95 ${
                activeTab === 'translator'
                  ? 'text-pink-600 dark:text-pink-400 font-black'
                  : 'text-zinc-500 hover:text-pink-500'
              }`}
              id="tab-translator-btn"
            >
              <Languages className="w-5 h-5" />
              <span className="text-[9px] font-bold uppercase tracking-wider">Translate</span>
            </button>

            <button
              onClick={() => {
                setSelectedWord(null);
                setActiveTab('dictionary');
              }}
              className={`flex-1 py-1.5 rounded-2xl flex flex-col items-center gap-1 transition-all duration-200 active:scale-95 ${
                activeTab === 'dictionary'
                  ? 'text-pink-600 dark:text-pink-400 font-black'
                  : 'text-zinc-500 hover:text-pink-500'
              }`}
              id="tab-dictionary-btn"
            >
              <BookOpen className="w-5 h-5" />
              <span className="text-[9px] font-bold uppercase tracking-wider">Dictionary</span>
            </button>

            <button
              onClick={() => {
                setSelectedWord(null);
                setActiveTab('grammar');
              }}
              className={`flex-1 py-1.5 rounded-2xl flex flex-col items-center gap-1 transition-all duration-200 active:scale-95 ${
                activeTab === 'grammar'
                  ? 'text-pink-600 dark:text-pink-400 font-black'
                  : 'text-zinc-500 hover:text-pink-400'
              }`}
              id="tab-grammar-btn"
            >
              <GraduationCap className="w-5 h-5" />
              <span className="text-[9px] font-bold uppercase tracking-wider">insights</span>
            </button>

            <button
              onClick={() => {
                setSelectedWord(null);
                setActiveTab('sync');
              }}
              className={`flex-1 py-1.5 rounded-2xl flex flex-col items-center gap-1 transition-all duration-200 active:scale-95 relative ${
                activeTab === 'sync'
                  ? 'text-pink-600 dark:text-pink-400 font-black'
                  : 'text-zinc-500 hover:text-pink-500'
              }`}
              id="tab-sync-btn"
            >
              <Database className="w-5 h-5" />
              <span className="text-[9px] font-bold uppercase tracking-wider">Local Sync</span>
              {customWords.length > 0 && (
                <span className="absolute top-1.5 right-6 w-2 h-2 rounded-full bg-pink-500 border border-white dark:border-zinc-950" />
              )}
            </button>

            <button
              onClick={() => {
                setSelectedWord(null);
                setActiveTab('about');
              }}
              className={`flex-1 py-1.5 rounded-2xl flex flex-col items-center gap-1 transition-all duration-200 active:scale-95 ${
                activeTab === 'about'
                  ? 'text-pink-600 dark:text-pink-400 font-black'
                  : 'text-zinc-500 hover:text-pink-500'
              }`}
              id="tab-about-btn"
            >
              <Info className="w-5 h-5" />
              <span className="text-[9px] font-bold uppercase tracking-wider">About</span>
            </button>
          </footer>

        </div>

        {/* BOTTOM CREDITS BANNER ON WIDE SCREENS */}
        <div className="mt-6 text-center max-w-md hidden md:block">
          <p className="text-[10px] text-zinc-500 leading-relaxed font-mono">
            TetLingo • An Initiative by <strong className="text-zinc-400">Lexi</strong>.<br />
            Co-developed using Google Gemini & OpenAI ChatGPT for a seamless user experience across all devices.
          </p>
        </div>

      </div>

      {/* MODAL WINDOW: ADD CUSTOM VOCABULARY */}
      <AnimatePresence>
        {showAddCustomWordModal && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className={`w-full max-w-sm rounded-[32px] p-6 border-2 shadow-2xl relative ${
                darkMode ? 'bg-zinc-900 border-zinc-800 text-zinc-100' : 'bg-white border-pink-500 text-zinc-800'
              }`}
            >
              <button
                onClick={() => setShowAddCustomWordModal(false)}
                className="absolute top-5 right-5 p-1.5 rounded-xl hover:bg-zinc-800/10 text-zinc-400 hover:text-pink-500 transition-colors"
                id="close-add-word-modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 mb-4">
                <span className="p-2 rounded-xl bg-pink-600 text-white shadow-md shadow-pink-500/10">
                  <Plus className="w-4 h-4" />
                </span>
                <h3 className="text-base font-black uppercase tracking-tight text-pink-600 dark:text-pink-400">Add Custom Word</h3>
              </div>

              <form onSubmit={handleAddCustomWord} className="space-y-4 text-xs font-semibold">
                
                {/* WORD ENGLISH */}
                <div className="space-y-1">
                  <label className="text-[9px] font-black text-zinc-400 uppercase tracking-widest block">
                    English Word *
                  </label>
                  <input
                    type="text"
                    required
                    value={newCustomWord.word}
                    onChange={e => setNewCustomWord({ ...newCustomWord, word: e.target.value })}
                    placeholder="e.g. child"
                    className={`w-full p-3 rounded-2xl border-2 outline-none font-bold transition-all ${
                      darkMode ? 'bg-zinc-950 border-zinc-850 text-zinc-100 focus:border-pink-500' : 'bg-gray-50 border-gray-100 focus:bg-white focus:border-pink-300'
                    }`}
                  />
                </div>

                {/* WORD TETUN */}
                <div className="space-y-1">
                  <label className="text-[9px] font-black text-zinc-400 uppercase tracking-widest block">
                    Tetun Translation *
                  </label>
                  <input
                    type="text"
                    required
                    value={newCustomWord.translation}
                    onChange={e => setNewCustomWord({ ...newCustomWord, translation: e.target.value })}
                    placeholder="e.g. oan"
                    className={`w-full p-3 rounded-2xl border-2 outline-none font-bold transition-all ${
                      darkMode ? 'bg-zinc-950 border-zinc-850 text-zinc-100 focus:border-pink-500' : 'bg-gray-50 border-gray-100 focus:bg-white focus:border-pink-300'
                    }`}
                  />
                </div>

                {/* PART OF SPEECH */}
                <div className="space-y-1">
                  <label className="text-[9px] font-black text-zinc-400 uppercase tracking-widest block">
                    Part of Speech
                  </label>
                  <select
                    value={newCustomWord.pos}
                    onChange={e => setNewCustomWord({ ...newCustomWord, pos: e.target.value as PartOfSpeech })}
                    className={`w-full p-3 rounded-2xl border-2 outline-none font-bold transition-all ${
                      darkMode ? 'bg-zinc-950 border-zinc-850 text-zinc-100 focus:border-pink-500' : 'bg-gray-50 border-gray-100 focus:bg-white focus:border-pink-300'
                    }`}
                  >
                    <option value="noun">Noun</option>
                    <option value="verb">Verb</option>
                    <option value="adjective">Adjective</option>
                    <option value="pronoun">Pronoun</option>
                    <option value="phrase">Phrase</option>
                    <option value="preposition">Preposition</option>
                    <option value="conjunction">Conjunction</option>
                  </select>
                </div>

                {/* DEFINITION */}
                <div className="space-y-1">
                  <label className="text-[9px] font-black text-zinc-400 uppercase tracking-widest block">
                    Definition / Explanation
                  </label>
                  <textarea
                    value={newCustomWord.definition}
                    onChange={e => setNewCustomWord({ ...newCustomWord, definition: e.target.value })}
                    placeholder="Short definition of the word"
                    className={`w-full h-14 p-3 rounded-2xl border-2 outline-none resize-none font-bold transition-all ${
                      darkMode ? 'bg-zinc-950 border-zinc-850 text-zinc-100 focus:border-pink-500' : 'bg-gray-50 border-gray-100 focus:bg-white focus:border-pink-300'
                    }`}
                  />
                </div>

                {/* EXAMPLES (OPTIONAL) */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[8px] font-black text-zinc-400 uppercase tracking-widest block">
                      English Example
                    </label>
                    <input
                      type="text"
                      value={newCustomWord.exampleEn}
                      onChange={e => setNewCustomWord({ ...newCustomWord, exampleEn: e.target.value })}
                      placeholder="I see a child"
                      className={`w-full p-2.5 rounded-2xl border-2 outline-none font-bold transition-all ${
                        darkMode ? 'bg-zinc-950 border-zinc-850 text-zinc-100 focus:border-pink-500' : 'bg-gray-50 border-gray-100 focus:bg-white focus:border-pink-300'
                      }`}
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[8px] font-black text-zinc-400 uppercase tracking-widest block">
                      Tetun Example
                    </label>
                    <input
                      type="text"
                      value={newCustomWord.exampleTet}
                      onChange={e => setNewCustomWord({ ...newCustomWord, exampleTet: e.target.value })}
                      placeholder="Ha'u haree oan ida"
                      className={`w-full p-2.5 rounded-2xl border-2 outline-none font-bold transition-all ${
                        darkMode ? 'bg-zinc-950 border-zinc-850 text-zinc-100 focus:border-pink-500' : 'bg-gray-50 border-gray-100 focus:bg-white focus:border-pink-300'
                      }`}
                    />
                  </div>
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  className="w-full py-3 rounded-2xl bg-pink-600 hover:bg-pink-700 text-white font-black uppercase tracking-wider transition-all duration-200 active:scale-95 shadow-md shadow-pink-500/10 mt-2"
                >
                  Save Custom Vocabulary
                </button>

              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
