import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="TextUtils"></Navbar>
      <TextForm heading="Enter your text here: " />
      {/* <About /> */}
    </>
  );
}

export default App;
