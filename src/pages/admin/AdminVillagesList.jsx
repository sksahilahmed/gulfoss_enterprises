import React from 'react';
import './AdminVillagesList.css';

const AdminVillagesList = () => {
  const villages = [
    { id: 1, name: 'Nandgaon', population: '15,000', customers: 12, orders: 45, status: 'Active' },
    { id: 2, name: 'Mahabaleshwar', population: '8,500', customers: 8, orders: 28, status: 'Active' },
    { id: 3, name: 'Satara', population: '12,000', customers: 10, orders: 38, status: 'Active' },
    { id: 4, name: 'Koregaon', population: '6,000', customers: 5, orders: 18, status: 'Active' },
    { id: 5, name: 'Vaduj', population: '5,500', customers: 4, orders: 12, status: 'Pending' },
    { id: 6, name: 'Kasegaon', population: '9,000', customers: 6, orders: 22, status: 'Active' },
    { id: 7, name: 'Lonand', population: '7,200', customers: 3, orders: 8, status: 'Inactive' },
    { id: 8, name: 'Phaltan', population: '11,000', customers: 9, orders: 35, status: 'Active' },
  ];

  return (
    <div className="admin-villages">
      <div className="container">
        <div className="page-header">
          <h1>Village Management</h1>
          <p>Manage service coverage areas and village details</p>
        </div>

        {/* Add Village Button */}
        <div className="add-village-section">
          <button className="btn btn-primary">+ Add New Village</button>
        </div>

        {/* Table */}
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Village Name</th>
                <th>Population</th>
                <th>Customers</th>
                <th>Orders</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {villages.map((village) => (
                <tr key={village.id}>
                  <td className="village-name">{village.name}</td>
                  <td>{village.population}</td>
                  <td className="count">{village.customers}</td>
                  <td className="count">{village.orders}</td>
                  <td>
                    <span className={`status-badge status-${village.status.toLowerCase()}`}>
                      {village.status}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button className="btn-icon" title="View">👁️</button>
                      <button className="btn-icon" title="Edit">✎</button>
                      <button className="btn-icon" title="Delete">🗑️</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminVillagesList;
