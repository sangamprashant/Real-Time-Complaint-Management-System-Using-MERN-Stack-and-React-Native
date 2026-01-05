import { useState } from 'react';
import { Landing, Navbar, PageLoading } from './components';

const App = () => {
  return (
    <AppWrapper>
      <>
        <Navbar />
        <Landing />
      </>
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