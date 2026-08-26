# English Grammar Tests

Interactive web application for testing English grammar knowledge. Built with React + Vite + React Router.

## Features

- 16 grammar topics with 460 total questions (A2-B1 level)
- Instant answer feedback with explanations in Russian
- Fisher-Yates shuffle for randomizing answer options
- Score tracking and best score persistence (localStorage)
- User profile with avatar, name, and per-topic records
- Responsive design (desktop / tablet / mobile)
- Lazy-loaded question data per topic

## Topics

| Category | Topics |
|---|---|
| Tenses | Present Perfect Continuous vs Perfect, Future Perfect vs Simple, Used to / Be used to |
| Voice | Passive vs Active Voice (100q), Have something done |
| Modals | Can / Could / Must / Have to |
| Vocabulary | Idioms (100q), Adjectives -ing/-ed |
| Grammar | Articles, Countable/Uncountable, Adjectives + Prepositions, Verb + Prepositions |
| Sentence Structure | Conditionals, Relative Clauses, Although/Though/Despite, In case/Unless/As long as |

## Run

```bash
npm install
npm run dev
```

## Tech Stack

- React 19 + Vite
- React Router v7
- localStorage for persistence
- CSS (no UI framework)
