import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './components/Counter';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Counter value={10}/>
  </React.StrictMode>
);


