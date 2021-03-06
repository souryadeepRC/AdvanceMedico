
import { Redirect, Route, Switch } from 'react-router-dom'

import HomePage from '../../pages/HomePage';
import AddBookingPage from '../../pages/AddBookingPage';
const Routing = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/home"></Redirect>
      </Route>
      <Route path="/home">
        <HomePage />
      </Route>
      <Route path="/book-appointment">
        <AddBookingPage />
      </Route>
      <Route path="/bookings" exact>
        {<p>Bookings</p>}
      </Route>
      <Route path="/booking/:bookingId">{<p>Booking ID</p>}</Route>
      <Route path="/booking/:bookingId/edit">{<p>Edit Booking ID</p>}</Route>
      <Route path="/user">{<p>User</p>}</Route>
      <Route path="*">{<p>ERROR</p>}</Route>
    </Switch>
  );
};

export default Routing;
