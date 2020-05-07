import * as actions from './actions'
import { v4 as uuidv4 } from 'uuid';

const initial = [
    {
      title: 'Cars',
      amount: '10000',
      category: 'Category 1',
      date: '2020-05-20',
      note: '10000',
      id: uuidv4()
    },
    {
      title: 'House',
      amount: '500',
      category: 'Category 2',
      date: '2020-05-23',
      note: '321',
      id: uuidv4()
    },
    {
      title: 'Foods',
      amount: '5001',
      category: 'Category 3',
      date: '2020-05-23',
      note: '321',
      id: uuidv4()
    },
  ]
const reducer = (state = initial, action) => {
    switch(action.type){
        case actions.ADD_NEW:
            return [...state, action.payload]
        default:
            return state
    }
}
export default reducer