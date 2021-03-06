import { Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
    </Switch>
  );
};

export default Routes;
