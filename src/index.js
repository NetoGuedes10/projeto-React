import React from 'react';
import ReactDOM from 'react-dom';
import Home from './containers/Home';
import GlobalStyle from './globalStyles';
import Users  from './containers/users';


const root = document.getElementById("root");
const rootElement = (<>
    <Users /> <GlobalStyle /> </>);

    const reactRoot = ReactDOM.createRoot (root);
    reactRoot.render(rootElement);     

   


