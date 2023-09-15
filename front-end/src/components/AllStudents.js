import React, { useEffect, useState } from 'react'
import StudentTable from './StudentTable'
import axios from 'axios';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
const AllStudents = () => {
  const [students,setStudents]= useState([]);
  useEffect(()=>{
    axios.get("http://localhost:8080/api/students").then((result)=>{
      setStudents(result.data);
    }).catch(()=>{console.log("error")});

  },[])
  return <div className='mt-5  mb-20 w-10/12 mx-auto'>
  <Button variant="contained"><NavLink to="/add-student">Add Student</NavLink></Button>
  <br />
  <br />
  <StudentTable students={students}/>
    </div>
}

export default AllStudents