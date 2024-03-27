// import React from "react";
import React, { Component } from "react";
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';

// state
/* const state = {
  robots: robots,
  searchfield: ''
}; */

// const App = () => {
//   return (
//     // <h1>RoboFriends</h1>
//     // <CardList robots={robots} />
//     <div className="tc">
//       <h1>RoboFriends</h1>
//       <SearchBox />
//       <CardList robots={robots} />
//     </div>
//   );
// };

// But to use "state" we have to go back to the original way that we created React components.
// If you remember this when we first did "create-react-app",
// class App extends React.Component {}
class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: ''
    };
  }

  // onSearchChange(event) {
  onSearchChange = (event) => {
    // console.log(event);
    // console.log(event.target.value);
    this.setState({ searchfield: event.target.value });

    /* const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    }); */
    
    // console.log(filteredRobots);
  };

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });

    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        {/* <SearchBox /> */}
        <SearchBox searchChange={this.onSearchChange} />
        {/* <CardList robots={robots} /> */}
        {/* <CardList robots={this.state.robots} /> */}
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;

/**
 * Note:
 * · Reference diagram: building_a_react_app_3.png
 * · state:
 * React has an idea of something called "state".
 * Up until now, we learned about props such as properties that we keep passing down
 * but we've never changed them because React just reads the props.
 * If I go to "CardList" it just reads the props that it receives and it just renders something.
 * const CardList = ({ robots }) => { return (); };
 * And this one-way data flow is really nice because this "CardList" is a pure function.
 * It receives an input ({ robots }) and then it always returns the same output
 * const CardList = ({ robots }) => { return (); };
 * So if "robots" ({ robots }) are always the same it's always going to return the same thing
 * It's deterministic, pure functions, and it's something that we've talked about before.
 * And this is a really really good thing.
 * These ("CardList") components are what's called "pure components", and some even call them "dumb components"
 * It just means that they don't really need to know about anything other than the fact that they're pure functions that receive something and return something.
 * And this is really nice because we always know what this is going to look like, and that's all we had up until this point ("SearchBox" component)
 * But now we have to worry about something other than props
 * Props (props) never change. Props (props) are always just inputs that we get and we've never modified them
 * But in this case, we need memory in our app
 * We (the RoboFriends app) need this ("SearchBox") to communicate with this ("CardList"), and also change and update accordingly
 * And that's what "state" is in React.
 * "state" - and you'll hear this in computer programming a lot - simply means the description of your app.
 * A "state" is simply an object - an object that describes your application
 * And this "state" which describes our application is the robots,
 * <CardList robots={robots} />
 * and whatever's entered in the search box
 * <SearchBox />
 * and "state" is able to change
 * We're able to change the value of the search box, the value of the input,
 * <SearchBox />
 * and we're able to change what the robot's array means
 * What gets displayed
 * <CardList robots={robots} />
 * This is a rule that you just have to remember
 * Props (props) are simply things that come out of "state"
 * state >> props
 * So a parent feeds "state" into a child component and as soon as a child (components) component receives a "state" it's a property (props).
 * That child can never change that property.
 * The parent just tells it (state) what the "state" is and the child (props) receives it as "robots" ({robots})
 * <CardList robots={robots} />
 * So the first thing we need to do is to start being able to use "state" in our app (App), the description of what our "state" should be
 * class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: ''
    };
  }

  render() {
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox />
        <CardList robots={robots} />
      </div>
    );
  }
}
 * And now we have our "state", which is robots and searchfield, and this "state" as I've said before is what describes our app
 * These are the things that can change, and that's what this "state" is - something that can change and affect our app
 * And they (state) usually live in the parent component, the component that is the parent that just kind of passes "state" to different components
 * To update the state again another rule of React is to do "this.setState", and it's again a method that comes with React
 * And anytime you want to change state you always do this,
 * this.setState();
 * 
 * Remember when I said the virtual DOM is just a JavaScript object?
 * The virtual DOM is just an object that collects this entire state
 * this.state = {
      robots: robots,
      searchfield: ''
    };
 * and React uses this state to render and pass them down as props to these components
 * render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });

    return (
      <SearchBox searchChange={this.onSearchChange} />
      <CardList robots={filteredRobots} />
    );
  }
 * so that these components that are just pure functions can just render
 * And we always know that the app is going to look the same because, well, they're just simple pure functions
 */