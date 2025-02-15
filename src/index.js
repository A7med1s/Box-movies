import React from 'react';
import reportWebVitals from "./reportWebVitals"
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './my-tailwind.css'
import {Provider} from "react-redux"
import {store} from "./rtk/store"

const root = ReactDOM.createRoot(document.getElementById('root'));


  reportWebVitals(root.render(
    <React.StrictMode>

        <Provider store={store}>
        <App/>
        </Provider>

    </React.StrictMode>
    ));
