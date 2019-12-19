import React from 'react';
import {Link, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import PersonasContainer from './containers/PersonasContainer'
import styles from './App.module.css'

let App=()=>{
  return(
    <div className={styles.App}>
      <div className={styles.grid}>
        <nav className={styles.nav}>
          <Link className={styles.link} to="/">Home</Link>
          <Link className={styles.link} to="/personas">Compendium</Link>
          <Link className={styles.link} to="/skills">Skills</Link>
        </nav>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/personas" component={PersonasContainer}/>
        </Switch>
      </div>
    </div>
  )
}

export default App;
