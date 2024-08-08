import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/home";
import { User } from "./pages/user/user";
import { ChangeTodo } from "./pages/change-todo/change-todo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/change-todo/:id" element={<ChangeTodo />} />
      </Routes>
    </>
  );
}

export default App;
