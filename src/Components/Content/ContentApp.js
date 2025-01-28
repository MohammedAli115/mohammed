
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Resume from "./Resume";
import Works from "./Works";
import Contact from "./Contact";

export default function ContentApp() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="resume" element={<Resume/> } />
            <Route path="portfolio" element={<Works/> } />
            <Route path="contact" element={<Contact/> } />
        </Routes>
    );
}