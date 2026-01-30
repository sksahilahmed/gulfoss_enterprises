# Gulfoss Enterprises - Frontend Web Portal

A responsive, mobile-first web portal for Gulfoss Enterprises, providing water can supply and cold drinking water services across villages and nearby areas.

## Features

### Public Pages
- **Landing Page**: Hero section, services overview, pricing cards, villages served
- **About Us**: Company story, mission, vision, core values
- **Contact Us**: Contact form, phone, WhatsApp, email, address

### User Pages
- **Authentication**: Login/Register with mobile number based verification
- **Village Selection**: Choose service area
- **Order Placement**: 
  - Select number of water cans
  - Add cold water service
  - Set delivery date
  - Special instructions
- **My Orders**: Track order history and status
- **My Subscriptions**: Manage active subscription plans
- **Profile**: View and edit personal information

### Admin Pages
- **Dashboard**: Overview with stats and quick actions
- **Orders Management**: View, filter, and manage all orders
- **Customers Management**: View customer list and details
- **Villages List**: Manage service areas
- **Subscriptions Management**: Monitor subscription status

## Tech Stack

- **Frontend Framework**: React 18
- **Routing**: React Router v6
- **Icons**: React Icons
- **Styling**: CSS3 (Grid, Flexbox, Responsive Design)
- **State Management**: React Hooks (useState)

## Folder Structure

```
gulfoss/
├── public/
│   ├── index.html
│   └── styles/
│       └── global.css
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── Footer.jsx
│   │   ├── Footer.css
│   │   ├── PricingCard.jsx
│   │   ├── PricingCard.css
│   │   ├── ServiceCard.jsx
│   │   └── ServiceCard.css
│   ├── pages/
│   │   ├── LandingPage.jsx
│   │   ├── LandingPage.css
│   │   ├── AboutPage.jsx
│   │   ├── AboutPage.css
│   │   ├── ContactPage.jsx
│   │   ├── ContactPage.css
│   │   ├── LoginRegisterPage.jsx
│   │   ├── LoginRegisterPage.css
│   │   ├── OrderPage.jsx
│   │   ├── OrderPage.css
│   │   ├── MyOrdersPage.jsx
│   │   ├── MyOrdersPage.css
│   │   ├── SubscriptionsPage.jsx
│   │   ├── SubscriptionsPage.css
│   │   ├── ProfilePage.jsx
│   │   ├── ProfilePage.css
│   │   └── admin/
│   │       ├── AdminDashboard.jsx
│   │       ├── AdminDashboard.css
│   │       ├── AdminOrdersList.jsx
│   │       ├── AdminOrdersList.css
│   │       ├── AdminCustomersList.jsx
│   │       ├── AdminCustomersList.css
│   │       ├── AdminVillagesList.jsx
│   │       ├── AdminVillagesList.css
│   │       ├── AdminSubscriptionsList.jsx
│   │       └── AdminSubscriptionsList.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.jsx
│   └── index.css
├── package.json
└── README.md
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```
   The app will open at `http://localhost:3000`

3. **Build for Production**
   ```bash
   npm run build
   ```

## Usage

### Public Routes
- `/` - Landing Page
- `/about` - About Us
- `/contact` - Contact Us
- `/login` - Login/Register

### User Routes (Protected)
- `/order` - Place Order
- `/orders` - My Orders
- `/subscriptions` - My Subscriptions
- `/profile` - Profile

### Admin Routes
- `/admin` - Dashboard
- `/admin/orders` - Orders List
- `/admin/customers` - Customers List
- `/admin/villages` - Villages List
- `/admin/subscriptions` - Subscriptions List

## Features Breakdown

### 1. Responsive Design
- Mobile-first approach
- Fully responsive grid layouts
- Touch-friendly buttons and forms
- Optimized for mobile, tablet, and desktop

### 2. Reusable Components
- **Navbar**: Navigation with dropdown menus
- **Footer**: Company information and social links
- **PricingCard**: Flexible pricing tier display
- **ServiceCard**: Service feature showcase

### 3. Color Scheme
- Primary: `#0066cc` (Blue)
- Secondary: `#00a8e0` (Light Blue)
- Accent: `#ff6b6b` (Red)
- Dark: `#1a1a1a` (Dark Gray)
- Light: `#f5f7fa` (Light Gray)

### 4. Mock Data
All data is static/mock data. No backend integration required.

### 5. State Management
- Uses React Hooks for state management
- Login state managed at App level
- User data persisted during session

## Key Pages

### Landing Page
- Hero section with CTA
- Service showcase with icons
- Pricing plans comparison
- Villages we serve
- Call-to-action section

### Order Page
- Village selection dropdown
- Quantity selector with +/- buttons
- Delivery date picker
- Cold water toggle option
- Order summary with calculations
- Special instructions textarea

### Admin Dashboard
- 4 key metrics (Orders, Customers, Revenue, Villages)
- Quick action cards
- Recent orders table
- Navigation to admin pages

### My Orders
- Order history with status badges
- Track order button
- Reorder quick action
- Empty state when no orders

## Customization

### Colors
Edit the CSS variables in `public/styles/global.css`:
```css
:root {
  --primary-color: #0066cc;
  --secondary-color: #00a8e0;
  /* ... other colors ... */
}
```

### Typography
Modify font sizes and weights in `global.css`

### Layout
Adjust grid columns and spacing in component CSS files

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance
- Minimal bundle size
- Optimized CSS
- Fast page loads
- Smooth animations

## Future Enhancements
- Backend API integration
- Payment gateway integration
- Real-time notifications
- Map integration for delivery tracking
- SMS/Email notifications
- Analytics dashboard
- Multi-language support

## Notes
- All images and icons are from react-icons library
- No third-party UI frameworks (pure CSS)
- Self-contained styling with no external CSS libraries
- Fully responsive without media query breakpoints over 2

## Support

For issues or questions regarding the frontend:
1. Check the component documentation
2. Review the page structure
3. Validate responsive design on different devices

---

**Gulfoss Enterprises - Pure Water, Pure Trust** ✨
