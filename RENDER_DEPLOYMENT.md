# Deploy Bajrang Mini Oil Mill to Render

## ✅ Changes Made
- ❌ Removed online payment (Razorpay)
- ✅ Cash on Delivery only
- ✅ Production-ready settings
- ✅ Render deployment configuration

## 🚀 Render Deployment Steps

### 1. Prepare Your Code
```bash
# Make sure all changes are committed
git add .
git commit -m "Prepare for Render deployment"
git push origin main
```

### 2. Deploy Backend (Django) on Render

1. **Go to [Render.com](https://render.com)** and sign up/login
2. **Click "New +" → "Web Service"**
3. **Connect your GitHub repository**
4. **Configure the service:**
   - **Name**: `bajrang-oil-mill-backend`
   - **Environment**: `Python 3`
   - **Build Command**: `./build.sh`
   - **Start Command**: `gunicorn oilmill_backend.wsgi:application`
   - **Instance Type**: `Free`

5. **Add Environment Variables:**
   ```
   SECRET_KEY=your-super-secret-key-here
   DEBUG=False
   ALLOWED_HOSTS=bajrang-oil-mill-backend.onrender.com
   DB_NAME=your_database_name
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   DB_HOST=your_database_host
   DB_PORT=5432
   ```

6. **Create PostgreSQL Database:**
   - Click "New +" → "PostgreSQL"
   - Name: `bajrang-oil-mill-db`
   - Copy the connection details to your environment variables

7. **Deploy the backend**

### 3. Deploy Frontend (React) on Render

1. **Click "New +" → "Static Site"**
2. **Connect your GitHub repository**
3. **Configure the service:**
   - **Name**: `bajrang-oil-mill-frontend`
   - **Build Command**: `cd frontend && npm install && npm run build`
   - **Publish Directory**: `frontend/build`

4. **Add Environment Variables:**
   ```
   REACT_APP_API_URL=https://bajrang-oil-mill-backend.onrender.com
   ```

5. **Deploy the frontend**

### 4. Alternative: Single Full-Stack Deployment

You can also deploy both frontend and backend together:

1. **Create a new Web Service**
2. **Use these settings:**
   - **Build Command**: 
     ```bash
     cd frontend && npm install && npm run build && cd ../backend && pip install -r requirements.txt && python manage.py collectstatic --no-input && python manage.py migrate
     ```
   - **Start Command**: `cd backend && gunicorn oilmill_backend.wsgi:application`

3. **Update Django settings to serve React build:**
   ```python
   # In settings.py
   STATICFILES_DIRS = [
       os.path.join(BASE_DIR, '../frontend/build/static'),
   ]
   ```

## 🔧 Important Notes

### Backend URL Structure:
- **API Base**: `https://your-backend-app.onrender.com/api/`
- **Admin Panel**: `https://your-backend-app.onrender.com/admin/`

### Frontend Configuration:
Update `frontend/src/services/api.js`:
```javascript
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';
```

### Database Setup:
After deployment, create a superuser:
```bash
# In Render shell
python manage.py createsuperuser
```

## 📱 Features Available:
- ✅ All 8 oil products with pricing
- ✅ Shopping cart functionality
- ✅ Cash on Delivery checkout
- ✅ Mobile responsive design
- ✅ Contact information
- ✅ Business details
- ✅ Plasma verification badges

## 🎯 Post-Deployment:
1. Test all functionality
2. Add products through Django admin
3. Upload product images
4. Test mobile responsiveness
5. Share the live URL!

Your oil mill website will be live at:
- **Frontend**: `https://bajrang-oil-mill-frontend.onrender.com`
- **Backend**: `https://bajrang-oil-mill-backend.onrender.com`