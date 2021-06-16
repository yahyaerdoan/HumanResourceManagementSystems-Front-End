import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';
import Dashboard from './layouts/Dashboard';
import Footer from './layouts/Footer';
import Navbar from './layouts/NavBar';


function App() {
  return (
    <div className="App">
     <Navbar/>
      <Container className="main">
        <Dashboard />
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
