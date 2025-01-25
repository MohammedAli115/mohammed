
// import img from './images/photo.jpg'
import PersonalData from './PersonalData';


export default function Data() {
    return (
        <div>

            <button
                className="btn text-white fs-5 d-md-none mb-3"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#responsiveOffcanvas"
                aria-controls="responsiveOffcanvas"
                style={{backgroundColor :"#ea7b3f"}}
            >
                <i className="fa-solid fa-bars"></i>
            </button>


            <div
                className="offcanvas offcanvas-start d-md-none pt-5"
                tabIndex="-1"
                id="responsiveOffcanvas"
                aria-labelledby="responsiveOffcanvasLabel"
            >
                <div className="offcanvas-header">
                    <button
                        type="button"
                        className="btn-close text-reset"
                        data-bs-dismiss="offcanvas"
                        aria-label="إغلاق"
                    ></button>
                </div>
                    <PersonalData />
            </div>

            {/* محتوى يظهر مباشرةً على الشاشات المتوسطة فما فوق */}
            <div className="d-none d-md-block">
                <PersonalData />
            </div>
        </div>
    );
};