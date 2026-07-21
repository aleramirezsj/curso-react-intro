async function api(){
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

function TodoMessage({ message }) {
    const [state, setState] = React.useState({});

    React.useEffect(() => {
        const data = api();
        setState(data);
    }, []);

    return (
        <p>{state.message||"Cargando"}</p>
    );
}