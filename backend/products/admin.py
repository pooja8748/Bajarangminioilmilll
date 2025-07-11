from django.contrib import admin
from .models import Product, ProductPrice

class ProductPriceInline(admin.TabularInline):
    model = ProductPrice
    extra = 1

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['name_english', 'name_gujarati', 'slug', 'created_at']
    list_filter = ['created_at']
    search_fields = ['name_english', 'name_gujarati']
    prepopulated_fields = {'slug': ('name_english',)}
    inlines = [ProductPriceInline]

@admin.register(ProductPrice)
class ProductPriceAdmin(admin.ModelAdmin):
    list_display = ['product', 'package_size', 'unit_type', 'price', 'is_active']
    list_filter = ['unit_type', 'is_active']
    search_fields = ['product__name_english']