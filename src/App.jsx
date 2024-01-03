import { useState, useEffect } from "react"

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?
// fontSize=50&fontColor=red&josn=true`
const IMAGE_PREFIX_URL = 'https://cataas.com'

export function App() {
    const [fact, setFact] = useState()
    const [imageUrl, setImageUrl] = useState()

    //fetching de datos
    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
            .then(res => res.json())
            .then(data => {
                setFact(data.fact)
                const firstThreeWords = data.fact.split(' ', 3).join(' ')
                const imageURL = `https://cataas.com/cat/says/${firstThreeWords}?fontSize=50&fontColor=red`
                setImageUrl(imageURL)
            })
    }, [])

    return (
        <main>
            <h1>App de gatitos</h1>
            {fact && <p>{fact}</p>}
            {<img src={imageUrl} alt={`Image extracted using first three words of ${fact}`} />}
        </main>
    )
}