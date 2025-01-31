import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {motion } from 'framer-motion';

export default function Contact() {

    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            "service_6jlo59m", 
            "template_r3d2m8n", 
            e.target,
            "AyR5VCPdO1VFY0sHF" 
        )
            .then((result) => {
                console.log("تم الإرسال بنجاح:", result.text);
                alert("Your message has been sent successfully!");
                setFormData("")
            },
                (error) => {
                    console.error("فشل في الإرسال:", error.text);
                    alert("There was an error sending your message!");
                }
            );

        e.target.reset();
    };

    return (
        <motion.div className="container overflow-hidden"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}>
            <h3 className="mb-3 fs-2">CONTACT US</h3>
            <form onSubmit={sendEmail} className="p-4 mt-4" style={{ backgroundColor: "#f8f9fa", borderRadius: "8px" }}>
        
                <div className="row">
                    <div className="mb-3 d-flex col-lg-6">
                        <input
                            type="text"
                            aria-label="Username" aria-describedby="basic-addon1"
                            name="user_name"
                            id="user_name"
                            className="form-control "
                            placeholder="Enter your name"
                            value={formData.user_name}
                            onChange={handleChange}
                            required
                        />
                    </div>
        
                    <div className="mb-3 col-lg-6">
                        <input
                            type="email"
                            name="user_email"
                            id="user_email"
                            className="form-control"
                            placeholder="Enter your email"
                            value={formData.user_email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
    
                <div className="mb-3">
                    <textarea
                        name="message"
                        id="message"
                        rows="4"
                        className="form-control"
                        placeholder="Write your message here"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>

                <div className="text-center">
                    <button style={{ backgroundColor: "#ed7732", letterSpacing: "1.7px" }} type="submit" className="btn fs-5 px-4 mt-3 text-white">
                        Send
                    </button>
                </div>
            </form>
            <div className="icons mb-1 d-flex justify-content-center py-3 my-4 rounded-3">
                <a rel="noreferrer" target="_blank" href="mailto:mohamedalihasan15@gmail.com"><i className="fa-solid fa-envelope fs-1 py-2 mx-4" style={{ color: "red" }}></i></a>
                <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/mohammed-ali-914862223?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> <i className="fa-brands fa-linkedin fs-1 mx-4 py-2 text-primary"></i></a>
                <a rel="noreferrer" target="_blank" href="https://wa.me/201020862114"><i className="fa-brands fa-square-whatsapp fs-1 mx-4 py-2 text-success"></i></a>
                <a rel="noreferrer" target="_blank" href="https://github.com/MohammedAli115"><i className="fa-brands fa-github fs-1 py-2 mx-4 text-dark"></i></a>
            </div>
        </motion.div>
    );
}