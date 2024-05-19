import { BrowserRouter } from "react-router-dom"
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Provider from "./Context/Provider.tsx"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider>
      <App />
    </Provider>
  </BrowserRouter>
  
)
