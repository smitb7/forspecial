# Dev's Purpose 

A romantic, mobile-first mini website made with React, Vite, and Tailwind CSS. It opens with a playful “Will you marry me?” proposal, then continues into the Couple Rewind love-story experience after the Yes and celebration screens.

## Run locally

1. Install **Node.js LTS** from https://nodejs.org/
2. Unzip this folder and open it in VS Code.
3. Open the terminal in this folder and run:

```bash
npm install
npm run dev
```

4. Open the local URL printed in the terminal (usually `http://localhost:5173`).

## What happens when you open it

1. The first page asks “Will you marry me?”
2. The “No” button moves away when hovered, touched, or clicked. It stays inside the visible browser window, even after many attempts, rather than getting clipped by the proposal card.
3. Clicking “Yes” opens a celebration message.
4. “Continue to our love story” opens the original Couple Rewind experience.

## Personalize it for your wife

Open `src/data.js` and change:
- `herName` — her name or your nickname for her
- `yourName` — your name
- `subtitle` — your own opening line
- `letter` — your personal love letter
- `storyCards` — replace the sample story text with your real memories
- `quizQuestions` — make the quiz about your relationship

To use your own photos, put the image in `public/` and set a story card's `photo` value, for example:

```js
photo: '/our-first-trip.jpg',
```

The image will show in that story card. Keep image files inside the `public` folder.


