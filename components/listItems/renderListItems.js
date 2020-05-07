const RenderListItems = (props) => {
    return (
        <div className='mb-2'>
           <li className="list-group-item" style={{display:'flex', justifyContent:'space-between'}}>
                <div>
                    <div>
                        <p>
                        <strong>{props.expenses.title}</strong>
                        </p>
                    </div>
                    <small>{props.expenses.category}</small> - 
                    <small className="text-muted"> {props.expenses.date}</small>
                </div>
                <div>
                    <p className="text-danger"><strong>$ {props.expenses.amount}</strong></p>
                </div>
            </li>
        </div>
    )
}
export default RenderListItems