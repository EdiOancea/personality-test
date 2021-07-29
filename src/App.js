import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {CssBaseline} from '@material-ui/core';

import LandingPage from './pages/LandingPage';
import PersonalityTestPage from './pages/PersonalityTestPage';
import PersonalityTraitPage from './pages/PersonalityTraitPage';

const App = () => {
  return (
    <Router>
      <CssBaseline />
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
        <Switch>
          <Route path="/take-test">
            <PersonalityTestPage />
          </Route>
          <Route path="/your-trait">
            <PersonalityTraitPage />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
