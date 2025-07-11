from django.urls import path
from .views import ProductListView, ProductDetailView, ProductPriceListView

urlpatterns = [
    path('', ProductListView.as_view(), name='product-list'),
    path('<slug:slug>/', ProductDetailView.as_view(), name='product-detail'),
    path('prices/', ProductPriceListView.as_view(), name='product-prices'),
]