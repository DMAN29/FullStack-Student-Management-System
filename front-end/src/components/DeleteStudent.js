import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { Button } from '@mui/material'
const DeleteStudent = () => {
  const {id} = useParams();
  const [item,setItem] = useState({});
  const url = `http://localhost:8080/api/students/${id}`;
  useEffect(()=>{
    axios.get(url).then((result) => {
      setItem({...result.data});
    }).catch((err) => {
      console.log(err);
    });
  },[]);
  const deleteItem = () =>{
    axios.delete(url).then(()=>{alert("Item Deleted Succesfully")}).catch(()=>alert('error'));
    
  };
  return <div className='w-6/12 mx-auto'>
    <h1 className='text-4xl font-bold text-center'>Do you want to delete Student Details of</h1>
    <div className='text-2xl font-semibold p-3 tex'>
    Name : {item.firstName} {item.lastName}
    <br />
    Email : {item.email}
    </div>
    <div className='flex justify-around'>
                <Button variant="contained" color="success" onClick={deleteItem}>
                    Delete
                </Button>
                <Button variant="contained" color="error">
                    <NavLink to='/'>
                        Back
                    </NavLink>
                </Button>
            </div>
  </div>
}

export default DeleteStudent