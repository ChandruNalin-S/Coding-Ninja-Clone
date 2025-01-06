import { Provider } from 'react-redux';
import './App.css';
import ExploreCourse from './Components/ExploreCourse';
import Header from './Components/Header';
import TechCareer from './Components/TechCareer';
import Transforms from './Components/Transforms';
import WhyUs from './Components/WhyUs';
import appStore from './utils/appStore';

function App() {
  return (
    <div className="App pb-[500px]">
      <Provider store={appStore}>
        <Header/>
        <TechCareer/>
        <ExploreCourse/>
        <Transforms/>
        <WhyUs/>
      </Provider>
    </div>
  );
}

export default App;
