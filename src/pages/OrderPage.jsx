import React from 'react';
import './OrderPage.css';
import { FaShoppingCart } from 'react-icons/fa6';

const OrderPage = ({ currentUser }) => {
  const [orderData, setOrderData] = React.useState({
    village: currentUser?.village || '',
    quantity: 1,
    coldWater: false,
    deliveryDate: '',
    notes: ''
  });

  const villages = [
    'Nandgaon', 'Mahabaleshwar', 'Satara', 'Koregaon',
    'Vaduj', 'Kasegaon', 'Lonand', 'Phaltan'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setOrderData({
      ...orderData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order placed successfully! You will receive delivery confirmation shortly.');
    setOrderData({
      village: currentUser?.village || '',
      quantity: 1,
      coldWater: false,
      deliveryDate: '',
      notes: ''
    });
  };

  const basePrice = 50;
  const coldWaterCharge = orderData.coldWater ? 10 : 0;
  const totalPrice = (basePrice + coldWaterCharge) * orderData.quantity;

  return (
    <div className="order-page">
      <div className="container">
        <div className="page-header">
          <h1><FaShoppingCart /> Place Your Order</h1>
          <p>Quick and easy ordering of water cans</p>
        </div>

        <div className="order-content grid-2">
          {/* Order Form */}
          <div className="order-form-container">
            <form onSubmit={handleSubmit}>
              <h2>Order Details</h2>

              <div className="form-group">
                <label htmlFor="village">Select Your Village *</label>
                <select
                  id="village"
                  name="village"
                  value={orderData.village}
                  onChange={handleChange}
                  required
                >
                  <option value="">Choose village</option>
                  {villages.map((v, idx) => (
                    <option key={idx} value={v}>{v}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="quantity">Number of Water Cans (20L) *</label>
                <div className="quantity-selector">
                  <button
                    type="button"
                    onClick={() => setOrderData({
                      ...orderData,
                      quantity: Math.max(1, orderData.quantity - 1)
                    })}
                    className="qty-btn"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    value={orderData.quantity}
                    onChange={handleChange}
                    min="1"
                    max="10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setOrderData({
                      ...orderData,
                      quantity: Math.min(10, orderData.quantity + 1)
                    })}
                    className="qty-btn"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="deliveryDate">Preferred Delivery Date *</label>
                <input
                  type="date"
                  id="deliveryDate"
                  name="deliveryDate"
                  value={orderData.deliveryDate}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group checkbox-group">
                <input
                  type="checkbox"
                  id="coldWater"
                  name="coldWater"
                  checked={orderData.coldWater}
                  onChange={handleChange}
                />
                <label htmlFor="coldWater">
                  <span>Add Cold Drinking Water Service</span>
                  <span className="price-tag">+₹10 per can</span>
                </label>
              </div>

              <div className="form-group">
                <label htmlFor="notes">Special Instructions (Optional)</label>
                <textarea
                  id="notes"
                  name="notes"
                  value={orderData.notes}
                  onChange={handleChange}
                  placeholder="Any special delivery instructions..."
                  rows="3"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-full btn-large">
                Place Order Now
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="order-summary">
            <div className="summary-card">
              <h3>Order Summary</h3>

              <div className="summary-item">
                <span>Water Cans (20L)</span>
                <span className="value">
                  {orderData.quantity} × ₹{basePrice} = ₹{basePrice * orderData.quantity}
                </span>
              </div>

              {orderData.coldWater && (
                <div className="summary-item">
                  <span>Cold Water Service</span>
                  <span className="value">
                    {orderData.quantity} × ₹{coldWaterCharge} = ₹{coldWaterCharge * orderData.quantity}
                  </span>
                </div>
              )}

              <div className="summary-divider"></div>

              <div className="summary-total">
                <span>Total Amount</span>
                <span className="total-price">₹{totalPrice}</span>
              </div>

              <div className="info-box">
                <h4>📦 Delivery Info</h4>
                <ul>
                  <li>Delivery within 24 hours</li>
                  <li>Cash on delivery available</li>
                  <li>Free delivery above 2 cans</li>
                  <li>Free empty can exchange</li>
                </ul>
              </div>

              <div className="info-box warning">
                <h4>⏰ Note</h4>
                <p>All orders must be placed before 6 PM for next-day delivery.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
