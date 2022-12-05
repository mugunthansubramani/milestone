import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Signin from './components/signin';
import Signup from './components/signup';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
