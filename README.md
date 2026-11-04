# Tuzamurane App

A [Create React App](https://github.com/facebook/create-react-app)-based web
front end. The project is currently at an early, scaffold stage: it has not
yet been customized beyond the default CRA starter page, so there is no
application-specific logic or routing in place yet.

## Tech stack

- [React 18](https://react.dev/) (`react`, `react-dom`)
- [Create React App](https://create-react-app.dev/) / `react-scripts` 5 for
  the build tooling (Webpack, Babel, Jest, ESLint, all pre-configured)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
  and Jest for component tests
- `web-vitals` for optional performance measurement reporting

## Project structure

```
public/        Static HTML shell and PWA assets (favicon, manifest, icons)
src/
  App.js       Root component (currently the default CRA starter page)
  App.test.js  Example test for the root component
  index.js     React entry point / DOM mount
  reportWebVitals.js  Optional performance metrics reporting hook
  setupTests.js       Jest/jest-dom test setup
```

## Requirements

- Node.js 18+ and npm (tested with Node 24 / npm 11)

## Getting started

Install dependencies:

```bash
npm install
```

Run the app in development mode:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the
browser. The page reloads automatically when you make changes.

## Running tests

```bash
npm test
```

This launches Jest in interactive watch mode. In CI, tests are run
non-interactively with `CI=true npm test -- --watchAll=false`.

## Building for production

```bash
npm run build
```

Builds a minified, production-ready bundle into the `build/` directory.

## Continuous Integration

GitHub Actions (`.github/workflows/ci.yml`) installs dependencies, runs the
test suite, and runs a production build on every push and pull request
against `main`.

## Known limitations

- `react-scripts@5.0.1` (the current, final release of Create React App's
  tooling) pulls in a number of outdated transitive dev-dependencies
  (`webpack-dev-server`, `ws`, `websocket-driver`, `shell-quote`,
  `form-data`, `proxy-addr`, etc.) that `npm audit` flags, some at
  high/critical severity. These only affect the local dev server and test
  runner — they are not included in the production `build/` bundle — and
  there is currently no newer `react-scripts` release that resolves them,
  since Create React App is no longer actively maintained. Migrating off
  `react-scripts` (e.g. to [Vite](https://vitejs.dev/)) would be the proper
  long-term fix and is tracked as follow-up work rather than done as part of
  this cleanup.
- The app itself has not yet been built out beyond the CRA starter page —
  this repository is a starting point for the actual Tuzamurane application.

## License

[MIT](./LICENSE) (c) 2026 Yann Vladimir Bajeneza
