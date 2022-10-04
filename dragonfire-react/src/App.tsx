import './App.css';
import Menubar from './components/Menubar';
import AchivementSnackbar from './components/AchivementSnackbar';
import { lazy, Suspense, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ACHIEVEMENTSROUTE, APPLICATIONSROUTE, CHECKLISTSROUTE } from './routes/AppRoutes';
import React from 'react';

const AppRoutes = lazy(() => import('./routes/AppRoutes'));

function App() {
  const [ totalAchievementPoints, setTotalAchievementPoints ] = React.useState(0);
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
            <Route path="/*" element={<AppRoutes />} />
          </Routes>
      </Suspense>
    </div>
  );
}

export default App;
