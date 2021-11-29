import pokeball from './img/pokeball.svg';

import Body from './components/Body';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <img src={pokeball} className="logo mx-auto my-10 w-48" alt="Poke Ball" />

      <div className="container max-w-screen-sm mx-auto p-4 bg-white rounded-xl">
        <Body />
      </div>
      <Footer />
    </div>
  );
}

export default App;
