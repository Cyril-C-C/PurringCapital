import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import OurCulture from './components/pages/OurCulture';
import About from './components/pages/About';
import Works from './components/pages/Works';
import Team from './components/pages/Team';
import Careers from './components/pages/Careers';
import Contact from './components/pages/Contact';
import Footer from './components/layout/Footer';

import PrivatePolicy from './components/pages/PrivatePolicy';

import Spinner from './components/layout/Spinner';
import AddBtn from './components/layout/AddBtn';
import Floating from './components/layout/Floating';
import Floatings from './components/layout/Floatings';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

const App = () => {
  // Page Loader

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });

  return (
    <Router>
      {!loading ? (
        <Fragment>
          <TransitionGroup>
            <CSSTransition timeout={500} classNames='item'>
              {/* <section> */}
              {/* <Navbar /> */}
              <section>
                <AddBtn />
                <Floating />
                <Floatings />
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/OurCulture' component={OurCulture} />
                  <Route exact path='/About' component={About} />
                  <Route exact path='/Works' component={Works} />
                  <Route exact path='/Team' component={Team} />
                  <Route exact path='/Careers' component={Careers} />
                  <Route exact path='/Contact' component={Contact} />
                  <Route
                    exact
                    path='/PrivatePolicy'
                    component={PrivatePolicy}
                  />
                </Switch>
                <Footer />
              </section>
              {/* </section> */}
            </CSSTransition>
          </TransitionGroup>
        </Fragment>
      ) : (
        <Spinner />
      )}
    </Router>
  );
};

export default App;
