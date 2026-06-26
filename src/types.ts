/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PartOfSpeech =
  | 'noun'
  | 'verb'
  | 'adjective'
  | 'pronoun'
  | 'preposition'
  | 'conjunction'
  | 'adverb'
  | 'phrase'
  | 'determiner'
  | 'interjection';

export interface DictionaryEntry {
  id: string;
  word: string;         // English word / phrase
  translation: string;  // Tetun translation
  pos: PartOfSpeech;
  definition: string;   // Meaning / usage notes in English
  exampleEn: string;    // Example in English
  exampleTet: string;   // Example in Tetun
  related: string[];    // Related English words for suggestions
}

export interface HistoryEntry {
  id: string;
  sourceText: string;
  translatedText: string;
  direction: 'en-tet' | 'tet-en';
  timestamp: number;
  isBookmarked: boolean;
  rulesApplied: string[];
}

export interface LinguisticRule {
  name: string;
  description: string;
  exampleEn: string;
  exampleTet: string;
  explanation: string;
}
