import { z } from 'zod'
import { CurrencySchemas, CryptoCurrencyResponseSchema, Pair } from '../schemas/crypto-schemas'


export type Currency = z.infer<typeof CurrencySchemas>
export type CryptoCurrency = z.infer<typeof CryptoCurrencyResponseSchema>
export type Pair = z.infer<typeof Pair>