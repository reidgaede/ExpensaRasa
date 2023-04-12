/* "index.js" is the first file that will be executed whenever this React app is 
run on a development server. Once `root.render(<App />);` is executed, React 
proceeds to interpret, execute, and ultimately render "App.js" and all other 
JavaScript files that make up this app's component tree. */

import ReactDOM from 'react-dom/client';
import './index.css';

/* Importing `App()` function, which builds `<App />` component, from "App.js": */
import App from './App';

/* To "inject" React app into "index.html", declaring `<div>` element in "index.html" 
(to whom `id` value of 'root' is passed) as the "root" of this React app: */
const root = ReactDOM.createRoot(document.getElementById('root'));

/* Calling `.render` method to instruct React that `<App />` component should be 
rendered in `<div>` element (to whom `id` value of "root" has been passed) in 
"index.html": */
root.render(<App />);