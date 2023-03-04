import Header from './components/header';
import MainNav from './components/mainav'
import Main from './components/main';
import Footer from './components/footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import GoUp from './components/goup';


function App() {
  useEffect(()=>{
     AOS.init();
  },[])
  return (
    <>
     <GoUp/>
     <Header/>
     <MainNav/>
     <Main/>
     <Footer/>
   </>
  );
}

export default App;
