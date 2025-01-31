import htmlImg from './assets/html-5-svgrepo-com.svg';
import cssImg from './assets/css-3-svgrepo-com.svg';
import jsImg from './assets/js-svgrepo-com.svg';
import bootstrapImg from './assets/bootstrap-svgrepo-com.svg';
import reactImg from './assets/react-svgrepo-com.svg';
import gitImg from './assets/git-svgrepo-com.svg';
import githubImg from './assets/github-142-svgrepo-com.svg';
import redux from './assets/redux-svgrepo-com.svg'
import {motion} from 'framer-motion'

const images = [
    { id: 1, title : "Html 5" , src: htmlImg },
    { id: 2, title : "Css 3" , src: cssImg },
    { id: 3, title : "Javascript" , src: jsImg },
    { id: 4, title : "Bootstrap 5" , src: bootstrapImg },
    { id: 5, title : "React 18" , src: reactImg },
    { id: 6, title : "Git" , src: gitImg },
    { id: 7, title : "Github" , src: githubImg },
    { id: 8, title : "Redux" , src: redux}
];

export default function Resume() {
    return (
        <motion.div className='overflow-hidden'
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}>

            <h2 className='fs-2 py-2'>RESUME</h2>
            <p className='fs-5 bg-light p-2 rounded-3' style={{ width: "fit-content" }}>Work Skills</p>
            <div className="row">
                {images.map((img) => (
                    <div key={img.id} className=" col-lg-3 col-md-4 col-sm-6 col-6 text-center">
                        <div className='bg-light rounded-4'>
                            <img
                                className="p"
                                style={{ maxWidth: "100%", height: "150px", objectFit: "cover" }} src={img.src} alt=""
                            />
                            <p className='fs-2'>{img.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}