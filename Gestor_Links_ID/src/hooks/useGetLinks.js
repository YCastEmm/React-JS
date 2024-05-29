import { useEffect, useState, useCallback } from "react";
import { getLinksFromDatabase } from "../config/firebase";

const useGetLinks = (coleccion) => {
    const [datos, setDatos] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const getLinks = useCallback(async () => {
        setLoading(true);
        try {
            const datos = await getLinksFromDatabase(coleccion);
            console.log(datos);
            setDatos(datos);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }, [coleccion]);

    useEffect(() => {
        getLinks();
    }, [getLinks]);

    return { datos, error, loading };
};

export default useGetLinks;
