<p align="center">
  <img alt="Repository Last Commit Date" src="https://img.shields.io/github/last-commit/psatler/reactjs-redux-sagas?color=blue">

  <a href="https://www.linkedin.com/in/pablosatler/">
    <img alt="Made by Pablo Satler" src="https://img.shields.io/badge/made%20by-Pablo%20Satler-blue">
  </a>

  <img alt="License" src="https://img.shields.io/github/license/psatler/reactjs-redux-sagas?color=blue">

</p>

> E-Commerce like app showcasing redux and hooks

## How to run

```
git clone https://github.com/psatler/reactjs-redux-sagas
cd reactjs-redux-sagas
yarn (or npm install)
yarn start (or npm start)
```

To get the fake api running, open another terminal and run `yarn jsonserver` so it will serve the `server.json` file as our API. This is being server on port `:3333`

PS: you can access the routes from the fake api at, for example (on localhost), at `http://localhost:3333/products`, `http://localhost:3333/stock`. You can even access an specific product by passing its id as at `http://localhost:3333/products/3`. See more details on the _Json Server_ repository (link below).

## Some dependencies/tools used

-   [ESLint](https://github.com/eslint/eslint)
-   [Prettier](https://github.com/prettier/prettier)
-   [EditorConfig](https://github.com/editorconfig/editorconfig)
-   [Styled Components](https://github.com/styled-components/styled-components)
-   [React Router Dom](https://reacttraining.com/react-router/web/guides/quick-start)
-   [Font Roboto](https://fonts.google.com/specimen/Roboto?selection.family=Roboto)
-   [React Icons](https://react-icons.netlify.com/#/)
-   [Polished](https://polished.js.org/) to darken some colors
-   [Json-server](https://github.com/typicode/json-server) to fake our API
-   [Javascript's INTL](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl) to perform localization when formatting the price
-   [Reactotron](https://github.com/infinitered/reactotron) to debug the application's state
-   [Immer](https://github.com/immerjs/immer) which allow us to use mutable methods to create the next immutable state

## License

This project is licensed under the terms of the [MIT License](https://opensource.org/licenses/MIT) © Pablo Satler 2019

&emsp;

&emsp;

&emsp;

&emsp;

&emsp;

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
