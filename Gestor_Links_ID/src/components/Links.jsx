let Links = ({links}) => {


    if (links) {
        console.log(links);
        for (let i = 0; i < links.length; i++) {
            console.log(links[i].categoria);
        }
    }

    return (
        <div>
            {links ? links.map((data) => (

                    <div>
                        
                    </div>
                    //     <div key={data.id} className="rounded-xl block card text-center my-2 text-white mx-2">
                    //         <h1 className="text-lg font-bold">{data.name}</h1>
                    //         <a href={data.url} target="_blank">
                    //             Ingresar
                    //         </a>
                    //         <p>{data.description}</p>
                    //     </div>
                    ))
                : "Loading"}
        </div>
    );
};

export default Links;
