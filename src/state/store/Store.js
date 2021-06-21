// import { createStore } from "redux";

// export const configureStore =()=>{
//     const store=createStore(
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
//     );
//     return Store;
// };

import { createStore } from "redux";
import { rootReducers } from "../reducer/reducer";

export const store=createStore(
    rootReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);