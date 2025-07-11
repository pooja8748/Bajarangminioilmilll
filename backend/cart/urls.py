from django.urls import path
from .views import CartListView, AddToCartView, CartItemDetailView

urlpatterns = [
    path('', CartListView.as_view(), name='cart-list'),
    path('add/', AddToCartView.as_view(), name='add-to-cart'),
    path('<int:pk>/', CartItemDetailView.as_view(), name='cart-item-detail'),
]