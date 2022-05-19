import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import RequireAuth from './components/RequireAuth';
import ToDoList from './components/ToDoList';
import Footer from './components/Footer';

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/todolist" element={
          <RequireAuth>
            <ToDoList />
          </RequireAuth>
        } />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
