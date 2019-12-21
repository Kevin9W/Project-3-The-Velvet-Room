import React,{Component} from 'react';
import {Link, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import PersonasModel from './model/PersonasModel'
import PersonasContainer from './containers/PersonasContainer'
import PersonaInfo from './components/PersonaInfo'
import PersonaForm from './components/PersonaForm'
import styles from './App.module.css'

class App extends Component{
  state={
    data:null,
    editData:null,
  }
  editContent=(editData)=>{
    this.setState({editData})
  }

  componentDidMount(){
    this.fetchData()
  }

  fetchData=()=>{
    PersonasModel.all()
      .then(data=>{
        this.setState({data})
    })
  }
  render(){
    return(
      <div className={styles.App}>
        <div className={styles.grid}>
          <nav className={styles.nav}>
            <div className={styles.links}>
              <Link className={styles.link} to="/">The Velvet Room</Link>
            </div>
            <div className={[styles.links,styles.navLinks].join(' ')}>
              <Link className={styles.link} to="/personas">Compendium</Link>
              <Link className={styles.link} to="/skills">Skills</Link>
            </div>
          </nav>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/personas" 
                   render={props=><PersonasContainer data={this.state.data} fetchData={this.fetchData}/>}
                  />
            <Route exact path="/personas/register" component={PersonaForm}/>
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
