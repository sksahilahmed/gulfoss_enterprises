import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginRegisterPage.css';
import { FaPhone } from 'react-icons/fa6';

const LoginRegisterPage = ({ onLogin }) => {
  const [isLogin, setIsLogin] = React.useState(true);
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    village: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();

  const villages = [
    'Nandgaon', 'Mahabaleshwar', 'Satara', 'Koregaon',
    'Vaduj', 'Kasegaon', 'Lonand', 'Phaltan'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isLogin) {
      // Login
      onLogin({
        name: 'User',
        phone: formData.phone,
        village: formData.village
      });
      alert('Login successful!');
      navigate('/');
    } else {
      // Register
      if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
      onLogin({
        name: formData.name,
        phone: formData.phone,
        village: formData.village
      });
      alert('Registration successful! Welcome to Gulfoss Enterprises');
      navigate('/');
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          {/* Toggle */}
          <div className="auth-toggle">
            <button
              className={`toggle-btn ${isLogin ? 'active' : ''}`}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button
              className={`toggle-btn ${!isLogin ? 'active' : ''}`}
              onClick={() => setIsLogin(false)}
            >
              Register
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <h2>{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
            <p>{isLogin ? 'Login to your account' : 'Join Gulfoss Enterprises'}</p>

            {!isLogin && (
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required={!isLogin}
                  placeholder="Enter your full name"
                />
              </div>
            )}

            <div className="form-group">
              <label htmlFor="phone">Mobile Number *</label>
              <div className="phone-input">
                <span className="country-code">+91</span>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="9876543210"
                  pattern="[0-9]{10}"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="village">Select Village *</label>
              <select
                id="village"
                name="village"
                value={formData.village}
                onChange={handleChange}
                required
              >
                <option value="">Choose your village</option>
                {villages.map((v, idx) => (
                  <option key={idx} value={v}>{v}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="password">Password *</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Enter password"
                minLength="6"
              />
            </div>

            {!isLogin && (
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password *</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  placeholder="Confirm password"
                  minLength="6"
                />
              </div>
            )}

            <button type="submit" className="btn btn-primary btn-full">
              {isLogin ? 'Login' : 'Create Account'}
            </button>
          </form>

          {/* Help */}
          <div className="auth-help">
            <p>Need help? <a href="/contact">Contact us via WhatsApp</a></p>
          </div>
        </div>

        {/* Info */}
        <div className="auth-info">
          <h3>💧 Gulfoss Enterprises</h3>
          <p>Pure Water, Pure Trust</p>
          <div className="info-points">
            <div className="info-point">✓ Quick Registration</div>
            <div className="info-point">✓ Easy Ordering</div>
            <div className="info-point">✓ Fast Delivery</div>
            <div className="info-point">✓ 24/7 Support</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegisterPage;
