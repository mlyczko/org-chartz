import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const App = () => {
    const nodes = require('../mock/nodes.json')
  return (
    <div className="App">
      <Header />
      <Main nodes={nodes} />
      <Footer />
    </div>
  );
}

export default App;
