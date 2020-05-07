import { createStore } from 'redux'
import reducer from './reducer'

const windowExist = typeof window === 'object';
const store = createStore(reducer, windowExist && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store