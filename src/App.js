import logo from './logo.svg';
import './App.scss';
import { slide as Menu } from 'react-burger-menu'

function App() {
  return (
    <div className="App">
      <Menu>
        <span>Name Surname</span>
        <span>yourname@sii.pl</span>
        <hr />
        <a id="my-charts" className="menu-item" href="#">My charts</a>
        <a id="shared-with-me" className="menu-item" href="#">Shared with me</a>
        <a id="starred" className="menu-item" href="#">Stared</a>
        <a id="recent" className="menu-item" href="#">Recent</a>
        <a id="offline" className="menu-item" href="#">Offline</a>
        <a id="uploads" className="menu-item" href="#">Uploads</a>
      </Menu>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div>
        Lorem ipsum...
      </div>
    </div>
  );
}

export default App;
