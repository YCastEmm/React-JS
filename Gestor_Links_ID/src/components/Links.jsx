let Links = ({links}) => {

    return (
        <div>
            {links ? links.map((data) => (
                        <div className="rounded-xl block card text-center my-2 text-white mx-2">
                            <h1 className="text-lg font-bold">{data.name}</h1>
                            <a href={data.url} target="_blank">
                                Ingresar
                            </a>
                            <p>{data.description}</p>
                        </div>
                    ))
                : "Loading"}
        </div>
    );
};

export default Links;
