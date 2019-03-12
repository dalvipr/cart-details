import React, { Component } from "react";

class ItemDetails extends Component {
  render() {
    const { summary } = this.props;
    return (
      <div className="col-md-12 item-details">
        <div className="row">
          <div className="col-md-5 col-5">
            <img
              src={summary.itemDetails.item_image}
              alt="summary.itemDetails.item_name"
              className="item-image"
            />
          </div>
          <div className="col-md-7 col-7">
            <p className="col-md-12 col-12">{summary.itemDetails.item_desc}</p>
            <div className="row col-md-12">
              <p className="col-md-6 col-sm-6 col-6">
                {(
                  summary.pricing.subTotal - summary.pricing.savings
                ).toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD"
                })}
              </p>
              <p className="col-md-6 col-sm-6 col-6 text-right">
                Qty:{summary.itemDetails.quantity}
              </p>
            </div>
            <p className="col-md-6 col-6">
              <del>
                {summary.pricing.subTotal.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD"
                })}
              </del>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemDetails;
