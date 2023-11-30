import { useState, useEffect } from 'react';
import { editStudent } from './../services/localstorage';
import { useNavigate, useParams } from 'react-router-dom';
import uuid from 'react-uuid';
import { useForm } from './../hooks/useForm';
import { addStudent, getStudentById } from '../services/localstorage';

const StudentForm = () => {
  /*
  const navigate = useNavigate();
  const { id } = useParams();
  const [showAlert, setshowAlert] = useState(false);
  const { inputValues, handleInputChange, resetForm, setForm } = useForm({
    fname: '',
    lname: '',
    email: '',
    phone:'',

  })
  useEffect(() => {
    if (id) {
        const student = getStudentById(id);
        setForm(student);
    }
}, [id]);*/
const navigate = useNavigate();
  const { id } = useParams();
  const [showAlert, setshowAlert] = useState(false);
  const { inputValues, handleInputChange, resetForm, setForm } = useForm({
    fname: '',
    lname: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    if (id) {
      const student = getStudentById(id);
      setForm(student);
    }
  }, [id]);

const handleSubmit = (e) => {
  e.preventDefault();
  id ? editStudent(id, inputValues) : addStudent({ id: uuid(), ...inputValues });
  resetForm();
  setshowAlert(true);
  setTimeout(() => {
      setshowAlert(false);
  }, 2000);
};

  return (

    //  header

    <div>
      <div className="d-flex my-5 justify-content-between">
        <button className='btn btn-outline-secondary' 
        onClick={() => navigate("/")}>Back</button>
        <h1 className='text-center'>{id ? "Edit" : "Add new"}</h1>
      </div>

      {/* Form */}

      <div className="card border-primary p-5 m-5">
        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label className='form-label mt-2' htmlFor="fname"> First Name</label>
            <input
              type="text"
              className='form-control'
              name="fname"
              id="fname"
              value={inputValues.fname}
              onChange={handleInputChange}
              placeholder='Enter your first name'
            />
          </div>

          <div className="form-group">
            <label className='form-label mt-2' htmlFor="lname">Last Name</label>
            <input
              type="text"
              className='form-control'
              name="lname"
              id="lname"
              value={inputValues.lname}
              onChange={handleInputChange}
              placeholder='Enter your last name'
            />
          </div>

          <div className="form-group">
            <label className='form-label mt-2' htmlFor="email">Email Id</label>
            <input
              type="email"
              className='form-control'
              name="email"
              id="email"
              value={inputValues.email}
              onChange={handleInputChange}
              placeholder='Enter your email'
            />
          </div>

          <div className="form-group">
            <label className='form-label mt-2' htmlFor="phone">Phone Number</label>
            <input
              type="number"
              className='form-control'
              name="phone"
              id="phone"
              value={inputValues.phone}
              onChange={handleInputChange}
              placeholder='Enter phone number'
            />
          </div>

          <div className="d-grid gap-2 mt-3">
            <button type="submit" className='btn btn-outline-primary'>{id ? "Edit" : "Add new"}</button>
          </div>

        </form>
      </div>
{
  showAlert && (
    <div className="px-5">
      <div className="alert alert-success text-white" role='alert'>
      <strong>Added successfully!</strong> {id ? "edit" : "added a new"}.
      </div>
    </div>
  )
}
    </div>
  );
};

export default StudentForm;
