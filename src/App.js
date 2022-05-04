import './App.css';
import BabyNames from './BabyNames';
import PageLayout from './PageLayout';

function App() {
  return (
    <div className="App">
      <PageLayout babyNames={BabyNames} />
    </div>
  );
}

export default App;
