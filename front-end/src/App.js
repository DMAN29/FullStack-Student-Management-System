import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import {Routes,Route} from 'react-router-dom'
import AddStudent from './components/AddStudent'
import AllStudents from './components/AllStudents'
import DeleteStudent from './components/DeleteStudent'
import UpdateStudent from './components/UpdateStudent'
const App = () => {
  return <>
    <Header/>
    <Routes>
      <Route path="/" Component={AllStudents}/>
      <Route path="/add-student" Component={AddStudent}/>
      <Route path="/delete-student/:id" Component={DeleteStudent}/>
      <Route path="/update-student/:id" Component={UpdateStudent}/>
    </Routes>
    <Footer/> 
  </>
}

export default App