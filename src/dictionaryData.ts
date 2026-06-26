/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { DictionaryEntry } from './types';

export const DICTIONARY_DATA: DictionaryEntry[] = [
  {
    "id": "pr-1",
    "word": "i",
    "translation": "ha'u",
    "pos": "pronoun",
    "definition": "First person singular pronoun.",
    "exampleEn": "I speak English.",
    "exampleTet": "Ha'u ko'alia inglés.",
    "related": [
      "me",
      "my",
      "we"
    ]
  },
  {
    "id": "pr-2",
    "word": "me",
    "translation": "ha'u",
    "pos": "pronoun",
    "definition": "Objective form of first person singular.",
    "exampleEn": "Help me.",
    "exampleTet": "Ajuda ha'u.",
    "related": [
      "i",
      "my"
    ]
  },
  {
    "id": "pr-3",
    "word": "you",
    "translation": "ita",
    "pos": "pronoun",
    "definition": "Second person singular pronoun (polite/respectful; use \"ó\" for informal).",
    "exampleEn": "Do you want water?",
    "exampleTet": "Ita hakarak bee ka?",
    "related": [
      "your",
      "you plural"
    ]
  },
  {
    "id": "pr-4",
    "word": "you informal",
    "translation": "ó",
    "pos": "pronoun",
    "definition": "Second person singular pronoun (informal, for close friends or younger people).",
    "exampleEn": "You are my friend.",
    "exampleTet": "Ó ha'u-nia belun.",
    "related": [
      "you",
      "friend"
    ]
  },
  {
    "id": "pr-5",
    "word": "he",
    "translation": "nia",
    "pos": "pronoun",
    "definition": "Third person singular masculine pronoun.",
    "exampleEn": "He runs fast.",
    "exampleTet": "Nia halai lalais.",
    "related": [
      "him",
      "his",
      "she",
      "it"
    ]
  },
  {
    "id": "pr-6",
    "word": "she",
    "translation": "nia",
    "pos": "pronoun",
    "definition": "Third person singular feminine pronoun.",
    "exampleEn": "She is beautiful.",
    "exampleTet": "Nia furak.",
    "related": [
      "her",
      "hers",
      "he"
    ]
  },
  {
    "id": "pr-7",
    "word": "it",
    "translation": "nia",
    "pos": "pronoun",
    "definition": "Third person singular neuter pronoun.",
    "exampleEn": "It is big.",
    "exampleTet": "Nia boot.",
    "related": [
      "its",
      "he",
      "she"
    ]
  },
  {
    "id": "pr-8",
    "word": "we",
    "translation": "ita",
    "pos": "pronoun",
    "definition": "First person plural pronoun including the listener (inclusive). Use \"ami\" for exclusive (not including listener).",
    "exampleEn": "We are eating rice.",
    "exampleTet": "Ita han etu.",
    "related": [
      "i",
      "our",
      "us"
    ]
  },
  {
    "id": "pr-9",
    "word": "we exclusive",
    "translation": "ami",
    "pos": "pronoun",
    "definition": "First person plural pronoun excluding the listener (exclusive).",
    "exampleEn": "We (excluding you) are going to school.",
    "exampleTet": "Ami ba eskola.",
    "related": [
      "we",
      "us"
    ]
  },
  {
    "id": "pr-10",
    "word": "they",
    "translation": "sira",
    "pos": "pronoun",
    "definition": "Third person plural pronoun.",
    "exampleEn": "They are sleeping.",
    "exampleTet": "Sira toba hela.",
    "related": [
      "them",
      "their"
    ]
  },
  {
    "id": "n-fam-1",
    "word": "friend",
    "translation": "belun",
    "pos": "noun",
    "definition": "A person whom one knows and has a bond of mutual affection.",
    "exampleEn": "My friend works here.",
    "exampleTet": "Ha'u-nia belun serbisu iha ne'e.",
    "related": [
      "family",
      "brother",
      "sister"
    ]
  },
  {
    "id": "n-fam-2",
    "word": "family",
    "translation": "família",
    "pos": "noun",
    "definition": "A group of one or more parents and their children living together.",
    "exampleEn": "I love my family.",
    "exampleTet": "Ha'u hadomi ha'u-nia família.",
    "related": [
      "mother",
      "father",
      "friend"
    ]
  },
  {
    "id": "n-fam-3",
    "word": "mother",
    "translation": "inan",
    "pos": "noun",
    "definition": "A female parent.",
    "exampleEn": "My mother is good.",
    "exampleTet": "Ha'u-nia inan di'ak.",
    "related": [
      "father",
      "family",
      "child"
    ]
  },
  {
    "id": "n-fam-4",
    "word": "father",
    "translation": "aman",
    "pos": "noun",
    "definition": "A male parent.",
    "exampleEn": "His father is a doctor.",
    "exampleTet": "Nia aman doutór.",
    "related": [
      "mother",
      "family",
      "child"
    ]
  },
  {
    "id": "n-fam-5",
    "word": "child",
    "translation": "oan",
    "pos": "noun",
    "definition": "A young human being below the age of puberty or a son/daughter.",
    "exampleEn": "The child is sleeping.",
    "exampleTet": "Oan ne'e toba hela.",
    "related": [
      "children",
      "mother",
      "father"
    ]
  },
  {
    "id": "n-fam-6",
    "word": "children",
    "translation": "oan sira",
    "pos": "noun",
    "definition": "Plural form of child.",
    "exampleEn": "The children play outside.",
    "exampleTet": "Oan sira halimar iha liur.",
    "related": [
      "child",
      "family"
    ]
  },
  {
    "id": "n-fam-7",
    "word": "brother",
    "translation": "maun",
    "pos": "noun",
    "definition": "An older male sibling (Note: \"alin\" refers to a younger sibling of either gender).",
    "exampleEn": "My older brother is tall.",
    "exampleTet": "Ha'u-nia maun aas.",
    "related": [
      "sister",
      "brother younger",
      "family"
    ]
  },
  {
    "id": "n-fam-8",
    "word": "sister",
    "translation": "biin",
    "pos": "noun",
    "definition": "An older female sibling.",
    "exampleEn": "Her older sister lives in Dili.",
    "exampleTet": "Nia biin hela iha Dili.",
    "related": [
      "brother",
      "sister younger",
      "family"
    ]
  },
  {
    "id": "n-fam-9",
    "word": "husband",
    "translation": "la'en",
    "pos": "noun",
    "definition": "A married male partner.",
    "exampleEn": "Her husband works at the hospital.",
    "exampleTet": "Nia la'en serbisu iha ospitál.",
    "related": [
      "wife",
      "family"
    ]
  },
  {
    "id": "n-fam-10",
    "word": "wife",
    "translation": "feen",
    "pos": "noun",
    "definition": "A married female partner.",
    "exampleEn": "My wife is beautiful.",
    "exampleTet": "Ha'u-nia feen furak.",
    "related": [
      "husband",
      "family"
    ]
  },
  {
    "id": "n-food-1",
    "word": "water",
    "translation": "bee",
    "pos": "noun",
    "definition": "A colorless, transparent, odorless liquid that forms the seas, lakes, and rain.",
    "exampleEn": "I want cold water.",
    "exampleTet": "Ha'u hakarak bee malirin.",
    "related": [
      "drink",
      "food",
      "milk",
      "coffee"
    ]
  },
  {
    "id": "n-food-2",
    "word": "food",
    "translation": "ai-han",
    "pos": "noun",
    "definition": "Any nutritious substance that people or animals eat.",
    "exampleEn": "The food is delicious.",
    "exampleTet": "Ai-han ne'e te'in-di'ak.",
    "related": [
      "eat",
      "rice",
      "bread",
      "meat"
    ]
  },
  {
    "id": "n-food-3",
    "word": "bread",
    "translation": "paun",
    "pos": "noun",
    "definition": "Food made of flour, water, and yeast mixed together and baked.",
    "exampleEn": "We buy bread in the morning.",
    "exampleTet": "Ita sosa paun iha dadeer.",
    "related": [
      "food",
      "eat",
      "rice"
    ]
  },
  {
    "id": "n-food-4",
    "word": "meat",
    "translation": "na'an",
    "pos": "noun",
    "definition": "The flesh of an animal used as food.",
    "exampleEn": "I eat chicken meat.",
    "exampleTet": "Ha'u han manu na'an.",
    "related": [
      "food",
      "chicken",
      "fish"
    ]
  },
  {
    "id": "n-food-5",
    "word": "rice",
    "translation": "etu",
    "pos": "noun",
    "definition": "Cooked rice (Note: \"foos\" is uncooked rice, \"hare\" is rice stalks in the field).",
    "exampleEn": "They eat rice every day.",
    "exampleTet": "Sira han etu loroloron.",
    "related": [
      "food",
      "eat",
      "bread"
    ]
  },
  {
    "id": "n-food-6",
    "word": "coffee",
    "translation": "kafé",
    "pos": "noun",
    "definition": "A hot drink made from the roasted and ground seeds of a tropical shrub.",
    "exampleEn": "Timor coffee is very delicious.",
    "exampleTet": "Kafé Timor te'in-di'ak tebes.",
    "related": [
      "drink",
      "tea",
      "water",
      "milk"
    ]
  },
  {
    "id": "n-food-7",
    "word": "tea",
    "translation": "xá",
    "pos": "noun",
    "definition": "A hot drink made by infusing dried crushed leaves in boiling water.",
    "exampleEn": "Do you want tea or coffee?",
    "exampleTet": "Ita hakarak xá ka kafé?",
    "related": [
      "drink",
      "coffee",
      "water"
    ]
  },
  {
    "id": "n-food-8",
    "word": "milk",
    "translation": "susubeen",
    "pos": "noun",
    "definition": "An opaque white fluid rich in fat and protein, secreted by female mammals.",
    "exampleEn": "The child drinks milk.",
    "exampleTet": "Oan ne'e hemu susubeen.",
    "related": [
      "drink",
      "water",
      "coffee"
    ]
  },
  {
    "id": "n-obj-1",
    "word": "house",
    "translation": "uma",
    "pos": "noun",
    "definition": "A building for human habitation.",
    "exampleEn": "My house is small.",
    "exampleTet": "Ha'u-nia uma ki'ik.",
    "related": [
      "school",
      "room",
      "city",
      "village"
    ]
  },
  {
    "id": "n-obj-2",
    "word": "school",
    "translation": "eskola",
    "pos": "noun",
    "definition": "An institution for educating children.",
    "exampleEn": "They go to school.",
    "exampleTet": "Sira ba eskola.",
    "related": [
      "teacher",
      "student",
      "book",
      "house"
    ]
  },
  {
    "id": "n-obj-3",
    "word": "book",
    "translation": "livru",
    "pos": "noun",
    "definition": "A written or printed work consisting of pages glued or sewn together.",
    "exampleEn": "I read a new book.",
    "exampleTet": "Ha'u lee livru foun.",
    "related": [
      "pen",
      "paper",
      "school",
      "read"
    ]
  },
  {
    "id": "n-obj-4",
    "word": "pen",
    "translation": "kaneta",
    "pos": "noun",
    "definition": "An instrument for writing or drawing with ink.",
    "exampleEn": "I write with a pen.",
    "exampleTet": "Ha'u hakerek ho kaneta.",
    "related": [
      "book",
      "paper",
      "write"
    ]
  },
  {
    "id": "n-obj-5",
    "word": "paper",
    "translation": "surat-tahan",
    "pos": "noun",
    "definition": "Material manufactured in thin sheets from the pulp of wood or other fibrous substances.",
    "exampleEn": "Give me a piece of paper.",
    "exampleTet": "Foo ha'u surat-tahan ida.",
    "related": [
      "book",
      "pen",
      "write"
    ]
  },
  {
    "id": "n-obj-6",
    "word": "road",
    "translation": "dalan",
    "pos": "noun",
    "definition": "A wide way leading from one place to another, especially one with a specially prepared surface.",
    "exampleEn": "This road is long.",
    "exampleTet": "Dalan ne'e naruk.",
    "related": [
      "street",
      "car",
      "motorcycle",
      "city"
    ]
  },
  {
    "id": "n-obj-7",
    "word": "street",
    "translation": "dalan",
    "pos": "noun",
    "definition": "A public road in a city, town, or village, typically with houses on either side.",
    "exampleEn": "Walk on the side of the street.",
    "exampleTet": "La'o iha dalan sorin.",
    "related": [
      "road",
      "car",
      "city"
    ]
  },
  {
    "id": "n-obj-8",
    "word": "car",
    "translation": "karreta",
    "pos": "noun",
    "definition": "A road vehicle, typically with four wheels, powered by an internal combustion engine.",
    "exampleEn": "He has an expensive car.",
    "exampleTet": "Nia iha karreta karun.",
    "related": [
      "motorcycle",
      "bicycle",
      "road",
      "go"
    ]
  },
  {
    "id": "n-obj-9",
    "word": "motorcycle",
    "translation": "motor",
    "pos": "noun",
    "definition": "A two-wheeled vehicle that is powered by a motor.",
    "exampleEn": "I ride a motorcycle to work.",
    "exampleTet": "Ha'u lori motor ba serbisu.",
    "related": [
      "car",
      "bicycle",
      "road"
    ]
  },
  {
    "id": "n-obj-10",
    "word": "bicycle",
    "translation": "bisikleta",
    "pos": "noun",
    "definition": "A vehicle consisting of two wheels held in a frame one behind the other, propelled by pedals.",
    "exampleEn": "My child wants a bicycle.",
    "exampleTet": "Ha'u-nia oan hakarak bisikleta.",
    "related": [
      "car",
      "motorcycle",
      "road"
    ]
  },
  {
    "id": "n-obj-11",
    "word": "hospital",
    "translation": "ospitál",
    "pos": "noun",
    "definition": "An institution providing medical and surgical treatment and nursing care.",
    "exampleEn": "Where is the hospital?",
    "exampleTet": "Ospitál iha ne'ebé?",
    "related": [
      "doctor",
      "school",
      "city"
    ]
  },
  {
    "id": "n-obj-12",
    "word": "money",
    "translation": "osan",
    "pos": "noun",
    "definition": "A current medium of exchange in the form of coins and banknotes.",
    "exampleEn": "I don't have money.",
    "exampleTet": "Ha'u la iha osan.",
    "related": [
      "buy",
      "sell",
      "expensive",
      "cheap"
    ]
  },
  {
    "id": "n-obj-13",
    "word": "city",
    "translation": "sidade",
    "pos": "noun",
    "definition": "A large town, specifically Dili or regional centers.",
    "exampleEn": "Dili is a busy city.",
    "exampleTet": "Dili sidade okupadu.",
    "related": [
      "village",
      "country",
      "road"
    ]
  },
  {
    "id": "n-obj-14",
    "word": "village",
    "translation": "suku",
    "pos": "noun",
    "definition": "A group of houses in a rural area, larger than a hamlet and smaller than a town.",
    "exampleEn": "My family lives in a beautiful village.",
    "exampleTet": "Ha'u-nia família hela iha suku furak.",
    "related": [
      "city",
      "country",
      "house"
    ]
  },
  {
    "id": "n-obj-15",
    "word": "country",
    "translation": "rai",
    "pos": "noun",
    "definition": "A nation with its own government, occupying a particular territory (also means land or soil).",
    "exampleEn": "Timor-Leste is a new country.",
    "exampleTet": "Timor-Leste rai foun ida.",
    "related": [
      "city",
      "village",
      "land"
    ]
  },
  {
    "id": "n-obj-16",
    "word": "language",
    "translation": "lian",
    "pos": "noun",
    "definition": "The method of human communication, spoken or written.",
    "exampleEn": "I am learning the Tetun language.",
    "exampleTet": "Ha'u aprende hela lian Tetun.",
    "related": [
      "speak",
      "word",
      "teacher"
    ]
  },
  {
    "id": "n-obj-17",
    "word": "word",
    "translation": "liafuan",
    "pos": "noun",
    "definition": "A single distinct meaningful element of speech or writing.",
    "exampleEn": "What is this word?",
    "exampleTet": "Liafuan ne'e saida?",
    "related": [
      "language",
      "book",
      "say"
    ]
  },
  {
    "id": "n-obj-18",
    "word": "toilet",
    "translation": "sentina",
    "pos": "noun",
    "definition": "A bowl-shaped device and room for urination and defecation.",
    "exampleEn": "Where is the toilet?",
    "exampleTet": "Sentina iha ne'ebé?",
    "related": [
      "hospital",
      "house"
    ]
  },
  {
    "id": "n-obj-19",
    "word": "market",
    "translation": "merkadu",
    "pos": "noun",
    "definition": "A regular gathering of people for the purchase and sale of provisions, livestock, and other goods.",
    "exampleEn": "I go to the market to buy fish.",
    "exampleTet": "Ha'u ba merkadu sosa ikan.",
    "related": [
      "buy",
      "sell",
      "money",
      "food"
    ]
  },
  {
    "id": "n-env-1",
    "word": "sun",
    "translation": "loro-matan",
    "pos": "noun",
    "definition": "The star around which the earth orbits, providing heat and light.",
    "exampleEn": "The sun is very hot today.",
    "exampleTet": "Loro-matan manas tebes ohin.",
    "related": [
      "day",
      "moon",
      "star",
      "hot"
    ]
  },
  {
    "id": "n-env-2",
    "word": "moon",
    "translation": "fulan",
    "pos": "noun",
    "definition": "The natural satellite of the earth, visible by reflected light (also means month).",
    "exampleEn": "The moon is beautiful tonight.",
    "exampleTet": "Fulan furak kalan ne'e.",
    "related": [
      "sun",
      "star",
      "night",
      "month"
    ]
  },
  {
    "id": "n-env-3",
    "word": "star",
    "translation": "fitun",
    "pos": "noun",
    "definition": "A fixed luminous point in the night sky.",
    "exampleEn": "We can see many stars tonight.",
    "exampleTet": "Ita bele haree fitun barak kalan ne'e.",
    "related": [
      "moon",
      "sun",
      "night"
    ]
  },
  {
    "id": "n-env-4",
    "word": "rain",
    "translation": "udan",
    "pos": "noun",
    "definition": "Moisture condensed from the atmosphere that falls visible in separate drops.",
    "exampleEn": "Heavy rain is falling.",
    "exampleTet": "Udan boot tun hela.",
    "related": [
      "wind",
      "water",
      "cold"
    ]
  },
  {
    "id": "n-env-5",
    "word": "wind",
    "translation": "anin",
    "pos": "noun",
    "definition": "The perceptible natural movement of the air.",
    "exampleEn": "The wind is cold today.",
    "exampleTet": "Anin malirin ohin.",
    "related": [
      "rain",
      "sun"
    ]
  },
  {
    "id": "n-env-6",
    "word": "sea",
    "translation": "tasi",
    "pos": "noun",
    "definition": "The expanse of salt water that covers most of the earth's surface.",
    "exampleEn": "Let's go swim in the sea.",
    "exampleTet": "Mai ita hariis-tasi.",
    "related": [
      "fish",
      "water",
      "land"
    ]
  },
  {
    "id": "n-env-7",
    "word": "land",
    "translation": "rai",
    "pos": "noun",
    "definition": "The part of the earth's surface that is not covered by water (also means country, soil, earth).",
    "exampleEn": "This land is good for trees.",
    "exampleTet": "Rai ne'e di'ak ba ai-hun.",
    "related": [
      "sea",
      "stone",
      "country"
    ]
  },
  {
    "id": "n-env-8",
    "word": "tree",
    "translation": "ai-hun",
    "pos": "noun",
    "definition": "A woody perennial plant, typically having a single stem or trunk.",
    "exampleEn": "The mango tree has sweet fruits.",
    "exampleTet": "Ai-hun haas iha ai-fuan midar.",
    "related": [
      "flower",
      "land",
      "rain"
    ]
  },
  {
    "id": "n-env-9",
    "word": "flower",
    "translation": "ai-funan",
    "pos": "noun",
    "definition": "The seed-bearing part of a plant, consisting of reproductive organs that are typically surrounded by a brightly colored corolla.",
    "exampleEn": "This flower has a beautiful color.",
    "exampleTet": "Ai-funan ne'e iha kor furak.",
    "related": [
      "tree",
      "beautiful"
    ]
  },
  {
    "id": "n-ani-1",
    "word": "dog",
    "translation": "asu",
    "pos": "noun",
    "definition": "A domesticated carnivorous mammal that typically has a long snout, an acute sense of smell, and a barking voice.",
    "exampleEn": "The dog is barking.",
    "exampleTet": "Asu ho'u hela.",
    "related": [
      "cat",
      "chicken",
      "animal"
    ]
  },
  {
    "id": "n-ani-2",
    "word": "cat",
    "translation": "busa",
    "pos": "noun",
    "definition": "A small domesticated carnivorous mammal with soft fur, a short snout, and retractile claws.",
    "exampleEn": "My cat is sleeping on the chair.",
    "exampleTet": "Ha'u-nia busa toba hela iha kadera leten.",
    "related": [
      "dog",
      "chicken"
    ]
  },
  {
    "id": "n-ani-3",
    "word": "fish",
    "translation": "ikan",
    "pos": "noun",
    "definition": "A limbless cold-blooded vertebrate animal with gills and fins and living wholly in water.",
    "exampleEn": "I like to eat grilled fish.",
    "exampleTet": "Ha'u gosta han ikan tunu.",
    "related": [
      "sea",
      "water",
      "meat"
    ]
  },
  {
    "id": "n-ani-4",
    "word": "chicken",
    "translation": "manu",
    "pos": "noun",
    "definition": "A domestic fowl kept for its eggs or meat.",
    "exampleEn": "We have ten chickens in our village.",
    "exampleTet": "Ami iha manu sanulu iha ami-nia suku.",
    "related": [
      "dog",
      "cat",
      "meat"
    ]
  },
  {
    "id": "v-1",
    "word": "go",
    "translation": "ba",
    "pos": "verb",
    "definition": "Move from one place to another.",
    "exampleEn": "We will go tomorrow.",
    "exampleTet": "Ita sei ba aban.",
    "related": [
      "come",
      "run",
      "walk"
    ]
  },
  {
    "id": "v-2",
    "word": "come",
    "translation": "mai",
    "pos": "verb",
    "definition": "Move or travel toward or into a place thought of as near.",
    "exampleEn": "Come here, please.",
    "exampleTet": "Mai iha ne'e, favor.",
    "related": [
      "go",
      "wait"
    ]
  },
  {
    "id": "v-3",
    "word": "eat",
    "translation": "han",
    "pos": "verb",
    "definition": "Put food into the mouth and chew and swallow it.",
    "exampleEn": "I want to eat bread.",
    "exampleTet": "Ha'u hakarak han paun.",
    "related": [
      "drink",
      "food",
      "rice",
      "bread"
    ]
  },
  {
    "id": "v-4",
    "word": "drink",
    "translation": "hemu",
    "pos": "verb",
    "definition": "Take liquid into the mouth and swallow it.",
    "exampleEn": "The children drink milk.",
    "exampleTet": "Oan sira hemu susubeen.",
    "related": [
      "eat",
      "water",
      "coffee",
      "tea"
    ]
  },
  {
    "id": "v-5",
    "word": "speak",
    "translation": "ko'alia",
    "pos": "verb",
    "definition": "Say something in order to convey information, an opinion, or a feeling.",
    "exampleEn": "I speak Tetun.",
    "exampleTet": "Ha'u ko'alia tetun.",
    "related": [
      "say",
      "word",
      "understand"
    ]
  },
  {
    "id": "v-6",
    "word": "understand",
    "translation": "komprende",
    "pos": "verb",
    "definition": "Perceive the intended meaning of words or speakers.",
    "exampleEn": "I don't understand this language.",
    "exampleTet": "Ha'u la komprende lian ne'e.",
    "related": [
      "speak",
      "know",
      "learn"
    ]
  },
  {
    "id": "v-7",
    "word": "read",
    "translation": "lee",
    "pos": "verb",
    "definition": "Look at and comprehend the meaning of written or printed matter.",
    "exampleEn": "She likes to read books.",
    "exampleTet": "Nia gosta lee livru sira.",
    "related": [
      "write",
      "book",
      "learn"
    ]
  },
  {
    "id": "v-8",
    "word": "write",
    "translation": "hakerek",
    "pos": "verb",
    "definition": "Mark letters, words, or other symbols on a surface, typically paper, with a pen, pencil, or similar.",
    "exampleEn": "Can you write your name?",
    "exampleTet": "Ita bele hakerek ita-nia naran ka?",
    "related": [
      "read",
      "pen",
      "paper"
    ]
  },
  {
    "id": "v-9",
    "word": "run",
    "translation": "halai",
    "pos": "verb",
    "definition": "Move at a speed faster than a walk, never having both feet on the ground at the same time.",
    "exampleEn": "The dogs run fast.",
    "exampleTet": "Asu sira halai lalais.",
    "related": [
      "walk",
      "go",
      "fast"
    ]
  },
  {
    "id": "v-10",
    "word": "walk",
    "translation": "la'o",
    "pos": "verb",
    "definition": "Move at a regular pace by lifting and setting down each foot in turn.",
    "exampleEn": "We walk to the market.",
    "exampleTet": "Ita la'o ba merkadu.",
    "related": [
      "run",
      "go",
      "slow"
    ]
  },
  {
    "id": "v-11",
    "word": "buy",
    "translation": "sosa",
    "pos": "verb",
    "definition": "Obtain in exchange for payment.",
    "exampleEn": "I will buy a new motorcycle.",
    "exampleTet": "Ha'u sei sosa motor foun.",
    "related": [
      "sell",
      "money",
      "market",
      "cheap"
    ]
  },
  {
    "id": "v-12",
    "word": "sell",
    "translation": "fa'an",
    "pos": "verb",
    "definition": "Give or hand over something in exchange for money.",
    "exampleEn": "They sell fruit at the market.",
    "exampleTet": "Sira fa'an ai-fuan iha merkadu.",
    "related": [
      "buy",
      "money",
      "market",
      "expensive"
    ]
  },
  {
    "id": "v-13",
    "word": "help",
    "translation": "ajuda",
    "pos": "verb",
    "definition": "Make it easier for someone to do something by offering one's services or resources (also \"tulun\").",
    "exampleEn": "Please help my mother.",
    "exampleTet": "Favor ajuda ha'u-nia inan.",
    "related": [
      "friend",
      "work"
    ]
  },
  {
    "id": "v-14",
    "word": "work",
    "translation": "serbisu",
    "pos": "verb",
    "definition": "Be engaged in physical or mental activity in order to achieve a purpose or result (also \"servisu\").",
    "exampleEn": "He works at the school.",
    "exampleTet": "Nia serbisu iha eskola.",
    "related": [
      "help",
      "teacher",
      "doctor"
    ]
  },
  {
    "id": "v-15",
    "word": "sleep",
    "translation": "toba",
    "pos": "verb",
    "definition": "Be in a state of natural rest.",
    "exampleEn": "I want to sleep now.",
    "exampleTet": "Ha'u hakarak toba agora.",
    "related": [
      "sit",
      "stand",
      "tired",
      "night"
    ]
  },
  {
    "id": "v-16",
    "word": "see",
    "translation": "haree",
    "pos": "verb",
    "definition": "Perceive with the eyes.",
    "exampleEn": "I saw a beautiful bird.",
    "exampleTet": "Ha'u haree manu furak ona.",
    "related": [
      "look",
      "hear",
      "star",
      "sun"
    ]
  },
  {
    "id": "v-17",
    "word": "look",
    "translation": "haree",
    "pos": "verb",
    "definition": "Direct one's gaze toward someone or something.",
    "exampleEn": "Look at the moon.",
    "exampleTet": "Haree ba fulan.",
    "related": [
      "see",
      "hear"
    ]
  },
  {
    "id": "v-18",
    "word": "hear",
    "translation": "rona",
    "pos": "verb",
    "definition": "Perceive with the ear the sound made by someone or something.",
    "exampleEn": "I hear the wind.",
    "exampleTet": "Ha'u rona anin.",
    "related": [
      "listen",
      "see",
      "speak"
    ]
  },
  {
    "id": "v-19",
    "word": "listen",
    "translation": "rona",
    "pos": "verb",
    "definition": "Give one's attention to a sound.",
    "exampleEn": "Listen to the teacher.",
    "exampleTet": "Rona ba mestre.",
    "related": [
      "hear",
      "teacher",
      "speak"
    ]
  },
  {
    "id": "v-20",
    "word": "want",
    "translation": "hakarak",
    "pos": "verb",
    "definition": "Have a desire to possess or do something.",
    "exampleEn": "I want coffee.",
    "exampleTet": "Ha'u hakarak kafé.",
    "related": [
      "like",
      "love",
      "eat",
      "drink"
    ]
  },
  {
    "id": "v-21",
    "word": "like",
    "translation": "gosta",
    "pos": "verb",
    "definition": "Find agreeable, enjoyable, or satisfactory.",
    "exampleEn": "I like Timor coffee.",
    "exampleTet": "Ha'u gosta kafé Timor.",
    "related": [
      "want",
      "love",
      "good"
    ]
  },
  {
    "id": "v-22",
    "word": "love",
    "translation": "hadomi",
    "pos": "verb",
    "definition": "Feel deep affection for someone or something (also \"domin\").",
    "exampleEn": "I love you.",
    "exampleTet": "Ha'u hadomi ó.",
    "related": [
      "like",
      "want",
      "family"
    ]
  },
  {
    "id": "v-23",
    "word": "know",
    "translation": "hatene",
    "pos": "verb",
    "definition": "Be aware of through observation, inquiry, or information.",
    "exampleEn": "I know his father.",
    "exampleTet": "Ha'u hatene nia aman.",
    "related": [
      "understand",
      "speak",
      "learn"
    ]
  },
  {
    "id": "v-24",
    "word": "learn",
    "translation": "aprende",
    "pos": "verb",
    "definition": "Gain or acquire knowledge of or skill in something by study or experience.",
    "exampleEn": "We learn Tetun.",
    "exampleTet": "Ita aprende Tetun.",
    "related": [
      "teach",
      "school",
      "student",
      "understand"
    ]
  },
  {
    "id": "v-25",
    "word": "teach",
    "translation": "hanorin",
    "pos": "verb",
    "definition": "Impart knowledge to or instruct someone.",
    "exampleEn": "The teacher teaches English.",
    "exampleTet": "Mestre hanorin lian inglés.",
    "related": [
      "learn",
      "school",
      "teacher"
    ]
  },
  {
    "id": "v-26",
    "word": "say",
    "translation": "dehan",
    "pos": "verb",
    "definition": "Utter words so as to convey information (also \"hateten\").",
    "exampleEn": "What did you say?",
    "exampleTet": "Ita dehan saida?",
    "related": [
      "speak",
      "word"
    ]
  },
  {
    "id": "v-27",
    "word": "do",
    "translation": "halo",
    "pos": "verb",
    "definition": "Perform, execute, or carry out an action (also \"make\").",
    "exampleEn": "What are you doing?",
    "exampleTet": "Ita halo hela saida?",
    "related": [
      "make",
      "work"
    ]
  },
  {
    "id": "v-28",
    "word": "make",
    "translation": "halo",
    "pos": "verb",
    "definition": "Create or construct something.",
    "exampleEn": "We make bread.",
    "exampleTet": "Ita halo paun.",
    "related": [
      "do",
      "work"
    ]
  },
  {
    "id": "v-29",
    "word": "have",
    "translation": "iha",
    "pos": "verb",
    "definition": "Possess, own, or hold.",
    "exampleEn": "I have water.",
    "exampleTet": "Ha'u iha bee.",
    "related": [
      "want",
      "money"
    ]
  },
  {
    "id": "v-30",
    "word": "has",
    "translation": "iha",
    "pos": "verb",
    "definition": "Third person singular form of have.",
    "exampleEn": "She has money.",
    "exampleTet": "Nia iha osan.",
    "related": [
      "have",
      "money"
    ]
  },
  {
    "id": "adj-1",
    "word": "good",
    "translation": "di'ak",
    "pos": "adjective",
    "definition": "To be desired or approved of; of high quality.",
    "exampleEn": "The food is good.",
    "exampleTet": "Ai-han di'ak.",
    "related": [
      "bad",
      "happy",
      "beautiful"
    ]
  },
  {
    "id": "adj-2",
    "word": "bad",
    "translation": "aat",
    "pos": "adjective",
    "definition": "Of poor quality or a low standard; harmful.",
    "exampleEn": "This road is bad.",
    "exampleTet": "Dalan ne'e aat.",
    "related": [
      "good",
      "ugly",
      "dirty"
    ]
  },
  {
    "id": "adj-3",
    "word": "big",
    "translation": "boot",
    "pos": "adjective",
    "definition": "Of considerable size, extent, or intensity.",
    "exampleEn": "We have a big house.",
    "exampleTet": "Ita iha uma boot.",
    "related": [
      "small",
      "tall"
    ]
  },
  {
    "id": "adj-4",
    "word": "small",
    "translation": "ki'ik",
    "pos": "adjective",
    "definition": "Of a size that is less than normal or average.",
    "exampleEn": "My dog is small.",
    "exampleTet": "Ha'u-nia asu ki'ik.",
    "related": [
      "big",
      "short"
    ]
  },
  {
    "id": "adj-5",
    "word": "beautiful",
    "translation": "furak",
    "pos": "adjective",
    "definition": "Pleasing the senses or mind aesthetically (also \"bonita\" for females/objects).",
    "exampleEn": "This flower is beautiful.",
    "exampleTet": "Ai-funan ne'e furak.",
    "related": [
      "good",
      "ugly",
      "flower"
    ]
  },
  {
    "id": "adj-6",
    "word": "hot",
    "translation": "manas",
    "pos": "adjective",
    "definition": "Having a high temperature.",
    "exampleEn": "The tea is hot.",
    "exampleTet": "Xá manas hela.",
    "related": [
      "cold",
      "sun"
    ]
  },
  {
    "id": "adj-7",
    "word": "cold",
    "translation": "malirin",
    "pos": "adjective",
    "definition": "Of or at a low temperature.",
    "exampleEn": "Cold wind is blowing.",
    "exampleTet": "Anin malirin huu hela.",
    "related": [
      "hot",
      "water",
      "rain"
    ]
  },
  {
    "id": "adj-8",
    "word": "new",
    "translation": "foun",
    "pos": "adjective",
    "definition": "Not existing before; made, introduced, or discovered recently.",
    "exampleEn": "I bought a new book.",
    "exampleTet": "Ha'u sosa livru foun.",
    "related": [
      "old",
      "car",
      "book"
    ]
  },
  {
    "id": "adj-9",
    "word": "old",
    "translation": "tuan",
    "pos": "adjective",
    "definition": "Having lived for a long time; no longer new (Note: use \"katuas\" for old man, \"ferik\" for old woman).",
    "exampleEn": "His motorcycle is old.",
    "exampleTet": "Nia motor tuan.",
    "related": [
      "new",
      "old person"
    ]
  },
  {
    "id": "adj-10",
    "word": "expensive",
    "translation": "karun",
    "pos": "adjective",
    "definition": "Costing a lot of money.",
    "exampleEn": "The bicycle is expensive.",
    "exampleTet": "Bisikleta ne'e karun.",
    "related": [
      "cheap",
      "money",
      "buy"
    ]
  },
  {
    "id": "adj-11",
    "word": "cheap",
    "translation": "baratu",
    "pos": "adjective",
    "definition": "Low in price, especially in relation to the value or quality.",
    "exampleEn": "Vegetables are cheap at the market.",
    "exampleTet": "Modo baratu iha merkadu.",
    "related": [
      "expensive",
      "money",
      "sell"
    ]
  },
  {
    "id": "adj-12",
    "word": "fast",
    "translation": "lalais",
    "pos": "adjective",
    "definition": "Moving or capable of moving at high speed.",
    "exampleEn": "The car is very fast.",
    "exampleTet": "Karreta ne'e lalais tebes.",
    "related": [
      "slow",
      "run"
    ]
  },
  {
    "id": "adj-13",
    "word": "slow",
    "translation": "neineik",
    "pos": "adjective",
    "definition": "Moving or operating, or cooperating at a low speed.",
    "exampleEn": "Please speak slowly.",
    "exampleTet": "Favor ko'alia neineik.",
    "related": [
      "fast",
      "walk"
    ]
  },
  {
    "id": "adj-14",
    "word": "easy",
    "translation": "fasil",
    "pos": "adjective",
    "definition": "Achieved without great effort; presenting few difficulties.",
    "exampleEn": "Learning English is easy.",
    "exampleTet": "Aprende inglés fasil.",
    "related": [
      "difficult",
      "good"
    ]
  },
  {
    "id": "adj-15",
    "word": "difficult",
    "translation": "susar",
    "pos": "adjective",
    "definition": "Needing much effort or skill to accomplish, deal with, or understand (also \"todan\" - heavy/difficult).",
    "exampleEn": "This work is difficult.",
    "exampleTet": "Serbisu ne'e susar.",
    "related": [
      "easy",
      "work"
    ]
  },
  {
    "id": "adj-16",
    "word": "clean",
    "translation": "moos",
    "pos": "adjective",
    "definition": "Free from dirt, marks, or stains.",
    "exampleEn": "The water is clean.",
    "exampleTet": "Bee moos.",
    "related": [
      "dirty",
      "water"
    ]
  },
  {
    "id": "adj-17",
    "word": "dirty",
    "translation": "fo'er",
    "pos": "adjective",
    "definition": "Covered or marked with an unclean substance.",
    "exampleEn": "Your motorcycle is dirty.",
    "exampleTet": "Ó-nia motor fo'er.",
    "related": [
      "clean",
      "bad"
    ]
  },
  {
    "id": "adj-18",
    "word": "tired",
    "translation": "kole",
    "pos": "adjective",
    "definition": "Drained of strength and energy; fatigued (Note: \"baruk\" is lazy or tired of doing something).",
    "exampleEn": "I am tired from work.",
    "exampleTet": "Ha'u kole husi serbisu.",
    "related": [
      "sleep",
      "work"
    ]
  },
  {
    "id": "adj-19",
    "word": "happy",
    "translation": "kontente",
    "pos": "adjective",
    "definition": "Feeling or showing pleasure or contentment (also \"haksolok\").",
    "exampleEn": "My children are happy.",
    "exampleTet": "Ha'u-nia oan sira kontente.",
    "related": [
      "sad",
      "good"
    ]
  },
  {
    "id": "adj-20",
    "word": "sad",
    "translation": "triste",
    "pos": "adjective",
    "definition": "Feeling or showing sorrow; unhappy.",
    "exampleEn": "Why are you sad?",
    "exampleTet": "Tanbasá ita triste?",
    "related": [
      "happy",
      "bad"
    ]
  },
  {
    "id": "t-1",
    "word": "today",
    "translation": "ohin",
    "pos": "adverb",
    "definition": "On the present day.",
    "exampleEn": "Today is hot.",
    "exampleTet": "Ohin manas.",
    "related": [
      "tomorrow",
      "yesterday",
      "day"
    ]
  },
  {
    "id": "t-2",
    "word": "tomorrow",
    "translation": "aban",
    "pos": "adverb",
    "definition": "On the day after today.",
    "exampleEn": "I will go tomorrow.",
    "exampleTet": "Ha'u sei ba aban.",
    "related": [
      "today",
      "yesterday",
      "day"
    ]
  },
  {
    "id": "t-3",
    "word": "yesterday",
    "translation": "horisehik",
    "pos": "adverb",
    "definition": "On the day before today.",
    "exampleEn": "My mother arrived yesterday.",
    "exampleTet": "Ha'u-nia inan to'o horisehik.",
    "related": [
      "today",
      "tomorrow",
      "day"
    ]
  },
  {
    "id": "t-4",
    "word": "morning",
    "translation": "dadeer",
    "pos": "noun",
    "definition": "The period of time between sunrise and noon.",
    "exampleEn": "I eat bread in the morning.",
    "exampleTet": "Ha'u han paun iha dadeer.",
    "related": [
      "afternoon",
      "night",
      "today"
    ]
  },
  {
    "id": "t-5",
    "word": "afternoon",
    "translation": "lokraik",
    "pos": "noun",
    "definition": "The time from noon or lunchtime to evening.",
    "exampleEn": "We play in the afternoon.",
    "exampleTet": "Ita halimar iha lokraik.",
    "related": [
      "morning",
      "night",
      "today"
    ]
  },
  {
    "id": "t-6",
    "word": "night",
    "translation": "kalan",
    "pos": "noun",
    "definition": "The period from sunset to sunrise in each twenty-four hours.",
    "exampleEn": "It is dark at night.",
    "exampleTet": "Kalan nakukun.",
    "related": [
      "morning",
      "afternoon",
      "day"
    ]
  },
  {
    "id": "q-1",
    "word": "what",
    "translation": "saida",
    "pos": "pronoun",
    "definition": "Asking for information specifying something.",
    "exampleEn": "What is this?",
    "exampleTet": "Saida ne'e?",
    "related": [
      "who",
      "where",
      "why"
    ]
  },
  {
    "id": "q-2",
    "word": "who",
    "translation": "see",
    "pos": "pronoun",
    "definition": "Asking about which person.",
    "exampleEn": "Who is he?",
    "exampleTet": "Nia see?",
    "related": [
      "what",
      "where",
      "why"
    ]
  },
  {
    "id": "q-3",
    "word": "where",
    "translation": "iha ne'ebé",
    "pos": "pronoun",
    "definition": "Asking about location or place.",
    "exampleEn": "Where are you going?",
    "exampleTet": "Ita ba ne'ebé?",
    "related": [
      "what",
      "who",
      "when"
    ]
  },
  {
    "id": "q-4",
    "word": "when",
    "translation": "bainhira",
    "pos": "pronoun",
    "definition": "Asking about time.",
    "exampleEn": "When will they come?",
    "exampleTet": "Bainhira sira mai?",
    "related": [
      "what",
      "where",
      "why"
    ]
  },
  {
    "id": "q-5",
    "word": "why",
    "translation": "tanbasá",
    "pos": "pronoun",
    "definition": "Asking for reasons or explanations (also \"tansa\").",
    "exampleEn": "Why do you laugh?",
    "exampleTet": "Tanbasá ita hamnasa?",
    "related": [
      "what",
      "where",
      "how"
    ]
  },
  {
    "id": "q-6",
    "word": "how",
    "translation": "oinsá",
    "pos": "pronoun",
    "definition": "Asking about manner, condition, or quality.",
    "exampleEn": "How are you?",
    "exampleTet": "Oinsá di'ak ka?",
    "related": [
      "why",
      "what",
      "hira"
    ]
  },
  {
    "id": "q-7",
    "word": "how much",
    "translation": "hira",
    "pos": "pronoun",
    "definition": "Asking about quantity or price (also \"how many\").",
    "exampleEn": "How much is the bread?",
    "exampleTet": "Paun hira?",
    "related": [
      "how",
      "money",
      "cheap"
    ]
  },
  {
    "id": "q-8",
    "word": "how many",
    "translation": "hira",
    "pos": "pronoun",
    "definition": "Asking about countable quantity.",
    "exampleEn": "How many children do you have?",
    "exampleTet": "Ita-nia oan hira?",
    "related": [
      "how much",
      "child"
    ]
  },
  {
    "id": "c-1",
    "word": "and",
    "translation": "no",
    "pos": "conjunction",
    "definition": "Used to connect words or clauses (also \"ho\" meaning \"with\").",
    "exampleEn": "I like coffee and tea.",
    "exampleTet": "Ha'u gosta kafé no xá.",
    "related": [
      "but",
      "or",
      "with"
    ]
  },
  {
    "id": "c-2",
    "word": "but",
    "translation": "maibé",
    "pos": "conjunction",
    "definition": "Used to introduce a phrase contrasting with what has already been said.",
    "exampleEn": "I want to go but I am tired.",
    "exampleTet": "Ha'u hakarak ba maibé ha'u kole.",
    "related": [
      "and",
      "because"
    ]
  },
  {
    "id": "c-3",
    "word": "or",
    "translation": "ka",
    "pos": "conjunction",
    "definition": "Used to link alternatives.",
    "exampleEn": "Is this a cat or dog?",
    "exampleTet": "Ida-ne'e busa ka asu?",
    "related": [
      "and",
      "but"
    ]
  },
  {
    "id": "c-4",
    "word": "because",
    "translation": "tanba",
    "pos": "conjunction",
    "definition": "For the reason that; since.",
    "exampleEn": "I sleep because I am tired.",
    "exampleTet": "Ha'u toba tanba ha'u kole.",
    "related": [
      "but",
      "why"
    ]
  },
  {
    "id": "p-1",
    "word": "in",
    "translation": "iha",
    "pos": "preposition",
    "definition": "Expressing the situation of something enclosed or surrounded.",
    "exampleEn": "My friend is in the house.",
    "exampleTet": "Ha'u-nia belun iha uma laran.",
    "related": [
      "at",
      "on",
      "to"
    ]
  },
  {
    "id": "p-2",
    "word": "at",
    "translation": "iha",
    "pos": "preposition",
    "definition": "Expressing location or arrival in a particular place.",
    "exampleEn": "We are at school.",
    "exampleTet": "Ita iha eskola.",
    "related": [
      "in",
      "on",
      "to"
    ]
  },
  {
    "id": "p-3",
    "word": "on",
    "translation": "iha",
    "pos": "preposition",
    "definition": "Physically in contact with and supported by a surface (often paired with \"leten\" - top).",
    "exampleEn": "The book is on the table.",
    "exampleTet": "Livru iha meza leten.",
    "related": [
      "in",
      "at"
    ]
  },
  {
    "id": "p-4",
    "word": "to",
    "translation": "ba",
    "pos": "preposition",
    "definition": "Expressing motion in the direction of a location.",
    "exampleEn": "Let's go to Dili.",
    "exampleTet": "Mai ita ba Dili.",
    "related": [
      "from",
      "go"
    ]
  },
  {
    "id": "p-5",
    "word": "from",
    "translation": "husi",
    "pos": "preposition",
    "definition": "Indicating the point in space/time at which a journey or action starts.",
    "exampleEn": "I am from Timor.",
    "exampleTet": "Ha'u husi Timor.",
    "related": [
      "to",
      "come"
    ]
  },
  {
    "id": "p-6",
    "word": "with",
    "translation": "ho",
    "pos": "preposition",
    "definition": "Accompanied by another person or thing.",
    "exampleEn": "I eat rice with fish.",
    "exampleTet": "Ha'u han etu ho ikan.",
    "related": [
      "without",
      "and"
    ]
  },
  {
    "id": "p-7",
    "word": "without",
    "translation": "lahó",
    "pos": "preposition",
    "definition": "In the absence of.",
    "exampleEn": "I drink coffee without sugar.",
    "exampleTet": "Ha'u hemu kafé lahó masin-midar.",
    "related": [
      "with"
    ]
  },
  {
    "id": "det-1",
    "word": "the",
    "translation": "ne'e",
    "pos": "determiner",
    "definition": "Definite article. Often represented by placing \"ne'e\" (this/the) after the noun in Tetun.",
    "exampleEn": "The dog is barking.",
    "exampleTet": "Asu ne'e ho'u hela.",
    "related": [
      "this",
      "that"
    ]
  },
  {
    "id": "det-2",
    "word": "this",
    "translation": "ne'e",
    "pos": "determiner",
    "definition": "Referring to a specific thing close at hand.",
    "exampleEn": "This house is beautiful.",
    "exampleTet": "Uma ne'e furak.",
    "related": [
      "the",
      "that"
    ]
  },
  {
    "id": "det-3",
    "word": "that",
    "translation": "ne'ebá",
    "pos": "determiner",
    "definition": "Referring to a specific thing further away.",
    "exampleEn": "That school is big.",
    "exampleTet": "Eskola ne'ebá boot.",
    "related": [
      "this",
      "the"
    ]
  },
  {
    "id": "ph-1",
    "word": "hello",
    "translation": "bondia / halo",
    "pos": "phrase",
    "definition": "Greeting used to begin a conversation (often uses Portuguese \"bondia\" or Indonesian \"halo\").",
    "exampleEn": "Hello, how are you?",
    "exampleTet": "Bondia, oinsá di'ak ka?",
    "related": [
      "good morning",
      "goodbye"
    ]
  },
  {
    "id": "ph-2",
    "word": "good morning",
    "translation": "dadeer di'ak",
    "pos": "phrase",
    "definition": "Greeting used in the morning (Portuguese \"bondia\" is also very common).",
    "exampleEn": "Good morning, mother.",
    "exampleTet": "Dadeer di'ak, inan.",
    "related": [
      "hello",
      "good afternoon"
    ]
  },
  {
    "id": "ph-3",
    "word": "good afternoon",
    "translation": "lokraik di'ak",
    "pos": "phrase",
    "definition": "Greeting used in the afternoon (Portuguese \"boa tarde\" is also very common).",
    "exampleEn": "Good afternoon, teacher.",
    "exampleTet": "Lokraik di'ak, mestre.",
    "related": [
      "good morning",
      "good night"
    ]
  },
  {
    "id": "ph-4",
    "word": "good night",
    "translation": "kalan di'ak",
    "pos": "phrase",
    "definition": "Greeting used at night (Portuguese \"boanoite\" is also common).",
    "exampleEn": "Good night, sleep well.",
    "exampleTet": "Kalan di'ak, toba di'ak.",
    "related": [
      "good afternoon",
      "sleep"
    ]
  },
  {
    "id": "ph-5",
    "word": "thank you",
    "translation": "obrigadu / obrigada",
    "pos": "phrase",
    "definition": "Expression of gratitude. Men say \"obrigadu\", women say \"obrigada\". Can also use \"agradese\".",
    "exampleEn": "Thank you very much.",
    "exampleTet": "Obrigadu barak.",
    "related": [
      "welcome",
      "please"
    ]
  },
  {
    "id": "ph-6",
    "word": "you are welcome",
    "translation": "la buat ida / nada",
    "pos": "phrase",
    "definition": "Polite response to thank you.",
    "exampleEn": "Thank you. You are welcome.",
    "exampleTet": "Obrigadu. La buat ida.",
    "related": [
      "thank you"
    ]
  },
  {
    "id": "ph-7",
    "word": "please",
    "translation": "favor / halo favór",
    "pos": "phrase",
    "definition": "Used to ask for something politely.",
    "exampleEn": "Please help me.",
    "exampleTet": "Favor ajuda ha'u.",
    "related": [
      "thank you"
    ]
  },
  {
    "id": "ph-8",
    "word": "excuse me",
    "translation": "lisensa",
    "pos": "phrase",
    "definition": "Used to grab attention politely or pass through.",
    "exampleEn": "Excuse me, where is the toilet?",
    "exampleTet": "Lisensa, sentina iha ne'ebé?",
    "related": [
      "sorry"
    ]
  },
  {
    "id": "ph-9",
    "word": "i am sorry",
    "translation": "husu deskulpa / deskulpa",
    "pos": "phrase",
    "definition": "Expression of regret.",
    "exampleEn": "I am sorry I am late.",
    "exampleTet": "Deskulpa ha'u tardi.",
    "related": [
      "excuse me"
    ]
  },
  {
    "id": "ph-10",
    "word": "goodbye",
    "translation": "hela di'ak / la'o di'ak",
    "pos": "phrase",
    "definition": "Said when parting. Leaving person says \"hela di'ak\" (stay well); staying person says \"la'o di'ak\" (walk well).",
    "exampleEn": "Goodbye, friend.",
    "exampleTet": "Hela di'ak, belun.",
    "related": [
      "hello",
      "go"
    ]
  },
  {
    "id": "pc-1",
    "word": "thirsty",
    "translation": "hamrook",
    "pos": "adjective",
    "definition": "Feeling a need to drink water or liquids.",
    "exampleEn": "I am thirsty; I want to drink water.",
    "exampleTet": "Ha'u hamrook; ha'u hakarak hemu bee.",
    "related": [
      "hungry",
      "drink",
      "water"
    ]
  },
  {
    "id": "pc-2",
    "word": "hungry",
    "translation": "hamlaha",
    "pos": "adjective",
    "definition": "Feeling a need for food.",
    "exampleEn": "The child is hungry and wants to eat.",
    "exampleTet": "Oan ne'e hamlaha no hakarak han.",
    "related": [
      "thirsty",
      "eat",
      "food"
    ]
  },
  {
    "id": "pc-3",
    "word": "sick",
    "translation": "moras",
    "pos": "adjective",
    "definition": "Affected by physical or mental illness.",
    "exampleEn": "He cannot work today because he is sick.",
    "exampleTet": "Nia la bele servisu ohin tanba nia moras.",
    "related": [
      "tired",
      "doctor",
      "hospital"
    ]
  },
  {
    "id": "pc-4",
    "word": "uncle",
    "translation": "tiu",
    "pos": "noun",
    "definition": "The brother of one's father or mother (also used widely for older men).",
    "exampleEn": "My uncle lives in Dili.",
    "exampleTet": "Ha'u-nia tiu hela iha Dili.",
    "related": [
      "aunt",
      "father",
      "family"
    ]
  },
  {
    "id": "pc-5",
    "word": "aunt",
    "translation": "tia",
    "pos": "noun",
    "definition": "The sister of one's father or mother (also used widely for older women).",
    "exampleEn": "His aunt teaches English at the school.",
    "exampleTet": "Nia-nia tia hanorin lian inglés iha eskola.",
    "related": [
      "uncle",
      "mother",
      "family"
    ]
  },
  {
    "id": "pc-6",
    "word": "younger sibling",
    "translation": "alin",
    "pos": "noun",
    "definition": "A younger brother or sister.",
    "exampleEn": "My younger sibling goes to school.",
    "exampleTet": "Ha'u-nia alin ba eskola.",
    "related": [
      "brother",
      "sister",
      "family"
    ]
  },
  {
    "id": "pc-7",
    "word": "rest",
    "translation": "deskansa",
    "pos": "verb",
    "definition": "Cease work or movement in order to relax or recover strength.",
    "exampleEn": "We are tired; let's rest here.",
    "exampleTet": "Ita kole; mai ita deskansa iha ne'e.",
    "related": [
      "tired",
      "sleep",
      "relax"
    ]
  },
  {
    "id": "pc-8",
    "word": "bathe",
    "translation": "hariis",
    "pos": "verb",
    "definition": "Wash oneself or take a shower/bath.",
    "exampleEn": "I want to bathe in the morning.",
    "exampleTet": "Ha'u hakarak hariis iha dadeer.",
    "related": [
      "water",
      "clean",
      "morning"
    ]
  },
  {
    "id": "pc-9",
    "word": "slowly",
    "translation": "neineik",
    "pos": "adjective",
    "definition": "At a slow pace or with low speed (also means softly/quietly).",
    "exampleEn": "Please speak slowly.",
    "exampleTet": "Favor ko'alia neineik.",
    "related": [
      "quickly",
      "speak",
      "softly"
    ]
  },
  {
    "id": "pc-10",
    "word": "quickly",
    "translation": "lalais",
    "pos": "adjective",
    "definition": "At a fast pace or with high speed.",
    "exampleEn": "He walks quickly to the house.",
    "exampleTet": "Nia la'o lalais ba uma.",
    "related": [
      "slowly",
      "run",
      "walk"
    ]
  },
  {
    "id": "pc-11",
    "word": "play",
    "translation": "halimar",
    "pos": "verb",
    "definition": "Engage in activity for enjoyment and recreation rather than work.",
    "exampleEn": "The children play in the schoolyard.",
    "exampleTet": "Labarik sira halimar iha eskola laran.",
    "related": [
      "relax",
      "friend",
      "work"
    ]
  },
  {
    "id": "pc-12",
    "word": "sit",
    "translation": "tuur",
    "pos": "verb",
    "definition": "Adopt or be in a position in which one's weight is supported by one's buttocks.",
    "exampleEn": "Please sit here.",
    "exampleTet": "Favor tuur iha ne'e.",
    "related": [
      "stand",
      "rest",
      "chair"
    ]
  },
  {
    "id": "pc-13",
    "word": "stand",
    "translation": "hamriik",
    "pos": "verb",
    "definition": "Be in an upright position on feet.",
    "exampleEn": "We stand to respect the teacher.",
    "exampleTet": "Ita hamriik atu hatudu respeitu ba mestre.",
    "related": [
      "sit",
      "walk",
      "teacher"
    ]
  },
  {
    "id": "pc-14",
    "word": "must",
    "translation": "tenki",
    "pos": "verb",
    "definition": "Be obliged to; should (expressing necessity).",
    "exampleEn": "I must learn Tetun today.",
    "exampleTet": "Ha'u tenki aprende Tetun ohin.",
    "related": [
      "need",
      "work",
      "learn"
    ]
  },
  {
    "id": "pc-15",
    "word": "then",
    "translation": "depois",
    "pos": "preposition",
    "definition": "After that; next in order of time.",
    "exampleEn": "We will eat first, then we will go.",
    "exampleTet": "Ita han uluk, depois ita ba.",
    "related": [
      "and",
      "after",
      "then"
    ]
  },
  {
    "id": "pc-16",
    "word": "see you tomorrow",
    "translation": "até amanhá",
    "pos": "phrase",
    "definition": "Common parting expression meaning see you tomorrow.",
    "exampleEn": "Goodbye, see you tomorrow.",
    "exampleTet": "Hela di'ak, até amanhá.",
    "related": [
      "goodbye",
      "tomorrow"
    ]
  },
  {
    "id": "pc-17",
    "word": "see you later",
    "translation": "ate logu",
    "pos": "phrase",
    "definition": "Common parting expression meaning see you later today.",
    "exampleEn": "See you later, friend.",
    "exampleTet": "Ate logu, belun.",
    "related": [
      "goodbye",
      "today"
    ]
  },
  {
    "id": "pc-18",
    "word": "sir",
    "translation": "senhór",
    "pos": "noun",
    "definition": "Polite term of address for a man (mister).",
    "exampleEn": "Good morning, sir.",
    "exampleTet": "Bondia, senhór.",
    "related": [
      "madam",
      "mister"
    ]
  },
  {
    "id": "pc-19",
    "word": "madam",
    "translation": "senhora",
    "pos": "noun",
    "definition": "Polite term of address for a woman.",
    "exampleEn": "Thank you, madam.",
    "exampleTet": "Obrigada, senhora.",
    "related": [
      "sir",
      "woman"
    ]
  },
  {
    "id": "csv-1",
    "word": "good morning (until about 11.30am)",
    "translation": "bondia",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Greetings).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-2",
    "word": "good afternoon (until sunset)",
    "translation": "botardi",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Greetings).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-3",
    "word": "good evening, good night",
    "translation": "bonoiti",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Greetings).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-4",
    "word": "see you later today",
    "translation": "ate logu",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Leave-takings).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-5",
    "word": "sir, mister",
    "translation": "senhór",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Terms of address).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-6",
    "word": "Madam, Mrs",
    "translation": "senhora",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Terms of address).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-7",
    "word": "older brother",
    "translation": "maun",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Terms of address).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-8",
    "word": "older sister",
    "translation": "mana",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Terms of address).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-9",
    "word": "younger brother/sister",
    "translation": "alin",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Terms of address).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-10",
    "word": "I, me",
    "translation": "hau",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Personal pronouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-11",
    "word": "you (singular respectful)",
    "translation": "ita",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Personal pronouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-12",
    "word": "he, she, him, her; POSSESSIVE",
    "translation": "nia",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Personal pronouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-13",
    "word": "name",
    "translation": "naran",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-14",
    "word": "from, originate from",
    "translation": "hosi, husi",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-15",
    "word": "good; well; OK",
    "translation": "diak",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-16",
    "word": "come, come to",
    "translation": "mai",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-17",
    "word": "go, go to",
    "translation": "baa",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-18",
    "word": "don't want, refuse",
    "translation": "lakohi, lakoi",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-19",
    "word": "sorry",
    "translation": "deskulpa",
    "pos": "interjection",
    "definition": "Adapted from Peace Corps Tetun Course (Interjections).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-20",
    "word": "you're welcome",
    "translation": "nada",
    "pos": "interjection",
    "definition": "Adapted from Peace Corps Tetun Course (Interjections).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-21",
    "word": "house, building, home",
    "translation": "uma",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-22",
    "word": "can, may, be able to, be allowed to",
    "translation": "bele",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-23",
    "word": "not",
    "translation": "la",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-24",
    "word": "no",
    "translation": "lae",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-25",
    "word": "yes",
    "translation": "sín",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-26",
    "word": "QUESTION TAG; or",
    "translation": "ka",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-27",
    "word": "Tetun",
    "translation": "Tetun",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-28",
    "word": "English",
    "translation": "Inglés",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-29",
    "word": "Portuguese",
    "translation": "Portugés",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-30",
    "word": "Indonesia",
    "translation": "Indonézia",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-31",
    "word": "Indonesian language",
    "translation": "lian Indonézia",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-32",
    "word": "lesson",
    "translation": "lisaun",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-33",
    "word": "word, short segment of speech",
    "translation": "liafuan",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-34",
    "word": "know (something)",
    "translation": "hatene",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-35",
    "word": "tell, say",
    "translation": "hatete",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-36",
    "word": "say (it) again",
    "translation": "hatete fali",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-37",
    "word": "true, correct, straight, right",
    "translation": "loos",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-38",
    "word": "wrong; error",
    "translation": "sala",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-39",
    "word": "you (singular formal)",
    "translation": "ita boot",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Pronouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-40",
    "word": "you (singular familiar)",
    "translation": "o",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Pronouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-41",
    "word": "you (plural)",
    "translation": "imi",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Pronouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-42",
    "word": "we, us (excluding 'you')",
    "translation": "ami",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Pronouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-43",
    "word": "we, us (including 'you')",
    "translation": "ita",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Pronouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-44",
    "word": "they, them",
    "translation": "sira",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Pronouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-45",
    "word": "slowly, softly",
    "translation": "neineik",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Adverbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-46",
    "word": "not, indeed not",
    "translation": "laós",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-47",
    "word": "do, make",
    "translation": "halo",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-48",
    "word": "hear, listen to",
    "translation": "rona",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-49",
    "word": "see, look at",
    "translation": "haree",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-50",
    "word": "go for an outing",
    "translation": "pasiar",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-51",
    "word": "play, relax",
    "translation": "halimar",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-52",
    "word": "work, have a job",
    "translation": "servisu",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-53",
    "word": "live, stay, reside",
    "translation": "hela",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-54",
    "word": "radio",
    "translation": "rádiu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-55",
    "word": "television",
    "translation": "televizaun",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-56",
    "word": "newspaper",
    "translation": "jornál",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-57",
    "word": "sentence",
    "translation": "fraze",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-58",
    "word": "and then",
    "translation": "depois",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-59",
    "word": "must, have to",
    "translation": "tenki",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-60",
    "word": "in, at",
    "translation": "iha",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-61",
    "word": "where?",
    "translation": "iha nebee?",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-62",
    "word": "here",
    "translation": "iha nee",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-63",
    "word": "there",
    "translation": "iha nebaa",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-64",
    "word": "what is ... doing?",
    "translation": "halo saida?",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Common sequences).",
    "exampleEn": "what is ... doing?",
    "exampleTet": "halo saida?",
    "related": []
  },
  {
    "id": "csv-65",
    "word": "Listen here!",
    "translation": "Rona mai!",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Common sequences).",
    "exampleEn": "Listen here!",
    "exampleTet": "Rona mai!",
    "related": []
  },
  {
    "id": "csv-66",
    "word": "What do you see?",
    "translation": "Ita haree saida?",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Common sequences).",
    "exampleEn": "What do you see?",
    "exampleTet": "Ita haree saida?",
    "related": []
  },
  {
    "id": "csv-67",
    "word": "go out for a walk or drive",
    "translation": "baa pasiar",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Common sequences).",
    "exampleEn": "go out for a walk or drive",
    "exampleTet": "baa pasiar",
    "related": []
  },
  {
    "id": "csv-68",
    "word": "chat",
    "translation": "koalia halimar",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Common sequences).",
    "exampleEn": "chat",
    "exampleTet": "koalia halimar",
    "related": []
  },
  {
    "id": "csv-69",
    "word": "stroll (with no purpose)",
    "translation": "lao halimar",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Common sequences).",
    "exampleEn": "stroll (with no purpose)",
    "exampleTet": "lao halimar",
    "related": []
  },
  {
    "id": "csv-70",
    "word": "sit and relax",
    "translation": "tuur halimar",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Common sequences).",
    "exampleEn": "sit and relax",
    "exampleTet": "tuur halimar",
    "related": []
  },
  {
    "id": "csv-71",
    "word": "stand here",
    "translation": "hamriik iha nee",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Common sequences).",
    "exampleEn": "stand here",
    "exampleTet": "hamriik iha nee",
    "related": []
  },
  {
    "id": "csv-72",
    "word": "do work",
    "translation": "halo servisu",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Common sequences).",
    "exampleEn": "do work",
    "exampleTet": "halo servisu",
    "related": []
  },
  {
    "id": "csv-73",
    "word": "where does ... live?",
    "translation": "... hela iha nebee?",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Common sequences).",
    "exampleEn": "where does ... live?",
    "exampleTet": "... hela iha nebee?",
    "related": []
  },
  {
    "id": "csv-74",
    "word": "listen to the radio",
    "translation": "rona rádiu",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Common sequences).",
    "exampleEn": "listen to the radio",
    "exampleTet": "rona rádiu",
    "related": []
  },
  {
    "id": "csv-75",
    "word": "watch television",
    "translation": "haree televizaun",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Common sequences).",
    "exampleEn": "watch television",
    "exampleTet": "haree televizaun",
    "related": []
  },
  {
    "id": "csv-76",
    "word": "read a newspaper",
    "translation": "lee jornál",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Common sequences).",
    "exampleEn": "read a newspaper",
    "exampleTet": "lee jornál",
    "related": []
  },
  {
    "id": "csv-77",
    "word": "make a sentence",
    "translation": "halo fraze",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Common sequences).",
    "exampleEn": "make a sentence",
    "exampleTet": "halo fraze",
    "related": []
  },
  {
    "id": "csv-78",
    "word": "must go",
    "translation": "tenki baa",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Common sequences).",
    "exampleEn": "must go",
    "exampleTet": "tenki baa",
    "related": []
  },
  {
    "id": "csv-79",
    "word": "formerly, in the past",
    "translation": "uluk",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Time words).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-80",
    "word": "in the future",
    "translation": "aban-bainrua",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Time words).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-81",
    "word": "day",
    "translation": "loron",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Time words).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-82",
    "word": "day and night",
    "translation": "loron-kalan",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Time words).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-83",
    "word": "morning (to about 11 am)",
    "translation": "dadeer",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Time words).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-84",
    "word": "midday (about 11 - 2.30pm)",
    "translation": "meiudia",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Time words).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-85",
    "word": "afternoon (about 2.30-dark)",
    "translation": "lokraik, loraik",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Time words).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-86",
    "word": "just now, earlier today",
    "translation": "ohin",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Time words).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-87",
    "word": "now",
    "translation": "agora",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Time words).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-88",
    "word": "soon, later today",
    "translation": "orsida, oras ida",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Time words).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-89",
    "word": "last night, yesterday evening",
    "translation": "hori-kalan",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Time words).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-90",
    "word": "this evening",
    "translation": "orsida kalan",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Time words).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-91",
    "word": "when? (for future)",
    "translation": "bainhira",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Time words).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-92",
    "word": "when? (for past)",
    "translation": "hori-bainhira",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Time words).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-93",
    "word": "early",
    "translation": "sedu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Time words).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-94",
    "word": "late",
    "translation": "tardi",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Time words).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-95",
    "word": "on time",
    "translation": "ho oras",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Time words).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-96",
    "word": "this, these, the",
    "translation": "nee",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-97",
    "word": "one, a",
    "translation": "ida",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-98",
    "word": "0",
    "translation": "zero (P)",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Numerals).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-99",
    "word": "1",
    "translation": "ida",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Numerals).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-100",
    "word": "2",
    "translation": "rua",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Numerals).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-101",
    "word": "3",
    "translation": "tolu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Numerals).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-102",
    "word": "4",
    "translation": "haat",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Numerals).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-103",
    "word": "5",
    "translation": "lima",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Numerals).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-104",
    "word": "6",
    "translation": "neen",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Numerals).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-105",
    "word": "7",
    "translation": "hitu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Numerals).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-106",
    "word": "8",
    "translation": "walu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Numerals).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-107",
    "word": "9",
    "translation": "sia",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Numerals).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-108",
    "word": "10",
    "translation": "sanulu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Numerals).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-109",
    "word": "11",
    "translation": "sanulu resin ida",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Numerals).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-110",
    "word": "12",
    "translation": "sanulu resin rua",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Numerals).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-111",
    "word": "13",
    "translation": "sanulu resin tolu",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Numerals).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-112",
    "word": "14",
    "translation": "sanulu resin haat",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Numerals).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-113",
    "word": "15",
    "translation": "sanulu resin lima",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Numerals).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-114",
    "word": "16",
    "translation": "sanulu resin neen",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Numerals).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-115",
    "word": "17",
    "translation": "sanulu resin hitu",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Numerals).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-116",
    "word": "18",
    "translation": "sanulu resin walu",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Numerals).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-117",
    "word": "19",
    "translation": "sanulu resin sia",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Numerals).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-118",
    "word": "20",
    "translation": "rua-nulu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Numerals).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-119",
    "word": "30",
    "translation": "tolu-nulu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Numerals).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-120",
    "word": "40",
    "translation": "haat-nulu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Numerals).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-121",
    "word": "51",
    "translation": "lima-nulu resin ida",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Numerals).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-122",
    "word": "100",
    "translation": "atus ida",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Numerals).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-123",
    "word": "200",
    "translation": "atus rua",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Numerals).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-124",
    "word": "102",
    "translation": "atus ida rua",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Numerals).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-125",
    "word": "120",
    "translation": "atus ida rua-nulu",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Numerals).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-126",
    "word": "1000",
    "translation": "rihun ida",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Numerals).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-127",
    "word": "2000",
    "translation": "rihun rua",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Numerals).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-128",
    "word": "o'clock",
    "translation": "tuku",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-129",
    "word": "half, some, part of",
    "translation": "balu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-130",
    "word": "number",
    "translation": "númeru",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-131",
    "word": "year",
    "translation": "tinan",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-132",
    "word": "month",
    "translation": "fulan",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-133",
    "word": "week",
    "translation": "semana",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-134",
    "word": "hour",
    "translation": "oras",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-135",
    "word": "minute",
    "translation": "minutu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-136",
    "word": "absent, lack",
    "translation": "falta",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-137",
    "word": "go past, further",
    "translation": "liu",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-138",
    "word": "count",
    "translation": "sura",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-139",
    "word": "how many, how much?",
    "translation": "hira",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-140",
    "word": "how old (in years)?",
    "translation": "tinan hira",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-141",
    "word": "extra, excess",
    "translation": "resin",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-142",
    "word": "study",
    "translation": "estuda",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-143",
    "word": "ask, request",
    "translation": "husu",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-144",
    "word": "say, mean",
    "translation": "dehan",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-145",
    "word": "know (someone)",
    "translation": "konhese",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-146",
    "word": "meet",
    "translation": "hasoru",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-147",
    "word": "seek, look for",
    "translation": "buka",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-148",
    "word": "find, get, come across",
    "translation": "hetan",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-149",
    "word": "enter",
    "translation": "tama",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-150",
    "word": "exit",
    "translation": "sai",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-151",
    "word": "be educated, attend school",
    "translation": "eskola",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-152",
    "word": "beautiful, lovely",
    "translation": "kapaas",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-153",
    "word": "big, important, adult",
    "translation": "boot",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-154",
    "word": "friend, colleague, school-mate",
    "translation": "kolega",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-155",
    "word": "person, people",
    "translation": "ema",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-156",
    "word": "teacher (male / female)",
    "translation": "mestri / mestra",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-157",
    "word": "student (esp. university)",
    "translation": "estudante",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-158",
    "word": "class, grade (of school)",
    "translation": "klase",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-159",
    "word": "just",
    "translation": "deit",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-160",
    "word": "about (a topic), concerning",
    "translation": "kona ba",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-161",
    "word": "study Portuguese",
    "translation": "estuda Portugés",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Common sequences).",
    "exampleEn": "study Portuguese",
    "exampleTet": "estuda Portugés",
    "related": []
  },
  {
    "id": "csv-162",
    "word": "teach English",
    "translation": "hanorin Inglés",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Common sequences).",
    "exampleEn": "teach English",
    "exampleTet": "hanorin Inglés",
    "related": []
  },
  {
    "id": "csv-163",
    "word": "learn Tetun",
    "translation": "aprende Tetun",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Common sequences).",
    "exampleEn": "learn Tetun",
    "exampleTet": "aprende Tetun",
    "related": []
  },
  {
    "id": "csv-164",
    "word": "write a book",
    "translation": "hakerek livru",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Common sequences).",
    "exampleEn": "write a book",
    "exampleTet": "hakerek livru",
    "related": []
  },
  {
    "id": "csv-165",
    "word": "request a book",
    "translation": "husu livru ida",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Common sequences).",
    "exampleEn": "request a book",
    "exampleTet": "husu livru ida",
    "related": []
  },
  {
    "id": "csv-166",
    "word": "know him/her",
    "translation": "konhese nia",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Common sequences).",
    "exampleEn": "know him/her",
    "exampleTet": "konhese nia",
    "related": []
  },
  {
    "id": "csv-167",
    "word": "meet a friend",
    "translation": "hasoru kolega",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Common sequences).",
    "exampleEn": "meet a friend",
    "exampleTet": "hasoru kolega",
    "related": []
  },
  {
    "id": "csv-168",
    "word": "search unsuccessfully",
    "translation": "buka la hetan",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Common sequences).",
    "exampleEn": "search unsuccessfully",
    "exampleTet": "buka la hetan",
    "related": []
  },
  {
    "id": "csv-169",
    "word": "come across a friend",
    "translation": "hetan kolega",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Common sequences).",
    "exampleEn": "come across a friend",
    "exampleTet": "hetan kolega",
    "related": []
  },
  {
    "id": "csv-170",
    "word": "start school",
    "translation": "tama eskola",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Common sequences).",
    "exampleEn": "start school",
    "exampleTet": "tama eskola",
    "related": []
  },
  {
    "id": "csv-171",
    "word": "finish school",
    "translation": "sai hosi eskola",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Common sequences).",
    "exampleEn": "finish school",
    "exampleTet": "sai hosi eskola",
    "related": []
  },
  {
    "id": "csv-172",
    "word": "be educated in Dili",
    "translation": "eskola iha Dili",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Common sequences).",
    "exampleEn": "be educated in Dili",
    "exampleTet": "eskola iha Dili",
    "related": []
  },
  {
    "id": "csv-173",
    "word": "vehicle, car, bus, truck",
    "translation": "kareta",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-174",
    "word": "minibus",
    "translation": "mikrolét",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-175",
    "word": "taxi",
    "translation": "taksi",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-176",
    "word": "motorbike",
    "translation": "motór",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-177",
    "word": "path, road, way",
    "translation": "dalan",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-178",
    "word": "road, street",
    "translation": "estrada",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-179",
    "word": "hand, arm",
    "translation": "liman",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-180",
    "word": "shop",
    "translation": "loja",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-181",
    "word": "restaurant",
    "translation": "restorante",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-182",
    "word": "church",
    "translation": "igreja",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-183",
    "word": "intersection",
    "translation": "kruzamentu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-184",
    "word": "climb, ascend; get on, ride in (a vehicle)",
    "translation": "sae",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbs and adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-185",
    "word": "descend, get out of (a vehicle)",
    "translation": "tuun",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbs and adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-186",
    "word": "stop",
    "translation": "para",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbs and adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-187",
    "word": "turn, return",
    "translation": "fila",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbs and adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-188",
    "word": "show, point to",
    "translation": "hatudu",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbs and adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-189",
    "word": "wait for",
    "translation": "hein",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbs and adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-190",
    "word": "summon, ask for, call",
    "translation": "bolu",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbs and adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-191",
    "word": "pay, pay for",
    "translation": "selu",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbs and adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-192",
    "word": "bring, take; use; drive",
    "translation": "lori",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbs and adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-193",
    "word": "near",
    "translation": "besik",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbs and adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-194",
    "word": "far",
    "translation": "dook",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbs and adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-195",
    "word": "right (direction); straight, true",
    "translation": "loos",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbs and adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-196",
    "word": "left (direction)",
    "translation": "karuk",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbs and adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-197",
    "word": "to (preposition)",
    "translation": "ba",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-198",
    "word": "and (joins clauses)",
    "translation": "i",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-199",
    "word": "and (mostly formal)",
    "translation": "no",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-200",
    "word": "FOCUS MARKER",
    "translation": "mak",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-201",
    "word": "wait for the car",
    "translation": "hein kareta",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Examples).",
    "exampleEn": "wait for the car",
    "exampleTet": "hein kareta",
    "related": []
  },
  {
    "id": "csv-202",
    "word": "catch a minibus",
    "translation": "sae mikrolét",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Examples).",
    "exampleEn": "catch a minibus",
    "exampleTet": "sae mikrolét",
    "related": []
  },
  {
    "id": "csv-203",
    "word": "summon a taxi",
    "translation": "bolu taksi",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Examples).",
    "exampleEn": "summon a taxi",
    "exampleTet": "bolu taksi",
    "related": []
  },
  {
    "id": "csv-204",
    "word": "ride a motorbike",
    "translation": "lori motór",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Examples).",
    "exampleEn": "ride a motorbike",
    "exampleTet": "lori motór",
    "related": []
  },
  {
    "id": "csv-205",
    "word": "Have a safe trip!",
    "translation": "Haree dalan!",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Examples).",
    "exampleEn": "Have a safe trip!",
    "exampleTet": "Haree dalan!",
    "related": []
  },
  {
    "id": "csv-206",
    "word": "right hand",
    "translation": "liman loos",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Examples).",
    "exampleEn": "right hand",
    "exampleTet": "liman loos",
    "related": []
  },
  {
    "id": "csv-207",
    "word": "climb a mountain",
    "translation": "sae foho",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Examples).",
    "exampleEn": "climb a mountain",
    "exampleTet": "sae foho",
    "related": []
  },
  {
    "id": "csv-208",
    "word": "catch a taxi",
    "translation": "sae taksi",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Examples).",
    "exampleEn": "catch a taxi",
    "exampleTet": "sae taksi",
    "related": []
  },
  {
    "id": "csv-209",
    "word": "get out of a car",
    "translation": "tuun hosi kareta",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Examples).",
    "exampleEn": "get out of a car",
    "exampleTet": "tuun hosi kareta",
    "related": []
  },
  {
    "id": "csv-210",
    "word": "Stop here.",
    "translation": "Para iha nee.",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Examples).",
    "exampleEn": "Stop here.",
    "exampleTet": "Para iha nee.",
    "related": []
  },
  {
    "id": "csv-211",
    "word": "return home",
    "translation": "fila ba uma",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Examples).",
    "exampleEn": "return home",
    "exampleTet": "fila ba uma",
    "related": []
  },
  {
    "id": "csv-212",
    "word": "show/point out the way",
    "translation": "hatudu dalan",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Examples).",
    "exampleEn": "show/point out the way",
    "exampleTet": "hatudu dalan",
    "related": []
  },
  {
    "id": "csv-213",
    "word": "wait for a taxi",
    "translation": "hein taksi",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Examples).",
    "exampleEn": "wait for a taxi",
    "exampleTet": "hein taksi",
    "related": []
  },
  {
    "id": "csv-214",
    "word": "call older brother",
    "translation": "bolu maun",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Examples).",
    "exampleEn": "call older brother",
    "exampleTet": "bolu maun",
    "related": []
  },
  {
    "id": "csv-215",
    "word": "pay for the taxi",
    "translation": "selu taksi",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Examples).",
    "exampleEn": "pay for the taxi",
    "exampleTet": "selu taksi",
    "related": []
  },
  {
    "id": "csv-216",
    "word": "drive a car",
    "translation": "lori kareta",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Examples).",
    "exampleEn": "drive a car",
    "exampleTet": "lori kareta",
    "related": []
  },
  {
    "id": "csv-217",
    "word": "He lives near the church.",
    "translation": "Nia hela besik igreja.",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Examples).",
    "exampleEn": "He lives near the church.",
    "exampleTet": "Nia hela besik igreja.",
    "related": []
  },
  {
    "id": "csv-218",
    "word": "We are far from shops.",
    "translation": "Ami dook hosi loja.",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Examples).",
    "exampleEn": "We are far from shops.",
    "exampleTet": "Ami dook hosi loja.",
    "related": []
  },
  {
    "id": "csv-219",
    "word": "Turn right.",
    "translation": "Fila ba liman loos.",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Examples).",
    "exampleEn": "Turn right.",
    "exampleTet": "Fila ba liman loos.",
    "related": []
  },
  {
    "id": "csv-220",
    "word": "Just go straight.",
    "translation": "Baa loos deit.",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Examples).",
    "exampleEn": "Just go straight.",
    "exampleTet": "Baa loos deit.",
    "related": []
  },
  {
    "id": "csv-221",
    "word": "Turn left.",
    "translation": "Fila ba liman karuk.",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Examples).",
    "exampleEn": "Turn left.",
    "exampleTet": "Fila ba liman karuk.",
    "related": []
  },
  {
    "id": "csv-222",
    "word": "He walked to the shop.",
    "translation": "Nia lao ba loja.",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Examples).",
    "exampleEn": "He walked to the shop.",
    "exampleTet": "Nia lao ba loja.",
    "related": []
  },
  {
    "id": "csv-223",
    "word": "parents",
    "translation": "inan-aman",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Kin nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-224",
    "word": "mother, mum",
    "translation": "amaa",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Kin nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-225",
    "word": "father, dad",
    "translation": "apaa",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Kin nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-226",
    "word": "younger brother or sister",
    "translation": "alin",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Kin nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-227",
    "word": "brothers and sisters",
    "translation": "maun-alin",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Kin nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-228",
    "word": "grandparent",
    "translation": "avoo",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Kin nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-229",
    "word": "grandchild",
    "translation": "bei-oan",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Kin nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-230",
    "word": "household",
    "translation": "uma kain",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Kin nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-231",
    "word": "spouse, husband, wife; Verb marry (church or civil)",
    "translation": "kaben",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Kin nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-232",
    "word": "boyfriend, fiancé",
    "translation": "namoradu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Kin nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-233",
    "word": "girlfriend, fiancée",
    "translation": "namorada",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Kin nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-234",
    "word": "woman, girl, female",
    "translation": "feto",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-235",
    "word": "man, boy, male",
    "translation": "mane",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-236",
    "word": "mature man",
    "translation": "katuas",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-237",
    "word": "mature woman",
    "translation": "ferik",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-238",
    "word": "single person",
    "translation": "klosan",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-239",
    "word": "married person",
    "translation": "kaben nain",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-240",
    "word": "adopt, raise",
    "translation": "hakiak",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-241",
    "word": "live, be born",
    "translation": "moris",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-242",
    "word": "die, dead",
    "translation": "mate",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-243",
    "word": "together",
    "translation": "hamutuk",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-244",
    "word": "POSSESSIVE MARKER",
    "translation": "nia",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-245",
    "word": "whose ...?",
    "translation": "see nia ... ?",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-246",
    "word": "COUNTER FOR PEOPLE",
    "translation": "nain",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-247",
    "word": "all",
    "translation": "hotu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-248",
    "word": "open, turn on",
    "translation": "loke",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-249",
    "word": "close, turn off, cover",
    "translation": "taka",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-250",
    "word": "command, send",
    "translation": "haruka",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-251",
    "word": "play, gamble",
    "translation": "joga",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-252",
    "word": "get up, wake up",
    "translation": "hadeer",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-253",
    "word": "lie down, sleep",
    "translation": "toba",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-254",
    "word": "sleepy (lit. 'eye sleep')",
    "translation": "matan dukur",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-255",
    "word": "play in the sea",
    "translation": "hariis tasi",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-256",
    "word": "swim (e.g. swim to and fro)",
    "translation": "nani",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-257",
    "word": "fire, electricity",
    "translation": "ahi",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (General nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-258",
    "word": "door",
    "translation": "odamatan",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (General nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-259",
    "word": "(Catholic) mass",
    "translation": "misa",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (General nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-260",
    "word": "plan",
    "translation": "planu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (General nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-261",
    "word": "coast, shore, beach",
    "translation": "tasi ibun",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (General nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-262",
    "word": "Sunday",
    "translation": "Domingu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Days of the week).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-263",
    "word": "Monday",
    "translation": "Segunda",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Days of the week).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-264",
    "word": "Tuesday",
    "translation": "Tersa",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Days of the week).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-265",
    "word": "Wednesday",
    "translation": "Kuarta",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Days of the week).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-266",
    "word": "Thursday",
    "translation": "Kinta",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Days of the week).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-267",
    "word": "Friday",
    "translation": "Sesta",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Days of the week).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-268",
    "word": "Saturday",
    "translation": "Sábadu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Days of the week).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-269",
    "word": "turn on the radio",
    "translation": "loke rádio",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Expressions).",
    "exampleEn": "turn on the radio",
    "exampleTet": "loke rádio",
    "related": []
  },
  {
    "id": "csv-270",
    "word": "turn off the electricity",
    "translation": "taka ahi",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Expressions).",
    "exampleEn": "turn off the electricity",
    "exampleTet": "taka ahi",
    "related": []
  },
  {
    "id": "csv-271",
    "word": "play football",
    "translation": "joga bola",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Expressions).",
    "exampleEn": "play football",
    "exampleTet": "joga bola",
    "related": []
  },
  {
    "id": "csv-272",
    "word": "get up (after a night’s sleep)",
    "translation": "hadeer mai",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Expressions).",
    "exampleEn": "get up (after a night’s sleep)",
    "exampleTet": "hadeer mai",
    "related": []
  },
  {
    "id": "csv-273",
    "word": "sleep (lying down)",
    "translation": "toba dukur",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Expressions).",
    "exampleEn": "sleep (lying down)",
    "exampleTet": "toba dukur",
    "related": []
  },
  {
    "id": "csv-274",
    "word": "lie down but unable to sleep",
    "translation": "toba la dukur",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Expressions).",
    "exampleEn": "lie down but unable to sleep",
    "exampleTet": "toba la dukur",
    "related": []
  },
  {
    "id": "csv-275",
    "word": "the electricity has gone off",
    "translation": "ahi mate",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Expressions).",
    "exampleEn": "the electricity has gone off",
    "exampleTet": "ahi mate",
    "related": []
  },
  {
    "id": "csv-276",
    "word": "open the door",
    "translation": "loke odamatan",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Expressions).",
    "exampleEn": "open the door",
    "exampleTet": "loke odamatan",
    "related": []
  },
  {
    "id": "csv-277",
    "word": "go to mass",
    "translation": "baa misa",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Expressions).",
    "exampleEn": "go to mass",
    "exampleTet": "baa misa",
    "related": []
  },
  {
    "id": "csv-278",
    "word": "make plans",
    "translation": "halo planu",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Expressions).",
    "exampleEn": "make plans",
    "exampleTet": "halo planu",
    "related": []
  },
  {
    "id": "csv-279",
    "word": "about to, going to, intend to",
    "translation": "atu",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-280",
    "word": "with; and",
    "translation": "ho",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-281",
    "word": "PLURAL DEFINITE MARKER",
    "translation": "sira",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-282",
    "word": "also",
    "translation": "mos",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-283",
    "word": "wash",
    "translation": "fasi, fase",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-284",
    "word": "dry in the sun",
    "translation": "habai",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-285",
    "word": "iron (clothes); Noun iron",
    "translation": "estrika",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-286",
    "word": "help, assist",
    "translation": "ajuda, tulun",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-287",
    "word": "cook",
    "translation": "tein",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-288",
    "word": "child (to about 15 years)",
    "translation": "labarik",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-289",
    "word": "baby",
    "translation": "bebee",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-290",
    "word": "neighbour",
    "translation": "vizinhu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-291",
    "word": "bathroom",
    "translation": "hariis fatin",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-292",
    "word": "clothes",
    "translation": "ropa",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-293",
    "word": "activity",
    "translation": "atividade",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-294",
    "word": "only just, very recently",
    "translation": "foin",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-295",
    "word": "currently (CONTINUOUS)",
    "translation": "hela",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-296",
    "word": "what’s up? why?",
    "translation": "nusaa?",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-297",
    "word": "again, back",
    "translation": "fali",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-298",
    "word": "return; again",
    "translation": "fila fali",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-299",
    "word": "wash hands",
    "translation": "fasi liman",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Common sequences).",
    "exampleEn": "wash hands",
    "exampleTet": "fasi liman",
    "related": []
  },
  {
    "id": "csv-300",
    "word": "hang/spread out clothes to dry",
    "translation": "habai ropa",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Common sequences).",
    "exampleEn": "hang/spread out clothes to dry",
    "exampleTet": "habai ropa",
    "related": []
  },
  {
    "id": "csv-301",
    "word": "clean the house",
    "translation": "hamoos uma",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Common sequences).",
    "exampleEn": "clean the house",
    "exampleTet": "hamoos uma",
    "related": []
  },
  {
    "id": "csv-302",
    "word": "iron clothes",
    "translation": "estrika ropa",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Common sequences).",
    "exampleEn": "iron clothes",
    "exampleTet": "estrika ropa",
    "related": []
  },
  {
    "id": "csv-303",
    "word": "help mum",
    "translation": "ajuda amaa",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Common sequences).",
    "exampleEn": "help mum",
    "exampleTet": "ajuda amaa",
    "related": []
  },
  {
    "id": "csv-304",
    "word": "buy clothes",
    "translation": "sosa ropa",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Common sequences).",
    "exampleEn": "buy clothes",
    "exampleTet": "sosa ropa",
    "related": []
  },
  {
    "id": "csv-305",
    "word": "sell newspapers",
    "translation": "faan jornál",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Common sequences).",
    "exampleEn": "sell newspapers",
    "exampleTet": "faan jornál",
    "related": []
  },
  {
    "id": "csv-306",
    "word": "take him to hospital",
    "translation": "lori nia ba ospitál",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Common sequences).",
    "exampleEn": "take him to hospital",
    "exampleTet": "lori nia ba ospitál",
    "related": []
  },
  {
    "id": "csv-307",
    "word": "clean the toilet",
    "translation": "hamoos sentina",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Common sequences).",
    "exampleEn": "clean the toilet",
    "exampleTet": "hamoos sentina",
    "related": []
  },
  {
    "id": "csv-308",
    "word": "do the washing",
    "translation": "fasi ropa",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Common sequences).",
    "exampleEn": "do the washing",
    "exampleTet": "fasi ropa",
    "related": []
  },
  {
    "id": "csv-309",
    "word": "I’ve only just returned.",
    "translation": "Hau foin fila.",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Common sequences).",
    "exampleEn": "I’ve only just returned.",
    "exampleTet": "Hau foin fila.",
    "related": []
  },
  {
    "id": "csv-310",
    "word": "She is cooking.",
    "translation": "Nia tein hela.",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Common sequences).",
    "exampleEn": "She is cooking.",
    "exampleTet": "Nia tein hela.",
    "related": []
  },
  {
    "id": "csv-311",
    "word": "come back",
    "translation": "mai fali",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Common sequences).",
    "exampleEn": "come back",
    "exampleTet": "mai fali",
    "related": []
  },
  {
    "id": "csv-312",
    "word": "go back",
    "translation": "baa fali",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Common sequences).",
    "exampleEn": "go back",
    "exampleTet": "baa fali",
    "related": []
  },
  {
    "id": "csv-313",
    "word": "work again",
    "translation": "servisu fila fali",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Common sequences).",
    "exampleEn": "work again",
    "exampleTet": "servisu fila fali",
    "related": []
  },
  {
    "id": "csv-314",
    "word": "cooked rice",
    "translation": "etu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Foods).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-315",
    "word": "uncooked husked rice",
    "translation": "foos",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Foods).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-316",
    "word": "vegetables; any cooked dish eaten with rice",
    "translation": "modo",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Foods).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-317",
    "word": "fruit",
    "translation": "aifuan",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Foods).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-318",
    "word": "maize (corn)",
    "translation": "batar",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Foods).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-319",
    "word": "cassava",
    "translation": "ai farina",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Foods).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-320",
    "word": "remove, take out",
    "translation": "hasai",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-321",
    "word": "reply, agree",
    "translation": "hataan",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-322",
    "word": "full (from eating)",
    "translation": "bosu",
    "pos": "adjective",
    "definition": "Adapted from Peace Corps Tetun Course (Adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-323",
    "word": "enough",
    "translation": "too",
    "pos": "adjective",
    "definition": "Adapted from Peace Corps Tetun Course (Adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-324",
    "word": "more, again, additional",
    "translation": "tan",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-325",
    "word": "not yet",
    "translation": "seidauk",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-326",
    "word": "already (PERFECTIVE)",
    "translation": "ona",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-327",
    "word": "first (before something else)",
    "translation": "lai",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-328",
    "word": "many, much",
    "translation": "barak",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-329",
    "word": "a little, a few",
    "translation": "uitoan, ituan",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-330",
    "word": "eat breakfast",
    "translation": "matabixu",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-331",
    "word": "eat lunch",
    "translation": "haan meiudia",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-332",
    "word": "eat evening meal",
    "translation": "haan kalan",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-333",
    "word": "exist, be present",
    "translation": "iha",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-334",
    "word": "daily",
    "translation": "loro-loron",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Frequencies).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-335",
    "word": "nightly",
    "translation": "kala-kalan",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Frequencies).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-336",
    "word": "every morning",
    "translation": "dadeer-dadeer",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Frequencies).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-337",
    "word": "always",
    "translation": "sempre",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Frequencies).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-338",
    "word": "sometimes; perhaps",
    "translation": "dala ruma",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Frequencies).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-339",
    "word": "often; many times",
    "translation": "dala barak",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Frequencies).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-340",
    "word": "once",
    "translation": "dala ida",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Frequencies).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-341",
    "word": "twice",
    "translation": "dala rua",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Frequencies).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-342",
    "word": "never",
    "translation": "nunka",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Frequencies).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-343",
    "word": "sago",
    "translation": "akar",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Foods).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-344",
    "word": "salad",
    "translation": "salada",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Foods).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-345",
    "word": "egg (of chickens)",
    "translation": "mantolun",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Foods).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-346",
    "word": "chocolate",
    "translation": "xokolati",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Foods).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-347",
    "word": "lollies, sweets, candy",
    "translation": "rebusadu",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Foods).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-348",
    "word": "potato",
    "translation": "fehuk",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Foods).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-349",
    "word": "bean (mainly red bean)",
    "translation": "koto",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Foods).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-350",
    "word": "cake, biscuits",
    "translation": "dosi",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Foods).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-351",
    "word": "instance",
    "translation": "dala",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-352",
    "word": "salt",
    "translation": "masin",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Foods).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-353",
    "word": "sugar",
    "translation": "masin midar",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Foods).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-354",
    "word": "oil; petrol",
    "translation": "mina",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Foods).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-355",
    "word": "leafy vegetables",
    "translation": "modo tahan",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Foods).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-356",
    "word": "chilli",
    "translation": "ai manas",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Foods).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-357",
    "word": "peanut",
    "translation": "forai, fore rai",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Foods).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-358",
    "word": "papaya",
    "translation": "ai dila",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Foods).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-359",
    "word": "banana",
    "translation": "hudi",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Foods).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-360",
    "word": "mango",
    "translation": "haas",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Foods).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-361",
    "word": "orange",
    "translation": "sabraka",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Foods).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-362",
    "word": "bitter gourd",
    "translation": "baria",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Foods).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-363",
    "word": "thing",
    "translation": "buat",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-364",
    "word": "something",
    "translation": "buat ida",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-365",
    "word": "like, enjoy",
    "translation": "gosta",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-366",
    "word": "be accustomed to",
    "translation": "toman",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-367",
    "word": "need",
    "translation": "presiza",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-368",
    "word": "test, taste, tempt, try",
    "translation": "koko",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-369",
    "word": "sweet",
    "translation": "midar",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Tastes).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-370",
    "word": "bitter",
    "translation": "moruk",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Tastes).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-371",
    "word": "salty",
    "translation": "meer",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Tastes).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-372",
    "word": "sour",
    "translation": "siin",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Tastes).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-373",
    "word": "not very",
    "translation": "laduun",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-374",
    "word": "very",
    "translation": "loos",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-375",
    "word": "what kind of, what",
    "translation": "saida",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-376",
    "word": "small local convenience store",
    "translation": "kios",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Outlets).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-377",
    "word": "supermarket",
    "translation": "supermerkadu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Outlets).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-378",
    "word": "market, officially designated market place",
    "translation": "merkadu",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Outlets).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-379",
    "word": "food stall",
    "translation": "warung (I)",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Outlets).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-380",
    "word": "shopkeeper",
    "translation": "loja nain",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-381",
    "word": "kios owner",
    "translation": "kios nain",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-382",
    "word": "employer, business owner, boss",
    "translation": "patraun",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-383",
    "word": "price, value",
    "translation": "folin",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-384",
    "word": "driver",
    "translation": "kondutór",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-385",
    "word": "shopping (for multiple items)",
    "translation": "kompras",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-386",
    "word": "goods, wares; things",
    "translation": "sasaan",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-387",
    "word": "dollar",
    "translation": "dolar",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-388",
    "word": "cents",
    "translation": "sentavus",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-389",
    "word": "quarter (25c US)",
    "translation": "kuarter (Eng)",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-390",
    "word": "tempeh",
    "translation": "tempe",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-391",
    "word": "wrap",
    "translation": "falun",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-392",
    "word": "the price goes up",
    "translation": "folin sae",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-393",
    "word": "the price goes down",
    "translation": "folin tuun",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-394",
    "word": "lower the price",
    "translation": "hatuun folin",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-395",
    "word": "so",
    "translation": "entaun",
    "pos": "conjunction",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-396",
    "word": "boil (water)",
    "translation": "nono",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-397",
    "word": "boil in water",
    "translation": "daan",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-398",
    "word": "bake, roast",
    "translation": "tunu",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-399",
    "word": "fry",
    "translation": "sona",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-400",
    "word": "stir-fry",
    "translation": "fila",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-401",
    "word": "stir",
    "translation": "kedok",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-402",
    "word": "pour",
    "translation": "fui",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-403",
    "word": "put",
    "translation": "tau",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-404",
    "word": "boil, boiling",
    "translation": "nakali",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-405",
    "word": "raw, unripe, green",
    "translation": "matak",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-406",
    "word": "cooked, ripe",
    "translation": "tasak",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-407",
    "word": "stove",
    "translation": "fogaun",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-408",
    "word": "oven",
    "translation": "fornu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-409",
    "word": "saucepan",
    "translation": "sanan",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-410",
    "word": "Wok",
    "translation": "taxu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-411",
    "word": "until",
    "translation": "too",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-412",
    "word": "according to",
    "translation": "konforme",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-413",
    "word": "long time",
    "translation": "kleur",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-414",
    "word": "still; will",
    "translation": "sei",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-415",
    "word": "boil water",
    "translation": "nono bee",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Common sequences).",
    "exampleEn": "boil water",
    "exampleTet": "nono bee",
    "related": []
  },
  {
    "id": "csv-416",
    "word": "boil corn",
    "translation": "daan batar",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Common sequences).",
    "exampleEn": "boil corn",
    "exampleTet": "daan batar",
    "related": []
  },
  {
    "id": "csv-417",
    "word": "cook rice",
    "translation": "tein etu",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Common sequences).",
    "exampleEn": "cook rice",
    "exampleTet": "tein etu",
    "related": []
  },
  {
    "id": "csv-418",
    "word": "bake bread",
    "translation": "tunu paun",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Common sequences).",
    "exampleEn": "bake bread",
    "exampleTet": "tunu paun",
    "related": []
  },
  {
    "id": "csv-419",
    "word": "fry eggs",
    "translation": "sona mantolun",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Common sequences).",
    "exampleEn": "fry eggs",
    "exampleTet": "sona mantolun",
    "related": []
  },
  {
    "id": "csv-420",
    "word": "stir-fry vegetables",
    "translation": "fila modo",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Common sequences).",
    "exampleEn": "stir-fry vegetables",
    "exampleTet": "fila modo",
    "related": []
  },
  {
    "id": "csv-421",
    "word": "put salt on vegetables",
    "translation": "tau masin ba modo",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Common sequences).",
    "exampleEn": "put salt on vegetables",
    "exampleTet": "tau masin ba modo",
    "related": []
  },
  {
    "id": "csv-422",
    "word": "the water is boiling",
    "translation": "bee nakali ona",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Common sequences).",
    "exampleEn": "the water is boiling",
    "exampleTet": "bee nakali ona",
    "related": []
  },
  {
    "id": "csv-423",
    "word": "unboiled water",
    "translation": "bee matak",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Common sequences).",
    "exampleEn": "unboiled water",
    "exampleTet": "bee matak",
    "related": []
  },
  {
    "id": "csv-424",
    "word": "boiled water",
    "translation": "bee tasak",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Common sequences).",
    "exampleEn": "boiled water",
    "exampleTet": "bee tasak",
    "related": []
  },
  {
    "id": "csv-425",
    "word": "cook until it is cooked",
    "translation": "tein too tasak",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Common sequences).",
    "exampleEn": "cook until it is cooked",
    "exampleTet": "tein too tasak",
    "related": []
  },
  {
    "id": "csv-426",
    "word": "It’s up to senhora.",
    "translation": "Konforme senhora.",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Common sequences).",
    "exampleEn": "It’s up to senhora.",
    "exampleTet": "Konforme senhora.",
    "related": []
  },
  {
    "id": "csv-427",
    "word": "I’ve been waiting a long time.",
    "translation": "Hau hein kleur ona.",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Common sequences).",
    "exampleEn": "I’ve been waiting a long time.",
    "exampleTet": "Hau hein kleur ona.",
    "related": []
  },
  {
    "id": "csv-428",
    "word": "She’s still cooking.",
    "translation": "Nia sei tein hela.",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Common sequences).",
    "exampleEn": "She’s still cooking.",
    "exampleTet": "Nia sei tein hela.",
    "related": []
  },
  {
    "id": "csv-429",
    "word": "give",
    "translation": "foo",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-430",
    "word": "receive",
    "translation": "simu",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-431",
    "word": "wear, get dressed",
    "translation": "hatais",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-432",
    "word": "separate, distribute",
    "translation": "fahe",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-433",
    "word": "kill",
    "translation": "oho",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-434",
    "word": "drunk, overdosed",
    "translation": "lanu",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-435",
    "word": "drunk",
    "translation": "tua lanu",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-436",
    "word": "carsick",
    "translation": "kareta lanu",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-437",
    "word": "dance",
    "translation": "dansa",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-438",
    "word": "have a birthday",
    "translation": "halo tinan",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-439",
    "word": "party",
    "translation": "festa",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-440",
    "word": "wedding",
    "translation": "kazamentu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-441",
    "word": "buffalo, cattle",
    "translation": "karau",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-442",
    "word": "pig",
    "translation": "fahi",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-443",
    "word": "chicken, bird",
    "translation": "manu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-444",
    "word": "music",
    "translation": "múzika",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-445",
    "word": "motel, hotel",
    "translation": "otél",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-446",
    "word": "palm wine, alcohol",
    "translation": "tua",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Alcoholic drinks).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-447",
    "word": "distilled palm wine",
    "translation": "tua manas",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Alcoholic drinks).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-448",
    "word": "sweet palm wine",
    "translation": "tua mutin",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Alcoholic drinks).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-449",
    "word": "palm brandy",
    "translation": "tua sabu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Alcoholic drinks).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-450",
    "word": "beer",
    "translation": "serveja",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Alcoholic drinks).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-451",
    "word": "red wine",
    "translation": "tintu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Alcoholic drinks).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-452",
    "word": "congratulations",
    "translation": "parabéns",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-453",
    "word": "don't, don't bother",
    "translation": "lalika, lalikan",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-454",
    "word": "like this, in this way",
    "translation": "nunee",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-455",
    "word": "PERFECT ASPECT",
    "translation": "tiha ona",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-456",
    "word": "give money to grandparent",
    "translation": "foo osan ba avoo",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Common sequences).",
    "exampleEn": "give money to grandparent",
    "exampleTet": "foo osan ba avoo",
    "related": []
  },
  {
    "id": "csv-457",
    "word": "receive money from dad",
    "translation": "simu osan hosi apaa",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Common sequences).",
    "exampleEn": "receive money from dad",
    "exampleTet": "simu osan hosi apaa",
    "related": []
  },
  {
    "id": "csv-458",
    "word": "wear new clothes",
    "translation": "hatais ropa foun",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Common sequences).",
    "exampleEn": "wear new clothes",
    "exampleTet": "hatais ropa foun",
    "related": []
  },
  {
    "id": "csv-459",
    "word": "distribute money (handouts)",
    "translation": "fahe osan",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Common sequences).",
    "exampleEn": "distribute money (handouts)",
    "exampleTet": "fahe osan",
    "related": []
  },
  {
    "id": "csv-460",
    "word": "kill buffalo/cattle",
    "translation": "oho karau",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Common sequences).",
    "exampleEn": "kill buffalo/cattle",
    "exampleTet": "oho karau",
    "related": []
  },
  {
    "id": "csv-461",
    "word": "He turns seven.",
    "translation": "Nia halo tinan hitu.",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Common sequences).",
    "exampleEn": "He turns seven.",
    "exampleTet": "Nia halo tinan hitu.",
    "related": []
  },
  {
    "id": "csv-462",
    "word": "have a party",
    "translation": "halo festa",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Common sequences).",
    "exampleEn": "have a party",
    "exampleTet": "halo festa",
    "related": []
  },
  {
    "id": "csv-463",
    "word": "Don’t/no need to ask mum.",
    "translation": "Lalika husu amaa.",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Common sequences).",
    "exampleEn": "Don’t/no need to ask mum.",
    "exampleTet": "Lalika husu amaa.",
    "related": []
  },
  {
    "id": "csv-464",
    "word": "He spoke like this.",
    "translation": "Nia koalia nunee.",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Common sequences).",
    "exampleEn": "He spoke like this.",
    "exampleTet": "Nia koalia nunee.",
    "related": []
  },
  {
    "id": "csv-465",
    "word": "I have eaten.",
    "translation": "Hau haan tiha ona.",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Common sequences).",
    "exampleEn": "I have eaten.",
    "exampleTet": "Hau haan tiha ona.",
    "related": []
  },
  {
    "id": "csv-466",
    "word": "bedroom",
    "translation": "kuartu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-467",
    "word": "lounge room, hall, large room",
    "translation": "sala",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-468",
    "word": "front living room",
    "translation": "sala vizita",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-469",
    "word": "kitchen",
    "translation": "dapur",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-470",
    "word": "veranda",
    "translation": "varanda",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-471",
    "word": "window",
    "translation": "janela",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-472",
    "word": "table, desk",
    "translation": "meza",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-473",
    "word": "chair",
    "translation": "kadeira",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-474",
    "word": "bed",
    "translation": "kama",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-475",
    "word": "fan (electric)",
    "translation": "ventuinha",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-476",
    "word": "refrigerator",
    "translation": "jeleira",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-477",
    "word": "cupboard, wardrobe, bookcase",
    "translation": "almari, armáriu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-478",
    "word": "bucket",
    "translation": "baldi",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-479",
    "word": "visitor",
    "translation": "bainaka",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-480",
    "word": "house owner",
    "translation": "uma nain",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-481",
    "word": "earth, land, country, soil, floor",
    "translation": "rai",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-482",
    "word": "use",
    "translation": "uza",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-483",
    "word": "borrow",
    "translation": "empresta, impresta",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-484",
    "word": "pick up, lift",
    "translation": "foti",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-485",
    "word": "be like; for example",
    "translation": "hanesan",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-486",
    "word": "visit",
    "translation": "vizita",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-487",
    "word": "put, store",
    "translation": "rai",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-488",
    "word": "fetch water",
    "translation": "kuru bee",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-489",
    "word": "bring; for (purpose)",
    "translation": "hodi",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-490",
    "word": "in order to",
    "translation": "atu",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-491",
    "word": "how about ... (suggestion)",
    "translation": "diak liu ...",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-492",
    "word": "in front of",
    "translation": "iha ... oin",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Locations).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-493",
    "word": "behind",
    "translation": "iha ... kotuk",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Locations).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-494",
    "word": "in, inside, amongst; during (time)",
    "translation": "iha ... laran",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Locations).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-495",
    "word": "outside",
    "translation": "iha liur",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Locations).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-496",
    "word": "in the middle of, between",
    "translation": "iha ... klaran",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Locations).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-497",
    "word": "in the space between; among",
    "translation": "iha ... leet",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Locations).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-498",
    "word": "on top of, above",
    "translation": "iha ... leten",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Locations).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-499",
    "word": "underneath",
    "translation": "iha ... okos",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Locations).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-500",
    "word": "at the edge of",
    "translation": "iha ... ninin",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Locations).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-501",
    "word": "beside",
    "translation": "iha ... sorin",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Locations).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-502",
    "word": "on the other side of",
    "translation": "iha ... sorin ba",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Locations).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-503",
    "word": "on this side of",
    "translation": "iha ... sorin mai",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Locations).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-504",
    "word": "on the right of",
    "translation": "iha ... sorin loos",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Locations).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-505",
    "word": "on the left of",
    "translation": "iha ... sorin karuk",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Locations).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-506",
    "word": "at the right hand of",
    "translation": "iha ... liman loos",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Locations).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-507",
    "word": "at the left hand of",
    "translation": "iha ... liman karuk",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Locations).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-508",
    "word": "forwards",
    "translation": "ba oin",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Directions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-509",
    "word": "backwards",
    "translation": "ba kotuk",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Directions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-510",
    "word": "go downhill, downwards",
    "translation": "ba kraik",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Directions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-511",
    "word": "go uphill, upwards",
    "translation": "ba leten",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Directions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-512",
    "word": "key; Verb: lock",
    "translation": "xavi",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-513",
    "word": "face, front; type, sort",
    "translation": "oin",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Base nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-514",
    "word": "back",
    "translation": "kotuk",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Base nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-515",
    "word": "inside",
    "translation": "laran",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Base nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-516",
    "word": "middle, centre",
    "translation": "klaran",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Base nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-517",
    "word": "space (between things)",
    "translation": "leet",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Base nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-518",
    "word": "upper, top",
    "translation": "leten",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Base nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-519",
    "word": "lower, below",
    "translation": "okos",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Base nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-520",
    "word": "edge",
    "translation": "ninin",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Base nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-521",
    "word": "side",
    "translation": "sorin",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Base nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-522",
    "word": "move aside, turn",
    "translation": "sees",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-523",
    "word": "follow; attend; according to",
    "translation": "tuir",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-524",
    "word": "begin",
    "translation": "komesa",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-525",
    "word": "which",
    "translation": "nebee",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-526",
    "word": "via, by means of, through",
    "translation": "liu hosi",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-527",
    "word": "try, ‘have a...’",
    "translation": "took",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-528",
    "word": "body, flesh, ...",
    "translation": "isin",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Body parts).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-529",
    "word": "body (of person)",
    "translation": "isin lolon",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Body parts).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-530",
    "word": "head; boss",
    "translation": "ulun",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Body parts).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-531",
    "word": "stomach",
    "translation": "kabun",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Body parts).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-532",
    "word": "leg, foot",
    "translation": "ain",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Body parts).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-533",
    "word": "blood",
    "translation": "raan",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Body parts).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-534",
    "word": "bone",
    "translation": "ruin",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Body parts).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-535",
    "word": "skin, peel, ...",
    "translation": "kulit",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Body parts).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-536",
    "word": "intestine; excrement",
    "translation": "teen",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Body parts).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-537",
    "word": "blood vessel",
    "translation": "uat",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Body parts).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-538",
    "word": "hold, grasp",
    "translation": "kaer",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-539",
    "word": "sick; hurt; in pain",
    "translation": "moras",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-540",
    "word": "have a blood test",
    "translation": "hasai raan",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-541",
    "word": "if",
    "translation": "se",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-542",
    "word": "perhaps, maybe",
    "translation": "karik",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-543",
    "word": "again; instead",
    "translation": "fali",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-544",
    "word": "head",
    "translation": "ulun fatuk",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Body parts).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-545",
    "word": "eye; source",
    "translation": "matan",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Body parts).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-546",
    "word": "ear",
    "translation": "tilun",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Body parts).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-547",
    "word": "nose",
    "translation": "inus",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Body parts).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-548",
    "word": "mouth",
    "translation": "ibun",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Body parts).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-549",
    "word": "tooth",
    "translation": "nehan, nihan",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Body parts).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-550",
    "word": "hair (of head)",
    "translation": "fuuk",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Body parts).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-551",
    "word": "tongue",
    "translation": "nanaal",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Body parts).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-552",
    "word": "neck, throat",
    "translation": "kakorok",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Body parts).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-553",
    "word": "brains",
    "translation": "kakutak",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Body parts).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-554",
    "word": "comb, hairbrush",
    "translation": "sasuit",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-555",
    "word": "brush",
    "translation": "eskova",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-556",
    "word": "bite",
    "translation": "tata",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-557",
    "word": "chew",
    "translation": "nata",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-558",
    "word": "cut",
    "translation": "tesi",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-559",
    "word": "wipe, rub",
    "translation": "kose",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-560",
    "word": "comb, brush (hair)",
    "translation": "sui",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-561",
    "word": "smooth",
    "translation": "kabeer",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-562",
    "word": "messy",
    "translation": "sabraut",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-563",
    "word": "tidy oneself up",
    "translation": "hadia aan",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-564",
    "word": "so that, in order to",
    "translation": "para",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-565",
    "word": "when, whenever",
    "translation": "bainhira",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-566",
    "word": "when, whenever, if",
    "translation": "kuandu",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-567",
    "word": "different, strange",
    "translation": "oin seluk",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-568",
    "word": "PERFECTIVE ASPECT, already",
    "translation": "tiha",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-569",
    "word": "bad, out of order",
    "translation": "aat",
    "pos": "adjective",
    "definition": "Adapted from Peace Corps Tetun Course (Adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-570",
    "word": "long (of horizontal things)",
    "translation": "naruk",
    "pos": "adjective",
    "definition": "Adapted from Peace Corps Tetun Course (Adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-571",
    "word": "tall",
    "translation": "aas",
    "pos": "adjective",
    "definition": "Adapted from Peace Corps Tetun Course (Adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-572",
    "word": "short",
    "translation": "badak",
    "pos": "adjective",
    "definition": "Adapted from Peace Corps Tetun Course (Adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-573",
    "word": "tall (of person)",
    "translation": "ain aas",
    "pos": "adjective",
    "definition": "Adapted from Peace Corps Tetun Course (Adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-574",
    "word": "short (of person)",
    "translation": "ain badak",
    "pos": "adjective",
    "definition": "Adapted from Peace Corps Tetun Course (Adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-575",
    "word": "big, large (of person)",
    "translation": "isin boot",
    "pos": "adjective",
    "definition": "Adapted from Peace Corps Tetun Course (Adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-576",
    "word": "fat",
    "translation": "bokur",
    "pos": "adjective",
    "definition": "Adapted from Peace Corps Tetun Course (Adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-577",
    "word": "slim (of person)",
    "translation": "isin lotuk",
    "pos": "adjective",
    "definition": "Adapted from Peace Corps Tetun Course (Adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-578",
    "word": "thin",
    "translation": "krekas",
    "pos": "adjective",
    "definition": "Adapted from Peace Corps Tetun Course (Adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-579",
    "word": "handsome (of males)",
    "translation": "bonitu",
    "pos": "adjective",
    "definition": "Adapted from Peace Corps Tetun Course (Adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-580",
    "word": "pretty (of females)",
    "translation": "bonita",
    "pos": "adjective",
    "definition": "Adapted from Peace Corps Tetun Course (Adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-581",
    "word": "attractive",
    "translation": "jeitu",
    "pos": "adjective",
    "definition": "Adapted from Peace Corps Tetun Course (Adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-582",
    "word": "ugly (of person’s face)",
    "translation": "oin aat",
    "pos": "adjective",
    "definition": "Adapted from Peace Corps Tetun Course (Adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-583",
    "word": "clever; well-mannered",
    "translation": "matenek",
    "pos": "adjective",
    "definition": "Adapted from Peace Corps Tetun Course (Adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-584",
    "word": "stupid; ill-mannered",
    "translation": "beik",
    "pos": "adjective",
    "definition": "Adapted from Peace Corps Tetun Course (Adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-585",
    "word": "various",
    "translation": "oi-oin",
    "pos": "adjective",
    "definition": "Adapted from Peace Corps Tetun Course (Adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-586",
    "word": "confused; confusion",
    "translation": "konfuzaun",
    "pos": "adjective",
    "definition": "Adapted from Peace Corps Tetun Course (Adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-587",
    "word": "young adult (e.g. 17 up)",
    "translation": "foin-sae",
    "pos": "adjective",
    "definition": "Adapted from Peace Corps Tetun Course (Adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-588",
    "word": "VIP, government leader; adult",
    "translation": "ema boot",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-589",
    "word": "the common people",
    "translation": "ema kiik",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-590",
    "word": "the people, commoners, civilians",
    "translation": "povu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-591",
    "word": "spectacles, glasses",
    "translation": "oklu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-592",
    "word": "separately, individually",
    "translation": "keta-ketak",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Adverbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-593",
    "word": "very, more, most",
    "translation": "liu",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Adverbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-594",
    "word": "top, blouse, shirt",
    "translation": "faru",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-595",
    "word": "shirt (men’s style)",
    "translation": "kamiza",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-596",
    "word": "long-sleeved shirt",
    "translation": "kamiza liman naruk",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-597",
    "word": "short-sleeved shirt",
    "translation": "kamiza liman badak",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-598",
    "word": "blouse (women’s style)",
    "translation": "bluza",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-599",
    "word": "T-shirt",
    "translation": "kamizola",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-600",
    "word": "pants",
    "translation": "kalsa",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-601",
    "word": "long pants",
    "translation": "kalsa naruk",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-602",
    "word": "shorts",
    "translation": "kalsa badak",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-603",
    "word": "skirt",
    "translation": "saia",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-604",
    "word": "dress",
    "translation": "vestidu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-605",
    "word": "hat, cap",
    "translation": "xapeu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-606",
    "word": "shoe",
    "translation": "sapatu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-607",
    "word": "sandal",
    "translation": "sandália",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-608",
    "word": "thongs, flip-flops",
    "translation": "xinelus",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-609",
    "word": "watch, clock",
    "translation": "relójiu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-610",
    "word": "earring(s)",
    "translation": "brinkus",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-611",
    "word": "ring",
    "translation": "kadeli",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-612",
    "word": "necklace, chain",
    "translation": "korenti",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-613",
    "word": "belt",
    "translation": "sintu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-614",
    "word": "colour",
    "translation": "kór",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-615",
    "word": "think; miss, pity",
    "translation": "hanoin",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-616",
    "word": "forget",
    "translation": "haluha",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-617",
    "word": "replace, exchange",
    "translation": "troka",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-618",
    "word": "hang up",
    "translation": "tara",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-619",
    "word": "tie up",
    "translation": "kesi",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-620",
    "word": "black",
    "translation": "metan",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Colours).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-621",
    "word": "white",
    "translation": "mutin",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Colours).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-622",
    "word": "red",
    "translation": "mean",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Colours).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-623",
    "word": "yellow",
    "translation": "kinur",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Colours).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-624",
    "word": "blue",
    "translation": "azúl",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Colours).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-625",
    "word": "green",
    "translation": "verdi",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Colours).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-626",
    "word": "brown",
    "translation": "kór kafé",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Colours).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-627",
    "word": "bright colour",
    "translation": "kór moris",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Colours).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-628",
    "word": "dull colour",
    "translation": "kór maten",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Colours).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-629",
    "word": "wet",
    "translation": "bokon",
    "pos": "adjective",
    "definition": "Adapted from Peace Corps Tetun Course (Other adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-630",
    "word": "dry",
    "translation": "maran",
    "pos": "adjective",
    "definition": "Adapted from Peace Corps Tetun Course (Other adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-631",
    "word": "too (excessive)",
    "translation": "demais",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Adverbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-632",
    "word": "how, what is it like?",
    "translation": "oinsaa",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Adverbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-633",
    "word": "that (COMPLEMENTISER)",
    "translation": "katak",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-634",
    "word": "medicine",
    "translation": "aimoruk",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-635",
    "word": "doctor (male / female)",
    "translation": "doutór / doutora",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-636",
    "word": "nurse (male / female)",
    "translation": "enfermeiru / -a",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-637",
    "word": "prescription; recipe",
    "translation": "reseita",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-638",
    "word": "pharmacy",
    "translation": "farmásia",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-639",
    "word": "pharmacy, private clinic",
    "translation": "apotík (I)",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-640",
    "word": "clinic",
    "translation": "klínika",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-641",
    "word": "malaria",
    "translation": "malária",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-642",
    "word": "mosquito net",
    "translation": "moskiteiru",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-643",
    "word": "mosquito",
    "translation": "susuk",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-644",
    "word": "stab, pierce, give an injection",
    "translation": "sona",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-645",
    "word": "cause; make; do",
    "translation": "halo",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-646",
    "word": "feel",
    "translation": "senti, sente",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-647",
    "word": "oppose, transgress, against",
    "translation": "kontra",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-648",
    "word": "healthy, well",
    "translation": "isin diak",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-649",
    "word": "have a fever",
    "translation": "isin manas",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-650",
    "word": "vomit",
    "translation": "muta",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-651",
    "word": "fever-induced shivering",
    "translation": "bedoko",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-652",
    "word": "ill-induced cold",
    "translation": "isin malirin",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-653",
    "word": "go for a medical consultation",
    "translation": "baa konsulta",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-654",
    "word": "contagious, spread to others",
    "translation": "daet",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-655",
    "word": "be hospitalised",
    "translation": "baixa",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-656",
    "word": "be discharged from hospital",
    "translation": "alta",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-657",
    "word": "often, always, continually",
    "translation": "beibeik",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-658",
    "word": "indeed",
    "translation": "duni",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-659",
    "word": "immediately",
    "translation": "kedas, kedan",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-660",
    "word": "clearly",
    "translation": "moos",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-661",
    "word": "so, therefore",
    "translation": "nee duni",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-662",
    "word": "liquid, sap",
    "translation": "been",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-663",
    "word": "run, run away",
    "translation": "halai",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-664",
    "word": "dizzy",
    "translation": "oin halai",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-665",
    "word": "have a headache",
    "translation": "ulun moras",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-666",
    "word": "have a tummy ache, diarrhoea",
    "translation": "kabun moras",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-667",
    "word": "firm, tight",
    "translation": "metin",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-668",
    "word": "have a blocked nose",
    "translation": "inus metin",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-669",
    "word": "have a runny nose",
    "translation": "inus been",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-670",
    "word": "have diarrhoea",
    "translation": "tee been",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-671",
    "word": "aching; sour",
    "translation": "siin",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-672",
    "word": "have aching legs",
    "translation": "ain siin",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-673",
    "word": "itchy",
    "translation": "katar",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-674",
    "word": "itch, have itchy skin",
    "translation": "isin katar",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-675",
    "word": "sweat, perspire",
    "translation": "kosar",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-676",
    "word": "wounded; Noun wound",
    "translation": "kanek",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-677",
    "word": "have a wounded leg",
    "translation": "ain kanek",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-678",
    "word": "blind",
    "translation": "matan aat",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-679",
    "word": "deaf",
    "translation": "tilun diuk",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-680",
    "word": "nauseous",
    "translation": "laran sae",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-681",
    "word": "cough",
    "translation": "mear",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-682",
    "word": "other",
    "translation": "seluk",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-683",
    "word": "fetch, buy",
    "translation": "hola",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-684",
    "word": "own, self; in person",
    "translation": "rasik",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Adverbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-685",
    "word": "shorten",
    "translation": "habadak",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive derived verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-686",
    "word": "wet (something)",
    "translation": "habokon",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive derived verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-687",
    "word": "repair, fix",
    "translation": "hadia",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive derived verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-688",
    "word": "carry out, conduct, implement",
    "translation": "halao",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive derived verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-689",
    "word": "heat up (something)",
    "translation": "hamanas",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive derived verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-690",
    "word": "extinguish, turn off",
    "translation": "hamate",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive derived verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-691",
    "word": "dry (something)",
    "translation": "hamaran",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive derived verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-692",
    "word": "strengthen, make firm",
    "translation": "hametin",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive derived verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-693",
    "word": "shame (someone)",
    "translation": "hamoe",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive derived verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-694",
    "word": "clean (something)",
    "translation": "hamoos",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive derived verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-695",
    "word": "raise",
    "translation": "hasae",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive derived verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-696",
    "word": "remove",
    "translation": "hasai",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive derived verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-697",
    "word": "insert",
    "translation": "hatama",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive derived verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-698",
    "word": "cause to lie down (e.g. a baby)",
    "translation": "hatoba",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive derived verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-699",
    "word": "lower (something)",
    "translation": "hatuun",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive derived verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-700",
    "word": "deliver, pass on (a message), express (opinion)",
    "translation": "hatoo",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive derived verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-701",
    "word": "throw, discard",
    "translation": "soe",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-702",
    "word": "touch; infect",
    "translation": "kona",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-703",
    "word": "tank (e.g. for bathing water)",
    "translation": "tanki",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-704",
    "word": "don't!",
    "translation": "keta",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-705",
    "word": "so, for this reason, thus",
    "translation": "nunee",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-706",
    "word": "walk, run (meeting, engine)",
    "translation": "lao",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verb/adjective roots).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-707",
    "word": "dead, die",
    "translation": "mate",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verb/adjective roots).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-708",
    "word": "firm",
    "translation": "metin",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verb/adjective roots).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-709",
    "word": "ashamed, embarrassed, shy",
    "translation": "moe",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verb/adjective roots).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-710",
    "word": "ascend, rise",
    "translation": "sae",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verb/adjective roots).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-711",
    "word": "exit, go out",
    "translation": "sai",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verb/adjective roots).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-712",
    "word": "lie down",
    "translation": "toba",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verb/adjective roots).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-713",
    "word": "descend",
    "translation": "tuun",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verb/adjective roots).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-714",
    "word": "arrive",
    "translation": "too",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verb/adjective roots).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-715",
    "word": "pregnant (people only)",
    "translation": "isin rua",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-716",
    "word": "have a baby, give birth (people only)",
    "translation": "tuur ahi",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-717",
    "word": "give birth (people only)",
    "translation": "partu",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-718",
    "word": "live, alive, be born",
    "translation": "moris",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-719",
    "word": "be born",
    "translation": "moris mai",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-720",
    "word": "fall",
    "translation": "monu",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-721",
    "word": "overturn, capsize",
    "translation": "baku fila",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-722",
    "word": "give birth (to)",
    "translation": "hahoris",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-723",
    "word": "crash into, shock",
    "translation": "xoke",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-724",
    "word": "beat, hit",
    "translation": "baku",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-725",
    "word": "dig",
    "translation": "kee",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-726",
    "word": "bury",
    "translation": "hakoi",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-727",
    "word": "afraid, fear",
    "translation": "tauk",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-728",
    "word": "bother, irritate, tamper with",
    "translation": "book",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-729",
    "word": "pray (Christian prayer)",
    "translation": "reza",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-730",
    "word": "pray (animist prayer)",
    "translation": "hamulak",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-731",
    "word": "God",
    "translation": "Maromak",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-732",
    "word": "angel",
    "translation": "anju",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-733",
    "word": "witchdoctor, traditional healer",
    "translation": "matan-dook",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-734",
    "word": "corpse (human, before burial)",
    "translation": "mate isin",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-735",
    "word": "life",
    "translation": "vida",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-736",
    "word": "midwife",
    "translation": "parteira",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-737",
    "word": "soul, spirit",
    "translation": "klamar",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-738",
    "word": "ghost",
    "translation": "mate klamar",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-739",
    "word": "spirit of the dead",
    "translation": "matebian",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-740",
    "word": "self",
    "translation": "aan",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-741",
    "word": "traditional communal event",
    "translation": "lia",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-742",
    "word": "coffin",
    "translation": "kaixaun",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-743",
    "word": "hole",
    "translation": "kuak",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-744",
    "word": "hole in the ground",
    "translation": "rai kuak",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-745",
    "word": "grave, cemetery",
    "translation": "rate",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-746",
    "word": "continue, still",
    "translation": "nafatin",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-747",
    "word": "each other",
    "translation": "malu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-748",
    "word": "happy, contented",
    "translation": "kontenti",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-749",
    "word": "happy, joyful",
    "translation": "haksolok",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-750",
    "word": "be in difficulty; Noun hardship",
    "translation": "susar",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-751",
    "word": "upset, grieving, distressed, worried",
    "translation": "laran susar",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-752",
    "word": "cry",
    "translation": "tanis",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-753",
    "word": "shout, scream",
    "translation": "hakilar",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-754",
    "word": "be quiet, silent",
    "translation": "nonook",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-755",
    "word": "love, pity (someone)",
    "translation": "hadomi",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-756",
    "word": "hug, embrace",
    "translation": "hakuak, hakoak",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-757",
    "word": "angry (at)",
    "translation": "hirus",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-758",
    "word": "hate, seek revenge; Noun revenge",
    "translation": "odi",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-759",
    "word": "kiss",
    "translation": "rei",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-760",
    "word": "upset; jealous (of)",
    "translation": "laran moras",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Both intransitive and transitive).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-761",
    "word": "laugh; smile (at)",
    "translation": "hamnasa",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Both intransitive and transitive).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-762",
    "word": "boss",
    "translation": "xefi",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-763",
    "word": "work place",
    "translation": "servisu fatin",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-764",
    "word": "although",
    "translation": "maski",
    "pos": "conjunction",
    "definition": "Adapted from Peace Corps Tetun Course (Conjunctions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-765",
    "word": "perhaps",
    "translation": "parese",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Adverbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-766",
    "word": "it doesn't matter",
    "translation": "la buat ida",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Adverbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-767",
    "word": "arbitrarily, without good reason",
    "translation": "arbiru",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Adverbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-768",
    "word": "hard-working, diligent",
    "translation": "badinas",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Adjectives/Intransitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-769",
    "word": "feel lazy, bored, fed up",
    "translation": "baruk",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Adjectives/Intransitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-770",
    "word": "kind-hearted, good",
    "translation": "laran diak",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Adjectives/Intransitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-771",
    "word": "nasty, wicked",
    "translation": "laran aat",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Adjectives/Intransitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-772",
    "word": "bold, brave",
    "translation": "brani, barani",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Adjectives/Intransitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-773",
    "word": "humble oneself",
    "translation": "haraik aan",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Adjectives/Intransitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-774",
    "word": "arrogant, boast",
    "translation": "foti aan",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Adjectives/Intransitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-775",
    "word": "mischievous",
    "translation": "nakar",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Adjectives/Intransitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-776",
    "word": "soft",
    "translation": "mamar",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Adjectives/Intransitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-777",
    "word": "hard, tough, rigid",
    "translation": "toos",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Adjectives/Intransitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-778",
    "word": "intelligent, cooperative",
    "translation": "ulun mamar",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Adjectives/Intransitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-779",
    "word": "slow learner, stubborn",
    "translation": "ulun toos",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Adjectives/Intransitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-780",
    "word": "Indonesian",
    "translation": "bapa",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-781",
    "word": "owner, master",
    "translation": "nain",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-782",
    "word": "story; history",
    "translation": "istória",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-783",
    "word": "deceive, lie",
    "translation": "bosok",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-784",
    "word": "steal",
    "translation": "naok",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-785",
    "word": "crave (food or drink)",
    "translation": "kaan",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-786",
    "word": "recount, narrate; count",
    "translation": "konta",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-787",
    "word": "January",
    "translation": "Janeiru",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Months).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-788",
    "word": "February",
    "translation": "Fevereiru",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Months).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-789",
    "word": "March",
    "translation": "Marsu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Months).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-790",
    "word": "April",
    "translation": "Abríl",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Months).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-791",
    "word": "May",
    "translation": "Maiu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Months).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-792",
    "word": "June",
    "translation": "Junhu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Months).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-793",
    "word": "July",
    "translation": "Julhu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Months).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-794",
    "word": "August",
    "translation": "Agostu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Months).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-795",
    "word": "September",
    "translation": "Setembru",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Months).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-796",
    "word": "October",
    "translation": "Outubru",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Months).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-797",
    "word": "November",
    "translation": "Novembu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Months).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-798",
    "word": "December",
    "translation": "Dezembru",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Months).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-799",
    "word": "date (used before Portuguese date)",
    "translation": "dia",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other date-related).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-800",
    "word": "what date?",
    "translation": "dia hira?",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other date-related).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-801",
    "word": "date",
    "translation": "data",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other date-related).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-802",
    "word": "written invitation",
    "translation": "konvite",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-803",
    "word": "ceremony",
    "translation": "serimónia",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-804",
    "word": "participation",
    "translation": "partisipasaun",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-805",
    "word": "invite",
    "translation": "konvida",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-806",
    "word": "participate",
    "translation": "partisipa",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-807",
    "word": "since (time)",
    "translation": "dezde",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-808",
    "word": "when, at the moment when",
    "translation": "momentu",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-809",
    "word": "only, except",
    "translation": "só",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-810",
    "word": "fellow (impolite)",
    "translation": "buatamak",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-811",
    "word": "girl, woman (impolite)",
    "translation": "buatinak",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-812",
    "word": "beloved",
    "translation": "doben",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-813",
    "word": "permission",
    "translation": "lisensa",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-814",
    "word": "go-between (e.g. who carries messages between a boy and girl)",
    "translation": "manu-talin",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-815",
    "word": "NGO",
    "translation": "NGO [en ji o] (Eng)",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-816",
    "word": "security",
    "translation": "seguransa",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-817",
    "word": "threaten",
    "translation": "ameasa",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-818",
    "word": "prohibit, forbid; Noun: prohibition",
    "translation": "bandu",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-819",
    "word": "destroy, damage, vandalise, ruin; rape",
    "translation": "estraga",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-820",
    "word": "bother, inconvenience",
    "translation": "inkomoda",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-821",
    "word": "care for; be careful",
    "translation": "kuidadu",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-822",
    "word": "court, go out with; Many people also use it as a noun: boyfriend, fiancé, girlfriend, fiancée",
    "translation": "namora",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-823",
    "word": "tasty; beautiful (of things, dance..., not of people)",
    "translation": "furak",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-824",
    "word": "be ‘on the proww’, keep swapping girlfriends/boyfriends",
    "translation": "matan moris",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-825",
    "word": "alone",
    "translation": "mesak",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-826",
    "word": "bustling, busy, crowded, lively, festive",
    "translation": "rame",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-827",
    "word": "fall in love with",
    "translation": "laran monu ba",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-828",
    "word": "carefully, thoroughly",
    "translation": "di-diak",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-829",
    "word": "especially",
    "translation": "liu-liu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-830",
    "word": "so, very...",
    "translation": "para ...",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-831",
    "word": "some or other (as yet unknown quantity, or type)",
    "translation": "ruma",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-832",
    "word": "truly, very",
    "translation": "teb-tebes",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-833",
    "word": "after all",
    "translation": "kan (I)",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-834",
    "word": "We’ll bash him up.",
    "translation": "Ita bomba tiha nia!",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Expressions used by young men when threatening other men).",
    "exampleEn": "We’ll bash him up.",
    "exampleTet": "Ita bomba tiha nia!",
    "related": []
  },
  {
    "id": "csv-835",
    "word": "What do you want?!",
    "translation": "O hakarak saida?!",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Expressions used by young men when threatening other men).",
    "exampleEn": "What do you want?!",
    "exampleTet": "O hakarak saida?!",
    "related": []
  },
  {
    "id": "csv-836",
    "word": "So, what?!",
    "translation": "Neeebee, nusaa?!",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Expressions used by young men when threatening other men).",
    "exampleEn": "So, what?!",
    "exampleTet": "Neeebee, nusaa?!",
    "related": []
  },
  {
    "id": "csv-837",
    "word": "Let’s bash him!",
    "translation": "Joga nia!",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Expressions used by young men when threatening other men).",
    "exampleEn": "Let’s bash him!",
    "exampleTet": "Joga nia!",
    "related": []
  },
  {
    "id": "csv-838",
    "word": "The foreigner wasn’t properly brought up, bash him to death!",
    "translation": "Malae avoo la hanorin, baku mate tiha nia!",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Expressions used by young men when threatening other men).",
    "exampleEn": "The foreigner wasn’t properly brought up, bash him to death!",
    "exampleTet": "Malae avoo la hanorin, baku mate tiha nia!",
    "related": []
  },
  {
    "id": "csv-839",
    "word": "mother, mother’s sister",
    "translation": "inan",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Kinship terms).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-840",
    "word": "mother (as distinct from mother’s sister)",
    "translation": "inan rasik",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Kinship terms).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-841",
    "word": "mother’s older sister",
    "translation": "inan boot",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Kinship terms).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-842",
    "word": "mother’s younger sister",
    "translation": "inan kiik",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Kinship terms).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-843",
    "word": "‘aunt’: father’s sister; mother’s brother’s wife",
    "translation": "tia",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Kinship terms).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-844",
    "word": "father, father’s brother",
    "translation": "aman",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Kinship terms).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-845",
    "word": "father (as distinct from father’s brother)",
    "translation": "aman rasik",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Kinship terms).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-846",
    "word": "father’s older brother",
    "translation": "aman boot",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Kinship terms).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-847",
    "word": "father’s younger brother",
    "translation": "aman kiik",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Kinship terms).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-848",
    "word": "‘uncle’: mother’s brother; father’s sister’s husband",
    "translation": "tiu",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Kinship terms).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-849",
    "word": "older brother, older son of someone classified as one’s inan or aman",
    "translation": "maun",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Same generation).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-850",
    "word": "older sister, older daughter of someone classified as one’s inan or aman",
    "translation": "biin",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Same generation).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-851",
    "word": "younger brother or sister, younger child of someone classified as one’s inan or aman",
    "translation": "alin",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Same generation).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-852",
    "word": "sister (of a man)",
    "translation": "feton",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Same generation).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-853",
    "word": "brother (of a woman)",
    "translation": "naan",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Same generation).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-854",
    "word": "male cross-cousin (son of one’s mother’s brother or father’s sister)",
    "translation": "primu",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Kinship terms).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-855",
    "word": "female cross-cousin (daughter of one’s mother’s brother or father’s sister)",
    "translation": "prima",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Kinship terms).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-856",
    "word": "brother-in-law (of a woman)",
    "translation": "kunhadu",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Kinship terms).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-857",
    "word": "brother-in-law (of a man)",
    "translation": "rian",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Kinship terms).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-858",
    "word": "sister-in-law",
    "translation": "kunhada",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Kinship terms).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-859",
    "word": "child; child of a woman’s sister or father’s brother",
    "translation": "oan",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (One generation down).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-860",
    "word": "own child (as distinct from children of one’s brothers or sisters)",
    "translation": "oan rasik",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (One generation down).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-861",
    "word": "‘nephew’: son of a woman’s brother or man’s sister",
    "translation": "subrinhu",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (One generation down).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-862",
    "word": "‘niece’: daughter of a woman’s brother or man’s sister",
    "translation": "subrinha",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (One generation down).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-863",
    "word": "parent-in-law",
    "translation": "banin",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (One generation up).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-864",
    "word": "mother-in-law",
    "translation": "banin feto",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (One generation up).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-865",
    "word": "father-in-law",
    "translation": "banin mane",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (One generation up).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-866",
    "word": "daughter-in-law",
    "translation": "feto foun",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (One generation down).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-867",
    "word": "son-in-law",
    "translation": "mane foun",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (One generation down).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-868",
    "word": "oldest child",
    "translation": "oan boot",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (One generation down).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-869",
    "word": "youngest child (ikun ‘tail’)",
    "translation": "oan ikun",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (One generation down).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-870",
    "word": "spouse",
    "translation": "kaben",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Spouse).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-871",
    "word": "family, relatives",
    "translation": "família",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-872",
    "word": "why; what’s up",
    "translation": "nusaa",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-873",
    "word": "resolve, settle, sort out (a dispute)",
    "translation": "rezolve",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbs and verbal expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-874",
    "word": "hear a dispute, and make the final decision (mainly in non-legal setting)",
    "translation": "tesi lia",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbs and verbal expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-875",
    "word": "give compensation; blame",
    "translation": "foo sala",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbs and verbal expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-876",
    "word": "promise",
    "translation": "promete",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbs and verbal expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-877",
    "word": "swear an oath",
    "translation": "jura",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbs and verbal expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-878",
    "word": "kneel with head bent to ask forgiveness",
    "translation": "monu ain",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbs and verbal expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-879",
    "word": "report (about someone's faults), tell on",
    "translation": "kesar",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbs and verbal expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-880",
    "word": "suspect, distrust",
    "translation": "deskonfia",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbs and verbal expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-881",
    "word": "snatach; grab; seize",
    "translation": "hadau",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbs and verbal expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-882",
    "word": "compel, try to force",
    "translation": "obriga",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbs and verbal expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-883",
    "word": "spread gossip",
    "translation": "lori lia",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbs and verbal expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-884",
    "word": "hide",
    "translation": "subar",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbs and verbal expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-885",
    "word": "problem",
    "translation": "problema",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-886",
    "word": "peace, reconciliation",
    "translation": "dame",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-887",
    "word": "traditional ruler, king",
    "translation": "liurai",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-888",
    "word": "traditional elder",
    "translation": "lia nain",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-889",
    "word": "rumour",
    "translation": "lia anin",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-890",
    "word": "traditional communal event, dispute, legal case",
    "translation": "lia",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-891",
    "word": "hand-woven cloth",
    "translation": "tais",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-892",
    "word": "fine (for wrong-doing)",
    "translation": "multa",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-893",
    "word": "custom, tradition",
    "translation": "lisan",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-894",
    "word": "first (before doing something else, or before someone else)",
    "translation": "uluk",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-895",
    "word": "Don’t do it again!",
    "translation": "La bele halo tan!",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-896",
    "word": "If you do it again, ...",
    "translation": "Se halo tan, ...",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-897",
    "word": "no longer ...",
    "translation": "la ... ona",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-898",
    "word": "hurry",
    "translation": "ansi",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-899",
    "word": "attention, care",
    "translation": "atensaun",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-900",
    "word": "farewell",
    "translation": "despedida",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-901",
    "word": "discipline",
    "translation": "disiplina",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-902",
    "word": "behaviour",
    "translation": "hahalok",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-903",
    "word": "collaboration",
    "translation": "kolaborasaun",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-904",
    "word": "wholeheartedness",
    "translation": "laran luak",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-905",
    "word": "message, instructions",
    "translation": "lia menon",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-906",
    "word": "relative, friend, colleague",
    "translation": "maluk",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-907",
    "word": "ministry (government)",
    "translation": "ministériu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-908",
    "word": "meeting (esp. large formal)",
    "translation": "reuniaun",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-909",
    "word": "piece; end",
    "translation": "rohan",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-910",
    "word": "hall (meeting/lecture...)",
    "translation": "salaun",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-911",
    "word": "thank (mainly formal term)",
    "translation": "agradese",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-912",
    "word": "take (opportunity), make the most of",
    "translation": "aproveita",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-913",
    "word": "look for; seek to, try to",
    "translation": "buka",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-914",
    "word": "farewell, say goodbye to",
    "translation": "despede",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-915",
    "word": "take leave of one another",
    "translation": "despede malu",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-916",
    "word": "believe, trust",
    "translation": "fiar",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-917",
    "word": "inform, tell",
    "translation": "foo hatene",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-918",
    "word": "announce, reveal",
    "translation": "foo sai",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-919",
    "word": "give an opportunity to (e.g. to speak)",
    "translation": "foo tempu ba",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-920",
    "word": "gather (usu. people) together",
    "translation": "halibur",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-921",
    "word": "gather together",
    "translation": "halibur malu",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-922",
    "word": "announce",
    "translation": "hatete sai",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-923",
    "word": "continue",
    "translation": "kontinua",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-924",
    "word": "organise",
    "translation": "organiza",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-925",
    "word": "prepare",
    "translation": "prepara",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-926",
    "word": "these specific",
    "translation": "hirak",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-927",
    "word": "finish",
    "translation": "remata",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-928",
    "word": "in a hurry",
    "translation": "ho ansi",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Example).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-929",
    "word": "pay attention, care for; warn",
    "translation": "foo atensaun ba...",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Example).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-930",
    "word": "farewell party",
    "translation": "festa despedida",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Example).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-931",
    "word": "in a disciplined way",
    "translation": "ho disiplina",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Example).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-932",
    "word": "bad behaviour",
    "translation": "hahalok aat",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Example).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-933",
    "word": "finish, be finished",
    "translation": "hotu",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-934",
    "word": "suddenly",
    "translation": "derepenti",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-935",
    "word": "initially, at first",
    "translation": "fo-foun",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-936",
    "word": "say sorry, ask forgiveness",
    "translation": "husu deskulpa",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-937",
    "word": "suit, be pleasing to",
    "translation": "kona ho ... nia laran",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-938",
    "word": "approximately",
    "translation": "maizoumenus",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-939",
    "word": "as, in the capacity of",
    "translation": "nudar",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-940",
    "word": "a little, a small",
    "translation": "oan-ida",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-941",
    "word": "whole, entire; all",
    "translation": "tomak",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-942",
    "word": "receive wholeheartedly",
    "translation": "simu ho laran luak",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-943",
    "word": "IMPERATIVE MARKER: do it without me",
    "translation": "baa",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-944",
    "word": "school student (especially primary school)",
    "translation": "eskola oan",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (People).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-945",
    "word": "student (especially primary school)",
    "translation": "alunu / a",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (People).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-946",
    "word": "university student",
    "translation": "estudante",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (People).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-947",
    "word": "school teacher (male / female)",
    "translation": "mestri / mestra",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (People).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-948",
    "word": "teacher, lecturer (male / female)",
    "translation": "profesór / profesora",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (People).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-949",
    "word": "kindergarten, preschool",
    "translation": "jardín infantíl",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Educational institutions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-950",
    "word": "primary school",
    "translation": "eskola primária",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Educational institutions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-951",
    "word": "junior high school",
    "translation": "eskola pre-sekundária",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Educational institutions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-952",
    "word": "senior high school",
    "translation": "eskola sekundária",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Educational institutions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-953",
    "word": "lecture, lesson",
    "translation": "aula",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-954",
    "word": "exam; Verb do an exam",
    "translation": "ezami",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-955",
    "word": "class, grade, year (of school)",
    "translation": "klase",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-956",
    "word": "course (especially short courses)",
    "translation": "kursu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-957",
    "word": "homework",
    "translation": "servisu uma",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-958",
    "word": "exam results",
    "translation": "valór",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-959",
    "word": "interview",
    "translation": "intervista",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-960",
    "word": "CV (curriculum vitae)",
    "translation": "CV [si vi]",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-961",
    "word": "graduate from",
    "translation": "akaba",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbal expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-962",
    "word": "graduate from (a course, school or university)",
    "translation": "hasai",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbal expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-963",
    "word": "have the chance to, manage to",
    "translation": "biban",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbal expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-964",
    "word": "teach a course",
    "translation": "foo kursu",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbal expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-965",
    "word": "attend a course",
    "translation": "tuir kursu",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbal expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-966",
    "word": "take (a lot of) time",
    "translation": "haan tempu",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbal expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-967",
    "word": "how long does ... take?",
    "translation": "...haan tempu hira?",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbal expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-968",
    "word": "pass (an exam)",
    "translation": "liu (ezami)",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbal expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-969",
    "word": "fail (an exam)",
    "translation": "la liu (ezami)",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbal expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-970",
    "word": "during, for the specified period of time",
    "translation": "durante",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-971",
    "word": "well, thoroughly",
    "translation": "halo di-diak",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-972",
    "word": "who, which, ... (RELATIVE CLAUSE MARKER)",
    "translation": "nebee",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-973",
    "word": "OK",
    "translation": "OK",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-974",
    "word": "bachelor’s degree (three years)",
    "translation": "baxarelatu",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Tertiary qualifications).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-975",
    "word": "bachelor’s degree (four years)",
    "translation": "lisensiatura",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Tertiary qualifications).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-976",
    "word": "master’s degree",
    "translation": "mestradu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Tertiary qualifications).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-977",
    "word": "PhD",
    "translation": "doutoramentu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Tertiary qualifications).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-978",
    "word": "training",
    "translation": "treinamentu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-979",
    "word": "formation, training",
    "translation": "formasaun",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-980",
    "word": "vocational training",
    "translation": "formasaun profisionál",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-981",
    "word": "scholarship",
    "translation": "bolsa (de) estudu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-982",
    "word": "faculty",
    "translation": "fakuldade",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-983",
    "word": "future",
    "translation": "futuru",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-984",
    "word": "graduation",
    "translation": "graduasaun",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-985",
    "word": "department, field of study (e.g. biology)",
    "translation": "departementu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-986",
    "word": "language; voice",
    "translation": "lian",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-987",
    "word": "thesis",
    "translation": "teze",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-988",
    "word": "lecturer",
    "translation": "dosenti",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-989",
    "word": "certificate",
    "translation": "sertifikadu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-990",
    "word": "university",
    "translation": "universidade",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-991",
    "word": "seminary",
    "translation": "semináriu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-992",
    "word": "pick up",
    "translation": "foti",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbal and adjectival expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-993",
    "word": "study mathematics, major in mathematics",
    "translation": "foti matemática",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbal and adjectival expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-994",
    "word": "lucky, fortunate",
    "translation": "sorti",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbal and adjectival expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-995",
    "word": "these days",
    "translation": "agora dadaun",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-996",
    "word": "agriculture",
    "translation": "agrikultura",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Subjects).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-997",
    "word": "literacy",
    "translation": "alfabetizasaun",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Subjects).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-998",
    "word": "art",
    "translation": "arte",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Subjects).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-999",
    "word": "biology",
    "translation": "biolojia",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Subjects).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1000",
    "word": "chemistry",
    "translation": "kímika",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Subjects).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1001",
    "word": "sport, exercise",
    "translation": "desportu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Subjects).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1002",
    "word": "education",
    "translation": "edukasaun",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Subjects).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1003",
    "word": "economics",
    "translation": "ekonomia",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Subjects).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1004",
    "word": "engineering",
    "translation": "enjenharia",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Subjects).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1005",
    "word": "statistics",
    "translation": "estatístika",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Subjects).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1006",
    "word": "philosophy",
    "translation": "filozofia",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Subjects).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1007",
    "word": "physics",
    "translation": "fízika",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Subjects).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1008",
    "word": "history",
    "translation": "istória",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Subjects).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1009",
    "word": "geography",
    "translation": "jeografia",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Subjects).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1010",
    "word": "geology",
    "translation": "jeolojia",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Subjects).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1011",
    "word": "business",
    "translation": "komérsiu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Subjects).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1012",
    "word": "... language",
    "translation": "língua ...",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Subjects).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1013",
    "word": "linguistics",
    "translation": "linguístika",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Subjects).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1014",
    "word": "mathematics",
    "translation": "matemátika",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Subjects).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1015",
    "word": "psychology",
    "translation": "psikolojia",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Subjects).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1016",
    "word": "religion",
    "translation": "relijiaun",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Subjects).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1017",
    "word": "science",
    "translation": "siénsia",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Subjects).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1018",
    "word": "natural sciences",
    "translation": "siénsias naturais",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Subjects).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1019",
    "word": "political science",
    "translation": "siénsia polítika",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Subjects).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1020",
    "word": "social sciences",
    "translation": "siénsias sosiais",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Subjects).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1021",
    "word": "theology",
    "translation": "teolojia",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Subjects).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1022",
    "word": "manual arts",
    "translation": "trabalhus manuais",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Subjects).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1023",
    "word": "farmer (with non-rice crops)",
    "translation": "toos nain",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns: occupations).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1024",
    "word": "rice farmer",
    "translation": "natar nain",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns: occupations).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1025",
    "word": "lawyer",
    "translation": "advogadu/a",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns: occupations).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1026",
    "word": "engineer",
    "translation": "enjenheiru/a",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns: occupations).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1027",
    "word": "priest (Catholic)",
    "translation": "padre",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns: occupations).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1028",
    "word": "nun (Catholic)",
    "translation": "madre",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns: occupations).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1029",
    "word": "bus conductor",
    "translation": "konjak (I)",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns: occupations).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1030",
    "word": "security guard; security",
    "translation": "seguransa",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns: occupations).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1031",
    "word": "security guard",
    "translation": "sekúriti (Eng)",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns: occupations).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1032",
    "word": "police",
    "translation": "polísia",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns: occupations).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1033",
    "word": "interpreter; Verb interpret",
    "translation": "durbasa",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns: occupations).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1034",
    "word": "translator",
    "translation": "tradutór",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns: occupations).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1035",
    "word": "journalist",
    "translation": "jornalista",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns: occupations).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1036",
    "word": "tradesman, craftsman",
    "translation": "badaen",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns: occupations).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1037",
    "word": "carpenter",
    "translation": "badaen ai",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns: occupations).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1038",
    "word": "blacksmith",
    "translation": "badaen besi",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns: occupations).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1039",
    "word": "bricklayer, stonemason",
    "translation": "badaen fatuk",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns: occupations).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1040",
    "word": "job vacancy",
    "translation": "vaga",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns: occupations).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1041",
    "word": "agricultural gardens",
    "translation": "toos",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1042",
    "word": "rice paddy",
    "translation": "natar",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1043",
    "word": "public holiday, holiday",
    "translation": "feriadu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1044",
    "word": "holiday, vacation",
    "translation": "férias",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1045",
    "word": "administration",
    "translation": "administrasun",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1046",
    "word": "section",
    "translation": "seksaun",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1047",
    "word": "government",
    "translation": "governu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1048",
    "word": "the state, national government",
    "translation": "estadu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1049",
    "word": "office",
    "translation": "kantor (I)",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1050",
    "word": "letter, document; (playing) card",
    "translation": "surat",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1051",
    "word": "form (to fill in)",
    "translation": "formuláriu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1052",
    "word": "seek to earn a living",
    "translation": "buka moris",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbal expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1053",
    "word": "court death",
    "translation": "buka death",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbal expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1054",
    "word": "conduct small business",
    "translation": "fila liman",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbal expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1055",
    "word": "win, earn",
    "translation": "manaan",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbal expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1056",
    "word": "earn money",
    "translation": "manaan osan",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbal expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1057",
    "word": "what work does ... do?",
    "translation": "...servisu saida?",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbal expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1058",
    "word": "doesn't have a job",
    "translation": "...la servisu",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbal expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1059",
    "word": "ask for a day off/holidays",
    "translation": "husu lisensa",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbal expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1060",
    "word": "recruit",
    "translation": "rekruta",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbal expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1061",
    "word": "become",
    "translation": "sai",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbal expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1062",
    "word": "very ... (informal)",
    "translation": "... para mate",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1063",
    "word": "in vain, uselessly",
    "translation": "saugati deit",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1064",
    "word": "hard to get",
    "translation": "araska",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1065",
    "word": "president",
    "translation": "prezidenti",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns: people).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1066",
    "word": "prime minister",
    "translation": "primeiru ministru",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns: people).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1067",
    "word": "minister (in government)",
    "translation": "ministru",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns: people).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1068",
    "word": "deputy minister (in government)",
    "translation": "visi ministru",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns: people).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1069",
    "word": "council of ministers",
    "translation": "konselhu ministru",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns: people).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1070",
    "word": "secretary of state",
    "translation": "sekretáriu/a estadu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns: people).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1071",
    "word": "member of parliament",
    "translation": "deputadu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns: people).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1072",
    "word": "director",
    "translation": "diretór / diretora",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns: people).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1073",
    "word": "director general",
    "translation": "diretór jerál",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns: people).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1074",
    "word": "deputy",
    "translation": "visi",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns: people).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1075",
    "word": "traditional Timorese ruler",
    "translation": "liurai",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns: people).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1076",
    "word": "youth",
    "translation": "juventude",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns: people).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1077",
    "word": "youth leader",
    "translation": "xefi juventude",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns: people).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1078",
    "word": "office worker, civil servant",
    "translation": "funsionáriu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns: people).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1079",
    "word": "staff",
    "translation": "staf",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns: people).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1080",
    "word": "representative",
    "translation": "reprezentante",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns: people).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1081",
    "word": "responsibility",
    "translation": "responsabilidade",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns: other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1082",
    "word": "role, duties, task, job description",
    "translation": "knaar",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns: other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1083",
    "word": "obligation",
    "translation": "obrigasaun",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns: other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1084",
    "word": "duty",
    "translation": "devér",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns: other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1085",
    "word": "voter registration card (used as identity card)",
    "translation": "kartaun eleitorál",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns: other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1086",
    "word": "certificate: baptism (batizmu), marriage (kazamentu), and citizenship (RDTL)",
    "translation": "sertidaun",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns: other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1087",
    "word": "seminar",
    "translation": "semináriu (P)",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns: other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1088",
    "word": "attend to (a person needing assistance)",
    "translation": "atende",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1089",
    "word": "promote (somebody to a higher position), appoint (somebody)",
    "translation": "foti",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1090",
    "word": "rule, govern",
    "translation": "ukun",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1091",
    "word": "responsible for",
    "translation": "toma konta",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1092",
    "word": "press; oppress",
    "translation": "hanehan",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1093",
    "word": "step; Noun step",
    "translation": "hakat",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs and adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1094",
    "word": "before",
    "translation": "antes",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1095",
    "word": "after",
    "translation": "liu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1096",
    "word": "increase, add more",
    "translation": "aumenta",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1097",
    "word": "pull",
    "translation": "dada",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1098",
    "word": "connect up to electricity",
    "translation": "dada ahi",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1099",
    "word": "connect up to water source; pump water",
    "translation": "dada bee",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1100",
    "word": "push",
    "translation": "dudu",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1101",
    "word": "fill up with (e.g. petrol, water, dirt)",
    "translation": "enxi",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1102",
    "word": "split",
    "translation": "fera",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1103",
    "word": "tie up into a bundle",
    "translation": "futu",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1104",
    "word": "stack, lay (bricks)",
    "translation": "hada",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1105",
    "word": "set up, raise (to vertical); establish",
    "translation": "harii",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1106",
    "word": "lift by strap or handle",
    "translation": "hiit",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1107",
    "word": "mix",
    "translation": "kahur",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1108",
    "word": "ferry",
    "translation": "lalin",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1109",
    "word": "relate to, connect with, join",
    "translation": "liga",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1110",
    "word": "set up, install, assemble",
    "translation": "monta",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1111",
    "word": "spread out (over a flat surface); lay (tiles, cement)",
    "translation": "nahe",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1112",
    "word": "paint (wall/picture), draw (picture)",
    "translation": "pinta",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1113",
    "word": "nail",
    "translation": "prega",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1114",
    "word": "plaster (a wall)",
    "translation": "reboka",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1115",
    "word": "rehabilitate, reconstruct (buildings)",
    "translation": "rehab (I)",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1116",
    "word": "take to pieces, demolish",
    "translation": "sobu",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1117",
    "word": "measure",
    "translation": "sukat",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1118",
    "word": "scoop, ladle, shovel, dish up",
    "translation": "suru",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1119",
    "word": "chop",
    "translation": "taa",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1120",
    "word": "put on a tin roof",
    "translation": "taka kaleen",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1121",
    "word": "weigh",
    "translation": "tetu",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1122",
    "word": "join shorter pieces to make one long piece",
    "translation": "tutan",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1123",
    "word": "last",
    "translation": "ikus",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1124",
    "word": "disintegrating (of wood caused by insect pests, of metal due to extensive rust)",
    "translation": "lahuk",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1125",
    "word": "thick (mainly of flat or thread-like objects, such as cloth, books or hair)",
    "translation": "mahar",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1126",
    "word": "thin (mainly of flat or thread-like objects)",
    "translation": "mihis",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1127",
    "word": "empty",
    "translation": "mamuk",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1128",
    "word": "full",
    "translation": "nakonu",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1129",
    "word": "enough, of the right size, fit well",
    "translation": "natoon",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1130",
    "word": "in the end, finally now",
    "translation": "ikus mai",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1131",
    "word": "in advance",
    "translation": "kedas, kedan",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1132",
    "word": "do not yet (do whatever is being suggested)",
    "translation": "keta lai",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1133",
    "word": "PROGRESSIVE",
    "translation": "dadauk, dadaun",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1134",
    "word": "recently, a very short time ago",
    "translation": "foin dadauk (nee)",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1135",
    "word": "pliers",
    "translation": "alkati",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Tools).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1136",
    "word": "axe",
    "translation": "baliun",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Tools).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1137",
    "word": "saw (tool); Verb saw (wood, etc.)",
    "translation": "kadoo",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Tools).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1138",
    "word": "spoon; shovel, spade, trowel",
    "translation": "kanuru",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Tools).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1139",
    "word": "hammer",
    "translation": "martelu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Tools).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1140",
    "word": "key, spanner",
    "translation": "xavi",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Tools).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1141",
    "word": "screwdriver",
    "translation": "xafenda",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Tools).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1142",
    "word": "wood, timber; plant",
    "translation": "ai",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Materials).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1143",
    "word": "plank, board",
    "translation": "ai kabelak",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Materials).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1144",
    "word": "glazed tile",
    "translation": "azuleju",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Materials).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1145",
    "word": "palm-leaf stalk (used to build walls)",
    "translation": "bebak",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Materials).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1146",
    "word": "iron, metal",
    "translation": "besi",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Materials).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1147",
    "word": "cement block",
    "translation": "blok (I)",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Materials).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1148",
    "word": "rock, stone",
    "translation": "fatuk",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Materials).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1149",
    "word": "roofing iron, tin can",
    "translation": "kaleen",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Materials).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1150",
    "word": "wet cement mixture; dough; grease; hard plastic",
    "translation": "masa",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Materials).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1151",
    "word": "materials (e.g. for building), equipment",
    "translation": "materiál",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Materials).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1152",
    "word": "prefabricated panel made of bebak",
    "translation": "piku",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Materials).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1153",
    "word": "metal nail",
    "translation": "pregu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Materials).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1154",
    "word": "sand",
    "translation": "raihenek",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Materials).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1155",
    "word": "cement",
    "translation": "sementi",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Materials).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1156",
    "word": "ink, paint, dye",
    "translation": "tinta",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Materials).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1157",
    "word": "glass",
    "translation": "vidru",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Materials).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1158",
    "word": "hearing, audience (with a senior person)",
    "translation": "audiénsia",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1159",
    "word": "objective, purpose, goal",
    "translation": "objetivu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1160",
    "word": "schedule, timetable",
    "translation": "oráriu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1161",
    "word": "part, section",
    "translation": "parte",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1162",
    "word": "patience; that's life",
    "translation": "pasiénsia",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1163",
    "word": "policy, plan, program",
    "translation": "programa",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1164",
    "word": "present (e.g. a report), introduce (a person)",
    "translation": "aprezenta",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1165",
    "word": "introduce yourself",
    "translation": "aprezenta aan",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1166",
    "word": "request (someone to do something); order (goods)",
    "translation": "hameno",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1167",
    "word": "confirm",
    "translation": "konfirma",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1168",
    "word": "manage to, succeed in doing",
    "translation": "konsege",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1169",
    "word": "mark , put a mark on; set a date/time",
    "translation": "marka",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1170",
    "word": "move, shift",
    "translation": "muda",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1171",
    "word": "fill in (a form)",
    "translation": "prenxe",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1172",
    "word": "try; tempt",
    "translation": "tenta",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1173",
    "word": "late, delayed",
    "translation": "atraza",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1174",
    "word": "in fact (introduces a surprising conclusion)",
    "translation": "afinál",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1175",
    "word": "exactly",
    "translation": "lo-loos",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1176",
    "word": "each, every",
    "translation": "ida-idak",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1177",
    "word": "opening (of meeting...)",
    "translation": "abertura",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1178",
    "word": "agenda",
    "translation": "ajenda",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1179",
    "word": "topic (of discussion), issue",
    "translation": "asuntu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1180",
    "word": "notice, announcement",
    "translation": "avizu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1181",
    "word": "debate; Verb debate",
    "translation": "debate",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1182",
    "word": "example",
    "translation": "ezemplu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1183",
    "word": "comment",
    "translation": "komentáru",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1184",
    "word": "message",
    "translation": "mensajen",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1185",
    "word": "question (in formal context)",
    "translation": "pergunta",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1186",
    "word": "policy; politics",
    "translation": "polítika",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1187",
    "word": "point; stitch",
    "translation": "pontu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1188",
    "word": "spokesperson",
    "translation": "portavós",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1189",
    "word": "reply, response",
    "translation": "resposta",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1190",
    "word": "moderator, chairman/woman",
    "translation": "moderadór",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1191",
    "word": "summary",
    "translation": "rezumu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1192",
    "word": "snack (at meeting)",
    "translation": "snek (Inglés)",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1193",
    "word": "open (conference...)",
    "translation": "halo abertura ba...",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Examples).",
    "exampleEn": "open (conference...)",
    "exampleTet": "halo abertura ba...",
    "related": []
  },
  {
    "id": "csv-1194",
    "word": "raise an issue",
    "translation": "foti asuntu",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Examples).",
    "exampleEn": "raise an issue",
    "exampleTet": "foti asuntu",
    "related": []
  },
  {
    "id": "csv-1195",
    "word": "make/post up an announcement",
    "translation": "hatoo/foo avizu",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Examples).",
    "exampleEn": "make/post up an announcement",
    "exampleTet": "hatoo/foo avizu",
    "related": []
  },
  {
    "id": "csv-1196",
    "word": "announcement is made/posted",
    "translation": "avizu sai ona",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Examples).",
    "exampleEn": "announcement is made/posted",
    "exampleTet": "avizu sai ona",
    "related": []
  },
  {
    "id": "csv-1197",
    "word": "make a comment",
    "translation": "halo/foo k~",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Examples).",
    "exampleEn": "make a comment",
    "exampleTet": "halo/foo k~",
    "related": []
  },
  {
    "id": "csv-1198",
    "word": "deliver a message",
    "translation": "hatoo mensajen",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Examples).",
    "exampleEn": "deliver a message",
    "exampleTet": "hatoo mensajen",
    "related": []
  },
  {
    "id": "csv-1199",
    "word": "ask a question",
    "translation": "husu/hatoo p~",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Examples).",
    "exampleEn": "ask a question",
    "exampleTet": "husu/hatoo p~",
    "related": []
  },
  {
    "id": "csv-1200",
    "word": "reply to...",
    "translation": "foo resposta ba...",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Examples).",
    "exampleEn": "reply to...",
    "exampleTet": "foo resposta ba...",
    "related": []
  },
  {
    "id": "csv-1201",
    "word": "summarise",
    "translation": "halo rezumu",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Examples).",
    "exampleEn": "summarise",
    "exampleTet": "halo rezumu",
    "related": []
  },
  {
    "id": "csv-1202",
    "word": "happen",
    "translation": "akontese",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1203",
    "word": "appear, happen",
    "translation": "mosu",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1204",
    "word": "accept, agree to",
    "translation": "aseita",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1205",
    "word": "assent, agree to",
    "translation": "konkorda",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1206",
    "word": "add to",
    "translation": "hatutan",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1207",
    "word": "remain",
    "translation": "hela",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1208",
    "word": "open a meeting",
    "translation": "loke reuniaun",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1209",
    "word": "close a meeting",
    "translation": "taka reuniaun",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1210",
    "word": "dream; Noun dream",
    "translation": "mehi",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1211",
    "word": "ready, prepared",
    "translation": "prontu",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1212",
    "word": "than (comparison)",
    "translation": "duké",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1213",
    "word": "so that / and",
    "translation": "hodi",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1214",
    "word": "any old how, arbitrarily",
    "translation": "nar-naran deit",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1215",
    "word": "for example",
    "translation": "por ezemplu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1216",
    "word": "on condition that, provided that",
    "translation": "naran katak",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1217",
    "word": "and next",
    "translation": "tuir mai",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1218",
    "word": "What happened?",
    "translation": "Saida mak akontese?",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Examples).",
    "exampleEn": "What happened?",
    "exampleTet": "Saida mak akontese?",
    "related": []
  },
  {
    "id": "csv-1219",
    "word": "Many problems arose.",
    "translation": "Problema barak mosu",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Examples).",
    "exampleEn": "Many problems arose.",
    "exampleTet": "Problema barak mosu",
    "related": []
  },
  {
    "id": "csv-1220",
    "word": "accept the decision",
    "translation": "aseita desizaun",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Examples).",
    "exampleEn": "accept the decision",
    "exampleTet": "aseita desizaun",
    "related": []
  },
  {
    "id": "csv-1221",
    "word": "agree (verbally) with Mr. José",
    "translation": "konkorda ho Sr. José",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Examples).",
    "exampleEn": "agree (verbally) with Mr. José",
    "exampleTet": "konkorda ho Sr. José",
    "related": []
  },
  {
    "id": "csv-1222",
    "word": "agree that...",
    "translation": "konkorda katak...",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Examples).",
    "exampleEn": "agree that...",
    "exampleTet": "konkorda katak...",
    "related": []
  },
  {
    "id": "csv-1223",
    "word": "pass on/add to what is said",
    "translation": "hatutan lian",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Examples).",
    "exampleEn": "pass on/add to what is said",
    "exampleTet": "hatutan lian",
    "related": []
  },
  {
    "id": "csv-1224",
    "word": "talk nonsense, talk unsuitably",
    "translation": "koalia nar-naran deit",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Examples).",
    "exampleEn": "talk nonsense, talk unsuitably",
    "exampleTet": "koalia nar-naran deit",
    "related": []
  },
  {
    "id": "csv-1225",
    "word": "staple",
    "translation": "agrafa",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1226",
    "word": "squeeze, clip, peg",
    "translation": "habit",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1227",
    "word": "erase",
    "translation": "apaga",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1228",
    "word": "file; Verb file",
    "translation": "arkivu",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1229",
    "word": "tidy up, put away",
    "translation": "haloot",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1230",
    "word": "tidy up",
    "translation": "aruma",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1231",
    "word": "sign (your name)",
    "translation": "asina",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1232",
    "word": "cheque",
    "translation": "cek (I) / xeke (P)",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1233",
    "word": "deliver, hand over",
    "translation": "entrega",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1234",
    "word": "photocopy; Noun",
    "translation": "fotokopi",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1235",
    "word": "type",
    "translation": "ketík (I)",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1236",
    "word": "correct",
    "translation": "koriji",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1237",
    "word": "lose; lost, defeated",
    "translation": "lakon",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1238",
    "word": "pass",
    "translation": "pasa",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1239",
    "word": "print",
    "translation": "prin (I)",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1240",
    "word": "test; prove",
    "translation": "prova",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1241",
    "word": "register",
    "translation": "rejista",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1242",
    "word": "arrange; treat",
    "translation": "trata",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1243",
    "word": "doubtful, unsure; Noun doubt",
    "translation": "dúvida",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1244",
    "word": "clear",
    "translation": "klaru",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1245",
    "word": "signature",
    "translation": "asinatura",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1246",
    "word": "report",
    "translation": "relatóriu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1247",
    "word": "lest",
    "translation": "keta halo (be)",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Other).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1248",
    "word": "stapler",
    "translation": "agrafadór",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Office equipment).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1249",
    "word": "alphabet",
    "translation": "ABC; alfabetu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Office equipment).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1250",
    "word": "eraser",
    "translation": "apagadór",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Office equipment).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1251",
    "word": "drawing, picture",
    "translation": "dezenhu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Office equipment).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1252",
    "word": "document",
    "translation": "dokumentu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Office equipment).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1253",
    "word": "envelope",
    "translation": "envelope",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Office equipment).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1254",
    "word": "drawer",
    "translation": "gaveta",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Office equipment).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1255",
    "word": "glue; Verb glue",
    "translation": "goma",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Office equipment).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1256",
    "word": "stamp (rubber)",
    "translation": "karimbu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Office equipment).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1257",
    "word": "card",
    "translation": "kartaun",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Office equipment).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1258",
    "word": "scissors",
    "translation": "kateri",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Office equipment).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1259",
    "word": "computer",
    "translation": "komputadór",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Office equipment).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1260",
    "word": "pen, biro",
    "translation": "lapizeira",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Office equipment).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1261",
    "word": "photocopy machine",
    "translation": "mákina fotokopi",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Office equipment).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1262",
    "word": "folder",
    "translation": "map (I)",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Office equipment).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1263",
    "word": "application",
    "translation": "rekerimentu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Office equipment).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1264",
    "word": "sheet of paper",
    "translation": "surat tahan",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Office equipment).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1265",
    "word": "liquid paper, whiteout",
    "translation": "tipeks",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Office equipment).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1266",
    "word": "staple papers",
    "translation": "agrafa surat",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Associated activities).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1267",
    "word": "sort alphabetically",
    "translation": "forma/tau tuir alfabetu",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Associated activities).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1268",
    "word": "erase a wrong word",
    "translation": "apaga liafuan ke sala",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Associated activities).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1269",
    "word": "put a letter in an envelope",
    "translation": "hatama surat ba e~",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Associated activities).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1270",
    "word": "glue up an envelope",
    "translation": "goma envelope",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Associated activities).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1271",
    "word": "stamp a document",
    "translation": "tau k~ ba surat",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Associated activities).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1272",
    "word": "cut a piece of paper",
    "translation": "tesi surat tahan",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Associated activities).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1273",
    "word": "type a report into the computer",
    "translation": "hatama relatóriu ba k~",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Associated activities).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1274",
    "word": "photocopy a document",
    "translation": "fotokopi dokumentu",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Associated activities).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1275",
    "word": "delete erroneous letters",
    "translation": "hamoos letra nebee sala",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Associated activities).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1276",
    "word": "telephone; Verb ring, call (on the phone)",
    "translation": "telefone",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1277",
    "word": "mobile phone",
    "translation": "mobail (Eng)",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1278",
    "word": "phone credit; phone card",
    "translation": "pulsa",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1279",
    "word": "SIM card",
    "translation": "SIM card (Eng)",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1280",
    "word": "balance (financial term)",
    "translation": "saldu (P)",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1281",
    "word": "SMS",
    "translation": "SMS [‘es em es’] (Eng)",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1282",
    "word": "message, SMS",
    "translation": "mensajen",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1283",
    "word": "network, net [Ind=jaringan]",
    "translation": "redi",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1284",
    "word": "phone number",
    "translation": "númeru telefone",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1285",
    "word": "PIN number",
    "translation": "númeru PIN (Eng)",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1286",
    "word": "charger",
    "translation": "karegadór",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1287",
    "word": "answer (the phone)",
    "translation": "foti (telefone)",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1288",
    "word": "miss call, do a missed call",
    "translation": "miss call [‘mis kol’]",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1289",
    "word": "wrong number (lit. ‘wrong connect’)",
    "translation": "sala sambung (I)",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1290",
    "word": "charge (a battery, phone...)",
    "translation": "karega",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1291",
    "word": "ring, call (on the telephone)",
    "translation": "telefone",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1292",
    "word": "ring, call (on the telephone); knock on",
    "translation": "dere",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1293",
    "word": "battery is low/flat.",
    "translation": "pilha fraku",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1294",
    "word": "the phone is off/dead. (e.g. as battery flat, battery problems...)",
    "translation": "telefone mate",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1295",
    "word": "switch off the phone",
    "translation": "hamate telefone",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1296",
    "word": "switch on the phone",
    "translation": "hamoris telefone",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1297",
    "word": "hang up, end the call",
    "translation": "taka telefone",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1298",
    "word": "the phone is ringing.",
    "translation": "telefone lian",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1299",
    "word": "s/he’s not answering",
    "translation": "telefone la tama",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1300",
    "word": "there’s no signal.",
    "translation": "la iha redi",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1301",
    "word": "project, esp. large-scale building or rehabilitation project",
    "translation": "projetu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1302",
    "word": "data",
    "translation": "dadus",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1303",
    "word": "businessman/woman",
    "translation": "emprezáriu / a",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1304",
    "word": "finance",
    "translation": "finansa",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1305",
    "word": "interest (on money)",
    "translation": "funan",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1306",
    "word": "power, ability",
    "translation": "kbiit",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1307",
    "word": "capital (financial)",
    "translation": "osan inan",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1308",
    "word": "debt, loan",
    "translation": "tusan",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1309",
    "word": "investor",
    "translation": "investidór (P)",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1310",
    "word": "credit",
    "translation": "kréditu / kredit",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1311",
    "word": "budget",
    "translation": "orsamentu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1312",
    "word": "small change (esp. coins)",
    "translation": "osan rahun",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1313",
    "word": "pay, payment",
    "translation": "pagamentu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1314",
    "word": "income",
    "translation": "osan tama",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1315",
    "word": "expenditure",
    "translation": "osan sai",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1316",
    "word": "research",
    "translation": "peskiza",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1317",
    "word": "percent",
    "translation": "porsentu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1318",
    "word": "price, cost",
    "translation": "presu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1319",
    "word": "bank account, account",
    "translation": "konta",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1320",
    "word": "bank account",
    "translation": "rekening (I)",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1321",
    "word": "resources",
    "translation": "rekursus",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1322",
    "word": "tax",
    "translation": "taxa",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1323",
    "word": "treasurer",
    "translation": "tezoureiru",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1324",
    "word": "total",
    "translation": "totál",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1325",
    "word": "receipt",
    "translation": "resibu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1326",
    "word": "salary",
    "translation": "saláriu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1327",
    "word": "period",
    "translation": "periodu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1328",
    "word": "buy on credit, be in debt for",
    "translation": "deve",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1329",
    "word": "borrow money from ...",
    "translation": "deve osan hosi ...",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1330",
    "word": "spend (esp. a lot); waste",
    "translation": "gasta",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1331",
    "word": "copy",
    "translation": "halo tuir",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1332",
    "word": "withdraw money, pick up money",
    "translation": "foti osan",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1333",
    "word": "withdraw money (from...)",
    "translation": "hasai osan (hosi...)",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1334",
    "word": "deposit money (into...)",
    "translation": "hatama osan (ba...)",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1335",
    "word": "export",
    "translation": "esporta",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1336",
    "word": "import",
    "translation": "importa",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1337",
    "word": "invest money",
    "translation": "kuda osan",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1338",
    "word": "contribute",
    "translation": "kontribui",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1339",
    "word": "lack, have insufficient",
    "translation": "kuran",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1340",
    "word": "bargain, trade; Noun contract",
    "translation": "kontratu",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1341",
    "word": "manage",
    "translation": "kaer",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1342",
    "word": "manage (work, money, etc., not people)",
    "translation": "maneja",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1343",
    "word": "save (money)",
    "translation": "poupa (osan)",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1344",
    "word": "poor; Noun orphan",
    "translation": "kiak",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Inransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1345",
    "word": "rich; Noun riches",
    "translation": "riku",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Inransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1346",
    "word": "private",
    "translation": "partikulár",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Inransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1347",
    "word": "slash",
    "translation": "lere",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1348",
    "word": "clear land for a new garden",
    "translation": "lere rai",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1349",
    "word": "burn",
    "translation": "sunu",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1350",
    "word": "burn off, burn a patch of ground",
    "translation": "sunu rai",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1351",
    "word": "plough",
    "translation": "fila rai",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1352",
    "word": "plant (seeds in holes), transplant (seedlings)",
    "translation": "kuda",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1353",
    "word": "scatter",
    "translation": "kari",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1354",
    "word": "broadcast seeds",
    "translation": "kari fini",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1355",
    "word": "water (by sprinkling), spray (e.g. fertiliser)",
    "translation": "rega",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1356",
    "word": "mill, spin, turn",
    "translation": "dulas",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1357",
    "word": "collect firewood",
    "translation": "hili ai",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1358",
    "word": "place a prohibition (e.g. on entering a plot of land)",
    "translation": "tara bandu",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1359",
    "word": "place a prohibition on picking fruit",
    "translation": "tau horok",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1360",
    "word": "farmer (educated term)",
    "translation": "agrikultór",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1361",
    "word": "farmer (with toos)",
    "translation": "toos nain",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1362",
    "word": "grass, weeds, shrubs",
    "translation": "duut",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1363",
    "word": "irrigation",
    "translation": "irigasaun",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1364",
    "word": "ditch, drain, channel, gutter",
    "translation": "bee dalan",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1365",
    "word": "pesticide",
    "translation": "pestisida",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1366",
    "word": "fertiliser",
    "translation": "adubu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1367",
    "word": "warehouse",
    "translation": "armazén",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1368",
    "word": "result, yield",
    "translation": "rezultadu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1369",
    "word": "garden bed (raised)",
    "translation": "kantadeiru, kantreiru",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1370",
    "word": "seed (for planting)",
    "translation": "fini",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1371",
    "word": "type, kind (of something)",
    "translation": "oin",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1372",
    "word": "hillside, slope",
    "translation": "rai lolon",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1373",
    "word": "wide, broad",
    "translation": "luan",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1374",
    "word": "narrow",
    "translation": "kloot",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1375",
    "word": "fertile",
    "translation": "bokur",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1376",
    "word": "level; Noun level ground",
    "translation": "tetuk",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1377",
    "word": "comes up by itself, self-propagating",
    "translation": "moris rasik",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1378",
    "word": "crowbar",
    "translation": "ai suak",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Tools).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1379",
    "word": "hoe",
    "translation": "enxada",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Tools).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1380",
    "word": "machete (long)",
    "translation": "katana",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Tools).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1381",
    "word": "machete (short)",
    "translation": "taha",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Tools).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1382",
    "word": "tractor",
    "translation": "tratór",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Tools).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1383",
    "word": "dry season",
    "translation": "bailoro",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1384",
    "word": "wet season",
    "translation": "tempu udan",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1385",
    "word": "rainwater, rain",
    "translation": "udabeen",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1386",
    "word": "sky; heaven",
    "translation": "lalehan",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1387",
    "word": "cloud",
    "translation": "kalohan",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1388",
    "word": "mist, fog",
    "translation": "abuabu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1389",
    "word": "river",
    "translation": "mota",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1390",
    "word": "dew",
    "translation": "mahobeen",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1391",
    "word": "shake",
    "translation": "nakdoko",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1392",
    "word": "be alight (of fire, light, electricity)",
    "translation": "lakan",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1393",
    "word": "bang",
    "translation": "tarutu",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1394",
    "word": "bare, naked",
    "translation": "molik",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1395",
    "word": "can, it is possible",
    "translation": "bele",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Possibility).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1396",
    "word": "sigh!",
    "translation": "ei pá!",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Exclamations).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1397",
    "word": "yes indeed",
    "translation": "ei sa! / hei sa!",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Exclamations).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1398",
    "word": "It is raining.",
    "translation": "Udan tau.",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Idioms).",
    "exampleEn": "It is raining.",
    "exampleTet": "Udan tau.",
    "related": []
  },
  {
    "id": "csv-1399",
    "word": "It is drizzling.",
    "translation": "Udan biska.",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Idioms).",
    "exampleEn": "It is drizzling.",
    "exampleTet": "Udan biska.",
    "related": []
  },
  {
    "id": "csv-1400",
    "word": "It is raining hard.",
    "translation": "Udan boot.",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Idioms).",
    "exampleEn": "It is raining hard.",
    "exampleTet": "Udan boot.",
    "related": []
  },
  {
    "id": "csv-1401",
    "word": "The rains have come.",
    "translation": "Udan monu rai.",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Idioms).",
    "exampleEn": "The rains have come.",
    "exampleTet": "Udan monu rai.",
    "related": []
  },
  {
    "id": "csv-1402",
    "word": "Clouds cover the land.",
    "translation": "Kalohan taka rai metin.",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Idioms).",
    "exampleEn": "Clouds cover the land.",
    "exampleTet": "Kalohan taka rai metin.",
    "related": []
  },
  {
    "id": "csv-1403",
    "word": "It is foggy.",
    "translation": "Abuabu taka rai.",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Idioms).",
    "exampleEn": "It is foggy.",
    "exampleTet": "Abuabu taka rai.",
    "related": []
  },
  {
    "id": "csv-1404",
    "word": "The wind blows.",
    "translation": "Anin huu.",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Idioms).",
    "exampleEn": "The wind blows.",
    "exampleTet": "Anin huu.",
    "related": []
  },
  {
    "id": "csv-1405",
    "word": "The wind is strong.",
    "translation": "Anin boot.",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Idioms).",
    "exampleEn": "The wind is strong.",
    "exampleTet": "Anin boot.",
    "related": []
  },
  {
    "id": "csv-1406",
    "word": "The river floods.",
    "translation": "Mota boot.",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Idioms).",
    "exampleEn": "The river floods.",
    "exampleTet": "Mota boot.",
    "related": []
  },
  {
    "id": "csv-1407",
    "word": "The river rises.",
    "translation": "Mota tuun.",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Idioms).",
    "exampleEn": "The river rises.",
    "exampleTet": "Mota tuun.",
    "related": []
  },
  {
    "id": "csv-1408",
    "word": "He was dewed upon.",
    "translation": "Nia kona mahobeen.",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Idioms).",
    "exampleEn": "He was dewed upon.",
    "exampleTet": "Nia kona mahobeen.",
    "related": []
  },
  {
    "id": "csv-1409",
    "word": "There is an earthquake.",
    "translation": "Rai nakdoko.",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Idioms).",
    "exampleEn": "There is an earthquake.",
    "exampleTet": "Rai nakdoko.",
    "related": []
  },
  {
    "id": "csv-1410",
    "word": "There is lightning.",
    "translation": "Rai lakan.",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Idioms).",
    "exampleEn": "There is lightning.",
    "exampleTet": "Rai lakan.",
    "related": []
  },
  {
    "id": "csv-1411",
    "word": "There is thunder.",
    "translation": "Rai tarutu.",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Idioms).",
    "exampleEn": "There is thunder.",
    "exampleTet": "Rai tarutu.",
    "related": []
  },
  {
    "id": "csv-1412",
    "word": "It is cold; Noun cold place",
    "translation": "Rai malirin.",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Idioms).",
    "exampleEn": "It is cold; Noun cold place",
    "exampleTet": "Rai malirin.",
    "related": []
  },
  {
    "id": "csv-1413",
    "word": "It is hot; Noun hot place",
    "translation": "Rai manas.",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Idioms).",
    "exampleEn": "It is hot; Noun hot place",
    "exampleTet": "Rai manas.",
    "related": []
  },
  {
    "id": "csv-1414",
    "word": "There is a landslide.",
    "translation": "Rai monu.",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Idioms).",
    "exampleEn": "There is a landslide.",
    "exampleTet": "Rai monu.",
    "related": []
  },
  {
    "id": "csv-1415",
    "word": "bare ground",
    "translation": "rai molik",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Idioms).",
    "exampleEn": "bare ground",
    "exampleTet": "rai molik",
    "related": []
  },
  {
    "id": "csv-1416",
    "word": "perhaps ...",
    "translation": "Keta ... karik",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Idioms).",
    "exampleEn": "perhaps ...",
    "exampleTet": "Keta ... karik",
    "related": []
  },
  {
    "id": "csv-1417",
    "word": "approximately fifty",
    "translation": "kala lima-nulu",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Idioms).",
    "exampleEn": "approximately fifty",
    "exampleTet": "kala lima-nulu",
    "related": []
  },
  {
    "id": "csv-1418",
    "word": "bee",
    "translation": "bani",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Animals).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1419",
    "word": "goat",
    "translation": "bibi",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Animals).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1420",
    "word": "sheep",
    "translation": "bibi malae",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Animals).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1421",
    "word": "deer",
    "translation": "bibi rusa",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Animals).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1422",
    "word": "prawn",
    "translation": "boek",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Animals).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1423",
    "word": "buffalo; cattle",
    "translation": "karau",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Animals).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1424",
    "word": "cattle",
    "translation": "karau baka / vaka",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Animals).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1425",
    "word": "buffalo",
    "translation": "karau Timor",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Animals).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1426",
    "word": "horse",
    "translation": "kuda",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Animals).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1427",
    "word": "crocodile",
    "translation": "lafaek",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Animals).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1428",
    "word": "mouse, rat",
    "translation": "laho",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Animals).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1429",
    "word": "monkey",
    "translation": "lekirauk",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Animals).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1430",
    "word": "turtle",
    "translation": "lenuk",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Animals).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1431",
    "word": "chicken; bird",
    "translation": "manu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Animals).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1432",
    "word": "wild bird",
    "translation": "manu fuik",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Animals).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1433",
    "word": "snake",
    "translation": "samea",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Animals).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1434",
    "word": "crawling creatures, including worms, grubs, maggots",
    "translation": "ular",
    "pos": "phrase",
    "definition": "Adapted from Peace Corps Tetun Course (Animals).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1435",
    "word": "slave, servant; herder",
    "translation": "atan",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1436",
    "word": "horn",
    "translation": "dikur",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1437",
    "word": "spear",
    "translation": "diman, dima",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1438",
    "word": "tail",
    "translation": "ikun",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1439",
    "word": "gun, spear-gun",
    "translation": "kilat",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1440",
    "word": "trap; Verb trap",
    "translation": "lasu",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1441",
    "word": "wing",
    "translation": "liras",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1442",
    "word": "(animal) pen, enclosure, cage",
    "translation": "luhan",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1443",
    "word": "bird cage",
    "translation": "manu luhan",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1444",
    "word": "bow (to shoot an arrow)",
    "translation": "rama",
    "pos": "noun",
    "definition": "Adapted from Peace Corps Tetun Course (Other nouns).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1445",
    "word": "net; network",
    "translation": "redi",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1446",
    "word": "boat",
    "translation": "roo",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1447",
    "word": "fish with a fishing line",
    "translation": "hakail ikan",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1448",
    "word": "raise (animal, child), adopt (child)",
    "translation": "hakiak",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1449",
    "word": "shoot an arrow",
    "translation": "hana rama",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1450",
    "word": "look after, guard",
    "translation": "hein",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1451",
    "word": "look after goats",
    "translation": "hein bibi",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1452",
    "word": "keep birds away (e.g. from a rice crop, or seed that is drying in the sun)",
    "translation": "hein manu",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1453",
    "word": "keep house, stay at home to look after the house",
    "translation": "hein uma",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1454",
    "word": "leave behind, abandon, allow, let",
    "translation": "husik",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1455",
    "word": "castrate",
    "translation": "kapa",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1456",
    "word": "hunt",
    "translation": "kasa",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1457",
    "word": "pen up (animals); cork up, put a stopper in (a bottle/hole)",
    "translation": "sulan",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1458",
    "word": "look after, take care of",
    "translation": "tau matan (ba...)",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1459",
    "word": "shoot",
    "translation": "turu",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1460",
    "word": "transport, carry (as a load); give a lift to (a person), place (on something)",
    "translation": "tula",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Transitive verbs and expressions).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1461",
    "word": "wild",
    "translation": "fuik",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1462",
    "word": "pregnant (of animals)",
    "translation": "kabuk",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1463",
    "word": "quiet, tame; domesticated",
    "translation": "maus",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  },
  {
    "id": "csv-1464",
    "word": "savage",
    "translation": "siak",
    "pos": "verb",
    "definition": "Adapted from Peace Corps Tetun Course (Intransitive verbs/adjectives).",
    "exampleEn": "",
    "exampleTet": "",
    "related": []
  }
];
