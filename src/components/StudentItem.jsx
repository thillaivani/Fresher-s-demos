import React from 'react'
import { removeStudent } from '../services/localstorage';
import { getListOfStudents } from '../services/localstorage';
import { useNavigate } from 'react-router-dom';

export const StudentItem = ({ student, setStudents }) => {
    const { id, fname, lname,email, phone } = student;
    const navigate = useNavigate();

    const deleteStudent = () => {
        removeStudent(id);
        setStudents(getListOfStudents());
    }
  return (
    <tr className="table-primasry">
            <th>{fname}</th>
            <td>{lname}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>
                <div className="d-flex gap-3">
                    <span type="button" className="badge bg-success" onClick={() => navigate(`/edit-employee/${id}`)}>Edit</span>
                    <span type="button" className="badge bg-danger" onClick={() => deleteStudent()}>Delete</span>
                </div>
            </td>
        </tr>
   )
}

