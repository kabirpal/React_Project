import './App.css';
import { useState } from 'react';

function App() {
    const appTitle = 'Todo List';
    const [isCompleteScreen, setIsCompleteScreen] = useState(false); 
  return (
    <div className="App">
        <h1>{appTitle}</h1>
        <div className="container">
            <div id="todo-list" className='card'>
                <div className="form">
                    <form>
                        <div className="row">

                        <label>Title:</label>
                        <input class="form-control" type='text' ></input>
                        </div>
                        <div className="row">
                        
                        <label>Description:</label>
                        <input type='text' class="form-control"></input>
                        </div>
                        <button type='submit' className='btn btn-primary'> Add </button>
                    </form>
                </div>
            </div>
        </div>
        <div className="list-container">
                <div className="table">
                <div className="todo-array">
                    <button type='button' className={`btn ${isCompleteScreen === false && 'active'}`} onClick={()=>{setIsCompleteScreen(false)}}>Todo</button>
                    <button type='button' className={`btn ${isCompleteScreen === true && 'active'}`} onClick={()=>{setIsCompleteScreen(true)}}>Completed</button>
                </div>

                <div className="todo-list-item">
                    <h3>Task 1</h3>
                    <p>Description</p>
                </div>
                </div>
            </div>
    </div>
  );
}

export default App;
