import Header from './components/Header'
import Footer from './components/Footer'
import './index.css'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router';
import Experience from './pages/Experience';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { Toaster } from 'sonner';

function App() {
  return (
    <BrowserRouter>
      <div className='min-h-screen bg-background text-foreground flex flex-col'>
        <Header />
        <main className='flex-1'>
          <Routes>
            <Route path='/' element={<Navigate to="/home" replace />}/>
            <Route path='/home' element={<Home />} />
            <Route path='/experience' element={<Experience />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="top-center" />
      </div>
    </BrowserRouter>
  )
}

export default App;