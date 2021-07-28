import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Headers
import Header from './components/Header'
// User Screens
import HomeScreen from './userScreens/HomeScreen'
import LoginScreen from './userScreens/LoginScreen'
import RegisterScreen from './userScreens/RegisterScreen'
import EventScreen from './userScreens/EventScreen'
// Admin screens
import EventsListScreen from './adminScreens/EventsListScreen'
import EventEditScreen from './adminScreens/EventsEditScreen'
// Footer
import Footer from './components/Footer'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/admin' component={LoginScreen} exact />
        <Route path='/register' component={RegisterScreen} exact />
        <Fragment>
          <Header />
          <main className='main-body'>
            <div className='mainContainer'>
              <Route
                path='/admin/event/:id/edit'
                component={EventEditScreen}
                exact
              />
              <Route
                path='/admin/eventsList'
                component={EventsListScreen}
                exact
              />
              <Route path='/event/:id' component={EventScreen} exact />
              <Route path='/' component={HomeScreen} exact />
            </div>
          </main>
          <Footer />
        </Fragment>
      </Switch>
    </Router>
  )
}

export default App
