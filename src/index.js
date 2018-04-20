import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './components/App';


//import configureStore from './configureStore';
ReactDOM.render(
	
		<App />,
	 
document.getElementById('root'));
//registerServiceWorker();
