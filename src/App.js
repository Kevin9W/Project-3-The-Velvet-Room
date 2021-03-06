import React,{Component} from 'react';
import {Link, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import PersonasModel from './model/PersonasModel'
import PersonasContainer from './containers/PersonasContainer'
import PersonaInfoLanding from './components/PersonaInfoLanding'
import PersonaForm from './components/PersonaForm'
import Skills from './components/Skills'
import styles from './css/App.module.css'

class App extends Component{
  state={
    names:[],
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
      .then(data=>{this.setState({data})})
      .then((res)=>{
      let names=this.state.data.personas.map(persona=>{return persona.name})
      this.setState({names})
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
                   render={props=><PersonaInfoLanding{...props} names={this.state.names} editContent={this.editContent} fetchData={this.fetchData}/>}
                  />
            <Route exact path="/personas/:name/:operate" 
                   render={props=><PersonaForm{...props} data={this.state.editData}/>}
                  />
            <Route path="/skills" component={Skills}/>
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
