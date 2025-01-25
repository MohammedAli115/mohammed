import HomeCard from "./HomeCard";
import {motion} from 'framer-motion'
export default function Home() {
    return (
        <motion.div className="px-3"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}>
            <h3 className="fs-2">ABOUT MY</h3>
            <p>Welcome! I'm Mohamed, a Front-End developer passionate about creating modern, responsive and distinctive web experiences that combine creativity and technology. Enjoy exploring my work and let's start our journey together!</p>
            <h2>What I do!</h2>
            <div className="row">
                <div className="my-3 col-lg-6 col-md-12 col-sm-12" >
                    <div style={{ backgroundColor: "#fff9e6" }} >
                        <HomeCard icon={<i className="fa-solid fa-code"></i>}
                            text="Website Development Using React Js Library"
                            title="Web Development" />
                    </div>
                </div>
                <div className="my-3 col-lg-6 col-md-12 col-sm-12" >
                    <div style={{ backgroundColor: "#f8f9fa" }} >
                        <HomeCard icon={<i className="fa-solid fa-globe"></i>}
                            text="Handling API and data binding from backend using fetch and axios library"
                            title="API Handling" />
                    </div>
                </div>
                <div className="my-3 col-lg-6 col-md-12 col-sm-12" >
                    <div style={{ backgroundColor: "#fff9e6" }} >
                        <HomeCard icon={<i className="fa-solid fa-mobile-screen-button"></i>}
                            text="Using Bootstrap V5 library to design an attractive and responsive front end for all devices"
                            title="Responsive Design" />
                    </div>
                </div>
                <div className="my-3 col-lg-6 col-md-12 col-sm-12" >
                    <div style={{ backgroundColor: "#f8f9fa" }} >
                        <HomeCard icon={<i className="fa-solid fa-laptop-code"></i>}
                            text="I prioritize continuous learning to stay updated with the latest technologies and deliver modern, high-quality work."
                            title="Continuous learning" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}