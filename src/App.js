import { Provider } from 'react-redux';
import './App.css';
import ExploreCourse from './Components/ExploreCourse';
import Header from './Components/Header';
import TechCareer from './Components/TechCareer';
import Transforms from './Components/Transforms';
import WhyUs from './Components/WhyUs';
import appStore from './utils/appStore';
import Advantage from './Components/Advantage';
import PlacementStudents from './Components/PlacementStudents';
import StoriesPeople from './Components/StoriesPeople';






function App() {
  
  return (
    <div className="App pb-[500px]">
      <Provider store={appStore}>
        <Header/>
        <TechCareer/>
        <ExploreCourse/>
        <Transforms/>
        <WhyUs/>
        <Advantage/>
        <PlacementStudents/>
        <StoriesPeople/>
      </Provider>
    </div>
  );
}

export default App;
