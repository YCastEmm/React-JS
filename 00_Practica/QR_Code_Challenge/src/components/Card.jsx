import QRCode from "../assets/image-qr-code.png";

let Card = ({texto, titulo}) => {
    return (
        <div className="m-auto tarjeta">
            <img className="rounded-3 w-100" src={QRCode} alt="as" />
            <h1 className="titulo">{titulo}</h1>
            <div>
                <p className="texto">{texto}</p>
            </div>
        </div>
    );
};

export default Card;
