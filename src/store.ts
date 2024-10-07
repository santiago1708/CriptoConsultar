import { create } from "zustand";
import {devtools} from 'zustand/middleware'
import { CryptoCurrency } from "./types";
import { getCryptos } from "./services/CryptoService";

type CryptoStore = {
    cryptoCurrencies: CryptoCurrency[]
    fetchCyptos: () => Promise<void>
}


export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
    cryptoCurrencies: [],
    fetchCyptos : async () => {
        const cryptocurrencies = await getCryptos()
        set(() => ({
            cryptoCurrencies : cryptocurrencies
        }))
    }
})))