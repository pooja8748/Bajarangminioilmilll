from rest_framework import serializers
from .models import CartItem

class CartItemSerializer(serializers.ModelSerializer):
    product_name = serializers.CharField(source='product.name_english', read_only=True)
    product_image = serializers.ImageField(source='product.image', read_only=True)
    total_price = serializers.SerializerMethodField()
    
    class Meta:
        model = CartItem
        fields = ['id', 'product', 'product_name', 'product_image', 'quantity', 
                 'package_size', 'unit_type', 'price', 'total_price']
        read_only_fields = ['user']
    
    def get_total_price(self, obj):
        return obj.quantity * obj.price

class AddToCartSerializer(serializers.ModelSerializer):
    class Meta:
        model = CartItem
        fields = ['product', 'quantity', 'package_size', 'unit_type', 'price']