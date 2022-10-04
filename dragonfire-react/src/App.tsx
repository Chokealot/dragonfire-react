import './App.css';
import Menubar from './components/Menubar';
import AchivementSnackbar from './components/AchivementSnackbar';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ACHIEVEMENTSROUTE, APPLICATIONSROUTE, CHECKLISTSROUTE } from './routes/AppRoutes';
import React from 'react';
import { Button } from '@mui/material';
import kaching from './assets/kaching.mp3';

const AppRoutes = lazy(() => import('./routes/AppRoutes'));

function App() {
  const [ totalAchievementPoints, setTotalAchievementPoints ] = React.useState(0);
  const routePages = [
    ACHIEVEMENTSROUTE,
    CHECKLISTSROUTE,
    APPLICATIONSROUTE
  ];

  const [open, setOpen] = React.useState(false);
  const profileMenuItems = ['Profile', 'Account', 'Dashboard', 'Logout'];
  const [ achivement, setAchivement ] = React.useState<any | undefined>("Test Achivement")
  const [ playAudio, setPlayAudio ] = React.useState<boolean>(false)

  React.useEffect(() => {
    new Audio(kaching).play()
  }, [achivement])


  const handleAchivement = () => {
    if (open === true) {
      setOpen(false)
      setPlayAudio(false)
      setAchivement("")
    } else if (open === false) {
      setOpen(true)
      setAchivement("Insert data for achivement here")
      setPlayAudio(true)
    }
  }

  return (
    <div className="App">
      <Menubar routes={routePages} profileMenuItems={profileMenuItems} totalAchievementPoints={totalAchievementPoints}/>
      <AchivementSnackbar achivement={achivement} open={open} />
      <Button onClick={handleAchivement} > test </Button>
      <Suspense>
          <Routes>
            <Route path="/*" element={<AppRoutes setTotalAchievementPoints={setTotalAchievementPoints} />} />
          </Routes>
      </Suspense>
    </div>
  );
}

export default App;
