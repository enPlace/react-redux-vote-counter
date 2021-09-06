#Vote Tally App with React and Redux 


<a href="https://enplace.github.io/react-inline-editable-cv/" target="_blank"> https://enplace.github.io/react-inline-editable-cv/ </a>

This simple vote tallying app was created to practice using Redux with React. 





<h3 align="left">Languages and Tools:</h3>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/)
<p align="left"> <a href="https://www.w3schools.com/css/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> 
  <a href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="60" height="60"/> </a> <a href="https://webpack.js.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg" alt="webpack" width="60" height="60"/> </a><a href="https://reactjs.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a>  <a href="https://redux.js.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="40" height="40"/> </a></p>

## Store Design: 
The store has two slices: the counter, which keeps track of the total votes, and candidates, which maintains each 
candidate object as well as an array of all candidate Ids, following the normalized state redux design pattern. 
```javascript
InitialState: {
    counter: {value: 0}
    candidates: {
    a: { name: "Candidate A", count: 0, id: "a" },
    b: { name: "Candidate B", count: 0, id: "b" },
    c: { name: "Candidate C", count: 0, id: "c" },
    d: { name: "Candidate D", count: 0, id: "d" },
    allIds: ["a", "b", "c", "d"],
  },
}
```

## Features and Previews
- <h3>Track individual candidate and overall vote count, and illustrate percentage of vote total with a bar.</h3>

 <img src="./tally.gif" alt="todo-component"/>
- <h3>Add a new candidate</h3>
 <img src="./add.gif" alt="todo-component"/>
- <h3>Remove candidates</h3>
 <img src="./remove.gif" alt="todo-component"/>
- <h3>Reset vote counts</h3>
 <img src="./reset.gif" alt="todo-component"/>



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
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
