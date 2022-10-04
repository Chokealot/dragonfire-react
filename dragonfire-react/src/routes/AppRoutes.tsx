import { ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../views/Dashboard';
import Achievements from '../views/Achievements';
import Checklists from '../views/Checklists';
import Applications from '../views/Applications';

export const ACHIEVEMENTSROUTE = "Achievements";
export const CHECKLISTSROUTE = "Sjekklister";
export const APPLICATIONSROUTE = "Soknader";

const AppRoutes = (): ReactElement => {
  return (
      <Routes>
        <Route path="/">
          <Route index element={<Dashboard />} />
          <Route path={ACHIEVEMENTSROUTE + "/*"} element={<Achievements />} />
          <Route path={CHECKLISTSROUTE + "/*"} element={<Checklists />} />
          <Route path={APPLICATIONSROUTE + "/*"} element={<Applications />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
  );
};

export default AppRoutes;
