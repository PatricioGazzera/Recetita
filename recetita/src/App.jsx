import './utils/fonts/fonts.css';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <>
      <Router>
        <AppRoutes/>
      </Router>
    </>
  );
}

export default App;
