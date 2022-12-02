import { Route,Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { TaskForm, TasksPage, NotFound } from "./pages";

function App() {
  

  return (
  
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<TasksPage/>}/>
        <Route path="/new" element={<TaskForm/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>

  )

    
}

export default App
