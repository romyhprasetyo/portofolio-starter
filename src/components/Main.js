import React from 'react'; //not including component cause this gonna be a class base component
import {Switch, Route} from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Project from './pages/Project';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

const Main = () => (
	<Switch>
		<Route exact path="/" component={LandingPage} />
		<Route path="/about-me" component={About} />
		<Route path="/projects" component={Project} />
		<Route path="/resume" component={Resume} />
		<Route path="/contact" component={Contact} />
	</Switch>
)

export default Main;