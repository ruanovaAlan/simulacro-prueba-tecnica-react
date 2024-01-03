import { useState, useEffect } from "react"
import './App.css'
import { getRandomFact } from "./services/facts"

export const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export function App() {
    const [fact, setFact] = useState()
    const [imageUrl, setImageUrl] = useState()

    //fetching de datos
    useEffect(() => {
        const fetchData = async () => {
            const { newFact, imageURL } = await getRandomFact()
            setFact(newFact)
            setImageUrl(imageURL)
        }
        fetchData()
    }, [])

    const handleClick = async () => {
        const { newFact, imageURL } = await getRandomFact()
        setFact(newFact)
        setImageUrl(imageURL)
    }

    return (
        <main>
            <h1>App de gatitos</h1>
            <button onClick={handleClick}>Change Cat</button>
            {fact && <p>{fact}</p>}
            {<img src={imageUrl} alt={`Image extracted using first three words of ${fact}`} />}
        </main>
    )
}