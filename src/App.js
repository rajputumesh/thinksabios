import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import AppRoutes from './Routes/AppRoutes';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
