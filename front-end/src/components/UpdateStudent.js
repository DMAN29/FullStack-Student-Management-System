import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const UpdateStudent = () => {
  const {id} = useParams();
  const url = `http://localhost:8080/api/students/${id}`;
  useEffect(()=>{
    axios.get(url).then(res=>{setStudentData({...res.data})}).catch(()=>{console.log("error")});
  },[]);  
  const [studentData, setStudentData] = useState({
    firstName: "",
        lastName: "",
        email: "",
        maths: "",
        english: "",
        hindi: ""
  });
const getData = (e) => {
    setStudentData((prev) => {
        return { ...prev, [e.target.name]: e.target.value }
    })
}
const getStudetnData = (e) => {
    e.preventDefault();
    const store = { ...studentData, total: Number(studentData.maths) + Number(studentData.english) + Number(studentData.hindi) };
    axios.put(url, store).then(() => { alert("Data Updated Succesfully") }).catch(() => { console.log("error") });
};
  return <div className='w-5/12 mt-5 mb-20 mx-auto p-3 bg-slate-300 rounded-lg shadow-md shadow-black'>
  <h1 className='font-semibold text-4xl text-center border-b-2 border-black'>Update Student Details</h1>
  <form onSubmit={getStudetnData}>
      <label htmlFor="firstName" className='text-2xl'>First Name</label>
      <br />
      <input type="text" name="firstName" id="firstName" className='w-full p-2 mb-2' value={studentData.firstName} onChange={getData} required />

      <label htmlFor="lastName" className='text-2xl'>Last Name</label>
      <br />
      <input type="text" name="lastName" id="lastName" className='w-full p-2 mb-2' value={studentData.lastName} onChange={getData} required />

      <label htmlFor="email" className='text-2xl'>Email Id</label>
      <br />
      <input type="email" name="email" id="email" className='w-full p-2 mb-2' value={studentData.email} onChange={getData} />
      <div className='flex justify-between'>
          <span className='m-3 p-2'>
              <label htmlFor="maths">Maths</label>
              <input value={studentData.maths} onChange={getData} type="number" id="maths" name="maths" className='mx-2 w-14 p-2' />
          </span>
          <span className='m-3 p-2'>
              <label htmlFor="english">English</label>
              <input value={studentData.english} onChange={getData} type="number" id="english" name="english" className='mx-2 w-14 p-2' />
          </span>
          <span className='m-3 p-2'>
              <label htmlFor="hindi">Hindi</label>
              <input value={studentData.hindi} onChange={getData} type="number" id="hindi" name="hindi" className='mx-2 w-14 p-2' />
          </span>
      </div>
      <div className='flex justify-around'>
          <Button variant="contained" color="success" type="submit">
              Update
          </Button>
          <Button variant="contained" color="error">
              <NavLink to='/'>
                  Back
              </NavLink>
          </Button>
      </div>
  </form>
</div>


}

export default UpdateStudent