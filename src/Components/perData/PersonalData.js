import DownloadBtn from "./DownloadBtn";
import img from './images/photo.jpg'
export default function  PersonalData() {
    return (
        <div className="body bg-white mt-5 mt-md-0  position-relative rounded-3">
            <div className="p-2 text-center">
                <div>
                    <div>
                        <img src={img} className="w-50 position-absolute top-0 start-50 translate-middle rounded-3" alt="personal-img" />
                    </div>
                    <div className="mt-5 pt-3">
                        <h2 className="mt-5 mt-md-0">Mohammed Ali</h2>
                        <span className="fw-bold">Front End Developer</span>
                        <div className="icons bg-light mb-1 d-flex justify-content-around py-1 my-2 rounded-3">
                            <a target="_blank" rel='noreferrer' href="mailto:mohamedalihasan15@gmail.com"><i className="fa-solid fa-envelope fs-2 py-2" style={{color : "red"}}></i></a>
                            <a target="_blank" rel='noreferrer ' href="https://www.linkedin.com/in/mohammed-ali-914862223?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> <i className="fa-brands fa-linkedin fs-2 py-2 text-primary"></i></a>
                            <a target="_blank" rel='noreferrer ' href="https://wa.me/201020862114"><i className="fa-brands fa-square-whatsapp fs-2 py-2 text-success"></i></a>
                            <a target="_blank" rel='noreferrer ' href="https://github.com/MohammedAli115"><i className="fa-brands fa-github fs-2 py-2 text-dark"></i></a>
                        </div>
                    </div>
                    <div className='bg-light rounded-3 py-3 py-md-1'>
                        <div className=" d-flex align-items-center">
                            <i style={{color : "#eb6117"}} className="mx-3 fs-3 fa-solid fa-mobile-screen-button"></i>
                            <div>
                                <span className="fs-5 ">Phone</span>
                                <p>+201020862114</p>
                            </div>
                        </div>
                        <div className=" d-flex align-items-center ">
                            <i style={{color : "#eb6117"}} className="mx-3 fs-3 fa-regular fa-envelope"></i>
                            <div>
                                <span className="fs-5 ">Email</span>
                                <p>mohamed..@gmail..</p>
                            </div>
                        </div>
                        <div className=" d-flex align-items-center ">
                            <i style={{color :"#eb6117"}} className="mx-3 fs-3 fa-solid fa-location-dot"></i>
                            <div>
                                <span className="fs-5 ">Location</span>
                                <p>Nasr City, Cairo, Egypt</p>
                            </div>
                        </div>
                        <DownloadBtn />
                    </div>
                </div>
            </div>
        </div>
    );
}