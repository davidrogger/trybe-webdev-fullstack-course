import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home, About, NotFound } from './pages';
import { Layout } from './components';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={ <Layout /> }>
          <Route index element={ <Home /> } />
          <Route path="about" element={ <About /> } />
        </Route>
      <Route path="*" element={ <NotFound /> } />
      </Routes>
    </>
  )
}

export default App
