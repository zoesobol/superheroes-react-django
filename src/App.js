import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import HomeComponent from './components/HomeComponent';


function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <HomeComponent/>
      <FooterComponent/>
    </div>
  );
}

export default App;
