import React from 'react';
import { createRoot } from 'react-dom/client';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

//import reducers from './reducers';
import App from './components/App';

// const store = createStore(
//     reducers,
//     window.__REDUX_DEVTOOLS_EXTENSION__
//     && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
