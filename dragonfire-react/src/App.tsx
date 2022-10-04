import './App.css';
import Menubar from './components/Menubar';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ACHIEVEMENTSROUTE, APPLICATIONSROUTE, CHECKLISTSROUTE } from './routes/AppRoutes';
import React from 'react';

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

  const profileMenuItems = ['Profile', 'Account', 'Dashboard', 'Logout'];
 

  return (
    <div className="App">
      <Menubar routes={routePages} profileMenuItems={profileMenuItems} totalAchievementPoints={totalAchievementPoints}/>
      <Suspense>
          <Routes>
            <Route path="/*" element={<AppRoutes setTotalAchievementPoints={setTotalAchievementPoints} sjekklister={sjekklister} setSjekklister={setSjekklister}/>} />
          </Routes>
      </Suspense>
    </div>
  );
}

export default App;
