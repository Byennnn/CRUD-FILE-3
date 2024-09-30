import axios from "axios"
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { Layout } from 'antd'
import MenuList from "./MenuList"

function Users () {
    const [users, setUsers] = useState([])
    const {Header, Sider} = Layout;

    useEffect(() => {
        axios.get('http://localhost:3001')
        .then(result => setUsers(result.data))
        .catch(err => console.log(err))
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/deleteUser/'+id)
        .then(res => {console.log(res)
            window.location.reload()})
        .catch(errr => console.log(errr))
    }
    return (

        <Layout>  
        <div className="d-flex vh-100 bg-primary  ">
        
        
            <Sider className="sidebar">SIDEBAR
            <MenuList/>
            </Sider>
            <div className="pangsakto">  
       
        
            
          
        
            <br></br><h2>Inventory Management</h2><br></br>
            <Link to="/Warehouse" className='btn btn-success' >Stock Monitoring</Link>&nbsp;&nbsp;
            <Link to="/Inventory" className='btn btn-success'>Stock Placement</Link>&nbsp;&nbsp;
            <Link to="/Transportation"className='btn btn-success' >Quality Control</Link>&nbsp;&nbsp;
          
               
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) => {
                                return <tr>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.age}</td>
                                    <th>
                                        <Link to={`/update/${user._id}`} className='btn btn-success'>Update</Link>
                                    </th>
                                    <th>
                                        <button to="/delete" className='btn btn-danger' 
                                        onClick={(e) => handleDelete(user._id)}>Delete</button>
                                    </th>
                                </tr>
                            })
                        }
                    </tbody>

                </table>
                <Link to="/create" className='btn btn-success'>Add +</Link>
            </div>
            </div>
     
        </Layout>
    )
}

export default Users;