import { ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../views/Dashboard';
import Achievements from '../views/Achievements';
import Checklists from '../views/Checklists';

export const ACHIEVEMENTSROUTE = "Achievements";
export const CHECKLISTSROUTE = "Sjekklister";
export const APPLICATIONSROUTE = "Søknader";
type IProps = {
  setTotalAchievementPoints: React.Dispatch<React.SetStateAction<number>>
}
const AppRoutes = (props: IProps): ReactElement => {
  const { setTotalAchievementPoints } = props;
  return (
      <Routes>
        <Route path="/">
          <Route index element={<Dashboard />} />
          <Route path={ACHIEVEMENTSROUTE + "/*"} element={<Achievements />} />
          <Route path={CHECKLISTSROUTE + "/*"} element={<Checklists setTotalAchievementPoints={setTotalAchievementPoints} />} />
          <Route path={APPLICATIONSROUTE + "/*"} element={<h1>{APPLICATIONSROUTE}</h1>} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
  );
};

export default AppRoutes;
