import { useContext } from "react"

import { StudentsContext } from "../contexts/StudentContext"

export const StudentList = () => {
    const { students, removeStudent } = useContext(StudentsContext)
    return (
        <div>
            <h2>Lista de alumnos</h2>
            <ul>
                {
                    students.map( student => (
                        <li 
                            className="flex justify-between items-center pt-2 pb-2"
                            key={student.id}>
                            { student.name } - { student.age }
                            <button
                                onClick={() => removeStudent(student.id)}
                                className="bg-red-500 text-white p-2 rounded">
                                Eliminar
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};