import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Users from './Users';
import CreateUser from './CreateUser';
import UpdateUser from './UpdateUser';
import WarehouseUser from './WarehouseUser';
import InventoryUser from './InventoryUser';
import TransportationUser from './TransportationUser';
import RegisterUser from './RegisterUser';



function App() {
  const [count, setCount] = useState(0)

  return (
    <><div>
      <BrowserRouter>
        
        <Routes>
          <Route path='/' element={<Users />}></Route>
          <Route path='/create' element={<CreateUser />}></Route>
          <Route path='/update/:id' element={<UpdateUser />}></Route>
          <Route path='/Warehouse' element={<WarehouseUser />}></Route>
          <Route path='/Inventory' element={<InventoryUser />}></Route>
          <Route path='/Transportation' element={<TransportationUser />}></Route>
          <Route path='/Registration' element={<RegisterUser />}></Route>
          <Route path='/Users' element={<Users />}></Route>
        </Routes>
      </BrowserRouter>


    </div>
      
    </>
  )
}

export default App
