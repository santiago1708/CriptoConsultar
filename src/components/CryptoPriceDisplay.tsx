import { useMemo } from "react"
import { useCryptoStore } from "../store"
import Spinner from "./Spinner"

export default function CryptoPriceDisplay() {

    const result = useCryptoStore(state => state.result)
    const loading = useCryptoStore(state => state.loading)
    const handlResult = useMemo(() => !Object.values(result).includes(''), [result])
    return (
        <div className="result-wrapper">
            {loading ? <Spinner/> : handlResult && (
                <>
                    <h2>Cotizacion</h2>
                    <div className="result">
                        <img 
                            src={`https://cryptocompare.com/${result.IMAGEURL}`} 
                            alt="imagen CryptoMoneda" 
                        />
                        <div>
                            <p>El precio es de: <span>{result.PRICE}</span></p>
                            <p>Precio mas alto del dia: <span>{result.HIGHDAY}</span></p>
                            <p>Precio mas Bajo del dia: <span>{result.LOWDAY}</span></p>
                            <p>Variacion ultimas 24horas: <span>{result.CHANGEPCT24HOUR}</span></p>
                            <p>Ultima actualiacion: <span>{result.LASTUPDATE}</span></p>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}
