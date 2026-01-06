import { useState } from 'react';
import { Landing, Navbar, PageLoading } from './components';
import Footer from './components/HOME/Footer';
import { Route, Routes } from 'react-router-dom';
import { Dashboard, Login, Register } from './pages';

const App = () => {

  const [isAuthenticated] = useState(!false);

  return (
    <AppWrapper>
      {isAuthenticated
        ?
        <>
          <Dashboard />
        </>
        :
        <>
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Landing />} />
          </Routes>
          <Footer />
        </>
      }
    </AppWrapper>
  )
}

export default App

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const [loading] = useState(false);
  return (
    <main className=''>
      {loading && <PageLoading />}
      <div className='fixed w-full h-full z-40 overflow-auto'>
        {children}
      </div>
    </main>
  )
}