# Gulfoss Enterprises - Frontend Architecture & Component Guide

## Project Overview

Gulfoss Enterprises is a **frontend-only** water supply service portal built with React. It provides a complete user interface for customers to order water cans, manage subscriptions, and for administrators to manage the business.

**Key Principle**: No backend, no database, no APIs. Everything is mock data and static.

## Architecture

### Single Page Application (SPA)
- React Router for client-side routing
- Component-based architecture
- State management via React Hooks
- CSS modules for styling

### Design Philosophy
- **Mobile-First**: Designed for mobile devices first, then scaled up
- **Responsive**: Works seamlessly on all screen sizes
- **Simple**: Easy for rural users to understand
- **Modular**: Reusable components throughout

## Component Structure

### Layout Components

#### Navbar (`src/components/Navbar.jsx`)
**Purpose**: Main navigation header
**Features**:
- Sticky navigation
- Responsive hamburger menu
- Dropdown account menu for logged-in users
- Company branding
- Navigation links to all main pages

**Props**:
```jsx
<Navbar 
  isLoggedIn={boolean}
  onLogout={function}
  currentUser={object}
/>
```

#### Footer (`src/components/Footer.jsx`)
**Purpose**: Site footer with contact information
**Features**:
- Contact details (phone, WhatsApp, email, address)
- Social media links
- Company information
- Copyright notice

### UI Components

#### PricingCard (`src/components/PricingCard.jsx`)
**Purpose**: Display pricing tiers
**Features**:
- Popular badge highlight
- Price display with period
- Feature list with checkmarks
- Call-to-action button

**Props**:
```jsx
<PricingCard
  title="Monthly Plan"
  price={1200}
  period="month"
  features={['Feature 1', 'Feature 2']}
  popular={false}
  onAction={function}
/>
```

#### ServiceCard (`src/components/ServiceCard.jsx`)
**Purpose**: Showcase service offerings
**Features**:
- Icon display
- Title and description
- Hover animation

**Props**:
```jsx
<ServiceCard
  icon={IconComponent}
  title="Service Title"
  description="Service description"
/>
```

## Page Components

### Public Pages

#### LandingPage (`src/pages/LandingPage.jsx`)
**Route**: `/`
**Features**:
- Hero section with CTA
- Service showcase
- Pricing comparison
- Villages served
- Call-to-action sections
- Mock data for all content

#### AboutPage (`src/pages/AboutPage.jsx`)
**Route**: `/about`
**Features**:
- Company story
- Statistics cards
- Core values section
- Mission and vision statements

#### ContactPage (`src/pages/ContactPage.jsx`)
**Route**: `/contact`
**Features**:
- Contact information cards
- Contact form with validation
- Multiple contact methods
- Responsive layout

### Authentication

#### LoginRegisterPage (`src/pages/LoginRegisterPage.jsx`)
**Route**: `/login`
**Features**:
- Toggle between login and register
- Mobile number input with country code
- Village selection dropdown
- Password validation (register)
- Form validation

**State**:
- `isLogin`: Boolean to toggle between login/register
- `formData`: Object with user input
- Village list: Static array

### User Pages

#### OrderPage (`src/pages/OrderPage.jsx`)
**Route**: `/order`
**Features**:
- Village dropdown selection
- Quantity selector with +/- buttons
- Delivery date picker
- Cold water service toggle
- Special instructions textarea
- Real-time order summary with pricing

**Calculations**:
```
Base price per can: ₹50
Cold water charge: ₹10 per can
Total = (₹50 + cold_water_charge) × quantity
```

#### MyOrdersPage (`src/pages/MyOrdersPage.jsx`)
**Route**: `/orders`
**Features**:
- Order history list
- Status badges (Delivered, Out for Delivery, Processing)
- Order details (date, quantity, total)
- Action buttons (Track, Reorder)
- Empty state when no orders

#### SubscriptionsPage (`src/pages/SubscriptionsPage.jsx`)
**Route**: `/subscriptions`
**Features**:
- Active subscriptions display
- Plan details and pricing
- Feature list
- Days remaining calculation
- Action buttons (Modify, Pause, Cancel)

#### ProfilePage (`src/pages/ProfilePage.jsx`)
**Route**: `/profile`
**Features**:
- User information display
- Edit mode toggle
- Profile statistics
- Account actions (password, invoice, delete)
- Responsive profile layout

### Admin Pages

#### AdminDashboard (`src/pages/admin/AdminDashboard.jsx`)
**Route**: `/admin`
**Features**:
- 4 key statistics (Orders, Customers, Revenue, Villages)
- Quick action cards linking to management pages
- Recent orders table
- Color-coded stat boxes

#### AdminOrdersList (`src/pages/admin/AdminOrdersList.jsx`)
**Route**: `/admin/orders`
**Features**:
- Complete orders table
- Filter by status (All, Pending, Out for Delivery, Delivered)
- Edit/Delete actions
- Status badges
- Sortable columns

#### AdminCustomersList (`src/pages/admin/AdminCustomersList.jsx`)
**Route**: `/admin/customers`
**Features**:
- Customer database view
- Statistics (Total, Active, Inactive)
- Filter options
- View/Edit/Message actions
- Sortable columns

#### AdminVillagesList (`src/pages/admin/AdminVillagesList.jsx`)
**Route**: `/admin/villages`
**Features**:
- Village management table
- Add new village button
- Population and customer count
- Status indicators
- Edit/Delete actions

#### AdminSubscriptionsList (`src/pages/admin/AdminSubscriptionsList.jsx`)
**Route**: `/admin/subscriptions`
**Features**:
- Subscription management
- Filter by status (Active, Expired)
- Start/End dates
- Modify/Pause actions
- Revenue tracking

## Styling System

### Color Palette
```css
--primary-color: #0066cc        /* Main brand blue */
--secondary-color: #00a8e0     /* Light blue accent */
--accent-color: #ff6b6b         /* Red for alerts */
--dark-color: #1a1a1a           /* Dark text */
--light-color: #f5f7fa          /* Light backgrounds */
--border-color: #e0e0e0         /* Borders */
--text-color: #333              /* Primary text */
--success-color: #2ecc71        /* Green for success */
--warning-color: #f39c12        /* Orange for warnings */
```

### Responsive Breakpoints
```css
Desktop:    1200px+ (full layout)
Tablet:     768px - 1199px (2-column grids)
Mobile:     320px - 767px (single column)
Small:      480px and below (compact layouts)
```

### Layout System
- **Grid**: CSS Grid for complex layouts
- **Flexbox**: Flexbox for component alignment
- **Containers**: Max-width 1200px with padding
- **Gap System**: 16px, 24px, 32px spacing

## State Management

### App-Level State (`src/App.jsx`)
```jsx
const [isLoggedIn, setIsLoggedIn] = useState(false);
const [currentUser, setCurrentUser] = useState(null);
```

**User Object**:
```javascript
{
  name: string,
  phone: string,
  village: string,
  orders: array,
  subscriptions: array
}
```

### Component-Level State
Each page manages its own local state:
- Form inputs
- Filter selections
- Modal/drawer states
- Toggle states

## Routing Structure

```
/                           → Landing Page
/about                      → About Us
/contact                    → Contact Us
/login                      → Login/Register

/order                      → Place Order (Protected)
/orders                     → My Orders (Protected)
/subscriptions              → My Subscriptions (Protected)
/profile                    → User Profile (Protected)

/admin                      → Admin Dashboard
/admin/orders               → Orders Management
/admin/customers            → Customers Management
/admin/villages             → Villages Management
/admin/subscriptions        → Subscriptions Management
```

## Data Structures

### Order Object
```javascript
{
  id: string,
  date: string (YYYY-MM-DD),
  quantity: number,
  coldWater: boolean,
  total: number,
  status: string, // 'Pending' | 'Out for Delivery' | 'Delivered'
  village: string,
  notes: string
}
```

### Subscription Object
```javascript
{
  id: string,
  planName: string,
  startDate: string,
  endDate: string,
  price: number,
  status: string, // 'Active' | 'Paused' | 'Expired'
  features: array,
  nextDelivery: string
}
```

### Customer Object
```javascript
{
  id: string,
  name: string,
  phone: string,
  village: string,
  orders: number,
  joined: string,
  status: string // 'Active' | 'Inactive'
}
```

## Forms & Validation

### Login Form
- Phone: Required, 10 digits
- Password: Required, minimum 6 characters
- Village: Required selection

### Registration Form
- Name: Required
- Phone: Required, 10 digits
- Village: Required selection
- Password: Required, minimum 6 characters
- Confirm Password: Must match password

### Order Form
- Village: Required
- Quantity: 1-10 cans
- Delivery Date: Required, date picker
- Cold Water: Optional checkbox
- Notes: Optional textarea

### Contact Form
- Name: Required
- Email: Required, valid email
- Phone: Required, 10 digits
- Message: Required, min 10 characters

## Icons Used

All icons from `react-icons/fa6`:
- `FaWaterLadder` - Water can
- `FaTruck` - Delivery
- `FaPhone` - Phone
- `FaEnvelope` - Email
- `FaMapMarkerAlt` - Location
- `FaUser` - User profile
- `FaCheckCircle` - Success/Check
- `FaBox` - Orders
- `FaCalendarAlt` - Calendar
- `FaShoppingCart` - Shopping
- `FaUsers` - Users
- `FaTrendingUp` - Growth

## Animation & Effects

### CSS Transitions
- Button hover: 0.3s transform and box-shadow
- Card hover: 0.3s transform and box-shadow
- Smooth scroll behavior
- Float animation for hero image (3s infinite)

### Micro-interactions
- Button press feedback
- Hover state color changes
- Form input focus states
- Status badge animations

## Accessibility

### Features
- Semantic HTML
- Form labels connected to inputs
- ARIA attributes where needed
- Keyboard navigation support
- Color contrast compliance
- Mobile-touch friendly buttons (min 44x44px)

## Performance Optimizations

### Implemented
- Component reusability
- Minimal re-renders
- CSS Grid/Flexbox (hardware accelerated)
- No external dependencies (icons only)
- Lightweight components

### Potential Future
- Code splitting
- Lazy loading
- Image optimization
- CSS minification
- Component memoization

## Browser Compatibility

**Supported**:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

**CSS Features Used**:
- CSS Grid
- Flexbox
- CSS Variables
- Media Queries
- CSS Transitions
- CSS Gradients

## Development Workflow

### Adding a New Page

1. Create page component in `src/pages/`
2. Create corresponding CSS file
3. Add route in `App.jsx`
4. Add navigation link in `Navbar.jsx` if public
5. Test responsive design

### Adding a Component

1. Create component file in `src/components/`
2. Create CSS file for styling
3. Define PropTypes/JSDoc
4. Export from component
5. Use in pages

### Styling Guidelines

1. Use CSS variables for colors
2. Follow mobile-first approach
3. Use grid classes for layouts
4. Maintain consistent spacing
5. Test on multiple devices

## Known Limitations

- No backend integration (frontend only)
- No persistent data storage
- No real authentication
- No image uploads
- No real-time updates
- Mock data only
- No offline support

## Future Enhancements

- Backend API integration
- User authentication system
- Payment gateway
- Real-time notifications
- SMS/Email integration
- Delivery tracking map
- Analytics dashboard
- Dark mode theme
- Multi-language support

---

**Last Updated**: January 30, 2026
**React Version**: 18.2.0
**Node Version**: 14+
