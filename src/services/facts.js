import { CAT_ENDPOINT_RANDOM_FACT } from '../App'

export const getRandomFact = async () => {
    const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
    const data = await res.json()
    const newFact = data.fact
    const firstThreeWords = newFact.split(' ', 3).join(' ')
    const imageURL = `https://cataas.com/cat/says/${firstThreeWords}?fontSize=50&fontColor=red`
    return { newFact, imageURL }
}