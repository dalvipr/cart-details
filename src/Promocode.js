import React, { Component } from "react";
import { connect } from "react-redux";
import { applyPromo } from "./actions/summaryAction";

class Promocode extends Component {
  state = {
    promo: "",
    promoError: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      promoError: ""
    });
  };
  handleSubmit = e => {
    //handled form submit with validation for promo code field
    e.preventDefault();
    const { summary } = this.props;
    if (this.state.promo.length > 0) {
      this.setState({
        promoError: ""
      });
      if (this.state.promo === "DISCOUNT" && summary.promoPercent === 0) {
        this.props.applyPromo();
        this.setState({
          promo: ""
        });
      } else {
        this.setState({
          promoError: "Invalid Promocode or Promocode Already Used"
        });
      }
    } else {
      this.setState({
        promoError: "Promocode required"
      });
    }
  };
  render() {
    const { promoError, promo } = this.state;
    return (
      <div className="col-md-12 promo-details">
        <form className="form-inline" onSubmit={this.handleSubmit}>
          <div className="form-group col-md-8 col-sm-8 col-8 mb-0">
            <input
              type="text"
              className="form-control"
              placeholder="Enter promo code"
              name="promo"
              value={promo}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group col-md-4 col-sm-4 col-4 mb-0">
            <button type="submit" className="btn btn-primary promo-btn font-weight-bold">
              Apply
            </button>
          </div>
          <div className="form-group col-md-8 col-sm-8 col-8">
            <small className="promo-error">{promoError}</small>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  summary: state.summary
});

export default connect(
  mapStateToProps,
  { applyPromo }
)(Promocode);
