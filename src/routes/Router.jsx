import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home"
import Contact from "../pages/contact_us/Contact_us"
import TaskPage from "../pages/task_page/TaskPage"

const Router = () => {
  return (
    <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/home" element={<Home/>} />
       <Route path="/tasks" element={<TaskPage/>} />
       <Route path="/contact" element={<Contact/>} />
    </Routes>
  )
}

export default Router;