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

const sjekklisterAchievements = [
  {
      category: 'Sjekklister',
      name: 'Opprette sjekkliste',
      id: 4,
      isComplete: false,
      completedAt: null,
      points: 50,
  },
  {
      category: 'Sjekklister',
      name: 'Fylle ut sjekkpunkt',
      id: 5,
      isComplete: false,
      completedAt: null,
      points: 20,
  },
  {
      category: 'Sjekklister',
      name: 'Kommentar på sjekkpunkt',
      id: 6,
      isComplete: false,
      completedAt: null,
      points: 10,
  },
  {
      category: 'Sjekklister',
      name: 'Lagt til bilde på sjekkliste',
      id: 7,
      isComplete: false,
      completedAt: null,
      points: 20,
  },
];

function App() {
  const [ totalAchievementPoints, setTotalAchievementPoints ] = React.useState(0);
  const [ sjekklister, setSjekklister ] = React.useState(sjekklisterAchievements);

  const routePages = [
    ACHIEVEMENTSROUTE,
    CHECKLISTSROUTE,
    APPLICATIONSROUTE
  ];

  const [open, setOpen] = React.useState(false);
  const profileMenuItems = ['Profile', 'Account', 'Dashboard', 'Logout'];
  const [ achivement, setAchivement ] = React.useState<any | undefined>("Test Achivement")
  const [ playAudio, setPlayAudio ] = React.useState<boolean>(false);

  React.useEffect(() => {
    new Audio(kaching).play()
  }, [achivement])


  const handleAchivement = () => {
    if (open === true) {
      setOpen(false)
      setPlayAudio(false)
    } else if (open === false) {
      setOpen(true)
      setAchivement("You have earned a new achivement!")
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
            <Route path="/*" element={<AppRoutes setTotalAchievementPoints={setTotalAchievementPoints} sjekklister={sjekklister} setSjekklister={setSjekklister}/>} />
          </Routes>
      </Suspense>
    </div>
  );
}

export default App;
