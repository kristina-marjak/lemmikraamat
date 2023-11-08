import cover from './cover.jpg';
import './App.css';
import './Description.js'
import Description from './Description.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={cover} className="App-cover" alt="cover" />
        <h2><b>1984</b></h2>
        <p> George Orwell, Thomas Pynchon <i>(Foreword)</i></p>

        &#9830;	&#9830;	&#9830;	&#9830;	

        <Description/>
          
          <a
          className="App-link"
          href="https://www.goodreads.com/book/show/61439040-1984"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more on Goodreads
        </a>
      </header>
    </div>
    
  );
}

export default App;
