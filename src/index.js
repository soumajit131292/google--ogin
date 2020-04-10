// Import External Modules
import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import * as serviceWorker from './serviceWorker';


// Import Own Modules
import registerServiceWorker from "./registerServiceWorker";
import { store } from "./redux/storeConfig/store";
import ReduxToastr from 'react-redux-toastr';

import "font-awesome/css/font-awesome.min.css";

import './index.scss';

import Spinner from "./components/spinner/spinner";

const LazyApp = lazy(() => import("./app/App"));


ReactDOM.render(
    <Provider store={store}>
       <Suspense fallback={<Spinner />}>
         <LazyApp />
         <ReduxToastr
            timeOut={4000}
            newestOnTop={false}
            preventDuplicates
            position="top-left"
            transitionIn="fadeIn"
            transitionOut="fadeOut"
            progressBar
            closeOnToastrClick/>
       </Suspense>
    </Provider>,
    document.getElementById("root")
);
registerServiceWorker();


// Soumen: Default Stuff
// import App from './App';
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
