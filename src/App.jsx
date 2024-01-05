import { useState, useEffect } from "react"
import { useCatImage } from "./hooks/useCatImage"
import { getRandomFact } from "./services/facts"
import './App.css'

export const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

const useCatFact = () => {
    const [fact, setFact] = useState()

    const refreshFact = () => {
        getRandomFact().then(({ newFact }) => setFact(newFact))
    }

    useEffect(() => {
        refreshFact()
    }, [])

    return { fact, refreshFact }
}

export function App() {
    const { fact, refreshFact } = useCatFact()
    const { imageUrl } = useCatImage({ fact })

    const handleClick = async () => {
        refreshFact()
    }

    return (
        <main>
            <h1>App de gatitos</h1>
            <button onClick={handleClick}>Change Cat</button>
            {fact && <p>{fact}</p>}
            {<img src={imageUrl} alt={`Image extracted using first three words of ${fact} `} />}
        </main>
    )
}