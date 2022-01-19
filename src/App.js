import React from 'react';
import RobotsList from './components/robots_List/RobotsList.component';
import SearchField from './components/search_field/SearchField.component';

/* Robots App

  what it does: show robot card(s) according what users are typing into input field
  e.g. if "Mar" is entered, only robots with name that includes "Mar" are shown.

  what to do:
  0. create components and general App skeleton with component (cardsList, card and search field)
  1. fetch users data from API and set App state.robots with it
  2. when changes occurs, fill state.search with inputs users (onChange method grab input value and
    passes it to the function props it received (handleChange), which will ultimetely update the App state, where the
    handleChange fucntion stands)
  3. filter robots through a function (filter robots according users inputs) and passes its result to 
  CardsList that will pass it to card component

 */

class App extends React.Component {
  constructor() {
    console.log('constructor!');
    super();
    this.state = {
      robots: [],
      search: ""
    }
  }

  /* a React component goes through 3 phases and has a set of lifecycle methods
    1. the mounting phase (a component is render)
      related methods: componentDidMount
    2. the update phase (its state has changed and a component is re-rendered)
      related method: componentDidUpdate
    3. the unmounting phase (a component is going to be hidden from the view)
      related method: componentWillUnmount (?)
 */

  // lifecycle methods
  componentDidMount() {
    console.log('mounted');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({ robots: data }))
  }

  componentDidUpdate(){
    console.log('updated');
  }

  componentWillUnmount(){
    console.log('unmount?');
  }

  shouldComponentUpdate(nextProps, nextState){
    if(this.state == nextState){
      return false
    }
    return true
  }






  /// App functions

  handleChange = (inputUsers) => {
    this.setState({ search: inputUsers })
  }

  filteredRobots = () => {
    return this.state.robots.filter((robot) => robot.name.toLowerCase().includes(this.state.search.toLowerCase()));
  }

  // render the view
  render() {
    console.log('render!');
    return (
      <div>
        <h1>Robots</h1>
        <SearchField handleChange={this.handleChange} />
        <RobotsList filteredRobotsList = {this.filteredRobots} />
      </div>
    )
  }
}

export default App;