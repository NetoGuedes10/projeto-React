import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './globalStyles'


const root = document.getElementById("root");
const rootElement = (<>
    <App /> <GlobalStyle /> </>);

    const reactRoot = ReactDOM.createRoot (root);
    reactRoot.render(rootElement);     

   


