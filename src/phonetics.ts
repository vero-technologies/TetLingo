/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Generates an English-based phonetic pronunciation guide for a Tetun word or sentence.
 * This is incredibly useful since Tetun text-to-speech isn't natively supported.
 */
export function getPhoneticPronunciation(tetunText: string): string {
  const words = tetunText.toLowerCase().split(/\s+/);
  const phonetics = words.map(word => {
    // Strip punctuation
    let clean = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "");
    if (!clean) return word;

    // Apply rule-based phonetic spelling conversions
    let phonetic = clean
      // Glottal stop "ha'u" -> "ha-oo", "di'ak" -> "dee-ahk", "ko'alia" -> "koh-ah-lyah"
      .replace(/ha'u/g, "ha-oo")
      .replace(/di'ak/g, "dee-ahk")
      .replace(/ko'alia/g, "koh-ah-lyah")
      .replace(/la'o/g, "lah-oh")
      .replace(/la'en/g, "lah-ehn")
      .replace(/na'an/g, "nah-ahn")
      .replace(/feen/g, "fehn")
      .replace(/foo/g, "faw")
      // Vowels
      .replace(/u/g, "oo")
      .replace(/i/g, "ee")
      .replace(/e/g, "eh")
      .replace(/o/g, "oh")
      .replace(/a/g, "ah")
      // Consonants adjustments
      .replace(/r/g, "r")
      .replace(/x/g, "sh") // In Tetun, x is pronounced as "sh" like Portuguese "xá" -> "shah"
      .replace(/lh/g, "ly") // "lahó" -> "lah-aw"
      .replace(/nh/g, "ny") // Portuguese spelling "banhana"
      .replace(/ee-eh/g, "ee-eh")
      .replace(/ah-ah/g, "ah-ahn")
      .replace(/oo-oo/g, "oo")
      .replace(/ee-ee/g, "ee");

    // Clean up double dashes or trailing hyphens
    phonetic = phonetic
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");

    // Inject syllabic hyphens for longer words
    if (phonetic.length > 5 && !phonetic.includes("-")) {
      const half = Math.floor(phonetic.length / 2);
      phonetic = phonetic.slice(0, half) + "-" + phonetic.slice(half);
    }

    return phonetic;
  });

  return phonetics.join(" ");
}

/**
 * Simulates speech synthesis using the Web Audio API by generating a series of
 * harmonic organic vowel-like chirps matching the rhythm of the Tetun words.
 */
export function playSimulatedVoice(text: string) {
  if (typeof window === 'undefined' || !window.AudioContext && !(window as any).webkitAudioContext) return;

  const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
  const ctx = new AudioCtx();
  
  const words = text.split(/\s+/);
  let time = ctx.currentTime;

  words.forEach((word) => {
    const syllablesCount = Math.max(1, Math.ceil(word.length / 3));
    
    for (let s = 0; s < syllablesCount; s++) {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      // Determine frequency base based on vowel simulation (Formant-like frequencies)
      // High-quality playful "robotic translator voice"
      const baseFreq = 200 + (Math.sin(s + word.length) * 35); // base pitch around 180-240Hz
      osc.frequency.setValueAtTime(baseFreq, time);
      
      // Pitch modulation for natural intonation
      if (s === syllablesCount - 1) {
        // slight down-pitch at the end of word
        osc.frequency.exponentialRampToValueAtTime(baseFreq * 0.85, time + 0.15);
      } else {
        // slight up-pitch
        osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.1, time + 0.12);
      }

      // Vowel filter simulation with secondary oscillator or wave type
      osc.type = 'triangle'; // triangle has softer harmonics, resembling voice

      // Gain envelope
      gain.gain.setValueAtTime(0, time);
      gain.gain.linearRampToValueAtTime(0.12, time + 0.03); // fade in
      gain.gain.exponentialRampToValueAtTime(0.001, time + 0.18); // fade out
      
      osc.start(time);
      osc.stop(time + 0.2);
      
      time += 0.18; // space out syllables
    }
    time += 0.08; // space out words
  });
}
