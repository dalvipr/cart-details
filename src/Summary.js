import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSummary } from "./actions/summaryAction";
import { Button, Popup } from "semantic-ui-react";
import SeeDetails from "./SeeDetails";
import Divider from "./Divider";

class Summary extends Component {
  componentWillMount() {
    //action call to fetch data from mock-api
    this.props.fetchSummary(this.state);
  }

  totalCalc = (price, disc) => {
    //console.log("PriceDetails", price, " Discount", disc);
    const total = price.subTotal - price.savings + price.tax;
    if (disc === 0) {
      return total.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
      });
    } else {
      return (total - (total * disc) / 100).toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
      });
    }
  };

  render() {
    const { summary } = this.props;
    //console.log("Props:", summary);
    return (
      <div className="summary">
        {!(summary.pricing === null) > 0 && (
          <div className="summary-box">
            <div className="row">
              <h4 className="col-md-12 mb-4 text-center font-weight-bold ">
                {summary.itemDetails.item_name}
              </h4>
            </div>
            <div className="row">
              <p className="col-md-5 col-sm-5 col-5">Subtotal</p>
              <p className="font-weight-bold col-md-7 col-sm-7 col-7 text-right">
                {summary.pricing.subTotal.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD"
                })}
              </p>
            </div>
            <div className="row">
              <p className="col-md-5 col-sm-5 col-5">
                <Popup
                  trigger={
                    <Button className="pickup-tooltip" icon>
                      Pickup savings
                    </Button>
                  }
                  content={summary.itemDetails.pickupInfo}
                  hideOnScroll
                  verticalOffset={4}
                  position="bottom left"
                />
              </p>
              <p className="font-weight-bold col-md-7 col-sm-7 col-7 text-right text-danger">
                -
                {summary.pricing.savings.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD"
                })}
              </p>
            </div>
            <div className="row">
              <p className="col-md-5 col-sm-5 col-5 ">Est. taxes & fees</p>
              <p className="font-weight-bold col-md-7 col-sm-7 col-7 text-right">
                {summary.pricing.tax.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD"
                })}
              </p>
              <small className="col-md-6">
                (based on {summary.pricing.zip})
              </small>
            </div>
            <Divider />
            <div className="row total-cost">
              <p className="font-weight-bold col-md-5 col-sm-5 col-5">Est. Total</p>
              <p className="font-weight-bold col-md-7 col-sm-7 col-7 text-right">
                {this.totalCalc(summary.pricing, summary.promoPercent)}
              </p>
            </div>
            <SeeDetails summary={summary} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  summary: state.summary
});

export default connect(
  mapStateToProps,
  { fetchSummary }
)(Summary);
