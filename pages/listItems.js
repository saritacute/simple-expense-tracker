import List from '../components/listItems/list'
import store from '../redux/store'
import { Provider } from 'react-redux'
import Link from 'next/link'
import Layout from '../pages/layout/layout'


const ListItems = () => {
    return (
        <Layout title={'Expenses List'}>
            <Provider store={store}>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'center', alignSelf:'center'}}>
                    <div className='w-100'>
                        <List></List>
                        <div className='mt-3 flex justify-content-around'>
                            <div className='row'>
                            <div className='col-12'>
                                <Link href='/addNew'>
                                    <button className="btn btn-primary"> Add new </button>
                                </Link>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Provider>
        </Layout>
    )
}
export default ListItems