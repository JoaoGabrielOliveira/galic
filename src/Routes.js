import { createRoutesFromElements, Route } from 'react-router-dom';
import Home from 'views/home';

const Routes = createRoutesFromElements(
    <Route path="/" element={<Home />} />
);

export default Routes;