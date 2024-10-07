import { useEffect } from "react"
import CriptoSerchForm from "./components/CriptoSerchForm"
import {useCryptoStore} from './store'
import CryptoPriceDisplay from "./components/CryptoPriceDisplay"

function App() {

  const fetchCyptos = useCryptoStore( state => state.fetchCyptos)

  useEffect(() => {
    fetchCyptos()
  }, [])

  return (
    <>
      <div className="container">
        <h1 className="app-title">
            cotizador de <span>Criptomonedas</span>
        </h1>

        <div className="content">
          <CriptoSerchForm/>

          <CryptoPriceDisplay />
        </div>
      </div>
    </>
  )
}

export default App
