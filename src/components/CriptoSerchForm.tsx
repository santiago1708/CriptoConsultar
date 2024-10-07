import { useCryptoStore } from '../store'
import { currencies } from '../data'
import { ChangeEvent, FormEvent, useState } from 'react'
import { Pair } from '../types'
import ErrorMessage from './ErrorMessage'

export default function CriptoSerchForm() {

    const cryptoCurrencies = useCryptoStore((state) => state.cryptoCurrencies)
    const fetchData = useCryptoStore((state) => state.fetchData)

    const [pair, setPair] = useState<Pair>({
        currency: '',
        criptomoneda: ''
    })
    const [error, setError] = useState('')

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setPair({
            ...pair,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(Object.values(pair).includes('')){
            setError('Todos los campos son obligatorios')
            return 
        }
        setError('')

        //Consultar la API
        fetchData(pair)
    }

    return (
        <form
            className="form"
            onSubmit={handleSubmit}
        >
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <div className="field">
                <label htmlFor="currency">Moneda: </label>
                <select 
                    name="currency" 
                    id="currency"
                    onChange={handleChange}
                    value={pair.currency} 
                >
                    <option value="">--- seleccione ---</option>
                    {currencies.map(currency => (
                        <option key={currency.code} value={currency.code}>
                            {currency.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="field">
                <label htmlFor="criptomoneda">Criptomoneda: </label>
                <select 
                    name="criptomoneda" 
                    id="criptomoneda"
                    onChange={handleChange}
                    value={pair.criptomoneda}
                >
                    <option value="">--- seleccione ---</option>
                    {cryptoCurrencies.map((crypto) => (
                        <option 
                            key={crypto.CoinInfo.FullName} 
                            value={crypto.CoinInfo.Name}
                        >
                        {crypto.CoinInfo.FullName}
                        </option>
                    ))}
                </select>
            </div>

            <input type="submit" value='Cotizar'/>
        </form>
    )
}
