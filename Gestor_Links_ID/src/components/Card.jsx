import { useEffect, useState } from "react";
import { getLinksFromDatabase } from "../config/firebase";

let Card = () => {
    let [data, setData] = useState(null);

    let mostrarLinks = async () => {
        try {
            let datos = await getLinksFromDatabase();
            console.log(datos);
            setData(datos);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        mostrarLinks();
    }, []);

    return (
        <div>
            {data
                ? data.map((data) => {
                      return (
                          <div className="rounded-xl block card text-center my-2 text-white mx-2">
                              <h1 className="text-lg font-bold">{data.name}</h1>
                              <a href={data.url} target="_blank">
                                  Ingresar
                              </a>
                              <p>{data.description}</p>
                          </div>
                      );
                  })
                : "Loading"}
        </div>
    );
};

export default Card;
