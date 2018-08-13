import React, { Component } from "react";
import ImageItem from "./ImageItem";

class AllItems extends Component {
  constructor(props) {
    super(props);

    this.state = {
      files: []
    };
  }

  componentDidMount() {
    fetch("/files")
      .then(res => res.json())
      .then(data => {
        this.setState({
          files: data
        });
      });
  }

  render() {
    const { files } = this.state;
    let content;

    content =
      files.length > 0
        ? files.map(file => <ImageItem key={file._id} file={file} />)
        : null;

    return (
      <div className="row">
        <div className="col-md-12">
          <div className="container image-container">{content}</div>
        </div>
      </div>
    );
  }
}

export default AllItems;
