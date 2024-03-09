import ElapsedTime from './components/ElapsedTime';
import History from './components/History';
import Buttons from './components/Buttons';
import Footer from './components/Footer';


function App() {
  return (
    <div className="counter-app" id="counter-app">
      <History />
      <ElapsedTime />
      <Buttons />
      <Footer />
    </div>
  );
}

export default App;
