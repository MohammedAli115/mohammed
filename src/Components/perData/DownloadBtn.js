import styleBtn from './css/Btn.module.css'
export default function DownloadBtn() {

        const link = "https://drive.google.com/uc?export=download&id=1bfKR8-HOeHYoxGZjnaDGreZcsjNhfGQ_";

    return (
        <div className='download'>
            <a href={link} className={styleBtn.button}>
                <svg
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    height="40"
                    width="40"
                    className="button__icon"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path fill="none" d="M0 0h24v24H0z" stroke="none"></path>
                    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
                    <path d="M7 11l5 5l5 -5"></path>
                    <path d="M12 4l0 12"></path>
                </svg>
                <span className={styleBtn.button__text}>Download Cv</span>
            </a>

        </div>
    );
}