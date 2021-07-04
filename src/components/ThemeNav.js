import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { createBrowserHistory } from "history";

import DashboardLayout from './layouts/DashboardLayout';
import FullWidthLayout from './layouts/FullWidthLayout';
import WithHeaderLayout from './layouts/WithHeaderLayout';
import Dashboard from './Pages/Dashboard';
import Feels from './Pages/Feels';
import Goals from './Pages/Goals';
import Gratitude from './Pages/Gratitude';
import Journal from './Pages/Journal';
import ContentsPage from './Pages/ContentsPage';
import Profile from './Pages/Profile';
// import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import ViewLog from './Pages/ViewLog';
import SetNewGoal from './Pages/SetNewGoal';
import GoalDetailPage from './Pages/GoalDetailPage';
import GratitudeLog from './Pages/GratitudeLog';
import JournalLog from './Pages/JournalLog';
import ContentsDetail from './Pages/ContentsDetail';

const history = createBrowserHistory();
class ThemeNav extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <Redirect to="/dashboard" />
          </Route>

          {/* dashboard route */}
          <DashboardLayout path="/dashboard" component={Dashboard} />
          <DashboardLayout path="/feels" exact component={Feels} />
          <DashboardLayout path="/goals" exact component={Goals} />
          <DashboardLayout path="/gratitude" exact component={Gratitude} />
          <DashboardLayout path="/journal" exact component={Journal} />
          <DashboardLayout path="/contents" exact component={ContentsPage} />
          <DashboardLayout path="/contents/contents-detail" component={ContentsDetail} />
          <DashboardLayout path="/feels/logs" component={ViewLog} />
          <DashboardLayout path="/goals/new-goal" component={SetNewGoal} />
          <DashboardLayout path="/goals/financial-goal" component={GoalDetailPage} />
          <DashboardLayout path="/gratitude/gratitude-log" component={GratitudeLog} />
          <DashboardLayout path="/journal/journal-log" component={JournalLog} />
          
          {/* fullwidth route*/}
          {/* <FullWidthLayout path="/sign-in" component={Signin} /> */}
          <FullWidthLayout path="/sign-up" component={Signup} />

          {/* with header route*/}
          <WithHeaderLayout path="/profile" component={Profile} />

        </Switch>
      </Router>

    );
  }
}
export default ThemeNav;