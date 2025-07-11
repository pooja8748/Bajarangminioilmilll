# Bajrang Mini Oil Mill - Setup Instructions

## Complete E-commerce Application Setup

### Backend Setup (Django)

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install Python dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

3. **Run database migrations:**
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

4. **Create superuser for admin access:**
   ```bash
   python manage.py createsuperuser
   ```

5. **Start Django development server:**
   ```bash
   python manage.py runserver
   ```

### Frontend Setup (React)

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install Node.js dependencies:**
   ```bash
   npm install
   ```

3. **Install Tailwind CSS:**
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   ```

4. **Start React development server:**
   ```bash
   npm start
   ```

### Features Implemented

✅ **Complete Product Catalog**
- 8 oil products with Gujarati/English names
- Multiple package sizes and pricing
- Plasma verification badges
- High-quality product images

✅ **Full Website Pages**
- Home page with hero section
- Products page with search functionality
- Product detail pages with pricing tables
- About page with special features
- Contact page with business information
- Gallery page with mill photos
- Shopping cart functionality

✅ **Business Information**
- Contact details for all three owners
- Business hours (8 AM - 8 PM daily)
- Complete address and Google Maps link
- Plasma verification throughout

✅ **Technical Features**
- Responsive design with Tailwind CSS
- Search functionality
- Shopping cart with Context API
- Django REST API backend
- PostgreSQL database support
- Docker containerization ready

### Product List
1. Groundnut Oil (શિંગતેલ) - ₹120-₹3350
2. White Sesame Oil (સફેદ તલ તેલ) - ₹90-₹5000
3. Black Sesame Oil (કાળા તલ તેલ) - ₹120-₹7000
4. Coconut Oil (કોપરેલ) - ₹150-₹2900
5. Groundnut Cake Oil (એરસીડ્યુ) - ₹60-₹1150
6. Mustard Oil (સરસવ) - ₹80-₹1550
7. Almond Oil (બદામ તેલ) - ₹200-₹2200
8. Kalonji Oil (કલોજી તેલ) - ₹70-₹150

### Access Points
- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:8000/api/
- **Django Admin:** http://localhost:8000/admin/

### Next Steps
1. Add product images to Django admin
2. Configure email settings for order notifications
3. Set up payment gateway integration
4. Deploy to production server
5. Configure SSL certificates