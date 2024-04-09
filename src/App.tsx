import Header from './components/Header/Header';
import './App.css';
import { Outlet } from 'react-router';

function App() {

    return (
        <main className=''>
            <Header />
            <Outlet/>
        </main>
    )
}

export default App;
