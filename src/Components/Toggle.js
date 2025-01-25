import { Link } from 'react-router-dom';
import style from '../Toggle.module.css'
export default function Toggle() {
    return (
        <div className='mt-3 d-flex justify-content-end bgLink d-flex container'>
            <Link to='/' className={style.toggle}> Home</Link>
            <Link to="Resume" className={style.toggle}> Resume</Link>
            <Link to="Works" className={style.toggle}> Works</Link>
            <Link to="Contact" className={style.toggle}> Contact</Link>
        </div>
    );
}