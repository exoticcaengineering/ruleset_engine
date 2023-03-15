# NPM Package Skeleton

A React/Typescript app for use as a template when creating NPM packages for publication on [npmjs.com](https://www.npmjs.com/).

<br>

## Usage guide:

<ul>
    <li>Build your library components/utilities inside `src/library`</li>
    <li>Import all components/utilities which you wish to make available in your final NPM package to src/index.ts and then add them to the export statement of the same file</li>
    <li>Run the `npm run build:lib` script to compile your .ts/.tsx files to JS and bundle them in the `dist` folder</li>
    <li>Publish your project to npmjs.com using the `npm publish` command (cli and authorisation required)</li>
</ul>

<br>

## Scripts:
### `dev`
Run React app locally to view any components/utilities used in App.js

### `build:lib`
Compile .ts/.tsx files to JS and bundle them in the `dist` folder

<br>

## Notes:
`src/App.js` and `src/index.js` provided for use during development. These files should be used for testing components locally in development and will not be included in compilation of library or final package.

<br>
<br>
This package was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).