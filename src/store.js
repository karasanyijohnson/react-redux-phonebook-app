import { createStore, applyMiddleware, compose} from 'redux'; // cpmpose allows us to do more than one thing
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState={}; //an empty object

const middleware =[thunk];

const store= createStore( rootReducer, initialState,
compose(applyMiddleware(...middleware),
window.__REDUX_DEVTOOLS_EXTENSION__ &&
 window.__REDUX_DEVTOOLS_EXTENSION__()
));


export default store;