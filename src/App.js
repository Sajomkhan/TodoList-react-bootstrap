import React from 'react'
import "./App.css";
import AppAll from './component/todo/All-todo';
import Crud from './CRUD/Crud';



function App() {
  return(
    <div className='grid-container'>

      {/* header */}
      <div class="header">
        <h2>Header</h2>
      </div>

      {/* Main body */}
      <div class="left" >
        <Crud/>
      </div>
      <div class="middle">
        <AppAll/>
        </div>  
      <div class="right" >Column</div>

      {/* Footer*/}
      <div class="footer">
        <p>Footer</p>
      </div>
    </div>
  )

}

export default App;
