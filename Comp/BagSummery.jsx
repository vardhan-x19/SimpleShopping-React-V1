function BagSummery() {
    const BagSummery ={
        totalItem:5,
        totalMRP:3970,
        totalDiscount:"30%",
        finalPayment :3300
    }
    return (
        <div className="bag-summary">
          
        <div className="bag-details-container">
    <div className="price-header">PRICE DETAILS ({BagSummery.totalItem} Items) </div>
    <div className="price-item">
      <span className="price-item-tag">Total MRP</span>
      <span className="price-item-value">₹{BagSummery.totalMRP}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Discount on MRP</span>
      <span className="price-item-value priceDetail-base-discount">-₹{BagSummery.totalDiscount}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Convenience Fee</span>
      <span className="price-item-value">₹99</span>
    </div>
    <hr/>
    <div className="price-footer">
      <span className="price-item-tag">Total Amount</span>
      <span className="price-item-value">₹{BagSummery.finalPayment}</span>
    </div>
  </div>
  <button className="btn-place-order">
    <div className="css-xjhrni">PLACE ORDER</div>
  </button>
  </div>
    )
}
export default BagSummery;