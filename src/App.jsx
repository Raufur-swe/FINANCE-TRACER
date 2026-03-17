
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProtectedRoute from './utils/ProtectedRoute'
import Login from './pages/Login'
import SignUpPage from './pages/SignUpPage'


const App = () => {

return(
 
<Routes>
 
 <Route path='/' 
 element={
  <ProtectedRoute>
    <Home/>
  </ProtectedRoute>
 }
 />
 <Route path='/login' element={<Login/>} />
 <Route path='/signup' element={<SignUpPage/>} />
</Routes>
 
)
 
}

export default App