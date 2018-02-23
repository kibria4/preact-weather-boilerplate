import { h, Component } from 'preact';
import './style.css';

export default class Weather extends Component {
  //Default constructor
  constructor(props){
    super(props);
  }
  
  //Set initial variable values that will be updated upon state change
  getInitialState(){
    this.setState({
      isFetchingData: false, //use this var to display something while fetching data
      locationProvided: false, //use this to display components based on weather a user searched for a city
      city: null //use for search textfield value
    });
  }
  
  //Updating city variable every time there is a character update in the text field
  handleSearchChange = event => {
    this.setState({city: event.target.value});
  }
  
  //Form submission
  handleSubmit = event => {
    //Remove default form submission that does a page refresh
    event.preventDefault();
    
    //get the value of the search textfield
    var location = this.state.city;
    //display value in console
    console.log('You are searching for', location);
  }
  
  render(){
    return(
      <main>
        <section class="section-weather-search">
          <form onSubmit={this.handleSubmit}>
          <input type="text" autofocus="autofocus" onChange={this.handleSearchChange} value={this.state.city} placeholder="Enter the City you want to know the weather about..." />
          <button type="submit" class="hidden">Get Weather</button>
          </form>
        </section>
      </main>
    );
  }
  
}