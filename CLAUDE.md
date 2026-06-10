# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

An Expo / React Native app (managed workflow, Expo SDK 54, React 19, React Native 0.81) that hosts a small hub
of casual games — Sudoku and Caro (5-in-a-row / Gomoku) — plus daily challenges and a "Me" profile/settings
section. Routing is file-based via `expo-router`. UI copy is currently written in Vietnamese; code identifiers
and route names are in English.

## Commands

- `npm start` (or `npx expo start`) — start the Metro dev server; choose iOS sim, Android emulator, web, or
  Expo Go from the CLI output.
- `npm run ios` / `npm run android` / `npm run web` — start the dev server targeting a specific platform.
- `npm run lint` — runs `expo lint` (ESLint with `eslint-config-expo` flat config, see `eslint.config.js`).
- `npx tsc --noEmit` — type-check the project (TypeScript strict mode, no separate `typecheck` script defined).
- There is no test runner configured in this repo.

## Architecture

### Routing (expo-router, file-based)

Routes live under `app/`. Folder/file structure maps directly to navigation structure:

- `app/_layout.tsx` — root `Stack` (header hidden), declares `index` and `(tabs)` routes.
- `app/index.tsx` — redirects `/` to `/(tabs)/home`.
- `app/(tabs)/_layout.tsx` — bottom `Tabs` navigator with three tabs: `home`, `daily-challenges`, `me`.
- `app/(tabs)/home/_layout.tsx` — `Stack` for the Home tab: `index` (game picker, title "Games"), `sudoku`,
  `caro`.
- `app/(tabs)/home/index.tsx` — game picker list (`GAMES` array); navigates to
  `/(tabs)/home/sudoku` or `/(tabs)/home/caro`.
- `app/(tabs)/home/sudoku.tsx`, `app/(tabs)/home/caro.tsx` — currently placeholder screens; this is where
  game board UI and logic should be implemented.
- `app/(tabs)/me/_layout.tsx` — `Stack` for the Me tab: `index` (profile/menu), plus `awards`, `statistics`,
  `settings`, `how-to-play`, `rules`, `help`, `about`, `privacy` — all currently placeholder screens.
- `app/(tabs)/daily-challenges.tsx` — streak/calendar UI; `useStreakMonth` is a placeholder that fakes
  "played" days and should be wired to real persisted data.

When adding a new screen to a tab's stack, add the route file under that tab's folder **and** register a
`<Stack.Screen name="..." options={{ title: "..." }} />` entry in that folder's `_layout.tsx` (titles are not
inferred automatically).

### Conventions

- Path alias `@/*` maps to the project root (see `tsconfig.json`); `tsconfig` extends `expo/tsconfig.base`
  with `strict: true`.
- `experiments.typedRoutes` is enabled in `app.json`, so `expo-router`'s typed `Href`/route params are
  available (see usage of `Href` in `app/(tabs)/me/index.tsx`).
- Dark mode is handled per-screen via `useColorScheme()` and inline conditional colors (no shared theme
  module yet) — the established pattern is `const isDark = useColorScheme() === "dark"` then
  `isDark ? "<dark color>" : "<light color>"` for backgrounds/text/subtext, with styling via
  `StyleSheet.create`. The shared accent color is `#0a7ea4`.
- `react-native-reanimated` (with `react-native-worklets`) and `react-native-gesture-handler` are installed
  and available for game-board interactions (drag/animations).
- `experiments.reactCompiler` is enabled in `app.json`.
