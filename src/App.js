import { Provider } from 'react-redux';
import './App.css';
import Comments from './components/Comments';
import TopSection from './components/TopSection';
import store from './utils/commentStore';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <TopSection/>
        <Comments/>
     </Provider>
    </div>
  );
}

export default App;
