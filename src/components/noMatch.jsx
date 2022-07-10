import { Component } from "react";
import { Link } from "react-router-dom";
class NoMatch extends Component {
  render() {
    return (
      <div className="grid place-items-center text-3xl text-vg">
        <h2>Event not found</h2>
        <p className="text-xl">
          <Link to="/">Go to the home page</Link>
        </p>
      </div>
    );
  }
}
export default NoMatch;
