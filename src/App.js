import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { StudentList } from "./components";
import { StudentForm } from "./components";


  export const App = () => {
  return(
    <div>
      <Navbar />
      <div className="container">
<Routes>
  <Route path="/" element={<StudentList />}/>
  <Route path="/create-student" element={<StudentForm />}/>
  <Route path="/edit-employee/:id" element={<StudentForm />}/>
</Routes>

      </div>
    </div>
  )
}

