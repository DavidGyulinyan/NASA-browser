import Header from './components/Header/Header';
import './App.css'
import { Outlet } from 'react-router';

function App() {
    return (
        <main className='h-[56rem]'>
            <Header />
            <Outlet/>
        </main>
    )
}

export default App
