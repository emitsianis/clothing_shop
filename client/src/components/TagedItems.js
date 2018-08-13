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
    const { tag } = this.props.match.params;
    const { files } = this.state;
    let content;
    let filteredFiles;

    if (tag === "all") {
      filteredFiles = files;
    } else {
      filteredFiles = files.filter(
        file => file.metadata.tags.split(" ").indexOf(tag) > -1
      );
    }

    content =
      filteredFiles.length > 0 ? (
        filteredFiles.map(file => <ImageItem key={file._id} file={file} />)
      ) : (
        <h2>No items matching search term</h2>
      );

    return (
      <div className="row">
        <div className="col-md-12">
          <div className="image-container">{content}</div>
        </div>
      </div>
    );
  }
}

export default AllItems;
