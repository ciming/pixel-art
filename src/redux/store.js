import { createStore as _createStore } from 'redux';
import reducer from './modules/reducer'


const store = _createStore(reducer);

export default store;