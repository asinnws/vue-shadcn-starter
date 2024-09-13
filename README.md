# Vue 3 Shadcn Application Template

## Prerequisites:

- [Node.js](https://nodejs.org/) >=18

## UI

- [Shadcn for Vue 3](https://www.shadcn-vue.com/) (which is on top of [Radix Vue](https://www.radix-vue.com/))

## Setup and Development Flow:

1. Install dependencies `npm install`
2. Prepare [Husky](https://typicode.github.io/husky/) for git hooks `npm run prepare`
3. Optional: create _.env.local_ file and specify environment variables
4. Start the development server `npm run dev`
5. Build the application `npm run build`
6. Preview the built application `npm run preview`

## Technical Stack:

- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/guide/)

## Package Managers:

- npm

## Code Quality:

- [ESLint](https://eslint.org/)
- Git hooks ([Husky](https://typicode.github.io/husky/))
- [Prettier](https://prettier.io/)
- Testing:
  - [Vitest](https://vitest.dev/guide/)
  - [Vue Test Utils](https://test-utils.vuejs.org/)
  - [Playwright](https://playwright.dev/)

## Commands

| Command             | Description                                                      |
| ------------------- | ---------------------------------------------------------------- |
| `npm install`       | Installs dependencies                                            |
| `npm run dev`       | Starts local dev server                                          |
| `npm run build`     | Builds the project                                               |
| `npm run preview`   | Starts local server to serve `dist` folder on the specified port |
| `npm run lint`      | Runs Javascript and Typescript linting using ESLint              |
| `npm run test:unit` | Runs unit tests using Vitest                                     |
| `npm run test:e2e`  | Runs e2e tests using Cypress                                     |
| `npm run format`    | Formats the codebase using Prettier                              |
| `npm run storybook` | Runs storybook application to preview the design system          |
