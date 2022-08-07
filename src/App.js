import './App.css';
import Header from './components/Header';
import Dashboard from './components/Dashboard'
import EnhancedTable from './components/Table';
import Navbar from './components/Navbar';
import Banner from './components/Banner';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Header />
        <div className="dashboard-container">
          <Banner/>
          <EnhancedTable/>
        </div>

        
      </header>
    </div>
  );
}

export default App;
