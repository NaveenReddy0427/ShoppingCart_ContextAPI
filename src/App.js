import './App.css';
import Items from './components/Items';
import Navbar from './components/Navbar';
import CustomContext from "./ItemContext"

function App() {
  return (
      <CustomContext>
        <div className='App'>
            <h2>Shopping Cart</h2>
              <Navbar />
              <Items />
          </div>
      </CustomContext>

  );
}
export default App;
