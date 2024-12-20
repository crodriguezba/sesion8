import { useContext, useState } from "react";

import { StudentsContext } from "../contexts/StudentContext";

export const AddStudentForm = () => {
    const { addStudent } = useContext(StudentsContext);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (name.trim() && age) {
        addStudent(name, age);
        setName('');
        setAge('');
      }
    };
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2"
        />
        <input
          type="number"
          placeholder="Edad"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="border p-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded"
        >
          Agregar Alumno
        </button>
      </form>
    )
}