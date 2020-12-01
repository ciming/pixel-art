import { compose, createStore } from 'redux';
import reducer from './modules/reducer'
import persistState from 'redux-localstorage'

const enhancer = compose(
  persistState('storage', {
    key: 'pixel-art'
  })
)

const store = createStore(reducer, enhancer);

export default store;