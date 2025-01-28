
import { Route, Routes } from "react-router-dom";
import Home from "./Content/Home";
import Resume from "./Content/Resume";
import Works from "./Content/Works";
import Contact from "./Content/Contact";

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