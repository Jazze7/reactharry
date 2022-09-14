// import logo from './logo.svg'
import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    const [alert, setAlert] = useState("null");
    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type,
        });
        setTimeout(() => {
            setAlert(null);
        }, 2000);
    };
    return (
        <>
            <Router>
                <Navbar Heading="TextFormatter" about="About Us" />
                <Alert alert={alert} />
                <div className="container">
                    <Routes>
                        <Route
                            path="/"
                            element={<Form showAlert={showAlert} />}
                        />
                    </Routes>
                    <Routes>
                        <Route path="about" element={<About />} />
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default App;
