import './App.css';
import { About } from './components/about/About';
import { Contact } from './components/contact/Contact';
import { Cursor } from './components/cursor/Cursor';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Home } from './components/home/Home';
import { Portfolio } from './components/portfolio/Portfolio';
import { Qualification } from './components/qualification/Qualification';
import { Services } from './components/services/Services';



function App() {
  return (
   <>
   <Header />
 
   <main className='main'>

    
    <Home />
    <Cursor />
    <About />
    <Services />
    <Qualification />
    <Portfolio />
    <Contact />
    <Footer />
   </main>
   </>    
  );
}

export default App;
