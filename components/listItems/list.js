import RenderListItems from './renderListItems'
import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
const List = (props) => {
const [expenses, updateExpenses ] = useState(props.state)
const [result, updateResult] = useState([])
const [search, updateSearch] = useState('')

useEffect(() => {
    const filtered = expenses.filter( state => state.title.toLowerCase().includes(search) ? state : '')
    updateResult(filtered)

}, [search])

return (
        <ul className="list-group w-100">
        {result ? result.map( (item, idx) => {
            return (
                <RenderListItems key={idx} expenses={item}>
                </RenderListItems>    
            )
        }):<div><li className='list-group-item d-flex justify-content-between align-items-center'>Expenses list is empty.</li></div>}
            <div className="form-group">
                <input required type='text' name='title' className="form-control"  onChange={e => updateSearch(e.target.value.toLowerCase())} placeholder='search'></input>
            </div>
        </ul> 
        )
}

const mapStateToProps = state => {
    return {
        state:state
    }
}
export default connect(mapStateToProps)(List)