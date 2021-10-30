import './App.css';
import  React, {Component} from "react";
import Beers from "./Beers";

let PUNK_API = "https://api.punkapi.com/v2/beers"

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beers: [], likes: []
    }

    this.likeBeerMethod = this.likeBeerMethod.bind(this)
  }
  componentDidMount() {
    fetch(PUNK_API)
        .then((response) => response.json())
        .then((results) => this.setState({
          beers: results
          })
        )
  }

  removeLike(beer){
      const result = this.state.likes.filter(beer => beer = beer.name)
          this.setState({likes: result}, () => console.log(this.state.likes));
  }

  likeBeerMethod(beer) {
      if(this.state.likes.includes(beer.name)){
          this.removeLike(beer)
          return
      } else {
          this.setState({likes: this.state.likes.concat(beer.name)}, () => console.log(this.state.likes))
      }
  }

  render() {
    return (
        <div>
          <h1>Hello World</h1>
          <Beers beers={this.state.beers} likes={this.state.likes} likeBeerMethod = {this.likeBeerMethod} removeLike={this.removeLike}/>
        </div>

    )
  }
}
