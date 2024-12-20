import { createContext, useState } from "react";

export const StudentsContext = createContext();

export const StudentsProvider = ({ children }) => {
    const [students, setStudents] = useState([
        { id: 1, name: 'Marta', age: 34},
        { id: 2, name: 'Luis', age: 24}
    ]);

    const addStudent = (name, age) => {
        const newStudent = { id: Date.now(), name, age: parseInt(age, 10) };
        setStudents([...students, newStudent]);
    };

    const removeStudent = (id) => {
        setStudents(students.filter((student) => student.id !== id));
    };

    return (
        <StudentsContext.Provider value={{ students, addStudent, removeStudent }}>
            { children }
        </StudentsContext.Provider>
    );
};