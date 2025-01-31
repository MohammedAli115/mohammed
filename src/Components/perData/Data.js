
import PersonalData from './PersonalData';

export default function Data() {
    return (
        <div>
            <button
                className="btn text-body fs-5 d-md-none "
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#responsiveOffcanvas"
                aria-controls="responsiveOffcanvas"
                style={{backgroundColor :"rgb(234 123 63 / 1%)", position : "absolute" ,top :"18px", right : "80px"}}
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
                        style={{position : "absolute", top :"15px", right :"15px"}}
                        type="button"
                        className='fs-3 text-danger border-0 '
                        data-bs-dismiss="offcanvas"
                        aria-label="إغلاق"
                        
                    ><i className="fa-solid fa-arrow-left-long"></i></button>
                </div>
                    <PersonalData />
            </div>

            <div className="d-none d-md-block">
                <PersonalData />
            </div>
        </div>
    );
};