/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { DictionaryEntry, PartOfSpeech } from './types';
import { DICTIONARY_DATA } from './dictionaryData';

export const DICTIONARY: DictionaryEntry[] = DICTIONARY_DATA;

const OLD_DICTIONARY: any[] = [
  // --- PRONOUNS ---
  {
    id: 'pr-1',
    word: 'i',
    translation: "ha'u",
    pos: 'pronoun',
    definition: 'First person singular pronoun.',
    exampleEn: 'I speak English.',
    exampleTet: "Ha'u ko'alia inglés.",
    related: ['me', 'my', 'we']
  },
  {
    id: 'pr-2',
    word: 'me',
    translation: "ha'u",
    pos: 'pronoun',
    definition: 'Objective form of first person singular.',
    exampleEn: 'Help me.',
    exampleTet: "Ajuda ha'u.",
    related: ['i', 'my']
  },
  {
    id: 'pr-3',
    word: 'you',
    translation: 'ita',
    pos: 'pronoun',
    definition: 'Second person singular pronoun (polite/respectful; use "ó" for informal).',
    exampleEn: 'Do you want water?',
    exampleTet: 'Ita hakarak bee ka?',
    related: ['your', 'you plural']
  },
  {
    id: 'pr-4',
    word: 'you informal',
    translation: 'ó',
    pos: 'pronoun',
    definition: 'Second person singular pronoun (informal, for close friends or younger people).',
    exampleEn: 'You are my friend.',
    exampleTet: "Ó ha'u-nia belun.",
    related: ['you', 'friend']
  },
  {
    id: 'pr-5',
    word: 'he',
    translation: 'nia',
    pos: 'pronoun',
    definition: 'Third person singular masculine pronoun.',
    exampleEn: 'He runs fast.',
    exampleTet: 'Nia halai lalais.',
    related: ['him', 'his', 'she', 'it']
  },
  {
    id: 'pr-6',
    word: 'she',
    translation: 'nia',
    pos: 'pronoun',
    definition: 'Third person singular feminine pronoun.',
    exampleEn: 'She is beautiful.',
    exampleTet: 'Nia furak.',
    related: ['her', 'hers', 'he']
  },
  {
    id: 'pr-7',
    word: 'it',
    translation: 'nia',
    pos: 'pronoun',
    definition: 'Third person singular neuter pronoun.',
    exampleEn: 'It is big.',
    exampleTet: 'Nia boot.',
    related: ['its', 'he', 'she']
  },
  {
    id: 'pr-8',
    word: 'we',
    translation: 'ita',
    pos: 'pronoun',
    definition: 'First person plural pronoun including the listener (inclusive). Use "ami" for exclusive (not including listener).',
    exampleEn: 'We are eating rice.',
    exampleTet: 'Ita han etu.',
    related: ['i', 'our', 'us']
  },
  {
    id: 'pr-9',
    word: 'we exclusive',
    translation: 'ami',
    pos: 'pronoun',
    definition: 'First person plural pronoun excluding the listener (exclusive).',
    exampleEn: 'We (excluding you) are going to school.',
    exampleTet: 'Ami ba eskola.',
    related: ['we', 'us']
  },
  {
    id: 'pr-10',
    word: 'they',
    translation: 'sira',
    pos: 'pronoun',
    definition: 'Third person plural pronoun.',
    exampleEn: 'They are sleeping.',
    exampleTet: 'Sira toba hela.',
    related: ['them', 'their']
  },

  // --- NOUNS - FAMILY ---
  {
    id: 'n-fam-1',
    word: 'friend',
    translation: 'belun',
    pos: 'noun',
    definition: 'A person whom one knows and has a bond of mutual affection.',
    exampleEn: 'My friend works here.',
    exampleTet: 'Ha\'u-nia belun serbisu iha ne\'e.',
    related: ['family', 'brother', 'sister']
  },
  {
    id: 'n-fam-2',
    word: 'family',
    translation: 'família',
    pos: 'noun',
    definition: 'A group of one or more parents and their children living together.',
    exampleEn: 'I love my family.',
    exampleTet: "Ha'u hadomi ha'u-nia família.",
    related: ['mother', 'father', 'friend']
  },
  {
    id: 'n-fam-3',
    word: 'mother',
    translation: 'inan',
    pos: 'noun',
    definition: 'A female parent.',
    exampleEn: 'My mother is good.',
    exampleTet: "Ha'u-nia inan di'ak.",
    related: ['father', 'family', 'child']
  },
  {
    id: 'n-fam-4',
    word: 'father',
    translation: 'aman',
    pos: 'noun',
    definition: 'A male parent.',
    exampleEn: 'His father is a doctor.',
    exampleTet: 'Nia aman doutór.',
    related: ['mother', 'family', 'child']
  },
  {
    id: 'n-fam-5',
    word: 'child',
    translation: 'oan',
    pos: 'noun',
    definition: 'A young human being below the age of puberty or a son/daughter.',
    exampleEn: 'The child is sleeping.',
    exampleTet: 'Oan ne\'e toba hela.',
    related: ['children', 'mother', 'father']
  },
  {
    id: 'n-fam-6',
    word: 'children',
    translation: 'oan sira',
    pos: 'noun',
    definition: 'Plural form of child.',
    exampleEn: 'The children play outside.',
    exampleTet: 'Oan sira halimar iha liur.',
    related: ['child', 'family']
  },
  {
    id: 'n-fam-7',
    word: 'brother',
    translation: 'maun',
    pos: 'noun',
    definition: 'An older male sibling (Note: "alin" refers to a younger sibling of either gender).',
    exampleEn: 'My older brother is tall.',
    exampleTet: "Ha'u-nia maun aas.",
    related: ['sister', 'brother younger', 'family']
  },
  {
    id: 'n-fam-8',
    word: 'sister',
    translation: 'biin',
    pos: 'noun',
    definition: 'An older female sibling.',
    exampleEn: 'Her older sister lives in Dili.',
    exampleTet: 'Nia biin hela iha Dili.',
    related: ['brother', 'sister younger', 'family']
  },
  {
    id: 'n-fam-9',
    word: 'husband',
    translation: "la'en",
    pos: 'noun',
    definition: 'A married male partner.',
    exampleEn: 'Her husband works at the hospital.',
    exampleTet: "Nia la'en serbisu iha ospitál.",
    related: ['wife', 'family']
  },
  {
    id: 'n-fam-10',
    word: 'wife',
    translation: 'feen',
    pos: 'noun',
    definition: 'A married female partner.',
    exampleEn: 'My wife is beautiful.',
    exampleTet: "Ha'u-nia feen furak.",
    related: ['husband', 'family']
  },

  // --- NOUNS - FOOD & DRINK ---
  {
    id: 'n-food-1',
    word: 'water',
    translation: 'bee',
    pos: 'noun',
    definition: 'A colorless, transparent, odorless liquid that forms the seas, lakes, and rain.',
    exampleEn: 'I want cold water.',
    exampleTet: 'Ha\'u hakarak bee malirin.',
    related: ['drink', 'food', 'milk', 'coffee']
  },
  {
    id: 'n-food-2',
    word: 'food',
    translation: 'ai-han',
    pos: 'noun',
    definition: 'Any nutritious substance that people or animals eat.',
    exampleEn: 'The food is delicious.',
    exampleTet: "Ai-han ne'e te'in-di'ak.",
    related: ['eat', 'rice', 'bread', 'meat']
  },
  {
    id: 'n-food-3',
    word: 'bread',
    translation: 'paun',
    pos: 'noun',
    definition: 'Food made of flour, water, and yeast mixed together and baked.',
    exampleEn: 'We buy bread in the morning.',
    exampleTet: 'Ita sosa paun iha dadeer.',
    related: ['food', 'eat', 'rice']
  },
  {
    id: 'n-food-4',
    word: 'meat',
    translation: "na'an",
    pos: 'noun',
    definition: 'The flesh of an animal used as food.',
    exampleEn: 'I eat chicken meat.',
    exampleTet: "Ha'u han manu na'an.",
    related: ['food', 'chicken', 'fish']
  },
  {
    id: 'n-food-5',
    word: 'rice',
    translation: 'etu',
    pos: 'noun',
    definition: 'Cooked rice (Note: "foos" is uncooked rice, "hare" is rice stalks in the field).',
    exampleEn: 'They eat rice every day.',
    exampleTet: 'Sira han etu loroloron.',
    related: ['food', 'eat', 'bread']
  },
  {
    id: 'n-food-6',
    word: 'coffee',
    translation: 'kafé',
    pos: 'noun',
    definition: 'A hot drink made from the roasted and ground seeds of a tropical shrub.',
    exampleEn: 'Timor coffee is very delicious.',
    exampleTet: 'Kafé Timor te\'in-di\'ak tebes.',
    related: ['drink', 'tea', 'water', 'milk']
  },
  {
    id: 'n-food-7',
    word: 'tea',
    translation: 'xá',
    pos: 'noun',
    definition: 'A hot drink made by infusing dried crushed leaves in boiling water.',
    exampleEn: 'Do you want tea or coffee?',
    exampleTet: 'Ita hakarak xá ka kafé?',
    related: ['drink', 'coffee', 'water']
  },
  {
    id: 'n-food-8',
    word: 'milk',
    translation: 'susubeen',
    pos: 'noun',
    definition: 'An opaque white fluid rich in fat and protein, secreted by female mammals.',
    exampleEn: 'The child drinks milk.',
    exampleTet: 'Oan ne\'e hemu susubeen.',
    related: ['drink', 'water', 'coffee']
  },

  // --- NOUNS - OBJECTS & PLACES ---
  {
    id: 'n-obj-1',
    word: 'house',
    translation: 'uma',
    pos: 'noun',
    definition: 'A building for human habitation.',
    exampleEn: 'My house is small.',
    exampleTet: "Ha'u-nia uma ki'ik.",
    related: ['school', 'room', 'city', 'village']
  },
  {
    id: 'n-obj-2',
    word: 'school',
    translation: 'eskola',
    pos: 'noun',
    definition: 'An institution for educating children.',
    exampleEn: 'They go to school.',
    exampleTet: 'Sira ba eskola.',
    related: ['teacher', 'student', 'book', 'house']
  },
  {
    id: 'n-obj-3',
    word: 'book',
    translation: 'livru',
    pos: 'noun',
    definition: 'A written or printed work consisting of pages glued or sewn together.',
    exampleEn: 'I read a new book.',
    exampleTet: 'Ha\'u lee livru foun.',
    related: ['pen', 'paper', 'school', 'read']
  },
  {
    id: 'n-obj-4',
    word: 'pen',
    translation: 'kaneta',
    pos: 'noun',
    definition: 'An instrument for writing or drawing with ink.',
    exampleEn: 'I write with a pen.',
    exampleTet: "Ha'u hakerek ho kaneta.",
    related: ['book', 'paper', 'write']
  },
  {
    id: 'n-obj-5',
    word: 'paper',
    translation: 'surat-tahan',
    pos: 'noun',
    definition: 'Material manufactured in thin sheets from the pulp of wood or other fibrous substances.',
    exampleEn: 'Give me a piece of paper.',
    exampleTet: 'Foo ha\'u surat-tahan ida.',
    related: ['book', 'pen', 'write']
  },
  {
    id: 'n-obj-6',
    word: 'road',
    translation: 'dalan',
    pos: 'noun',
    definition: 'A wide way leading from one place to another, especially one with a specially prepared surface.',
    exampleEn: 'This road is long.',
    exampleTet: "Dalan ne'e naruk.",
    related: ['street', 'car', 'motorcycle', 'city']
  },
  {
    id: 'n-obj-7',
    word: 'street',
    translation: 'dalan',
    pos: 'noun',
    definition: 'A public road in a city, town, or village, typically with houses on either side.',
    exampleEn: 'Walk on the side of the street.',
    exampleTet: 'La\'o iha dalan sorin.',
    related: ['road', 'car', 'city']
  },
  {
    id: 'n-obj-8',
    word: 'car',
    translation: 'karreta',
    pos: 'noun',
    definition: 'A road vehicle, typically with four wheels, powered by an internal combustion engine.',
    exampleEn: 'He has an expensive car.',
    exampleTet: 'Nia iha karreta karun.',
    related: ['motorcycle', 'bicycle', 'road', 'go']
  },
  {
    id: 'n-obj-9',
    word: 'motorcycle',
    translation: 'motor',
    pos: 'noun',
    definition: 'A two-wheeled vehicle that is powered by a motor.',
    exampleEn: 'I ride a motorcycle to work.',
    exampleTet: "Ha'u lori motor ba serbisu.",
    related: ['car', 'bicycle', 'road']
  },
  {
    id: 'n-obj-10',
    word: 'bicycle',
    translation: 'bisikleta',
    pos: 'noun',
    definition: 'A vehicle consisting of two wheels held in a frame one behind the other, propelled by pedals.',
    exampleEn: 'My child wants a bicycle.',
    exampleTet: "Ha'u-nia oan hakarak bisikleta.",
    related: ['car', 'motorcycle', 'road']
  },
  {
    id: 'n-obj-11',
    word: 'hospital',
    translation: 'ospitál',
    pos: 'noun',
    definition: 'An institution providing medical and surgical treatment and nursing care.',
    exampleEn: 'Where is the hospital?',
    exampleTet: 'Ospitál iha ne\'ebé?',
    related: ['doctor', 'school', 'city']
  },
  {
    id: 'n-obj-12',
    word: 'money',
    translation: 'osan',
    pos: 'noun',
    definition: 'A current medium of exchange in the form of coins and banknotes.',
    exampleEn: 'I don\'t have money.',
    exampleTet: "Ha'u la iha osan.",
    related: ['buy', 'sell', 'expensive', 'cheap']
  },
  {
    id: 'n-obj-13',
    word: 'city',
    translation: 'sidade',
    pos: 'noun',
    definition: 'A large town, specifically Dili or regional centers.',
    exampleEn: 'Dili is a busy city.',
    exampleTet: 'Dili sidade okupadu.',
    related: ['village', 'country', 'road']
  },
  {
    id: 'n-obj-14',
    word: 'village',
    translation: 'suku',
    pos: 'noun',
    definition: 'A group of houses in a rural area, larger than a hamlet and smaller than a town.',
    exampleEn: 'My family lives in a beautiful village.',
    exampleTet: "Ha'u-nia família hela iha suku furak.",
    related: ['city', 'country', 'house']
  },
  {
    id: 'n-obj-15',
    word: 'country',
    translation: 'rai',
    pos: 'noun',
    definition: 'A nation with its own government, occupying a particular territory (also means land or soil).',
    exampleEn: 'Timor-Leste is a new country.',
    exampleTet: 'Timor-Leste rai foun ida.',
    related: ['city', 'village', 'land']
  },
  {
    id: 'n-obj-16',
    word: 'language',
    translation: 'lian',
    pos: 'noun',
    definition: 'The method of human communication, spoken or written.',
    exampleEn: 'I am learning the Tetun language.',
    exampleTet: 'Ha\'u aprende hela lian Tetun.',
    related: ['speak', 'word', 'teacher']
  },
  {
    id: 'n-obj-17',
    word: 'word',
    translation: 'liafuan',
    pos: 'noun',
    definition: 'A single distinct meaningful element of speech or writing.',
    exampleEn: 'What is this word?',
    exampleTet: "Liafuan ne'e saida?",
    related: ['language', 'book', 'say']
  },
  {
    id: 'n-obj-18',
    word: 'toilet',
    translation: 'sentina',
    pos: 'noun',
    definition: 'A bowl-shaped device and room for urination and defecation.',
    exampleEn: 'Where is the toilet?',
    exampleTet: 'Sentina iha ne\'ebé?',
    related: ['hospital', 'house']
  },
  {
    id: 'n-obj-19',
    word: 'market',
    translation: 'merkadu',
    pos: 'noun',
    definition: 'A regular gathering of people for the purchase and sale of provisions, livestock, and other goods.',
    exampleEn: 'I go to the market to buy fish.',
    exampleTet: 'Ha\'u ba merkadu sosa ikan.',
    related: ['buy', 'sell', 'money', 'food']
  },

  // --- NOUNS - ENVIRONMENT ---
  {
    id: 'n-env-1',
    word: 'sun',
    translation: 'loro-matan',
    pos: 'noun',
    definition: 'The star around which the earth orbits, providing heat and light.',
    exampleEn: 'The sun is very hot today.',
    exampleTet: 'Loro-matan manas tebes ohin.',
    related: ['day', 'moon', 'star', 'hot']
  },
  {
    id: 'n-env-2',
    word: 'moon',
    translation: 'fulan',
    pos: 'noun',
    definition: 'The natural satellite of the earth, visible by reflected light (also means month).',
    exampleEn: 'The moon is beautiful tonight.',
    exampleTet: 'Fulan furak kalan ne\'e.',
    related: ['sun', 'star', 'night', 'month']
  },
  {
    id: 'n-env-3',
    word: 'star',
    translation: 'fitun',
    pos: 'noun',
    definition: 'A fixed luminous point in the night sky.',
    exampleEn: 'We can see many stars tonight.',
    exampleTet: 'Ita bele haree fitun barak kalan ne\'e.',
    related: ['moon', 'sun', 'night']
  },
  {
    id: 'n-env-4',
    word: 'rain',
    translation: 'udan',
    pos: 'noun',
    definition: 'Moisture condensed from the atmosphere that falls visible in separate drops.',
    exampleEn: 'Heavy rain is falling.',
    exampleTet: 'Udan boot tun hela.',
    related: ['wind', 'water', 'cold']
  },
  {
    id: 'n-env-5',
    word: 'wind',
    translation: 'anin',
    pos: 'noun',
    definition: 'The perceptible natural movement of the air.',
    exampleEn: 'The wind is cold today.',
    exampleTet: 'Anin malirin ohin.',
    related: ['rain', 'sun']
  },
  {
    id: 'n-env-6',
    word: 'sea',
    translation: 'tasi',
    pos: 'noun',
    definition: 'The expanse of salt water that covers most of the earth\'s surface.',
    exampleEn: 'Let\'s go swim in the sea.',
    exampleTet: 'Mai ita hariis-tasi.',
    related: ['fish', 'water', 'land']
  },
  {
    id: 'n-env-7',
    word: 'land',
    translation: 'rai',
    pos: 'noun',
    definition: 'The part of the earth\'s surface that is not covered by water (also means country, soil, earth).',
    exampleEn: 'This land is good for trees.',
    exampleTet: 'Rai ne\'e di\'ak ba ai-hun.',
    related: ['sea', 'stone', 'country']
  },
  {
    id: 'n-env-8',
    word: 'tree',
    translation: 'ai-hun',
    pos: 'noun',
    definition: 'A woody perennial plant, typically having a single stem or trunk.',
    exampleEn: 'The mango tree has sweet fruits.',
    exampleTet: 'Ai-hun haas iha ai-fuan midar.',
    related: ['flower', 'land', 'rain']
  },
  {
    id: 'n-env-9',
    word: 'flower',
    translation: 'ai-funan',
    pos: 'noun',
    definition: 'The seed-bearing part of a plant, consisting of reproductive organs that are typically surrounded by a brightly colored corolla.',
    exampleEn: 'This flower has a beautiful color.',
    exampleTet: "Ai-funan ne'e iha kor furak.",
    related: ['tree', 'beautiful']
  },

  // --- NOUNS - ANIMALS ---
  {
    id: 'n-ani-1',
    word: 'dog',
    translation: 'asu',
    pos: 'noun',
    definition: 'A domesticated carnivorous mammal that typically has a long snout, an acute sense of smell, and a barking voice.',
    exampleEn: 'The dog is barking.',
    exampleTet: 'Asu ho\'u hela.',
    related: ['cat', 'chicken', 'animal']
  },
  {
    id: 'n-ani-2',
    word: 'cat',
    translation: 'busa',
    pos: 'noun',
    definition: 'A small domesticated carnivorous mammal with soft fur, a short snout, and retractile claws.',
    exampleEn: 'My cat is sleeping on the chair.',
    exampleTet: "Ha'u-nia busa toba hela iha kadera leten.",
    related: ['dog', 'chicken']
  },
  {
    id: 'n-ani-3',
    word: 'fish',
    translation: 'ikan',
    pos: 'noun',
    definition: 'A limbless cold-blooded vertebrate animal with gills and fins and living wholly in water.',
    exampleEn: 'I like to eat grilled fish.',
    exampleTet: 'Ha\'u gosta han ikan tunu.',
    related: ['sea', 'water', 'meat']
  },
  {
    id: 'n-ani-4',
    word: 'chicken',
    translation: 'manu',
    pos: 'noun',
    definition: 'A domestic fowl kept for its eggs or meat.',
    exampleEn: 'We have ten chickens in our village.',
    exampleTet: 'Ami iha manu sanulu iha ami-nia suku.',
    related: ['dog', 'cat', 'meat']
  },

  // --- VERBS ---
  {
    id: 'v-1',
    word: 'go',
    translation: 'ba',
    pos: 'verb',
    definition: 'Move from one place to another.',
    exampleEn: 'We will go tomorrow.',
    exampleTet: 'Ita sei ba aban.',
    related: ['come', 'run', 'walk']
  },
  {
    id: 'v-2',
    word: 'come',
    translation: 'mai',
    pos: 'verb',
    definition: 'Move or travel toward or into a place thought of as near.',
    exampleEn: 'Come here, please.',
    exampleTet: 'Mai iha ne\'e, favor.',
    related: ['go', 'wait']
  },
  {
    id: 'v-3',
    word: 'eat',
    translation: 'han',
    pos: 'verb',
    definition: 'Put food into the mouth and chew and swallow it.',
    exampleEn: 'I want to eat bread.',
    exampleTet: "Ha'u hakarak han paun.",
    related: ['drink', 'food', 'rice', 'bread']
  },
  {
    id: 'v-4',
    word: 'drink',
    translation: 'hemu',
    pos: 'verb',
    definition: 'Take liquid into the mouth and swallow it.',
    exampleEn: 'The children drink milk.',
    exampleTet: 'Oan sira hemu susubeen.',
    related: ['eat', 'water', 'coffee', 'tea']
  },
  {
    id: 'v-5',
    word: 'speak',
    translation: "ko'alia",
    pos: 'verb',
    definition: 'Say something in order to convey information, an opinion, or a feeling.',
    exampleEn: 'I speak Tetun.',
    exampleTet: "Ha'u ko'alia tetun.",
    related: ['say', 'word', 'understand']
  },
  {
    id: 'v-6',
    word: 'understand',
    translation: 'komprende',
    pos: 'verb',
    definition: 'Perceive the intended meaning of words or speakers.',
    exampleEn: 'I don\'t understand this language.',
    exampleTet: "Ha'u la komprende lian ne'e.",
    related: ['speak', 'know', 'learn']
  },
  {
    id: 'v-7',
    word: 'read',
    translation: 'lee',
    pos: 'verb',
    definition: 'Look at and comprehend the meaning of written or printed matter.',
    exampleEn: 'She likes to read books.',
    exampleTet: 'Nia gosta lee livru sira.',
    related: ['write', 'book', 'learn']
  },
  {
    id: 'v-8',
    word: 'write',
    translation: 'hakerek',
    pos: 'verb',
    definition: 'Mark letters, words, or other symbols on a surface, typically paper, with a pen, pencil, or similar.',
    exampleEn: 'Can you write your name?',
    exampleTet: 'Ita bele hakerek ita-nia naran ka?',
    related: ['read', 'pen', 'paper']
  },
  {
    id: 'v-9',
    word: 'run',
    translation: 'halai',
    pos: 'verb',
    definition: 'Move at a speed faster than a walk, never having both feet on the ground at the same time.',
    exampleEn: 'The dogs run fast.',
    exampleTet: 'Asu sira halai lalais.',
    related: ['walk', 'go', 'fast']
  },
  {
    id: 'v-10',
    word: 'walk',
    translation: "la'o",
    pos: 'verb',
    definition: 'Move at a regular pace by lifting and setting down each foot in turn.',
    exampleEn: 'We walk to the market.',
    exampleTet: 'Ita la\'o ba merkadu.',
    related: ['run', 'go', 'slow']
  },
  {
    id: 'v-11',
    word: 'buy',
    translation: 'sosa',
    pos: 'verb',
    definition: 'Obtain in exchange for payment.',
    exampleEn: 'I will buy a new motorcycle.',
    exampleTet: 'Ha\'u sei sosa motor foun.',
    related: ['sell', 'money', 'market', 'cheap']
  },
  {
    id: 'v-12',
    word: 'sell',
    translation: "fa'an",
    pos: 'verb',
    definition: 'Give or hand over something in exchange for money.',
    exampleEn: 'They sell fruit at the market.',
    exampleTet: "Sira fa'an ai-fuan iha merkadu.",
    related: ['buy', 'money', 'market', 'expensive']
  },
  {
    id: 'v-13',
    word: 'help',
    translation: 'ajuda',
    pos: 'verb',
    definition: 'Make it easier for someone to do something by offering one\'s services or resources (also "tulun").',
    exampleEn: 'Please help my mother.',
    exampleTet: "Favor ajuda ha'u-nia inan.",
    related: ['friend', 'work']
  },
  {
    id: 'v-14',
    word: 'work',
    translation: 'serbisu',
    pos: 'verb',
    definition: 'Be engaged in physical or mental activity in order to achieve a purpose or result (also "servisu").',
    exampleEn: 'He works at the school.',
    exampleTet: 'Nia serbisu iha eskola.',
    related: ['help', 'teacher', 'doctor']
  },
  {
    id: 'v-15',
    word: 'sleep',
    translation: 'toba',
    pos: 'verb',
    definition: 'Be in a state of natural rest.',
    exampleEn: 'I want to sleep now.',
    exampleTet: "Ha'u hakarak toba agora.",
    related: ['sit', 'stand', 'tired', 'night']
  },
  {
    id: 'v-16',
    word: 'see',
    translation: 'haree',
    pos: 'verb',
    definition: 'Perceive with the eyes.',
    exampleEn: 'I saw a beautiful bird.',
    exampleTet: 'Ha\'u haree manu furak ona.',
    related: ['look', 'hear', 'star', 'sun']
  },
  {
    id: 'v-17',
    word: 'look',
    translation: 'haree',
    pos: 'verb',
    definition: 'Direct one\'s gaze toward someone or something.',
    exampleEn: 'Look at the moon.',
    exampleTet: 'Haree ba fulan.',
    related: ['see', 'hear']
  },
  {
    id: 'v-18',
    word: 'hear',
    translation: 'rona',
    pos: 'verb',
    definition: 'Perceive with the ear the sound made by someone or something.',
    exampleEn: 'I hear the wind.',
    exampleTet: 'Ha\'u rona anin.',
    related: ['listen', 'see', 'speak']
  },
  {
    id: 'v-19',
    word: 'listen',
    translation: 'rona',
    pos: 'verb',
    definition: 'Give one\'s attention to a sound.',
    exampleEn: 'Listen to the teacher.',
    exampleTet: 'Rona ba mestre.',
    related: ['hear', 'teacher', 'speak']
  },
  {
    id: 'v-20',
    word: 'want',
    translation: 'hakarak',
    pos: 'verb',
    definition: 'Have a desire to possess or do something.',
    exampleEn: 'I want coffee.',
    exampleTet: "Ha'u hakarak kafé.",
    related: ['like', 'love', 'eat', 'drink']
  },
  {
    id: 'v-21',
    word: 'like',
    translation: 'gosta',
    pos: 'verb',
    definition: 'Find agreeable, enjoyable, or satisfactory.',
    exampleEn: 'I like Timor coffee.',
    exampleTet: 'Ha\'u gosta kafé Timor.',
    related: ['want', 'love', 'good']
  },
  {
    id: 'v-22',
    word: 'love',
    translation: 'hadomi',
    pos: 'verb',
    definition: 'Feel deep affection for someone or something (also "domin").',
    exampleEn: 'I love you.',
    exampleTet: "Ha'u hadomi ó.",
    related: ['like', 'want', 'family']
  },
  {
    id: 'v-23',
    word: 'know',
    translation: 'hatene',
    pos: 'verb',
    definition: 'Be aware of through observation, inquiry, or information.',
    exampleEn: 'I know his father.',
    exampleTet: 'Ha\'u hatene nia aman.',
    related: ['understand', 'speak', 'learn']
  },
  {
    id: 'v-24',
    word: 'learn',
    translation: 'aprende',
    pos: 'verb',
    definition: 'Gain or acquire knowledge of or skill in something by study or experience.',
    exampleEn: 'We learn Tetun.',
    exampleTet: 'Ita aprende Tetun.',
    related: ['teach', 'school', 'student', 'understand']
  },
  {
    id: 'v-25',
    word: 'teach',
    translation: 'hanorin',
    pos: 'verb',
    definition: 'Impart knowledge to or instruct someone.',
    exampleEn: 'The teacher teaches English.',
    exampleTet: 'Mestre hanorin lian inglés.',
    related: ['learn', 'school', 'teacher']
  },
  {
    id: 'v-26',
    word: 'say',
    translation: 'dehan',
    pos: 'verb',
    definition: 'Utter words so as to convey information (also "hateten").',
    exampleEn: 'What did you say?',
    exampleTet: 'Ita dehan saida?',
    related: ['speak', 'word']
  },
  {
    id: 'v-27',
    word: 'do',
    translation: 'halo',
    pos: 'verb',
    definition: 'Perform, execute, or carry out an action (also "make").',
    exampleEn: 'What are you doing?',
    exampleTet: 'Ita halo hela saida?',
    related: ['make', 'work']
  },
  {
    id: 'v-28',
    word: 'make',
    translation: 'halo',
    pos: 'verb',
    definition: 'Create or construct something.',
    exampleEn: 'We make bread.',
    exampleTet: 'Ita halo paun.',
    related: ['do', 'work']
  },
  {
    id: 'v-29',
    word: 'have',
    translation: 'iha',
    pos: 'verb',
    definition: 'Possess, own, or hold.',
    exampleEn: 'I have water.',
    exampleTet: "Ha'u iha bee.",
    related: ['want', 'money']
  },
  {
    id: 'v-30',
    word: 'has',
    translation: 'iha',
    pos: 'verb',
    definition: 'Third person singular form of have.',
    exampleEn: 'She has money.',
    exampleTet: 'Nia iha osan.',
    related: ['have', 'money']
  },

  // --- ADJECTIVES ---
  {
    id: 'adj-1',
    word: 'good',
    translation: "di'ak",
    pos: 'adjective',
    definition: 'To be desired or approved of; of high quality.',
    exampleEn: 'The food is good.',
    exampleTet: "Ai-han di'ak.",
    related: ['bad', 'happy', 'beautiful']
  },
  {
    id: 'adj-2',
    word: 'bad',
    translation: 'aat',
    pos: 'adjective',
    definition: 'Of poor quality or a low standard; harmful.',
    exampleEn: 'This road is bad.',
    exampleTet: "Dalan ne'e aat.",
    related: ['good', 'ugly', 'dirty']
  },
  {
    id: 'adj-3',
    word: 'big',
    translation: 'boot',
    pos: 'adjective',
    definition: 'Of considerable size, extent, or intensity.',
    exampleEn: 'We have a big house.',
    exampleTet: 'Ita iha uma boot.',
    related: ['small', 'tall']
  },
  {
    id: 'adj-4',
    word: 'small',
    translation: "ki'ik",
    pos: 'adjective',
    definition: 'Of a size that is less than normal or average.',
    exampleEn: 'My dog is small.',
    exampleTet: "Ha'u-nia asu ki'ik.",
    related: ['big', 'short']
  },
  {
    id: 'adj-5',
    word: 'beautiful',
    translation: 'furak',
    pos: 'adjective',
    definition: 'Pleasing the senses or mind aesthetically (also "bonita" for females/objects).',
    exampleEn: 'This flower is beautiful.',
    exampleTet: "Ai-funan ne'e furak.",
    related: ['good', 'ugly', 'flower']
  },
  {
    id: 'adj-6',
    word: 'hot',
    translation: 'manas',
    pos: 'adjective',
    definition: 'Having a high temperature.',
    exampleEn: 'The tea is hot.',
    exampleTet: 'Xá manas hela.',
    related: ['cold', 'sun']
  },
  {
    id: 'adj-7',
    word: 'cold',
    translation: 'malirin',
    pos: 'adjective',
    definition: 'Of or at a low temperature.',
    exampleEn: 'Cold wind is blowing.',
    exampleTet: 'Anin malirin huu hela.',
    related: ['hot', 'water', 'rain']
  },
  {
    id: 'adj-8',
    word: 'new',
    translation: 'foun',
    pos: 'adjective',
    definition: 'Not existing before; made, introduced, or discovered recently.',
    exampleEn: 'I bought a new book.',
    exampleTet: 'Ha\'u sosa livru foun.',
    related: ['old', 'car', 'book']
  },
  {
    id: 'adj-9',
    word: 'old',
    translation: 'tuan',
    pos: 'adjective',
    definition: 'Having lived for a long time; no longer new (Note: use "katuas" for old man, "ferik" for old woman).',
    exampleEn: 'His motorcycle is old.',
    exampleTet: 'Nia motor tuan.',
    related: ['new', 'old person']
  },
  {
    id: 'adj-10',
    word: 'expensive',
    translation: 'karun',
    pos: 'adjective',
    definition: 'Costing a lot of money.',
    exampleEn: 'The bicycle is expensive.',
    exampleTet: 'Bisikleta ne\'e karun.',
    related: ['cheap', 'money', 'buy']
  },
  {
    id: 'adj-11',
    word: 'cheap',
    translation: 'baratu',
    pos: 'adjective',
    definition: 'Low in price, especially in relation to the value or quality.',
    exampleEn: 'Vegetables are cheap at the market.',
    exampleTet: 'Modo baratu iha merkadu.',
    related: ['expensive', 'money', 'sell']
  },
  {
    id: 'adj-12',
    word: 'fast',
    translation: 'lalais',
    pos: 'adjective',
    definition: 'Moving or capable of moving at high speed.',
    exampleEn: 'The car is very fast.',
    exampleTet: 'Karreta ne\'e lalais tebes.',
    related: ['slow', 'run']
  },
  {
    id: 'adj-13',
    word: 'slow',
    translation: 'neineik',
    pos: 'adjective',
    definition: 'Moving or operating, or cooperating at a low speed.',
    exampleEn: 'Please speak slowly.',
    exampleTet: 'Favor ko\'alia neineik.',
    related: ['fast', 'walk']
  },
  {
    id: 'adj-14',
    word: 'easy',
    translation: 'fasil',
    pos: 'adjective',
    definition: 'Achieved without great effort; presenting few difficulties.',
    exampleEn: 'Learning English is easy.',
    exampleTet: 'Aprende inglés fasil.',
    related: ['difficult', 'good']
  },
  {
    id: 'adj-15',
    word: 'difficult',
    translation: 'susar',
    pos: 'adjective',
    definition: 'Needing much effort or skill to accomplish, deal with, or understand (also "todan" - heavy/difficult).',
    exampleEn: 'This work is difficult.',
    exampleTet: "Serbisu ne'e susar.",
    related: ['easy', 'work']
  },
  {
    id: 'adj-16',
    word: 'clean',
    translation: 'moos',
    pos: 'adjective',
    definition: 'Free from dirt, marks, or stains.',
    exampleEn: 'The water is clean.',
    exampleTet: 'Bee moos.',
    related: ['dirty', 'water']
  },
  {
    id: 'adj-17',
    word: 'dirty',
    translation: "fo'er",
    pos: 'adjective',
    definition: 'Covered or marked with an unclean substance.',
    exampleEn: 'Your motorcycle is dirty.',
    exampleTet: "Ó-nia motor fo'er.",
    related: ['clean', 'bad']
  },
  {
    id: 'adj-18',
    word: 'tired',
    translation: 'kole',
    pos: 'adjective',
    definition: 'Drained of strength and energy; fatigued (Note: "baruk" is lazy or tired of doing something).',
    exampleEn: 'I am tired from work.',
    exampleTet: "Ha'u kole husi serbisu.",
    related: ['sleep', 'work']
  },
  {
    id: 'adj-19',
    word: 'happy',
    translation: 'kontente',
    pos: 'adjective',
    definition: 'Feeling or showing pleasure or contentment (also "haksolok").',
    exampleEn: 'My children are happy.',
    exampleTet: "Ha'u-nia oan sira kontente.",
    related: ['sad', 'good']
  },
  {
    id: 'adj-20',
    word: 'sad',
    translation: 'triste',
    pos: 'adjective',
    definition: 'Feeling or showing sorrow; unhappy.',
    exampleEn: 'Why are you sad?',
    exampleTet: 'Tanbasá ita triste?',
    related: ['happy', 'bad']
  },

  // --- TIME & PARTICLES ---
  {
    id: 't-1',
    word: 'today',
    translation: 'ohin',
    pos: 'adverb',
    definition: 'On the present day.',
    exampleEn: 'Today is hot.',
    exampleTet: 'Ohin manas.',
    related: ['tomorrow', 'yesterday', 'day']
  },
  {
    id: 't-2',
    word: 'tomorrow',
    translation: 'aban',
    pos: 'adverb',
    definition: 'On the day after today.',
    exampleEn: 'I will go tomorrow.',
    exampleTet: 'Ha\'u sei ba aban.',
    related: ['today', 'yesterday', 'day']
  },
  {
    id: 't-3',
    word: 'yesterday',
    translation: 'horisehik',
    pos: 'adverb',
    definition: 'On the day before today.',
    exampleEn: 'My mother arrived yesterday.',
    exampleTet: 'Ha\'u-nia inan to\'o horisehik.',
    related: ['today', 'tomorrow', 'day']
  },
  {
    id: 't-4',
    word: 'morning',
    translation: 'dadeer',
    pos: 'noun',
    definition: 'The period of time between sunrise and noon.',
    exampleEn: 'I eat bread in the morning.',
    exampleTet: 'Ha\'u han paun iha dadeer.',
    related: ['afternoon', 'night', 'today']
  },
  {
    id: 't-5',
    word: 'afternoon',
    translation: 'lokraik',
    pos: 'noun',
    definition: 'The time from noon or lunchtime to evening.',
    exampleEn: 'We play in the afternoon.',
    exampleTet: 'Ita halimar iha lokraik.',
    related: ['morning', 'night', 'today']
  },
  {
    id: 't-6',
    word: 'night',
    translation: 'kalan',
    pos: 'noun',
    definition: 'The period from sunset to sunrise in each twenty-four hours.',
    exampleEn: 'It is dark at night.',
    exampleTet: 'Kalan nakukun.',
    related: ['morning', 'afternoon', 'day']
  },

  // --- QUESTION WORDS ---
  {
    id: 'q-1',
    word: 'what',
    translation: 'saida',
    pos: 'pronoun',
    definition: 'Asking for information specifying something.',
    exampleEn: 'What is this?',
    exampleTet: "Saida ne'e?",
    related: ['who', 'where', 'why']
  },
  {
    id: 'q-2',
    word: 'who',
    translation: 'see',
    pos: 'pronoun',
    definition: 'Asking about which person.',
    exampleEn: 'Who is he?',
    exampleTet: 'Nia see?',
    related: ['what', 'where', 'why']
  },
  {
    id: 'q-3',
    word: 'where',
    translation: 'iha ne\'ebé',
    pos: 'pronoun',
    definition: 'Asking about location or place.',
    exampleEn: 'Where are you going?',
    exampleTet: 'Ita ba ne\'ebé?',
    related: ['what', 'who', 'when']
  },
  {
    id: 'q-4',
    word: 'when',
    translation: 'bainhira',
    pos: 'pronoun',
    definition: 'Asking about time.',
    exampleEn: 'When will they come?',
    exampleTet: 'Bainhira sira mai?',
    related: ['what', 'where', 'why']
  },
  {
    id: 'q-5',
    word: 'why',
    translation: 'tanbasá',
    pos: 'pronoun',
    definition: 'Asking for reasons or explanations (also "tansa").',
    exampleEn: 'Why do you laugh?',
    exampleTet: 'Tanbasá ita hamnasa?',
    related: ['what', 'where', 'how']
  },
  {
    id: 'q-6',
    word: 'how',
    translation: 'oinsá',
    pos: 'pronoun',
    definition: 'Asking about manner, condition, or quality.',
    exampleEn: 'How are you?',
    exampleTet: 'Oinsá di\'ak ka?',
    related: ['why', 'what', 'hira']
  },
  {
    id: 'q-7',
    word: 'how much',
    translation: 'hira',
    pos: 'pronoun',
    definition: 'Asking about quantity or price (also "how many").',
    exampleEn: 'How much is the bread?',
    exampleTet: 'Paun hira?',
    related: ['how', 'money', 'cheap']
  },
  {
    id: 'q-8',
    word: 'how many',
    translation: 'hira',
    pos: 'pronoun',
    definition: 'Asking about countable quantity.',
    exampleEn: 'How many children do you have?',
    exampleTet: 'Ita-nia oan hira?',
    related: ['how much', 'child']
  },

  // --- PREPOSITIONS & CONJUNCTIONS ---
  {
    id: 'c-1',
    word: 'and',
    translation: 'no',
    pos: 'conjunction',
    definition: 'Used to connect words or clauses (also "ho" meaning "with").',
    exampleEn: 'I like coffee and tea.',
    exampleTet: 'Ha\'u gosta kafé no xá.',
    related: ['but', 'or', 'with']
  },
  {
    id: 'c-2',
    word: 'but',
    translation: 'maibé',
    pos: 'conjunction',
    definition: 'Used to introduce a phrase contrasting with what has already been said.',
    exampleEn: 'I want to go but I am tired.',
    exampleTet: "Ha'u hakarak ba maibé ha'u kole.",
    related: ['and', 'because']
  },
  {
    id: 'c-3',
    word: 'or',
    translation: 'ka',
    pos: 'conjunction',
    definition: 'Used to link alternatives.',
    exampleEn: 'Is this a cat or dog?',
    exampleTet: 'Ida-ne\'e busa ka asu?',
    related: ['and', 'but']
  },
  {
    id: 'c-4',
    word: 'because',
    translation: 'tanba',
    pos: 'conjunction',
    definition: 'For the reason that; since.',
    exampleEn: 'I sleep because I am tired.',
    exampleTet: "Ha'u toba tanba ha'u kole.",
    related: ['but', 'why']
  },
  {
    id: 'p-1',
    word: 'in',
    translation: 'iha',
    pos: 'preposition',
    definition: 'Expressing the situation of something enclosed or surrounded.',
    exampleEn: 'My friend is in the house.',
    exampleTet: "Ha'u-nia belun iha uma laran.",
    related: ['at', 'on', 'to']
  },
  {
    id: 'p-2',
    word: 'at',
    translation: 'iha',
    pos: 'preposition',
    definition: 'Expressing location or arrival in a particular place.',
    exampleEn: 'We are at school.',
    exampleTet: 'Ita iha eskola.',
    related: ['in', 'on', 'to']
  },
  {
    id: 'p-3',
    word: 'on',
    translation: 'iha',
    pos: 'preposition',
    definition: 'Physically in contact with and supported by a surface (often paired with "leten" - top).',
    exampleEn: 'The book is on the table.',
    exampleTet: 'Livru iha meza leten.',
    related: ['in', 'at']
  },
  {
    id: 'p-4',
    word: 'to',
    translation: 'ba',
    pos: 'preposition',
    definition: 'Expressing motion in the direction of a location.',
    exampleEn: 'Let\'s go to Dili.',
    exampleTet: 'Mai ita ba Dili.',
    related: ['from', 'go']
  },
  {
    id: 'p-5',
    word: 'from',
    translation: 'husi',
    pos: 'preposition',
    definition: 'Indicating the point in space/time at which a journey or action starts.',
    exampleEn: 'I am from Timor.',
    exampleTet: "Ha'u husi Timor.",
    related: ['to', 'come']
  },
  {
    id: 'p-6',
    word: 'with',
    translation: 'ho',
    pos: 'preposition',
    definition: 'Accompanied by another person or thing.',
    exampleEn: 'I eat rice with fish.',
    exampleTet: 'Ha\'u han etu ho ikan.',
    related: ['without', 'and']
  },
  {
    id: 'p-7',
    word: 'without',
    translation: 'lahó',
    pos: 'preposition',
    definition: 'In the absence of.',
    exampleEn: 'I drink coffee without sugar.',
    exampleTet: 'Ha\'u hemu kafé lahó masin-midar.',
    related: ['with']
  },

  // --- COMMON DETERMINERS / AUX ---
  {
    id: 'det-1',
    word: 'the',
    translation: "ne'e",
    pos: 'determiner',
    definition: 'Definite article. Often represented by placing "ne\'e" (this/the) after the noun in Tetun.',
    exampleEn: 'The dog is barking.',
    exampleTet: "Asu ne'e ho'u hela.",
    related: ['this', 'that']
  },
  {
    id: 'det-2',
    word: 'this',
    translation: "ne'e",
    pos: 'determiner',
    definition: 'Referring to a specific thing close at hand.',
    exampleEn: 'This house is beautiful.',
    exampleTet: "Uma ne'e furak.",
    related: ['the', 'that']
  },
  {
    id: 'det-3',
    word: 'that',
    translation: "ne'ebá",
    pos: 'determiner',
    definition: 'Referring to a specific thing further away.',
    exampleEn: 'That school is big.',
    exampleTet: "Eskola ne'ebá boot.",
    related: ['this', 'the']
  },

  // --- GREETINGS / PHRASES ---
  {
    id: 'ph-1',
    word: 'hello',
    translation: 'bondia / halo',
    pos: 'phrase',
    definition: 'Greeting used to begin a conversation (often uses Portuguese "bondia" or Indonesian "halo").',
    exampleEn: 'Hello, how are you?',
    exampleTet: "Bondia, oinsá di'ak ka?",
    related: ['good morning', 'goodbye']
  },
  {
    id: 'ph-2',
    word: 'good morning',
    translation: 'dadeer di\'ak',
    pos: 'phrase',
    definition: 'Greeting used in the morning (Portuguese "bondia" is also very common).',
    exampleEn: 'Good morning, mother.',
    exampleTet: 'Dadeer di\'ak, inan.',
    related: ['hello', 'good afternoon']
  },
  {
    id: 'ph-3',
    word: 'good afternoon',
    translation: 'lokraik di\'ak',
    pos: 'phrase',
    definition: 'Greeting used in the afternoon (Portuguese "boa tarde" is also very common).',
    exampleEn: 'Good afternoon, teacher.',
    exampleTet: 'Lokraik di\'ak, mestre.',
    related: ['good morning', 'good night']
  },
  {
    id: 'ph-4',
    word: 'good night',
    translation: 'kalan di\'ak',
    pos: 'phrase',
    definition: 'Greeting used at night (Portuguese "boanoite" is also common).',
    exampleEn: 'Good night, sleep well.',
    exampleTet: 'Kalan di\'ak, toba di\'ak.',
    related: ['good afternoon', 'sleep']
  },
  {
    id: 'ph-5',
    word: 'thank you',
    translation: 'obrigadu / obrigada',
    pos: 'phrase',
    definition: 'Expression of gratitude. Men say "obrigadu", women say "obrigada". Can also use "agradese".',
    exampleEn: 'Thank you very much.',
    exampleTet: 'Obrigadu barak.',
    related: ['welcome', 'please']
  },
  {
    id: 'ph-6',
    word: 'you are welcome',
    translation: 'la buat ida / nada',
    pos: 'phrase',
    definition: 'Polite response to thank you.',
    exampleEn: 'Thank you. You are welcome.',
    exampleTet: 'Obrigadu. La buat ida.',
    related: ['thank you']
  },
  {
    id: 'ph-7',
    word: 'please',
    translation: 'favor / halo favór',
    pos: 'phrase',
    definition: 'Used to ask for something politely.',
    exampleEn: 'Please help me.',
    exampleTet: "Favor ajuda ha'u.",
    related: ['thank you']
  },
  {
    id: 'ph-8',
    word: 'excuse me',
    translation: 'lisensa',
    pos: 'phrase',
    definition: 'Used to grab attention politely or pass through.',
    exampleEn: 'Excuse me, where is the toilet?',
    exampleTet: 'Lisensa, sentina iha ne\'ebé?',
    related: ['sorry']
  },
  {
    id: 'ph-9',
    word: 'i am sorry',
    translation: 'husu deskulpa / deskulpa',
    pos: 'phrase',
    definition: 'Expression of regret.',
    exampleEn: 'I am sorry I am late.',
    exampleTet: "Deskulpa ha'u tardi.",
    related: ['excuse me']
  },
  {
    id: 'ph-10',
    word: 'goodbye',
    translation: 'hela di\'ak / la\'o di\'ak',
    pos: 'phrase',
    definition: 'Said when parting. Leaving person says "hela di\'ak" (stay well); staying person says "la\'o di\'ak" (walk well).',
    exampleEn: 'Goodbye, friend.',
    exampleTet: "Hela di'ak, belun.",
    related: ['hello', 'go']
  },
  {
    id: 'pc-1',
    word: 'thirsty',
    translation: 'hamrook',
    pos: 'adjective',
    definition: 'Feeling a need to drink water or liquids.',
    exampleEn: 'I am thirsty; I want to drink water.',
    exampleTet: "Ha'u hamrook; ha'u hakarak hemu bee.",
    related: ['hungry', 'drink', 'water']
  },
  {
    id: 'pc-2',
    word: 'hungry',
    translation: 'hamlaha',
    pos: 'adjective',
    definition: 'Feeling a need for food.',
    exampleEn: 'The child is hungry and wants to eat.',
    exampleTet: "Oan ne'e hamlaha no hakarak han.",
    related: ['thirsty', 'eat', 'food']
  },
  {
    id: 'pc-3',
    word: 'sick',
    translation: 'moras',
    pos: 'adjective',
    definition: 'Affected by physical or mental illness.',
    exampleEn: 'He cannot work today because he is sick.',
    exampleTet: "Nia la bele servisu ohin tanba nia moras.",
    related: ['tired', 'doctor', 'hospital']
  },
  {
    id: 'pc-4',
    word: 'uncle',
    translation: 'tiu',
    pos: 'noun',
    definition: 'The brother of one\'s father or mother (also used widely for older men).',
    exampleEn: 'My uncle lives in Dili.',
    exampleTet: "Ha'u-nia tiu hela iha Dili.",
    related: ['aunt', 'father', 'family']
  },
  {
    id: 'pc-5',
    word: 'aunt',
    translation: 'tia',
    pos: 'noun',
    definition: 'The sister of one\'s father or mother (also used widely for older women).',
    exampleEn: 'His aunt teaches English at the school.',
    exampleTet: "Nia-nia tia hanorin lian inglés iha eskola.",
    related: ['uncle', 'mother', 'family']
  },
  {
    id: 'pc-6',
    word: 'younger sibling',
    translation: 'alin',
    pos: 'noun',
    definition: 'A younger brother or sister.',
    exampleEn: 'My younger sibling goes to school.',
    exampleTet: "Ha'u-nia alin ba eskola.",
    related: ['brother', 'sister', 'family']
  },
  {
    id: 'pc-7',
    word: 'rest',
    translation: 'deskansa',
    pos: 'verb',
    definition: 'Cease work or movement in order to relax or recover strength.',
    exampleEn: 'We are tired; let\'s rest here.',
    exampleTet: "Ita kole; mai ita deskansa iha ne'e.",
    related: ['tired', 'sleep', 'relax']
  },
  {
    id: 'pc-8',
    word: 'bathe',
    translation: 'hariis',
    pos: 'verb',
    definition: 'Wash oneself or take a shower/bath.',
    exampleEn: 'I want to bathe in the morning.',
    exampleTet: "Ha'u hakarak hariis iha dadeer.",
    related: ['water', 'clean', 'morning']
  },
  {
    id: 'pc-9',
    word: 'slowly',
    translation: 'neineik',
    pos: 'adjective',
    definition: 'At a slow pace or with low speed (also means softly/quietly).',
    exampleEn: 'Please speak slowly.',
    exampleTet: "Favor ko'alia neineik.",
    related: ['quickly', 'speak', 'softly']
  },
  {
    id: 'pc-10',
    word: 'quickly',
    translation: 'lalais',
    pos: 'adjective',
    definition: 'At a fast pace or with high speed.',
    exampleEn: 'He walks quickly to the house.',
    exampleTet: "Nia la'o lalais ba uma.",
    related: ['slowly', 'run', 'walk']
  },
  {
    id: 'pc-11',
    word: 'play',
    translation: 'halimar',
    pos: 'verb',
    definition: 'Engage in activity for enjoyment and recreation rather than work.',
    exampleEn: 'The children play in the schoolyard.',
    exampleTet: "Labarik sira halimar iha eskola laran.",
    related: ['relax', 'friend', 'work']
  },
  {
    id: 'pc-12',
    word: 'sit',
    translation: 'tuur',
    pos: 'verb',
    definition: 'Adopt or be in a position in which one\'s weight is supported by one\'s buttocks.',
    exampleEn: 'Please sit here.',
    exampleTet: "Favor tuur iha ne'e.",
    related: ['stand', 'rest', 'chair']
  },
  {
    id: 'pc-13',
    word: 'stand',
    translation: 'hamriik',
    pos: 'verb',
    definition: 'Be in an upright position on feet.',
    exampleEn: 'We stand to respect the teacher.',
    exampleTet: "Ita hamriik atu hatudu respeitu ba mestre.",
    related: ['sit', 'walk', 'teacher']
  },
  {
    id: 'pc-14',
    word: 'must',
    translation: 'tenki',
    pos: 'verb',
    definition: 'Be obliged to; should (expressing necessity).',
    exampleEn: 'I must learn Tetun today.',
    exampleTet: "Ha'u tenki aprende Tetun ohin.",
    related: ['need', 'work', 'learn']
  },
  {
    id: 'pc-15',
    word: 'then',
    translation: 'depois',
    pos: 'preposition',
    definition: 'After that; next in order of time.',
    exampleEn: 'We will eat first, then we will go.',
    exampleTet: "Ita han uluk, depois ita ba.",
    related: ['and', 'after', 'then']
  },
  {
    id: 'pc-16',
    word: 'see you tomorrow',
    translation: 'até amanhá',
    pos: 'phrase',
    definition: 'Common parting expression meaning see you tomorrow.',
    exampleEn: 'Goodbye, see you tomorrow.',
    exampleTet: "Hela di'ak, até amanhá.",
    related: ['goodbye', 'tomorrow']
  },
  {
    id: 'pc-17',
    word: 'see you later',
    translation: 'ate logu',
    pos: 'phrase',
    definition: 'Common parting expression meaning see you later today.',
    exampleEn: 'See you later, friend.',
    exampleTet: "Ate logu, belun.",
    related: ['goodbye', 'today']
  },
  {
    id: 'pc-18',
    word: 'sir',
    translation: 'senhór',
    pos: 'noun',
    definition: 'Polite term of address for a man (mister).',
    exampleEn: 'Good morning, sir.',
    exampleTet: "Bondia, senhór.",
    related: ['madam', 'mister']
  },
  {
    id: 'pc-19',
    word: 'madam',
    translation: 'senhora',
    pos: 'noun',
    definition: 'Polite term of address for a woman.',
    exampleEn: 'Thank you, madam.',
    exampleTet: "Obrigada, senhora.",
    related: ['sir', 'woman']
  }
];

// Irregular English verbs to base forms
export const VERB_STEMS: Record<string, string> = {
  'goes': 'go', 'going': 'go', 'went': 'go', 'gone': 'go',
  'comes': 'come', 'coming': 'come', 'came': 'come',
  'eats': 'eat', 'eating': 'eat', 'ate': 'eat', 'eaten': 'eat',
  'drinks': 'drink', 'drinking': 'drink', 'drank': 'drink', 'drunk': 'drink',
  'speaks': 'speak', 'speaking': 'speak', 'spoke': 'speak', 'spoken': 'speak',
  'understands': 'understand', 'understanding': 'understand', 'understood': 'understand',
  'reads': 'read', 'reading': 'read',
  'writes': 'write', 'writing': 'write', 'wrote': 'write', 'written': 'write',
  'runs': 'run', 'running': 'run', 'ran': 'run',
  'walks': 'walk', 'walking': 'walk', 'walked': 'walk',
  'buys': 'buy', 'buying': 'buy', 'bought': 'buy',
  'sells': 'sell', 'selling': 'sell', 'sold': 'sell',
  'helps': 'help', 'helping': 'help', 'helped': 'help',
  'works': 'work', 'working': 'work', 'worked': 'work',
  'sleeps': 'sleep', 'sleeping': 'sleep', 'slept': 'sleep',
  'sees': 'see', 'seeing': 'see', 'saw': 'see', 'seen': 'see',
  'looks': 'look', 'looking': 'look', 'looked': 'look',
  'hears': 'hear', 'hearing': 'hear', 'heard': 'hear',
  'listens': 'listen', 'listening': 'listen', 'listened': 'listen',
  'wants': 'want', 'wanting': 'want', 'wanted': 'want',
  'likes': 'like', 'liking': 'like', 'liked': 'like',
  'loves': 'love', 'loving': 'love', 'loved': 'love',
  'knows': 'know', 'knowing': 'know', 'knew': 'know', 'known': 'know',
  'learns': 'learn', 'learning': 'learn', 'learned': 'learn',
  'teaches': 'teach', 'teaching': 'teach', 'taught': 'teach',
  'says': 'say', 'saying': 'say', 'said': 'say',
  'does': 'do', 'doing': 'do', 'did': 'do', 'done': 'do',
  'makes': 'make', 'making': 'make', 'made': 'make',
  'has': 'have', 'having': 'have', 'had': 'have',
  'rests': 'rest', 'resting': 'rest', 'rested': 'rest',
  'bathes': 'bathe', 'bathing': 'bathe', 'bathed': 'bathe',
  'plays': 'play', 'playing': 'play', 'played': 'play',
  'sits': 'sit', 'sitting': 'sit',
  'stands': 'stand', 'standing': 'stand'
};

// Map of plural English nouns to singulars
export const NOUN_STEMS: Record<string, string> = {
  'children': 'child',
  'houses': 'house',
  'schools': 'school',
  'books': 'book',
  'pens': 'pen',
  'roads': 'road',
  'streets': 'street',
  'cars': 'car',
  'motorcycles': 'motor',
  'bicycles': 'bisikleta',
  'hospitals': 'hospital',
  'cities': 'city',
  'villages': 'village',
  'countries': 'country',
  'languages': 'language',
  'words': 'word',
  'toilets': 'toilet',
  'markets': 'market',
  'suns': 'sun',
  'moons': 'moon',
  'stars': 'star',
  'rains': 'rain',
  'winds': 'wind',
  'seas': 'tasi',
  'lands': 'rai',
  'trees': 'tree',
  'flowers': 'flower',
  'dogs': 'dog',
  'cats': 'cat',
  'fishes': 'fish',
  'chickens': 'chicken',
  'friends': 'friend',
  'families': 'family',
  'mothers': 'mother',
  'fathers': 'father',
  'brothers': 'brother',
  'sisters': 'sister',
  'husbands': 'husband',
  'wives': 'wife',
  'uncles': 'uncle',
  'aunts': 'aunt',
  'younger siblings': 'younger sibling',
  'sirs': 'sir',
  'madams': 'madam'
};

// Helper dictionary for fast matching
const ENGLISH_INDEX: Record<string, DictionaryEntry> = {};
const TETUN_INDEX: Record<string, DictionaryEntry> = {};

DICTIONARY.forEach(entry => {
  ENGLISH_INDEX[entry.word.toLowerCase()] = entry;
  TETUN_INDEX[entry.translation.toLowerCase()] = entry;
});

// A robust set of conversational full phrase / idiom mappings
const CONVERSATIONAL_TEMPLATES: { pattern: RegExp; ruleName: string; replacer: (match: string[], dir: 'en-tet' | 'tet-en') => string }[] = [
  {
    pattern: /^how are you\s*\??$/i,
    ruleName: "Conversational Phrase Mapping ('how are you?' ➔ 'oinsá di'ak ka?')",
    replacer: () => "Oinsá di'ak ka?"
  },
  {
    pattern: /^good morning\s*\!?$/i,
    ruleName: "Time-of-day Greeting ('good morning' ➔ 'dadeer di'ak')",
    replacer: () => "Dadeer di'ak"
  },
  {
    pattern: /^good afternoon\s*\!?$/i,
    ruleName: "Time-of-day Greeting ('good afternoon' ➔ 'lokraik di'ak')",
    replacer: () => "Lokraik di'ak"
  },
  {
    pattern: /^good night\s*\!?$/i,
    ruleName: "Time-of-day Greeting ('good night' ➔ 'kalan di'ak')",
    replacer: () => "Kalan di'ak"
  },
  {
    pattern: /^thank you very much\s*\!?$/i,
    ruleName: "Gratitude Intensifier ('thank you very much' ➔ 'obrigadu/obrigada barak')",
    replacer: () => "Obrigadu barak / Obrigada barak (female speaker)"
  },
  {
    pattern: /^what is your name\s*\??$/i,
    ruleName: "Question Template ('what is your name?' ➔ 'ita-nia naran saida?')",
    replacer: () => "Ita-nia naran saida?"
  },
  {
    pattern: /^my name is\s+([a-zA-Z\s-]+)$/i,
    ruleName: "Possessive Greeting Template ('my name is [X]' ➔ 'ha'u-nia naran [X]')",
    replacer: (match) => `Ha'u-nia naran ${match[1]}.`
  },
  {
    pattern: /^where are you from\s*\??$/i,
    ruleName: "Origin Question ('where are you from?' ➔ 'ita husi ne'ebé?')",
    replacer: () => "Ita husi ne'ebé?"
  },
  {
    pattern: /^i am from\s+([a-zA-Z\s-]+)$/i,
    ruleName: "Origin Declarative ('i am from [X]' ➔ 'ha'u husi [X]')",
    replacer: (match) => `Ha'u husi ${match[1]}.`
  },
  {
    pattern: /^do you speak english\s*\??$/i,
    ruleName: "Language Skill Question ('do you speak english?' ➔ 'ita ko'alia inglés ka?')",
    replacer: () => "Ita ko'alia inglés ka?"
  },
  {
    pattern: /^i do not speak tetun$/i,
    ruleName: "Negative Language Statement ('i do not speak tetun' ➔ 'ha'u la ko'alia tetun')",
    replacer: () => "Ha'u la ko'alia tetun."
  },
  {
    pattern: /^i don't speak tetun$/i,
    ruleName: "Negative Language Statement ('i don't speak tetun' ➔ 'ha'u la ko'alia tetun')",
    replacer: () => "Ha'u la ko'alia tetun."
  },
  {
    pattern: /^where is the toilet\s*\??$/i,
    ruleName: "Essential Phrase Mapping ('where is the toilet?' ➔ 'sentina iha ne'ebé?')",
    replacer: () => "Sentina iha ne'ebé?"
  },
  {
    pattern: /^where is the hospital\s*\??$/i,
    ruleName: "Essential Phrase Mapping ('where is the hospital?' ➔ 'ospitál iha ne'ebé?')",
    replacer: () => "Ospitál iha ne'ebé?"
  },
  {
    pattern: /^where is (?:the\s+)?([a-zA-Z\s-]+)\??$/i,
    ruleName: "Grammar Rule: Location Question ('where is the [X]?' ➔ '[X] iha ne'ebé?')",
    replacer: (match) => {
      const noun = match[1].trim();
      const lookup = ENGLISH_INDEX[noun.toLowerCase()] || ENGLISH_INDEX[NOUN_STEMS[noun.toLowerCase()]];
      let tetNoun = lookup ? lookup.translation : '';
      if (!tetNoun) {
        const trans = translateEnglishToTetun(noun).text;
        tetNoun = trans.charAt(0).toLowerCase() + trans.slice(1);
        if (tetNoun.endsWith('.')) tetNoun = tetNoun.slice(0, -1);
      }
      return `${capitalize(tetNoun)} iha ne'ebé?`;
    }
  },
  {
    pattern: /^i love you\s*\!?$/i,
    ruleName: "Affection Expression ('i love you' ➔ 'ha'u hadomi ó')",
    replacer: () => "Ha'u hadomi ó."
  },
  {
    pattern: /^i like\s+([a-zA-Z\s-]+)$/i,
    ruleName: "Liking Structure ('i like [X]' ➔ 'ha'u gosta [X]')",
    replacer: (match) => {
      const obj = match[1].trim();
      const lookup = ENGLISH_INDEX[obj.toLowerCase()] || ENGLISH_INDEX[NOUN_STEMS[obj.toLowerCase()]];
      let tetObj = lookup ? lookup.translation : '';
      if (!tetObj) {
        const trans = translateEnglishToTetun(obj).text;
        tetObj = trans.charAt(0).toLowerCase() + trans.slice(1);
        if (tetObj.endsWith('.')) tetObj = tetObj.slice(0, -1);
      }
      return `Ha'u gosta ${tetObj}.`;
    }
  },
  {
    pattern: /^i don't have money\s*\!?$/i,
    ruleName: "Idiomatic Phrase ('i don't have money' ➔ 'ha'u la iha osan')",
    replacer: () => "Ha'u la iha osan."
  },
  {
    pattern: /^i want to eat\s+([a-zA-Z\s-]+)$/i,
    ruleName: "Desire Infinitive ('i want to eat [X]' ➔ 'ha'u hakarak han [X]')",
    replacer: (match) => {
      const food = match[1].trim();
      const lookup = ENGLISH_INDEX[food.toLowerCase()] || ENGLISH_INDEX[NOUN_STEMS[food.toLowerCase()]];
      let tetFood = lookup ? lookup.translation : '';
      if (!tetFood) {
        const trans = translateEnglishToTetun(food).text;
        tetFood = trans.charAt(0).toLowerCase() + trans.slice(1);
        if (tetFood.endsWith('.')) tetFood = tetFood.slice(0, -1);
      }
      return `Ha'u hakarak han ${tetFood}.`;
    }
  },
  {
    pattern: /^i want to\s+([a-zA-Z\s-]+)$/i,
    ruleName: "Desire Infinitive ('i want to [verb]' ➔ 'ha'u hakarak [verb]')",
    replacer: (match) => {
      const verb = match[1].trim();
      const lookup = ENGLISH_INDEX[verb.toLowerCase()] || ENGLISH_INDEX[VERB_STEMS[verb.toLowerCase()]];
      let tetVerb = lookup ? lookup.translation : '';
      if (!tetVerb) {
        const trans = translateEnglishToTetun(verb).text;
        tetVerb = trans.charAt(0).toLowerCase() + trans.slice(1);
        if (tetVerb.endsWith('.')) tetVerb = tetVerb.slice(0, -1);
      }
      return `Ha'u hakarak ${tetVerb}.`;
    }
  },
  {
    pattern: /^help me\s*\!?$/i,
    ruleName: "Imperative Mapping ('help me' ➔ 'ajuda ha'u')",
    replacer: () => "Ajuda ha'u!"
  }
];

export function capitalize(str: string): string {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Tokenizes a sentence while retaining punctuation as individual elements
function tokenize(text: string): string[] {
  return text
    .replace(/([.,!?])/g, ' $1 ')
    .split(/\s+/)
    .filter(token => token.length > 0);
}

/**
 * ENGLISH TO TETUN TRANSLATION ENGINE
 * Uses a highly custom POS tagger & structural parser to map clauses.
 */
export function translateEnglishToTetun(inputText: string): { text: string; rules: string[] } {
  const normalized = inputText.trim();
  if (!normalized) return { text: '', rules: [] };

  const rulesApplied: string[] = [];

  // 1. Try conversational template matching
  for (const template of CONVERSATIONAL_TEMPLATES) {
    const match = normalized.match(template.pattern);
    if (match) {
      rulesApplied.push(template.ruleName);
      return {
        text: template.replacer(match, 'en-tet'),
        rules: rulesApplied
      };
    }
  }

  // 2. Fall back to Tokenized Grammatical Restructuring
  const rawTokens = tokenize(normalized);
  const parsedTokens: {
    word: string;
    orig: string;
    pos: PartOfSpeech | 'unknown';
    translation: string;
    isPlural: boolean;
    tenseInfo?: 'past' | 'present' | 'future' | 'continuous';
    isNegated?: boolean;
    isPossessive?: 'my' | 'your' | 'his' | 'her' | 'our' | 'their';
  }[] = [];

  let index = 0;
  while (index < rawTokens.length) {
    const token = rawTokens[index];
    const lower = token.toLowerCase();

    // Check prepositions, contractions, tense particles
    if (lower === 'will' || (lower === 'going' && rawTokens[index + 1]?.toLowerCase() === 'to')) {
      rulesApplied.push("Tense Mapping: Identified future tense auxiliary ('will' / 'going to')");
      // Mark next verb as future
      if (lower === 'going') index++; // skip 'to'
      index++;
      if (rawTokens[index]) {
        const verbToken = rawTokens[index].toLowerCase();
        const baseVerb = VERB_STEMS[verbToken] || verbToken;
        const lookup = ENGLISH_INDEX[baseVerb];
        parsedTokens.push({
          word: baseVerb,
          orig: rawTokens[index],
          pos: lookup ? lookup.pos : 'verb',
          translation: lookup ? lookup.translation : baseVerb,
          isPlural: false,
          tenseInfo: 'future'
        });
      }
      index++;
      continue;
    }

    if (lower === 'to') {
      const prevToken = rawTokens[index - 1]?.toLowerCase();
      const nextToken = rawTokens[index + 1]?.toLowerCase();
      const nextBaseVerb = nextToken ? (VERB_STEMS[nextToken] || nextToken) : null;
      const isNextVerb = nextBaseVerb && ENGLISH_INDEX[nextBaseVerb]?.pos === 'verb';
      
      if (isNextVerb || ['want', 'like', 'love', 'try', 'begin', 'start', 'need', 'hope', 'prefer', 'learn', 'teach', 'forget', 'plan', 'decide'].includes(prevToken)) {
        rulesApplied.push("Infinitive Marker Omission: Dropped infinitive particle 'to' preceding a verb");
        index++;
        continue;
      }
    }

    if (lower === 'not' || lower === "don't" || lower === "doesn't" || lower === "didn't" || lower === "won't" || lower === "cannot" || lower === "can't") {
      rulesApplied.push("Polarity Mapping: Identified negation marker ('not' / 'don't')");
      index++;
      if (rawTokens[index]) {
        const nextToken = rawTokens[index].toLowerCase();
        const base = VERB_STEMS[nextToken] || nextToken;
        const lookup = ENGLISH_INDEX[base];
        parsedTokens.push({
          word: base,
          orig: rawTokens[index],
          pos: lookup ? lookup.pos : 'verb',
          translation: lookup ? lookup.translation : base,
          isPlural: false,
          isNegated: true
        });
      }
      index++;
      continue;
    }

    // Possessives mapping
    const possessiveMap: Record<string, 'my' | 'your' | 'his' | 'her' | 'our' | 'their'> = {
      'my': 'my', "ha'u-nia": 'my',
      'your': 'your',
      'his': 'his',
      'her': 'her',
      'its': 'his',
      'our': 'our',
      'their': 'their'
    };

    if (lower in possessiveMap) {
      const type = possessiveMap[lower];
      rulesApplied.push(`Possessive Mapping: Grouped pronoun '${token}' into grammatical '[pronoun]-nia' modifier`);
      index++;
      if (rawTokens[index]) {
        const nounToken = rawTokens[index].toLowerCase();
        const singularNoun = NOUN_STEMS[nounToken] || nounToken;
        const isPlural = nounToken in NOUN_STEMS || nounToken.endsWith('s');
        const lookup = ENGLISH_INDEX[singularNoun];
        parsedTokens.push({
          word: singularNoun,
          orig: rawTokens[index],
          pos: lookup ? lookup.pos : 'noun',
          translation: lookup ? lookup.translation : singularNoun,
          isPlural: isPlural,
          isPossessive: type
        });
      }
      index++;
      continue;
    }

    // Standard lookup
    const singularWord = NOUN_STEMS[lower] || lower;
    const baseVerb = VERB_STEMS[lower] || lower;
    let finalKey = lower;
    let isPlural = false;
    let isPast = false;

    if (lower in NOUN_STEMS) {
      finalKey = singularWord;
      isPlural = true;
      rulesApplied.push(`Morphology Parser: Analyzed plural noun '${token}' ➔ singular '${singularWord}'`);
    } else if (lower in VERB_STEMS) {
      finalKey = baseVerb;
      if (lower.endsWith('ed') || lower === 'went' || lower === 'ate' || lower === 'saw' || lower === 'bought' || lower === 'sold' || lower === 'wrote' || lower === 'slept' || lower === 'ran' || lower === 'heard' || lower === 'understood' || lower === 'said' || lower === 'did' || lower === 'made') {
        isPast = true;
        rulesApplied.push(`Morphology Parser: Analyzed past tense verb '${token}' ➔ base verb '${baseVerb}'`);
      }
    }

    const lookup = ENGLISH_INDEX[finalKey];
    if (lookup) {
      parsedTokens.push({
        word: finalKey,
        orig: token,
        pos: lookup.pos,
        translation: lookup.translation,
        isPlural: isPlural,
        tenseInfo: isPast ? 'past' : undefined
      });
    } else {
      // Is it a linking verb to skip? (am, is, are, was, were)
      if (['am', 'is', 'are', 'was', 'were'].includes(lower)) {
        rulesApplied.push("Copula Dropping: Omitted auxiliary linking verb ('is' / 'am' / 'are') per Tetun syntax");
        // We skip linking verbs since adjectives and status nouns don't require copulas in Tetun
      } else if (['a', 'an', 'the'].includes(lower)) {
        // We skip articles, but mark if 'the' can map to 'ne'e' later. Let's record article omission
        if (lower === 'the') {
          // If we have 'the [noun]', let's make it '[noun] ne'e'.
          // We will inject a 'determiner' token so it matches and places 'ne'e' at the end of the noun phrase
          parsedTokens.push({
            word: 'the',
            orig: token,
            pos: 'determiner',
            translation: "ne'e",
            isPlural: false
          });
        }
      } else {
        parsedTokens.push({
          word: lower,
          orig: token,
          pos: 'unknown',
          translation: token, // keep untranslated
          isPlural: false
        });
      }
    }
    index++;
  }

  // 3. Structural Restructuring (Linguistic rules)
  // Rule A: Adjective Placement Shift & Grouping
  // In English: Adjective + Noun (e.g., "beautiful flower").
  // In Tetun: Noun + Adjective (e.g., "ai-funan furak").
  // Let's sweep the tokens list and swap adjacent Adj + Noun.
  for (let i = 0; i < parsedTokens.length - 1; i++) {
    const current = parsedTokens[i];
    const next = parsedTokens[i + 1];
    if (current.pos === 'adjective' && next.pos === 'noun') {
      rulesApplied.push(`Noun Phrase Reordering: Swapped Adjective + Noun ('${current.orig} ${next.orig}' ➔ '${next.translation} ${current.translation}')`);
      // Swap them in the array
      parsedTokens[i] = next;
      parsedTokens[i + 1] = current;
      // Increment past because we resolved two elements
      i++;
    }
  }

  // Rule B: Article / Definite Determiner placement
  // In English: "the dog" ➔ In Tetun: "asu ne'e" (Noun + ne'e).
  // If we have a determiner (the/this) followed by a noun, we place the translation "ne'e" AFTER the noun.
  for (let i = 0; i < parsedTokens.length - 1; i++) {
    const current = parsedTokens[i];
    const next = parsedTokens[i + 1];
    if (current.pos === 'determiner' && next.pos === 'noun') {
      rulesApplied.push(`Determiner Relocation: Shifted definite article 'the' after the noun ('the ${next.orig}' ➔ '${next.translation} ne'e')`);
      parsedTokens[i] = next;
      parsedTokens[i + 1] = current;
      i++;
    }
  }

  // 4. Word-by-word synthesis with Grammatical inflections
  const finalTranslations: string[] = [];
  const isQuestion = rawTokens.includes('?');

  parsedTokens.forEach(t => {
    let wordTrans = t.translation;

    // Apply possessive pronoun modifier: my house ➔ ha'u-nia uma
    if (t.isPossessive) {
      const possessivePrefixes = {
        'my': "ha'u-nia",
        'your': "ita-nia",
        'his': "nia",
        'her': "nia",
        'our': "ami-nia",
        'their': "sira-nia"
      };
      wordTrans = `${possessivePrefixes[t.isPossessive]} ${wordTrans}`;
    }

    // Apply negative particle: la + verb
    if (t.isNegated) {
      wordTrans = `la ${wordTrans}`;
    }

    // Apply continuous tense: verb + hela
    if (t.tenseInfo === 'continuous') {
      wordTrans = `${wordTrans} hela`;
      rulesApplied.push(`Tense Particle: Appended continuous state particle 'hela' after verb`);
    }

    // Apply future tense: sei + verb
    if (t.tenseInfo === 'future') {
      wordTrans = `sei ${wordTrans}`;
      rulesApplied.push(`Tense Particle: Prepended future auxiliary 'sei' before verb`);
    }

    // Apply pluralizer: noun + sira
    if (t.isPlural && t.pos === 'noun') {
      wordTrans = `${wordTrans} sira`;
      rulesApplied.push(`Pluralization: Added plural marker 'sira' after noun`);
    }

    // Apply past tense particle: verb + ona
    if (t.tenseInfo === 'past') {
      wordTrans = `${wordTrans} ona`;
      rulesApplied.push(`Tense Particle: Appended completed action particle 'ona' after verb`);
    }

    finalTranslations.push(wordTrans);
  });

  // 5. Question formation
  // If the English input is a question and doesn't contain standard Tetun question words, add "ka" before the question mark.
  if (isQuestion && finalTranslations.length > 1) {
    const hasQWord = finalTranslations.some(word => ['saida', 'see', 'ne\'ebé', 'bainhira', 'tanbasá', 'oinsá', 'hira'].some(q => word.toLowerCase().includes(q)));
    if (!hasQWord) {
      rulesApplied.push("Interrogative Formulation: Appended interrogative particle 'ka' to form a yes/no question");
      // Find the last word before the question mark and insert "ka"
      const lastIndex = finalTranslations.indexOf('?');
      if (lastIndex !== -1) {
        finalTranslations.splice(lastIndex, 0, 'ka');
      } else {
        finalTranslations.push('ka');
        finalTranslations.push('?');
      }
    }
  }

  // Construct final translated sentence
  let translatedSentence = finalTranslations
    .join(' ')
    .replace(/\s+([.,!?])/g, '$1') // remove spacing before punctuation
    .replace(/\s+/g, ' ')
    .trim();

  // Capitalize first letter
  translatedSentence = capitalize(translatedSentence);

  if (rulesApplied.length === 0) {
    rulesApplied.push("Direct Dictionary Lookup: Direct word-for-word semantic pairing applied");
  }

  return {
    text: translatedSentence,
    rules: Array.from(new Set(rulesApplied)) // Deduplicate rules
  };
}

/**
 * TETUN TO ENGLISH TRANSLATION ENGINE
 * Translates Tetun to English using reverse structural maps and particle resolution.
 */
export function translateTetunToEnglish(inputText: string): { text: string; rules: string[] } {
  const normalized = inputText.trim();
  if (!normalized) return { text: '', rules: [] };

  const rulesApplied: string[] = [];

  // Standard phrase maps
  const PHRASE_MAP: Record<string, string> = {
    "bondia, oinsá di'ak ka?": "Hello, how are you?",
    "oinsá di'ak ka?": "How are you?",
    "dadeer di'ak": "Good morning.",
    "lokraik di'ak": "Good afternoon.",
    "kalan di'ak": "Good night.",
    "obrigadu barak": "Thank you very much.",
    "obrigada barak": "Thank you very much.",
    "ita-nia naran saida?": "What is your name?",
    "ita husi ne'ebé?": "Where are you from?",
    "ha'u la ko'alia tetun": "I do not speak Tetun.",
    "sentina iha ne'ebé?": "Where is the toilet?",
    "ospitál iha ne'ebé?": "Where is the hospital?",
    "ajuda ha'u": "Help me!",
    "ha'u hadomi ó": "I love you.",
    "la buat ida": "You are welcome.",
    "favor ajuda ha'u": "Please help me.",
    "ko'alia neineik, favor": "Please speak slowly.",
    "di'ak ka lae?": "Are you fine?",
    "ha'u di'ak": "I am fine."
  };

  const lookupLower = normalized.toLowerCase().replace(/[.,!?]$/, '').trim();
  if (PHRASE_MAP[lookupLower]) {
    rulesApplied.push("Conversational Phrase Mapping (Direct idiom translation)");
    return {
      text: PHRASE_MAP[lookupLower],
      rules: rulesApplied
    };
  }

  // Tokenize Tetun sentence
  const rawTokens = tokenize(normalized);
  const parsed: {
    word: string;
    pos: PartOfSpeech | 'unknown';
    translation: string;
    isPlural: boolean;
    isPast: boolean;
    isFuture: boolean;
    isContinuous: boolean;
    isNegated: boolean;
    possessiveOwner?: 'my' | 'your' | 'his' | 'her' | 'our' | 'their';
  }[] = [];

  let i = 0;
  while (i < rawTokens.length) {
    const token = rawTokens[i];
    const lower = token.toLowerCase();

    // Check negation: "la [verb]"
    if (lower === 'la') {
      rulesApplied.push("Reverse Polarity: Parsed negation particle 'la' ➔ 'do not'");
      i++;
      if (rawTokens[i]) {
        const verbToken = rawTokens[i].toLowerCase();
        const lookup = TETUN_INDEX[verbToken];
        parsed.push({
          word: verbToken,
          pos: lookup ? lookup.pos : 'verb',
          translation: lookup ? lookup.word : verbToken,
          isPlural: false,
          isPast: false,
          isFuture: false,
          isContinuous: false,
          isNegated: true
        });
      }
      i++;
      continue;
    }

    // Check future: "sei [verb]"
    if (lower === 'sei') {
      rulesApplied.push("Reverse Tense: Parsed future particle 'sei' ➔ 'will'");
      i++;
      if (rawTokens[i]) {
        const verbToken = rawTokens[i].toLowerCase();
        const lookup = TETUN_INDEX[verbToken];
        parsed.push({
          word: verbToken,
          pos: lookup ? lookup.pos : 'verb',
          translation: lookup ? lookup.word : verbToken,
          isPlural: false,
          isPast: false,
          isFuture: true,
          isContinuous: false,
          isNegated: false
        });
      }
      i++;
      continue;
    }

    // Check possessives prefix: e.g., "ha'u-nia", "ita-nia", "sira-nia"
    const possessivePrefixes: Record<string, 'my' | 'your' | 'his' | 'her' | 'our' | 'their'> = {
      "ha'u-nia": 'my',
      "ita-nia": 'your',
      "ó-nia": 'your',
      "nia-nia": 'his',
      "ami-nia": 'our',
      "sira-nia": 'their'
    };

    if (lower in possessivePrefixes) {
      const owner = possessivePrefixes[lower];
      rulesApplied.push(`Reverse Possessive: Decoded prefix '${token}' as possessive adjective '${owner}'`);
      i++;
      if (rawTokens[i]) {
        const nounToken = rawTokens[i].toLowerCase();
        const lookup = TETUN_INDEX[nounToken];
        parsed.push({
          word: nounToken,
          pos: lookup ? lookup.pos : 'noun',
          translation: lookup ? lookup.word : nounToken,
          isPlural: false,
          isPast: false,
          isFuture: false,
          isContinuous: false,
          isNegated: false,
          possessiveOwner: owner
        });
      }
      i++;
      continue;
    }

    // Look ahead to handle compound structures:
    // Noun + Adjective (e.g., "uma boot" ➔ "big house")
    const lookupCurr = TETUN_INDEX[lower];
    const nextToken = rawTokens[i + 1]?.toLowerCase();
    const lookupNext = nextToken ? TETUN_INDEX[nextToken] : null;

    if (lookupCurr && lookupCurr.pos === 'noun' && lookupNext && lookupNext.pos === 'adjective') {
      rulesApplied.push(`Reverse Noun-Adjective Placement: Restructured '${token} ${rawTokens[i+1]}' ➔ '${lookupNext.word} ${lookupCurr.word}'`);
      
      // Let's also check if followed by plural marker "sira"
      const afterNextToken = rawTokens[i + 2]?.toLowerCase();
      const isPlural = afterNextToken === 'sira';
      if (isPlural) {
        rulesApplied.push("Reverse Pluralization: Decoded plural particle 'sira' after adjective phrase");
      }

      parsed.push({
        word: nextToken!,
        pos: 'adjective',
        translation: lookupNext.word,
        isPlural: false,
        isPast: false,
        isFuture: false,
        isContinuous: false,
        isNegated: false
      });

      parsed.push({
        word: lower,
        pos: 'noun',
        translation: isPlural ? `${lookupCurr.word}s` : lookupCurr.word,
        isPlural: isPlural,
        isPast: false,
        isFuture: false,
        isContinuous: false,
        isNegated: false
      });

      i += isPlural ? 3 : 2;
      continue;
    }

    // Check for "sira" following a single noun
    if (lookupCurr && lookupCurr.pos === 'noun' && nextToken === 'sira') {
      rulesApplied.push(`Reverse Pluralization: Plural marker 'sira' attached ➔ pluralized '${lookupCurr.word}s'`);
      parsed.push({
        word: lower,
        pos: 'noun',
        translation: `${lookupCurr.word}s`,
        isPlural: true,
        isPast: false,
        isFuture: false,
        isContinuous: false,
        isNegated: false
      });
      i += 2;
      continue;
    }

    // Check for "hela" (continuous) or "ona" (past) trailing a verb
    if (lookupCurr && lookupCurr.pos === 'verb' && nextToken === 'hela') {
      rulesApplied.push("Reverse Continuous Aspect: Translated '[verb] hela' ➔ 'is/are [verb]ing'");
      parsed.push({
        word: lower,
        pos: 'verb',
        translation: lookupCurr.word,
        isPlural: false,
        isPast: false,
        isFuture: false,
        isContinuous: true,
        isNegated: false
      });
      i += 2;
      continue;
    }

    if (lookupCurr && lookupCurr.pos === 'verb' && nextToken === 'ona') {
      rulesApplied.push("Reverse Past Aspect: Translated '[verb] ona' ➔ past form of verb");
      parsed.push({
        word: lower,
        pos: 'verb',
        translation: lookupCurr.word,
        isPlural: false,
        isPast: true,
        isFuture: false,
        isContinuous: false,
        isNegated: false
      });
      i += 2;
      continue;
    }

    // Skip particles like "ka" at the end of yes/no questions, but remember it
    if (lower === 'ka' && rawTokens[i + 1] === '?') {
      rulesApplied.push("Reverse Interrogative: Removed trailing 'ka' yes/no question particle");
      i++;
      continue;
    }

    // If "iha ne'ebé" is a single unit
    if (lower === 'iha' && nextToken === "ne'ebé") {
      parsed.push({
        word: "iha ne'ebé",
        pos: 'pronoun',
        translation: 'where',
        isPlural: false,
        isPast: false,
        isFuture: false,
        isContinuous: false,
        isNegated: false
      });
      i += 2;
      continue;
    }

    // Standard word mapping
    if (lookupCurr) {
      parsed.push({
        word: lower,
        pos: lookupCurr.pos,
        translation: lookupCurr.word,
        isPlural: false,
        isPast: false,
        isFuture: false,
        isContinuous: false,
        isNegated: false
      });
    } else {
      // Keep punctuation or unknown words
      parsed.push({
        word: token,
        pos: 'unknown',
        translation: token,
        isPlural: false,
        isPast: false,
        isFuture: false,
        isContinuous: false,
        isNegated: false
      });
    }
    i++;
  }

  // Synthesis into English
  const englishTokens: string[] = [];
  parsed.forEach(p => {
    let trans = p.translation;

    // Handle possessive owner prefix
    if (p.possessiveOwner) {
      trans = `${p.possessiveOwner} ${trans}`;
    }

    // Handle verb conjugation in English
    if (p.pos === 'verb') {
      if (p.isNegated) {
        trans = `does not ${trans}`;
      }
      if (p.isFuture) {
        trans = `will ${trans}`;
      }
      if (p.isContinuous) {
        // Simple continuous mapping (e.g. eating)
        const continuousForm = trans === 'go' ? 'going' :
                               trans === 'eat' ? 'eating' :
                               trans === 'drink' ? 'drinking' :
                               trans === 'speak' ? 'speaking' :
                               trans === 'read' ? 'reading' :
                               trans === 'write' ? 'writing' :
                               trans === 'run' ? 'running' :
                               trans === 'walk' ? 'walking' :
                               trans === 'buy' ? 'buying' :
                               trans === 'sell' ? 'selling' :
                               trans === 'help' ? 'helping' :
                               trans === 'work' ? 'working' :
                               trans === 'sleep' ? 'sleeping' :
                               trans === 'see' ? 'seeing' :
                               trans === 'look' ? 'looking' :
                               trans === 'hear' ? 'hearing' :
                               trans === 'listen' ? 'listening' :
                               trans === 'want' ? 'wanting' :
                               trans === 'like' ? 'liking' :
                               trans === 'love' ? 'loving' :
                               trans === 'know' ? 'knowing' :
                               trans === 'learn' ? 'learning' :
                               trans === 'teach' ? 'teaching' :
                               trans === 'say' ? 'saying' :
                               trans === 'do' ? 'doing' :
                               trans === 'make' ? 'making' : `${trans}ing`;
        trans = `is ${continuousForm}`;
      }
      if (p.isPast) {
        const pastForm = trans === 'go' ? 'went' :
                         trans === 'come' ? 'came' :
                         trans === 'eat' ? 'ate' :
                         trans === 'drink' ? 'drank' :
                         trans === 'speak' ? 'spoke' :
                         trans === 'write' ? 'wrote' :
                         trans === 'run' ? 'ran' :
                         trans === 'walk' ? 'walked' :
                         trans === 'buy' ? 'bought' :
                         trans === 'sell' ? 'sold' :
                         trans === 'help' ? 'helped' :
                         trans === 'work' ? 'worked' :
                         trans === 'sleep' ? 'slept' :
                         trans === 'see' ? 'saw' :
                         trans === 'look' ? 'looked' :
                         trans === 'hear' ? 'heard' :
                         trans === 'listen' ? 'listened' :
                         trans === 'want' ? 'wanted' :
                         trans === 'like' ? 'liked' :
                         trans === 'love' ? 'loved' :
                         trans === 'know' ? 'knew' :
                         trans === 'learn' ? 'learned' :
                         trans === 'teach' ? 'taught' :
                         trans === 'say' ? 'said' :
                         trans === 'do' ? 'did' :
                         trans === 'make' ? 'made' : `${trans}ed`;
        trans = pastForm;
      }
    }

    englishTokens.push(trans);
  });

  // Reorder question words if needed
  // If "where" is at the end, bring it to the front
  if (englishTokens.includes('where') && englishTokens.indexOf('where') > 0) {
    rulesApplied.push("Interrogative Restructuring: Shifted question word 'where' to the front");
    const whereIdx = englishTokens.indexOf('where');
    englishTokens.splice(whereIdx, 1);
    
    // Check if there is an "is" or "are" in the remaining tokens to put after 'where'
    const isIdx = englishTokens.findIndex(t => t.startsWith('is ') || t === 'is');
    if (isIdx !== -1) {
      englishTokens.splice(isIdx, 1);
    }
    
    // Put together: "Where is [rest]?"
    const questionMarkIdx = englishTokens.indexOf('?');
    if (questionMarkIdx !== -1) {
      englishTokens.splice(questionMarkIdx, 0, '?'); // adjust index
    }
    
    // Assemble
    const cleanTokens = englishTokens.filter(t => t !== '?');
    englishTokens.length = 0;
    englishTokens.push('where', 'is', ...cleanTokens, '?');
  }

  let finalStr = englishTokens
    .join(' ')
    .replace(/\s+([.,!?])/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();

  // Clean double articles / pronoun spaces
  finalStr = finalStr
    .replace(/is is/gi, 'is')
    .replace(/a a/gi, 'a')
    .replace(/the the/gi, 'the');

  finalStr = capitalize(finalStr);

  if (rulesApplied.length === 0) {
    rulesApplied.push("Direct Dictionary Lookup: Direct word-for-word semantic pairing applied");
  }

  return {
    text: finalStr,
    rules: Array.from(new Set(rulesApplied))
  };
}

/**
 * DICTIONARY RELATED / NEARBY WORDS SUGGESTION
 * Find related words based on semantic mapping OR alphabetical distance in the dictionary list.
 */
export function getRelatedAndNearbyWords(searchWord: string, count: number = 6): DictionaryEntry[] {
  const query = searchWord.toLowerCase().trim();
  if (!query) return DICTIONARY.slice(0, count);

  // 1. Direct semantic matches from the entry itself
  const directMatch = DICTIONARY.find(e => e.word.toLowerCase() === query || e.translation.toLowerCase() === query);
  let suggestions: DictionaryEntry[] = [];

  if (directMatch) {
    // Collect entries corresponding to related keywords
    directMatch.related.forEach(rel => {
      const match = DICTIONARY.find(e => e.word.toLowerCase() === rel.toLowerCase());
      if (match) suggestions.push(match);
    });
  }

  // 2. Sound-alike, substring or same-start matches
  const secondaryMatches = DICTIONARY.filter(e => {
    if (suggestions.some(s => s.id === e.id)) return false;
    if (e.id === directMatch?.id) return false;

    const word = e.word.toLowerCase();
    const trans = e.translation.toLowerCase();

    return (
      word.startsWith(query) ||
      trans.startsWith(query) ||
      word.includes(query) ||
      trans.includes(query)
    );
  });
  suggestions = [...suggestions, ...secondaryMatches];

  // 3. Same Part of Speech matches
  if (directMatch && suggestions.length < count) {
    const samePOS = DICTIONARY.filter(e => e.pos === directMatch.pos && e.id !== directMatch.id && !suggestions.some(s => s.id === e.id));
    suggestions = [...suggestions, ...samePOS];
  }

  // 4. Alphabetical Neighbors
  if (suggestions.length < count) {
    const sorted = [...DICTIONARY].sort((a, b) => a.word.localeCompare(b.word));
    const targetIdx = sorted.findIndex(e => e.word.toLowerCase().localeCompare(query) >= 0);
    const neighbors: DictionaryEntry[] = [];
    
    let left = targetIdx - 1;
    let right = targetIdx;

    while (neighbors.length < count && (left >= 0 || right < sorted.length)) {
      if (right < sorted.length) {
        const item = sorted[right];
        if (!suggestions.some(s => s.id === item.id) && item.id !== directMatch?.id) {
          neighbors.push(item);
        }
        right++;
      }
      if (left >= 0 && neighbors.length < count) {
        const item = sorted[left];
        if (!suggestions.some(s => s.id === item.id) && item.id !== directMatch?.id) {
          neighbors.push(item);
        }
        left--;
      }
    }
    suggestions = [...suggestions, ...neighbors];
  }

  return suggestions.slice(0, count);
}

/**
 * STATIC LIST OF EDUCATIONAL LINGUISTIC RULES
 */
export const LINGUISTIC_RULES = [
  {
    name: 'Adjective Position Swap',
    description: 'In English, adjectives precede nouns. In Tetun, adjectives strictly follow the nouns they modify.',
    exampleEn: 'A beautiful flower',
    exampleTet: 'Ai-funan furak',
    explanation: '“Ai-funan” is flower, “furak” is beautiful. Notice that the describing word comes afterward.'
  },
  {
    name: 'Tense Expressions (No Verb Conjugations)',
    description: 'Tetun verbs never conjugate for tense. Instead, separate marker words are inserted to represent past, present continuous, and future.',
    exampleEn: 'I will buy a book. I am reading. I ate bread.',
    exampleTet: 'Ha’u sei sosa livru. Ha’u lee hela. Ha’u han paun ona.',
    explanation: '“Sei” marks future, “hela” marks active continuous, and “ona” or “tiha” marks completed/past action. The verbs (sosa, lee, han) remain unchanged!'
  },
  {
    name: 'Pluralization with "Sira"',
    description: 'Nouns do not have plural inflections. Plurality is indicated by adding the word “sira” (which also means "they") after the noun-adjective grouping.',
    exampleEn: 'The big dogs',
    exampleTet: 'Asu boot sira',
    explanation: '“Asu” (dog) + “boot” (big) + “sira” (plural). The plural marker is placed at the absolute end of the noun phrase.'
  },
  {
    name: 'Omission of Linking Verbs (Copula)',
    description: 'English linking verbs (am, is, are, was, were) are omitted in Tetun when linking a subject to an adjective or noun.',
    exampleEn: 'I am tired. She is beautiful. This is water.',
    exampleTet: 'Ha’u kole. Nia furak. Ida-ne’e bee.',
    explanation: 'No equivalent for "am" or "is" is needed here. The subject and descriptive word are placed directly together.'
  },
  {
    name: 'Possessives with "-nia"',
    description: 'Possession is structured as "[Pronoun] + nia + [Possessed Noun]", creating a possessive compound.',
    exampleEn: 'My house. Your motorcycle.',
    exampleTet: 'Ha’u-nia uma. Ita-nia motor.',
    explanation: '“Ha’u-nia” means "my", “ita-nia” is "your (polite)", “sira-nia” is "their". It literally translates as "I-its house" or "You-its motor".'
  },
  {
    name: 'Yes/No Questions with "Ka"',
    description: 'Yes/no questions are formed by stating a declarative sentence and simply appending the particle “ka” or “ka lae” (or not) at the end.',
    exampleEn: 'Do you speak English?',
    exampleTet: 'Ita ko’alia inglés ka?',
    explanation: '“Ita ko’alia inglés” (You speak English) + “ka” (question particle). This translates a standard statement into an inquiry.'
  }
];
