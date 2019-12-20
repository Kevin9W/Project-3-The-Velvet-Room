import React,{Component} from 'react';
import {Link, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import PersonasContainer from './containers/PersonasContainer'
import PersonaInfo from './components/PersonaInfo'
import PersonaForm from './components/PersonaForm'
import styles from './App.module.css'

class App extends Component{
  state={
    editData:null,
  }
  editContent=(editData)=>{
    this.setState({editData})
  }
  render(){
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
            <Route exact path="/personas" component={PersonasContainer}/>
            <Route exact path="/personas/create" component={PersonaForm}/>
            <Route exact path="/personas/:name" 
                   render={props=><PersonaInfo{...props} editContent={this.editContent}/>}

                  />
            <Route exact path="/personas/:name/:operate" 
                   render={props=><PersonaForm{...props} data={this.state.editData}/>}
                  />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
