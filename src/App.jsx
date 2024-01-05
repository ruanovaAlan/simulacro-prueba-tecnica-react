import { useState, useEffect } from "react"
import { useCatImage } from "./hooks/useCatImage"
import { getRandomFact } from "./services/facts"
import './App.css'

export const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export function App() {
    const [fact, setFact] = useState()
    const { imageUrl } = useCatImage({ fact })

    //fetching de datos
    useEffect(() => {
        const fetchData = async () => {
            const { newFact } = await getRandomFact()
            setFact(newFact)
        }
        fetchData()
    }, [])


    const handleClick = async () => {
        const { newFact } = await getRandomFact()
        setFact(newFact)
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