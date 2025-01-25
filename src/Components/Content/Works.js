
import './projects.css'
import { Projects } from './ProjectsInfo';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Works() {
  const [selectedImage, setSelectedImage] = useState(null); // حالة لتخزين الصورة المختارة

    const handleImageClick = (src) => {
        if (selectedImage === src) {
            setSelectedImage(null);
        } else {
            setSelectedImage(src);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ duration: 0.5 }}
        >
            <h3 className="mb-2">PORTFOLIO</h3>
            <div className="row">
                <span style={{fontSize : "14px", color : "#888", fontFamily : "Playwrite IN", letterSpacing : "1.5"}} className='text-center py-3 '>"I believe that every project is an opportunity to learn, and that every line of code I write tells a new story of challenges and innovation."</span>
                {Projects.map((pro) => {
                    return (
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={pro.id}>
                            <div className="card">
                                <img
                                    className="card-img-top rounded-3"
                                    style={{ cursor: 'pointer' }}
                                    src={pro.src}
                                    alt={pro.title}
                                    onClick={() => handleImageClick(pro.src)}
                                />
                                <div className="card-body">
                                    <h5 className="text-center fs-5 card-title">{pro.title}</h5>
                                    <div className='d-flex justify-content-center'>
                                        <a target="_blank" rel="noopener noreferrer" href={pro.repo} style={{background : "#eda36a"}} className="btn me-2 text-white ">
                                            Repo
                                        </a>
                                        <a
                                            target="_blank"
                                            style={{background : "#e3e1e2"}}
                                            rel="noopener noreferrer"
                                            href={pro.demo}
                                            className="btn"
                                        >
                                            Demo
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {selectedImage && (
                <div className="full-screen-image" onClick={() => setSelectedImage(null)}>
                    <img src={selectedImage} alt="Full View" className="img-fluid" />
                </div>
            )}
        </motion.div>
    );
}