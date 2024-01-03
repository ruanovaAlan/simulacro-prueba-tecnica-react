import { useState, useEffect } from "react"

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?
fontSize=50&fontColor=red&josn=true`

export function App() {
    const [fact, setFact] = useState()

    //fetching de datos
    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
            .then(res => res.json())
            .then(data => setFact(data.fact))
    }, [])

    return (
        <main>
            <h1>App de gatitos</h1>
            {fact && <p>{fact}</p>}
        </main>
    )
}