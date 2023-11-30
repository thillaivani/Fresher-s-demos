import {StudentItem} from "./StudentItem";
import { useEffect, useState } from "react";
import { getListOfStudents } from './../services/localstorage';

 const StudentList = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        setStudents(getListOfStudents());
    }, []);
    return (

        <div>
            <h1 className='my-5 text-center'>Manage Students</h1>
            {
                students.length > 0 ? (
                    <div className="card bg-secondary p-3">
                        <table className='table table-hover'>
                            <thead>
                            <tr>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                    students.map(student => <StudentItem student={student} key={student.id} setStudents={setStudents} />)
                                }
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <h3 className="text-center">No Students</h3>
                )
            }

        </div>
    )
}
export default StudentList;

