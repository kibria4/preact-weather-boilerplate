import { h, Component } from 'preact';
import './style.css';

export default class Footer extends Component {
    render() {
      return(
        <footer>
          <p>&copy; Instaweather 2018.</p>
        </footer>
      );
    }
}