import React, { Component } from "react";
import PropTypes from "prop-types";

/**
 * @author
 * @class Default
 **/

class Default extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
            <h1 className="display-3">404</h1>
            <h1>error</h1>
            <h1>page not found</h1>
            <h3>
              The requested URL{" "}
              <span className="text-danger">
                {this.props.location.pathname}
              </span>{" "}
              was not found
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

Default.propTypes = {};
export default Default;
