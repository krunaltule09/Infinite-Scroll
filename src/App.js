import { useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import Shimmer from './components/Shimmer';
import ListView from './components/ListView';

function App() {
  return (
    <div className='App'>
      <ListView />
    </div>
  );
}

export default App;
