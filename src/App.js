import './App.css';
import ExploreCourse from './Components/ExploreCourse';
import Header from './Components/Header';
import TechCareer from './Components/TechCareer';
import Transforms from './Components/Transforms';

function App() {
  return (
    <div className="App pb-[500px]">
      <Header/>
      <TechCareer/>
      <ExploreCourse/>
      <Transforms/>
    </div>
  );
}

export default App;
