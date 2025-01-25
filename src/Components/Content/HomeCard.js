

export default function HomeCard(props) {
    return (
        <div className=" px-3 py-2 rounded">
            <div className="d-flex align-items-center">
                <i style={{color : "#eb6117"}} className="fs-2 me-3">{props.icon}</i>
                <h3>{props.title}</h3>
            </div>
            <p style={{letterSpacing : "1.5px"}}>{props.text}</p>
        </div>
    );
}