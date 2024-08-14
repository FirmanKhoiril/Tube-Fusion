import './App.css'
import { Route, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import SearchResult from './pages/SearchResult'
import withLazyLoading from './utils/withLoading'
import SearchFilter from './pages/SearchFilter'
import CryptoDetail from './pages/CryptoDetail'

const Contact = withLazyLoading(() => import('./pages/Contact'))
const TermOfConditions = withLazyLoading(() => import('./pages/TermOfConditions'))

function App() {
  return (
   <main className='poppins-regular flex items-start'>
      <Sidebar />
      <div className='w-full h-full flex flex-col gap-4 px-2'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/search/:result' element={<SearchResult />}/>
          <Route path='/crypto/:uuid' element={<CryptoDetail />}/>
          <Route path='/term-of-condition' element={<TermOfConditions />}/>
          <Route path='/contact-us' element={<Contact />}/>
          <Route path='/cryptocurrency/filter' element={<SearchFilter />}/>
        </Routes>
      </div>
   </main>
  )
}

export default App
