import React from 'react';
import './ProfilePage.css';
import { FaUser, FaPhone, FaMapMarkerAlt, FaEdit } from 'react-icons/fa6';

const ProfilePage = ({ currentUser }) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [profileData, setProfileData] = React.useState({
    name: currentUser?.name || 'User',
    phone: currentUser?.phone || '9876543210',
    village: currentUser?.village || 'Nandgaon',
    email: 'user@email.com',
    address: 'Main Road, Village Area'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleSave = () => {
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  return (
    <div className="profile-page">
      <div className="container">
        <div className="page-header">
          <h1>My Profile</h1>
          <p>Manage your account information</p>
        </div>

        <div className="profile-container grid-2">
          {/* Profile Card */}
          <div className="profile-card">
            <div className="profile-header">
              <div className="profile-avatar">
                <FaUser />
              </div>
              <div className="profile-name">
                <h2>{profileData.name}</h2>
                <p className="profile-status">Member since Jan 2024</p>
              </div>
              <button
                className="btn btn-small"
                onClick={() => setIsEditing(!isEditing)}
              >
                <FaEdit /> {isEditing ? 'Cancel' : 'Edit'}
              </button>
            </div>

            {!isEditing ? (
              <div className="profile-details">
                <div className="detail-item">
                  <FaPhone className="detail-icon" />
                  <div>
                    <span className="detail-label">Phone Number</span>
                    <span className="detail-value">{profileData.phone}</span>
                  </div>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">📧</span>
                  <div>
                    <span className="detail-label">Email</span>
                    <span className="detail-value">{profileData.email}</span>
                  </div>
                </div>
                <div className="detail-item">
                  <FaMapMarkerAlt className="detail-icon" />
                  <div>
                    <span className="detail-label">Village</span>
                    <span className="detail-value">{profileData.village}</span>
                  </div>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">📍</span>
                  <div>
                    <span className="detail-label">Address</span>
                    <span className="detail-value">{profileData.address}</span>
                  </div>
                </div>
              </div>
            ) : (
              <form className="profile-form">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={profileData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={profileData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={profileData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Village</label>
                  <input
                    type="text"
                    name="village"
                    value={profileData.village}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <textarea
                    name="address"
                    value={profileData.address}
                    onChange={handleChange}
                    rows="2"
                  ></textarea>
                </div>
                <button
                  type="button"
                  className="btn btn-primary btn-full"
                  onClick={handleSave}
                >
                  Save Changes
                </button>
              </form>
            )}
          </div>

          {/* Profile Stats */}
          <div className="profile-stats">
            <div className="stat-card">
              <div className="stat-number">12</div>
              <div className="stat-label">Total Orders</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">2</div>
              <div className="stat-label">Active Subscriptions</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">₹850</div>
              <div className="stat-label">Total Spent</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">4.9★</div>
              <div className="stat-label">Rating</div>
            </div>

            {/* Actions */}
            <div className="profile-actions">
              <h3>Account Actions</h3>
              <button className="action-btn">Change Password</button>
              <button className="action-btn">Download Invoice</button>
              <button className="action-btn warning">Delete Account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
