import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import FriendCard from "./components/FriendCard";
import Footer from "./components/Footer";
import doom from "./doom.json";
import "./App.css";

class App extends Component {
  state = {
    doom,
    clickedDoom: [],
    score: 0
  };

  imageClick = event => {
    const currentDoom = event.target.alt;
    const DoomAlreadyClicked =
      this.state.clickedDoom.indexOf(currentDoom) > -1;

    if (DoomAlreadyClicked) {
      this.setState({
        doom: this.state.doom.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedDoom: [],
        score: 0
      });
        alert("Done so soon Slayer? -Doom Music Intensifies");

    } else {
      this.setState(
        {
          doom: this.state.doom.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedDoom: this.state.clickedDoom.concat(
            currentdoom
          ),
          score: this.state.score + 1
        },
       
        () => {
          if (this.state.score === 12) {
            alert("Your victorys against Hell will go unnoticed. ggez");
            this.setState({
              doom: this.state.doom.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedDoom: [],
              score: 0
            });
          }
        }
      );
    }
  };

  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.doom.map(doom => (
            <FriendCard
              imageClick={this.imageClick}
              id={doom.id}
              key={doom.id}
              image={doom.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;