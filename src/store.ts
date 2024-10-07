import { create } from "zustand";
import {devtools} from 'zustand/middleware'
import { CryptoCurrency, CryptoPrice, Pair } from "./types";
import { getCryptos, fetchCurrentCryptoPrice } from "./services/CryptoService";

type CryptoStore = {
    cryptoCurrencies: CryptoCurrency[]
    result: CryptoPrice
    loading: boolean
    fetchCyptos: () => Promise<void>
    fetchData: (pair : Pair) => Promise<void>
}


export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
    cryptoCurrencies: [],
    result: {
        IMAGEURL: '',
        PRICE: '',
        HIGHDAY: '',
        LOWDAY: '',
        CHANGEPCT24HOUR: '',
        LASTUPDATE: ''
    },
    loading: false, 
    fetchCyptos : async () => {
        const cryptocurrencies = await getCryptos()
        set(() => ({
            cryptoCurrencies : cryptocurrencies
        })) 
    },
    fetchData : async (pair) => {
        set(() => ({
            loading: true
        }))
        const CryptoPrice = await fetchCurrentCryptoPrice(pair)
        set(() => ({
            result: CryptoPrice,
            loading: false
        }))
    }
})))