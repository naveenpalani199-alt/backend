import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";

import Dashboard from "./Components/Dashboard.jsx";
import Courses from "./Components/Courses.jsx";
import Assignments from "./Components/Assignments.jsx";
import Profile from "./Components/Profile.jsx";
import "./App.css";

const App = () => {
  return (
    <>
    <BrowserRouter>
      <div className="container">

        <h1>React Router Practice</h1>

        {/* TASK 1 */}
        <section>
          <h2>Task 1: Simple Multi-Page Website</h2>

          <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>

          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </section>

        <hr />

        {/* TASK 2 */}
        <section>
          <h2>Task 2: Student Portal Navigation</h2>

          <nav className="navbar">
            <NavLink to="/student-portal" end>
              Dashboard
            </NavLink>

            <NavLink to="/student-portal/courses">
              Courses
            </NavLink>

            <NavLink to="/student-portal/assignments">
              Assignments
            </NavLink>

            <NavLink to="/student-portal/profile">
              Profile
            </NavLink>
          </nav>

          <Routes>
            <Route path="/student-portal" element={<Dashboard />} />
            <Route path="/student-portal/courses" element={<Courses />} />
            <Route path="/student-portal/assignments" element={<Assignments />} />
            <Route path="/student-portal/profile" element={<Profile />} />
          </Routes>
        </section>

      </div>
    </BrowserRouter>

    </>
  );
};

export default App;