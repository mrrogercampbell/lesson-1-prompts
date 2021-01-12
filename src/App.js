import './App.css';
import SongDataFunction from './components/Prompt2/FunctionComponets/SongDataFunction'
import SongDataClass from './components/Prompt2/ClassComponets/SongDataClass'

function App() {
  return (
    <div className="App">
      <SongDataClass />
      <SongDataFunction />
    </div>
  );
}

export default App;
