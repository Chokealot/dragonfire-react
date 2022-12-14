import { ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../views/Dashboard';
import Achievements from '../views/Achievements';
import Checklists from '../views/Checklists';
import Applications from '../views/Applications';

export const ACHIEVEMENTSROUTE = "Achievements";
export const CHECKLISTSROUTE = "Sjekklister";
export const APPLICATIONSROUTE = "Soknader";
type IProps = {
  setTotalAchievementPoints: React.Dispatch<React.SetStateAction<number>>,
  sjekklister: any[],
  setSjekklister: React.Dispatch<React.SetStateAction<any>>,
}
const AppRoutes = (props: IProps): ReactElement => {
  const { setTotalAchievementPoints, sjekklister = [], setSjekklister } = props;
  return (
      <Routes>
        <Route path="/">
          <Route index element={<Dashboard />} />
          <Route path={ACHIEVEMENTSROUTE + "/*"} element={<Achievements sjekklister={sjekklister} setSjekklister={setSjekklister} />} />
          <Route path={CHECKLISTSROUTE + "/*"} element={<Checklists setTotalAchievementPoints={setTotalAchievementPoints} setSjekklister={setSjekklister} />} />
          <Route path={APPLICATIONSROUTE + "/*"} element={<Applications setTotalAchievementPoints={setTotalAchievementPoints}/>} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
  );
};

export default AppRoutes;
