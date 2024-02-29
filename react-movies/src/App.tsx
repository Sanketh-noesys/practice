import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './Menu';
import routes from './route-config';

function App() {
  return (
      <BrowserRouter>
        <Menu />
        <div className='container'>
          <Routes>
            {
            routes.map((route,index) =>
            <Route key={index} path={route.path} element={<route.component />} />
            )
            }
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
