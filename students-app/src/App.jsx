import './App.css'
import { AddStudentForm } from './components/AddStudentForm'
import { StudentsProvider } from './contexts/StudentContext'
import { StudentList } from './pages/StudentList'

function App() {
  return (
    <StudentsProvider>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-4">Gestion de alumnos</h1>
        <AddStudentForm />
        <StudentList />
      </div>
    </StudentsProvider>
  )
}

export default App
