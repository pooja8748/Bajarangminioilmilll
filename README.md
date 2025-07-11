# Bajrang Mini Oil Mill E-commerce Application

A full-stack e-commerce application for an oil mill business built with React and Django.

## Architecture

### Backend (Django)
- **Products App**: Product catalog with multilingual support (Gujarati/English)
- **Orders App**: Order management system
- **Cart App**: Shopping cart functionality
- **Authentication**: JWT-based user authentication

### Frontend (React)
- **Component-based architecture** with reusable UI components
- **Context API** for cart state management
- **React Router** for navigation
- **Tailwind CSS** for styling

## Features

- Bilingual product names (Gujarati/English)
- Multiple package sizes and pricing
- Shopping cart with persistence
- Order management
- Product search and filtering
- Responsive design

## Setup Instructions

### Backend Setup
```bash
cd backend
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

### Frontend Setup
```bash
cd frontend
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm start
```

## API Endpoints

### Products
- `GET /api/products/` - List all products
- `GET /api/products/<slug>/` - Get product details
- `GET /api/products/prices/` - Get all product prices

### Orders
- `POST /api/orders/` - Create new order
- `GET /api/orders/` - List user orders
- `GET /api/orders/<id>/` - Get order details

### Cart
- `GET /api/cart/` - Get cart items
- `POST /api/cart/add/` - Add item to cart
- `DELETE /api/cart/<id>/` - Remove item from cart

## Database Models

### Product
- Multilingual names (Gujarati/English)
- Slug for SEO-friendly URLs
- JSON features field
- Image upload support

### ProductPrice
- Multiple package sizes per product
- Unit types (Kg/Ltr)
- Price management

### Order & OrderItem
- Complete order tracking
- Customer information
- Order status management

### CartItem
- User-specific cart items
- Package size selection
- Quantity management

## Deployment

The application is containerized and ready for deployment with:
- Docker containers
- PostgreSQL database
- Redis for caching
- nginx for static files
- gunicorn for Django server