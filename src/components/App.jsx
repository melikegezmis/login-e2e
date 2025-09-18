import { Switch, Route, useLocation} from 'react-router-dom';

import Login from '/src/components/Login';
import Success from '/src/components/Success';

import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return (
    <>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/success">
            <Success />
          </Route>
        </Switch>
    </>
  )
}

export const LocationDisplay = () => {
  const location = useLocation()

  return <div data-testid="location-display">{location.pathname}</div>
}