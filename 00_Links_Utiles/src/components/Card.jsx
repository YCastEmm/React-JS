let Card = ({ title, url, description }) => {
    return (
        <div className="card tarjeta">
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a className="card-link" href={url} target="_blank">
                            Ingresar
                        </a>
                    </div>
                    <div >
                       <img className="imagen-link" src="//www.html.am/images/samples/remarkables_queenstown_new_zealand-300x225.jpg" alt="" /> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
