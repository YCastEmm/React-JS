let Card = ({ title, url, description }) => {
    return (
        <div className="card tarjeta">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a className="card-link" href={url} target="_blank">
                    url
                </a>
            </div>
        </div>
    );
};

export default Card;
