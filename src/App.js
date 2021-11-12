import React from 'react';
import { ThemeProvider } from 'styled-components';
import {  Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Properties from './components/Properties';
import AddProperty from './components/AddProperty';
import Header from './components/Header';
import Container from './styled-components/Container.styled';

const theme = {
  colors: {
    header: '#204E4A',
    body: '#F7F9DD',
    footer: '#FCFCFC',
  },
};

function App() {
  // const [userId, setuserId] = useState('');
  const handleLogin = (response) => {
    console.log(response);
  };
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Container>
          <Header />
           <NavBar onLogin={handleLogin} /> 
          <Routes> 
            <Route path="/" element={<Properties/>} />
            <Route path="/add-property" element={<AddProperty/>} />
           </Routes>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default App;
