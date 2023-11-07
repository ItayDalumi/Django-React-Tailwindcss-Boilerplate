import React, { Component } from "react";
import axios from "axios";

class FetchData extends Component {
  state = {
    details: [],
    title: "",
    description: "", 
  }; // The state is critical for setting those variables so we could use them in our js and react code.

  componentDidMount() {
    axios
      .get("http://localhost:8000/todo/")
      .then((res) => {
        console.log("API response:", res.data.data);
        this.setState({
          details: res.data.data, //here what the set state is doing, is seting the details to be equal to res.data.data
        });
      })
      .catch((err) => {
        console.error("API request error:", err);
      });
  }

  renderSwitch = (param) => {
    switch (param + 1) {
      case 1:
        return "bg-primary";
      case 2:
        return "bg-secondary";
      case 3:
        return "bg-success";
      case 4:
        return "bg-danger";
      case 5:
        return "bg-warning";
      case 6:
        return "bg-info";
      default:
        return "bg-yellow-500";
    }
  };

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value, //we use e.target.name becuase in the form, every elemnt has a name attribute, so when we call this we actually changin the value of this attribute.
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/todo/", {
        title: this.state.title,
        description: this.state.description,
      })
      .then((res) => {
        this.setState({
          title: "",
          description: "",
        });
      })
      .catch((err) => {
        // Handle errors here
      });
  };

  render() {
    return (
      <div className="container mx-auto p-4">
        <form onSubmit={this.handleSubmit}>
          <div className="mb-4">
            {/* ... (your form code remains the same) */}
          </div>
        </form>

        <hr className="my-5 border" />

        {this.state.details.length > 0 ? (
          this.state.details.map((detail, id) => (
            <div key={id} className="mb-4">
              <div className={`bg-${this.renderSwitch(id % 6)} card-header`}>
                Quote {id + 1}
              </div>
              <div className="card-body">
                <blockquote className={`text-${this.renderSwitch(id % 6)} blockquote mb-0`}>
                  <h1>{detail.title}</h1>
                  <p>{detail.description}</p>
                  <p>Mode: {detail.mode ? "Active" : "Inactive"}</p>
                  <p>Date: {detail.date}</p>
                </blockquote>
              </div>
            </div>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    );
  }
}

export default FetchData;
