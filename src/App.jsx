import { useState, useEffect } from "react"
import './App.css'
import { getRandomFact } from "./services/facts"

export const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_PREFIX_IMAGE = `https://cataas.com/cat/says/`
const CAT_POSTFIX_IMAGE = `?fontSize=50&fontColor=red`

function useCatImage({ fact }) {
    const [imageUrl, setImageUrl] = useState()

    useEffect(() => {
        const fetchImage = async () => {
            if (!fact) {
                return
            }
            const firstThreeWords = fact.split(' ', 3).join(' ')
            const url = `${CAT_PREFIX_IMAGE}${firstThreeWords}${CAT_POSTFIX_IMAGE}`
            const res = await fetch(url)
            const image = await res.url
            setImageUrl(image)
        }

        fetchImage()
    }, [fact])

    return { imageUrl }
}

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