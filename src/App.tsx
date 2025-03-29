import './App.css'
import Navbar from './components/Navbar';
import Conversations from './pages/Conversations';

function App() {
    return (
        <div className='app-container'>
            <Navbar />
            <Conversations />
        </div>
    );
};

export default App;
