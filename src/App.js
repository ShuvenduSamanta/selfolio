import './App.css';
import Header from './components/header/Header';
import Nav from  './components/nav/Nav'
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Portfolio />
      <Contact /> 
      <Footer/>


      {/* <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;