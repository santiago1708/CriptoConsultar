import { create } from "zustand";
import {devtools} from 'zustand/middleware'
import { CryptoCurrency, Pair } from "./types";
import { getCryptos, fetchCurrentCryptoPrice } from "./services/CryptoService";

type CryptoStore = {
    cryptoCurrencies: CryptoCurrency[]
    fetchCyptos: () => Promise<void>
    fetchData: (pair : Pair) => Promise<void>
}


export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
    cryptoCurrencies: [],
    fetchCyptos : async () => {
        const cryptocurrencies = await getCryptos()
        set(() => ({
            cryptoCurrencies : cryptocurrencies
        })) 
    },
    fetchData : async (pair) => {
        await fetchCurrentCryptoPrice(pair)
    }
})))