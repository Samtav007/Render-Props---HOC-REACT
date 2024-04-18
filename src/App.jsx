import './App.css';
import LikeImageHOC from './components/HOC/LikeImageHOC';
import LikePostHOC from './components/HOC/LikePostHOC';
import LikeImage from './components/RP/LikeImage';
import LikePost from './components/RP/LikePost';
import Wrapper from './components/RP/Wrapper';


function App() {
  return (
    <div>
      <h1>Some Blog</h1>
      
      <h2>Using Higher Order Components</h2>
      <div className='buttons'>
        <LikePostHOC/>
        <LikeImageHOC/>
      </div>

      <h2>Using Render Props</h2>
      <div className="buttons">
        <Wrapper render={(counter, handleCount) => (
          <LikeImage handleLikeImageCount={handleCount} likeImageCounter={counter}/>
        )}/>
        <Wrapper render={(counter, handleCount) => (
          <LikePost handlePostCount={handleCount} likePostCounter={counter}/>
        )}/>
      </div>

    </div>
  );
}

export default App;