import MainRoutes from 'components/routes/main-routes';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import 'models';
import { useEffect } from 'react';
import $$ui from 'models/ui';

function App() {
    useEffect(() => {
        $$ui.appLoaded();
    }, []);
    return (
        <BrowserRouter>
            <MainRoutes />
        </BrowserRouter>
    );
}

export default App;
