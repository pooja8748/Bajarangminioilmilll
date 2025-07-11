from rest_framework import serializers
from .models import Product, ProductPrice

class ProductPriceSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductPrice
        fields = ['id', 'package_size', 'unit_type', 'price', 'is_active']

class ProductSerializer(serializers.ModelSerializer):
    prices = ProductPriceSerializer(many=True, read_only=True)
    
    class Meta:
        model = Product
        fields = ['id', 'name_gujarati', 'name_english', 'slug', 'description', 
                 'features', 'image', 'prices', 'created_at']

class ProductListSerializer(serializers.ModelSerializer):
    min_price = serializers.SerializerMethodField()
    
    class Meta:
        model = Product
        fields = ['id', 'name_gujarati', 'name_english', 'slug', 'image', 'min_price']
    
    def get_min_price(self, obj):
        min_price = obj.prices.filter(is_active=True).aggregate(
            min_price=models.Min('price')
        )['min_price']
        return min_price