let Footer = () => {
    return (
        <section className="footer">
            <div className="container d-flex justify-content-between align-items-center gap-5 h-100">
                <img className="logo" src="..\src\assets\logo-wh.png" alt="" />
                <h5 className="text-light">X-28 Alarmas &copy; {new Date().getFullYear()}</h5>
                <p className="text-light">Todos los derechos reservados</p>

            </div>
        </section>
    );
};

export default Footer;
