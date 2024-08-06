import './App.css'
import { Route, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import SearchResult from './pages/SearchResult'
import withLazyLoading from './utils/withLoading'

// const Home = withLazyLoading(() => import('./pages/Home'))
const Contact = withLazyLoading(() => import('./pages/Contact'))
const TermOfConditions = withLazyLoading(() => import('./pages/TermOfConditions'))

function App() {
  return (
   <main className='poppins-regular flex items-start'>
      <Sidebar />
      <div className='w-full h-full flex flex-col gap-4 mx-2'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/:search' element={<SearchResult />}/>
          <Route path='/term-of-condition' element={<TermOfConditions />}/>
          <Route path='/contact-us' element={<Contact />}/>
        </Routes>
      </div>
   </main>
  )
}

export default App
