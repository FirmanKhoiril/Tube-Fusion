import './App.css'
import { Route, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import SearchCryptoResult from './pages/SearchResult'
import withLazyLoading from './utils/withLoading'
import SearchFilter from './pages/SearchFilter'
import CryptoDetail from './pages/CryptoDetail'
import ProtectedRoute from './utils/ProtectedRoute'
import { Toaster } from 'sonner'

const Contact = withLazyLoading(() => import('./pages/Contact'))
const TermOfConditions = withLazyLoading(() => import('./pages/TermOfConditions'))
const AboutUs = withLazyLoading(() => import('./pages/AboutUs'))
const ProfileUser = withLazyLoading(() => import('./pages/auth/ProfileUser'))

function App() {
  return (
    <main className='poppins-regular flex items-start'>
    <Sidebar />
    <Toaster position='top-center' closeButton richColors theme='dark' />
    <div className='w-full h-full flex justify-between flex-col gap-4'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/search/:result' element={<SearchCryptoResult />}/>
        <Route path='/crypto/:uuid' element={<CryptoDetail />}/>
        <Route path='/profile' element={
          <ProtectedRoute>
            <ProfileUser />
          </ProtectedRoute>
        }/>
        <Route path='/about' element={<AboutUs />}/>
        <Route path='/term-of-condition' element={<TermOfConditions />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/cryptocurrency/filter' element={<SearchFilter />}/>
      </Routes>
    </div>
 </main>
  )
}

export default App
