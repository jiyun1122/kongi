import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { SignIn } from './pages/SignIn';
import './index.css';
import { Layout } from './component/layout/Layout';
import { Videos } from './pages/Videos';

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/SignIn' element={<SignIn />} />
          <Route path='/videos' element={<Videos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
