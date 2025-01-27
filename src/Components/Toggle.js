import { Link } from 'react-router-dom';
import style from '../Toggle.module.css'
export default function Toggle() {
    return (
        <div className='mt-3 d-flex justify-content-end bgLink d-flex container'>
            <div className='d-none d-sm-block'>
                <Link to='/' className={style.toggle}> Home</Link>
                <Link to="Resume" className={style.toggle}> Resume</Link>
                <Link to="portfolio" className={style.toggle}> portfolio</Link>
                <Link to="Contact" className={style.toggle}> Contact</Link>
            </div>
            
            <div className='d-flex d-sm-none justify-content-between '>
                <div className={style.mobile}>
                    <Link to='/'>
                        <i className="fa-solid fa-house"></i>
                        <span>Home</span>
                    </Link>
                    <Link to="Resume" className=''>
                        <i className="fa-solid fa-laptop-code"></i>
                        Resume
                    </Link>
                    <Link to="portfolio" className=''>
                        <i className="fa-solid fa-folder-open"></i>
                        <span>portfolio</span>
                    </Link>
                    <Link to="Contact" className=''>
                        <i className="fa-solid fa-phone"></i>
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    );
}