
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import SolarSystem from './components/SolarSystem/SolarSystem';
import Footer from './components/Footer/Footer';






function App() {



  return (
    <>
      <Layout>
        <Header />
        <Content />
        <SolarSystem />
        <Footer />
      </Layout>
    </>
  );
}

export default App;
