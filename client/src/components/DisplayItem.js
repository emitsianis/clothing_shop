import React, { Component } from "react";
import ItemFields from "./ItemFields";

class DisplayItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      file: {}
    };
  }
  componentDidMount() {
    const { name } = this.props.match.params;

    fetch(`/files/${name}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          file: data
        });
      });
  }

  render() {
    return (
      <div className="row">
        {this.state.file !== "undefined" ? (
          <ItemFields file={this.state.file} />
        ) : null}
      </div>
    );
  }
}

export default DisplayItem;
