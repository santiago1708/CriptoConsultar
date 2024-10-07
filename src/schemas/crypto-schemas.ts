import { z } from 'zod'

export const CurrencySchemas = z.object({
    code: z.string(),
    name: z.string()
})

export const CryptoCurrencyResponseSchema =
    z.object({
        CoinInfo: z.object({
            FullName: z.string(),
            Name: z.string()
        })
    })

export const CryptoCurrenciesResponseSchema = z.array(CryptoCurrencyResponseSchema)

export const Pair = z.object({
    currency: z.string(),
    criptomoneda: z.string()
})