import { useCatImage } from "./hooks/useCatImage"
import { useCatFact } from "./hooks/useCatFact"
import './App.css'

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
            {<img src={imageUrl} alt={`Image extracted using first three words of ${fact}`} />}
        </main>
    )
}