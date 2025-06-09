import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/Routes'
import { AuthProvider } from './hooks' // Masih belum fix
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
