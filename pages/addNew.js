import React from 'react'
import { Provider } from 'react-redux'
import store from '../redux/store'
import AddNewItem from '../components/addItems/addNew'
import Layout from '../pages/layout/layout'

const AddNew = () => {
    return (
      <Layout title='Add New Expense'>
        <div className='container'>
          <Provider store={store}>
              <AddNewItem></AddNewItem>
          </Provider>
        </div>
      </Layout>

    )
  }
  export default AddNew