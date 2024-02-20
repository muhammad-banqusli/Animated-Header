import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Layout, Home, Contact, About, Forum } from "./components";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="forum" element={<Forum />} />
            </Route>
        </Routes>
    );
}

export default App;
