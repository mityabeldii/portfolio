import HomePage from 'components/pages/home-page';
import SshKeyPage from 'components/pages/ssh-key-page';
import { Navigate, Route, Routes } from 'react-router-dom';

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ssh" element={<SshKeyPage />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default MainRoutes;
