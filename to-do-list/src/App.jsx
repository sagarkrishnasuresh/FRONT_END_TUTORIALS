import "./styles.css"
export default function App(){
  return (
    <>
    <form className="new item-form"> 
    <div className="form-row">
      <label htmlFor="item">New Task</label>
      <input type="text" id="item" placeholder="Enter your new task"/>
    </div>
    <button className="btn">Add</button>
    </form>
    <h1 className="header">To-do List</h1>
    <ul className="list">
      <li>
        <label>
        <input type="checkbox" />
        Item 1
        </label>
        <button className="btn btn-danger">DELETE</button>
        </li>
        <li>
        <label>
        <input type="checkbox" />
        Item 2
        </label>
        <button className="btn btn-danger">DELETE</button>
        </li>
        <li>
        <label>
        <input type="checkbox" />
        Item 3
        </label>
        <button className="btn btn-danger">DELETE</button>
        </li>
        <li>
        <label>
        <input type="checkbox" />
        Item 4
        </label>
        <button className="btn btn-danger">DELETE</button>
      </li>
    </ul>
    </>
  
  )

}