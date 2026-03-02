import { useState, useEffect } from "react";

function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
    const fetchData = async () => {
        try {
        setLoading(true);

        const res = await fetch(url);

        if (!res.ok) {
            throw new Error("Something went wrong");
        }

        const result = await res.json();
        setData(result);
        setError(null);
        } catch (err) {
        setError(err.message);
        } finally {
        setLoading(false);
        }
    };

    fetchData();
    }, [url]);

    return { data, loading, error };
}

export default useFetch;