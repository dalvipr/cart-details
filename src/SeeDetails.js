import React, { Component } from "react";
import Promocode from "./Promocode";
import ItemDetails from "./ItemDetails";

class SeeDetails extends Component {
  state = {
    hideDetails: true,
    hidePromo: true
  };

  handleDisplay = () => {
    this.setState({
      hideDetails: !this.state.hideDetails
    });
  };
  handlePromo = () => {
    this.setState({
      hidePromo: !this.state.hidePromo
    });
  };
  render() {
    const { summary } = this.props;
    //console.log("SeeDetails Props:", summary);
    const { hideDetails, hidePromo } = this.state;
    return (
      <div className="row">
        <p className="col-md-12 item-display" onClick={this.handleDisplay}>
          {hideDetails ? "See Item Details +" : "Hide Item Details -"}
        </p>
        {!hideDetails && <ItemDetails summary={summary} />}
        <p className="col-md-12 promo-display mt-2" onClick={this.handlePromo}>
          {hidePromo ? "Apply promo code +" : "Hide promo code -"}
        </p>
        {!hidePromo && <Promocode summary={summary} />}
      </div>
    );
  }
}

export default SeeDetails;
