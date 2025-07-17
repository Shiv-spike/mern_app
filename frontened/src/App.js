import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    axios.get('https://mern-backend-wnly.onrender.com')
      .then(res => setMsg(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>MERN App</h1>
      <p>{msg}</p>
    </div>
  );
}

export default App;
