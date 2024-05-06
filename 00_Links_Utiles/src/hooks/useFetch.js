import { useCallback, useEffect, useState } from "react";

let useFetch = (url) => {
    let [datos, setData] = useState(null);
    let [loading, setLoading] = useState(true);
    let [error, setError] = useState(null);

    let fetchData = useCallback(async () => {
        setLoading(true);

        try {
            let response = await fetch(url);
            if (!response.ok) {
                throw Error("Ha ocurrido un error al consumir la API");
            }
            let data = await response.json();
            setData(data);
        } catch (error) {
            setError(error.message);
            console.log(error.message);
        } finally {
            //Finally siempre se ejecuta al final independientemente de si fue por el lado del try u ocurrió un error
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, []);

    return { datos, loading, error };
};

export default useFetch;
