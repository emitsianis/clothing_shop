import React, { Component } from "react";
import MainItem from "./MainItem";

class MainItems extends Component {
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
    const tag = "new";
    let content;

    const filteredFiles = files.filter(
      file => file.metadata.tags.split(" ").indexOf(tag) > -1
    );

    content =
      filteredFiles.length > 0 ? (
        filteredFiles.map(file => <MainItem key={file._id} file={file} />)
      ) : (
        <h2>No items matching search term</h2>
      );

    return <div className="main-image-container mt-4">{content}</div>;
  }
}

export default MainItems;
