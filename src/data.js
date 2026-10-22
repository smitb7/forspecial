// ─── Personalize here ──────────────────────────────────────────────────────
// Photos are in /src/assets/ — import them at the top of App.jsx or use paths.

import coupleMain from './assets/couple-main.jpeg'
import vishva1 from './assets/vishva1.jpg'
import vishva2 from './assets/vishva2.jpg'
import vishva3 from './assets/vishva3.png'

export const love = {
  yourName: 'Smit',
  herName: 'Vishva',
  title: 'A little piece of forever',
  subtitle: 'Two strangers, one beautiful beginning — and a whole lifetime waiting ahead.',

  // Photos for the final gallery
  galleryPhotos: [vishva1, vishva2, vishva3],

  letter: `My dearest Vishva,

They say in an arranged marriage, love comes after — but I think love was already written in our stars, just waiting for the right moment to begin.

The moment I saw you, something quietly shifted. You were calm, you were graceful, and you had this smile that made the whole room feel warmer.

I don't know everything about you yet — but I already know I want to. Every story, every memory, every little quirk — I want to discover all of it, slowly, together.

This is just the very beginning of us. And honestly? I can't wait for every chapter that follows.

Forever yours,
Smit ♥`,
}

export const storyCards = [
  {
    eyebrow: 'CHAPTER 01',
    title: 'The first time I saw you',
    text: 'They said we were meeting as strangers. But the moment I saw your smile, I had a quiet feeling — this is someone very special. And I was right.',
    emoji: '✨',
    date: '20 · 10 · 2026  —  The day it all began',
    photo: coupleMain,
  },
  {
    eyebrow: 'CHAPTER 02',
    title: 'That smile of yours',
    text: 'You have this smile that is completely effortless — it just appears and suddenly everything feels lighter. I think about it more than you know.',
    emoji: '🥹',
    date: 'A moment I keep coming back to',
    photo: vishva2,
  },
  {
    eyebrow: 'CHAPTER 03',
    title: 'Little things about you',
    text: 'The way you carry yourself, the gentle grace in everything you do — I am still learning who you are, and already I find you wonderful.',
    emoji: '💌',
    date: 'Still discovering, still smiling',
    photo: vishva3,
  },
  {
    eyebrow: 'CHAPTER 04',
    title: 'Our story starts here',
    text: 'They say the best love stories are the ones you never saw coming. Ours started with families, nervous smiles, and a quiet hope — and I would not change a thing.',
    emoji: '💍',
    date: 'Today is just page one',
    photo: coupleMain,
  },
]

export const quizQuestions = [
  {
    question: 'What was the first thing I noticed about you?',
    answers: ['Your grace', 'Your smile', 'Your eyes', 'Everything, honestly'],
    correct: 3,
    note: 'Trick question — everything caught my attention. 😊',
  },
  {
    question: 'What do I look forward to most about us?',
    answers: ['Getting to know you more', 'Our little daily moments', 'Building a life together', 'All of the above'],
    correct: 3,
    note: 'Every single one of these — I mean it. 🫶',
  },
  {
    question: 'How long do I plan to be by your side?',
    answers: ['A little while', 'As long as things are easy', 'For as long as you let me', 'Forever — and a little longer'],
    correct: 3,
    note: 'Forever sounds like a wonderful start. 💖',
  },
]
