import './App.css';
import Menubar from './components/Menubar';
import AchivementSnackbar from './components/AchivementSnackbar';
import { Button } from '@mui/material';
import { lazy, Suspense, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ACHIEVEMENTSROUTE, CHECKLISTSROUTE } from './routes/AppRoutes';

const AppRoutes = lazy(() => import('./routes/AppRoutes'));

function App() {
  const routePages = [
    ACHIEVEMENTSROUTE,
    CHECKLISTSROUTE,
    'Søknader'
  ];
  const [ openAchivementSnackbar, setOpenAchivementSnackbar ] = useState<boolean | undefined>(false);

  const profileMenuItems = ['Profile', 'Account', 'Dashboard', 'Logout'];

  return (
    <div className="App">
      <Menubar routes={routePages} profileMenuItems={profileMenuItems} />
      <Button variant="outlined" onClick={ e => setOpenAchivementSnackbar(true) }>
            Open success snackbar
        </Button>
      <Suspense>
          <Routes>
            <Route path="/*" element={<AppRoutes />} />
          </Routes>
      </Suspense>
    </div>
  );
}

export default App;
