import { CAT_ENDPOINT_RANDOM_FACT } from '../App'

export const getRandomFact = async () => {
    const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
    const data = await res.json()
    const newFact = data.fact
    return { newFact }
}