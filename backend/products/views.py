from rest_framework import generics, filters
from rest_framework.permissions import AllowAny
from django_filters.rest_framework import DjangoFilterBackend
from .models import Product, ProductPrice
from .serializers import ProductSerializer, ProductListSerializer, ProductPriceSerializer

class ProductListView(generics.ListAPIView):
    queryset = Product.objects.prefetch_related('prices').all()
    serializer_class = ProductListSerializer
    permission_classes = [AllowAny]
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['name_english', 'name_gujarati']
    ordering_fields = ['created_at', 'name_english']
    ordering = ['-created_at']

class ProductDetailView(generics.RetrieveAPIView):
    queryset = Product.objects.prefetch_related('prices').all()
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]
    lookup_field = 'slug'

class ProductPriceListView(generics.ListAPIView):
    queryset = ProductPrice.objects.filter(is_active=True).select_related('product')
    serializer_class = ProductPriceSerializer
    permission_classes = [AllowAny]