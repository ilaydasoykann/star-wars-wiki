# Star Wars Wiki

**İlayda Soykan — 23070006119**

SE 3355 Web Programming — Midterm Project (2026)

A Star Wars information website built with **React**, **Vite**, and **Tailwind CSS** for SE 3355 Web Programming. It loads information from the public [SWAPI](https://swapi.dev/) API.

## Features

- Home page and navigation
- Films, Characters, Planets, and Starships lists
- Detail pages with dynamic URL routes
- Search for films, characters, planets, and starships
- Planet climate and starship filtering
- Pagination for API list/search results
- Loading animations and error messages
- Responsive layout for mobile and desktop

## Run locally

1. Install Node.js (recent LTS version).
2. Open a terminal inside this project folder.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local address displayed in the terminal (normally `http://localhost:5173`).

To check the production build, run `npm run build`.

## API

The app uses `https://swapi.dev/api` through the functions in `src/services/api.js`. An Internet connection is required to load the data.

## Project structure

- `src/components/` - shared UI and layout
- `src/pages/` - listing and detail pages
- `src/services/api.js` - API requests
- `src/App.jsx` - app routes

## Deployment

The `vercel.json` file supports client-side routes on Vercel. Publish the repo on GitHub and import the repository into Vercel. Supply both links when submitting.

## Favorites

Open any film, character, planet, or starship and click **Add to Favorites**. The Favorites page shows saved items. Favorites are stored in the browser using localStorage.
