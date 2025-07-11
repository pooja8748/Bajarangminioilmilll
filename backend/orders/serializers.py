from rest_framework import serializers
from .models import Order, OrderItem
from products.serializers import ProductSerializer

class OrderItemSerializer(serializers.ModelSerializer):
    product_name = serializers.CharField(source='product.name_english', read_only=True)
    
    class Meta:
        model = OrderItem
        fields = ['id', 'product', 'product_name', 'quantity', 'package_size', 
                 'unit_type', 'price']

class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True, read_only=True)
    customer_name = serializers.CharField(source='customer.username', read_only=True)
    
    class Meta:
        model = Order
        fields = ['id', 'customer', 'customer_name', 'order_date', 'status', 
                 'total_amount', 'shipping_address', 'phone_number', 'notes', 'items']
        read_only_fields = ['customer', 'order_date']

class CreateOrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True)
    
    class Meta:
        model = Order
        fields = ['shipping_address', 'phone_number', 'notes', 'items']
    
    def create(self, validated_data):
        items_data = validated_data.pop('items')
        order = Order.objects.create(
            customer=self.context['request'].user,
            total_amount=0,
            **validated_data
        )
        
        total = 0
        for item_data in items_data:
            OrderItem.objects.create(order=order, **item_data)
            total += item_data['price'] * item_data['quantity']
        
        order.total_amount = total
        order.save()
        return order