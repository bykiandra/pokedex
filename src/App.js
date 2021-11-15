import pokeball from './img/pokeball.svg';

import Body from './components/Body';

const App = () => {
  return (
    <div className="App">
      <img src={pokeball} className="logo mx-auto my-10 w-48" />

      <div className="container max-w-screen-sm mx-auto p-4 bg-white rounded-xl">
        <Body />
      </div>
    </div>
  );
}

export default App;
