import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { actionAddNew } from '../../redux/actionCreator'
import Link from 'next/link'
import { swal_alert } from '../../utils/swal'
import { v4 as uuidv4 } from 'uuid';

const AddNewComponent = () => {
    const dispatch = useDispatch()
    const [item, addItem] = useState({
        title:'',
        amount:'',
        category:'',
        date:'',
        note:''
    })
    const dispatchAdd = () => {
        const obj = actionAddNew(item)
        obj.payload.id = uuidv4();
        console.log(obj)
        dispatch(obj)
        swal_alert()
    }

    return (
        <>
        <form id='form' onSubmit={ (e) =>{
            e.preventDefault()
            dispatchAdd()
        }}>
            <div className="form-group">
                <label>Expense Name {item.title}</label>
                <input required type='text' name='title' className="form-control" onChange={e => addItem({...item, title:e.target.value})}></input>
            </div>
            <div className="form-group">
                <label>Expense Amount</label>
                <input required type='number' name='amount' className="form-control" onChange={e => addItem({...item, amount:e.target.value})}></input>
            </div>
            <div className="form-group">
                <label>Expense Category</label>
                <input required type='text' name='category' className="form-control" onChange={e => addItem({...item, category:e.target.value})}></input>
            </div>
            <div className="form-group">
                <label>Date</label>
                <input required type='date' name='date' className="form-control"onChange={e => addItem({...item, date:e.target.value})}></input>
            </div>
            <div className="form-group">
                <label>Note</label>
                <textarea required type='text' name='note' className="form-control" onChange={e => addItem({...item, note:e.target.value})}></textarea>
            </div>
            <div className="form-group">
                <button type='submit' className="btn btn-primary">Submit</button>
                <Link href='/listItems'><button className="m-3 btn btn-secondary">View List</button></Link>
            </div>
        </form>
        </>
    )
}
export default AddNewComponent