import { useState, useEffect } from 'react'


export function useCatImage({ fact }) {
    const [imageUrl, setImageUrl] = useState()

    useEffect(() => {
        const fetchImage = async () => {
            if (!fact) {
                return
            }
            const firstThreeWords = fact.split(' ', 3).join(' ')
            const url = `https://cataas.com/cat/says/${firstThreeWords}?fontSize=50&fontColor=red`

            const res = await fetch(url)
            const image = await res.url
            setImageUrl(image)
        }

        fetchImage()
    }, [fact])

    return { imageUrl }
}