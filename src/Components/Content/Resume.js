import React from 'react';
import htmlImg from './assets/html1.jpg';
import cssImg from './assets/css1.jpg';
import jsImg from './assets/jss.jpg';
import bootstrapImg from './assets/bootstrap.jpg';
import reactImg from './assets/react1.jpg';
import gitImg from './assets/git.jpg';
import githubImg from './assets/githaub.jpg';
import redux from './assets/redux.jpg'
import {motion} from 'framer-motion'

const images = [
    { id: 1, src: htmlImg },
    { id: 2, src: cssImg },
    { id: 3, src: jsImg },
    { id: 4, src: bootstrapImg },
    { id: 5, src: reactImg },
    { id: 6, src: gitImg },
    { id: 7, src: githubImg },
    { id: 8, src: redux}
];

export default function Resume() {
    return (
        <motion.div className='overflow-hidden'
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}>
            <h2 className='fs-2 py-2'>RESUME</h2>
            <p className='fs-6 bg-light p-2 rounded-3' style={{ width: "fit-content" }}>Work Skills</p>
            <div className='row'>
                    {images.map((img) => {
                        return (
                            <div key={img.id} className='col-lg-3 col-md-4 col-sm-6'>
                                <img key={img.id} className='py-3 w-sm-25' style={{ width: "100%", height: "190px" , textAlign : "center"}} src={img.src} alt="" />
                            </div>
                        );
                    })}
            </div>
        </motion.div>
    );
}