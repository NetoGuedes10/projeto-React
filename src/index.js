import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './globalStyles';
import Routes from './routes';


const root = document.getElementById("root");
const rootElement = (<>
    <Routes /> <GlobalStyle /> </>);

    const reactRoot = ReactDOM.createRoot (root);
    reactRoot.render(rootElement);     

   


