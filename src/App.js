import React from "react";

class App extends React.Component {
  state = {
    people: [],
  };
  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then((resp) => resp.json())
      .then((json) => {
        this.setState({
          people: json.people,
        });
      });
  }

  render() {
    return <div></div>;
  }
}

export default App;
