import { BrowserRouter, Route, Routes } from "react-router-dom"
import { UserForm } from "./components/UserForm"
import { UserList } from "./components/UserList"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />}/>
        <Route path="/save-user" element={< UserForm />}/>
        <Route path="/user/:id" element={< UserForm />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
