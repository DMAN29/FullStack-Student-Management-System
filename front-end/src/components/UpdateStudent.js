import React, { useEffect, useState } from 'react'
import AddUpdate from './AddUpdate'
import { useParams } from 'react-router-dom';
import axios from 'axios';
const UpdateStudent = () => {
  const [item,setItem] = useState({});
  const {id} = useParams();
  useEffect(()=>{
    axios.get(`http://localhost:8080/api/students/${id}`).then(res=>{setItem(res.data)}).catch(()=>{console.log("error")});

  },[]);
  return <AddUpdate text="Update" data={item}/>
}

export default UpdateStudent