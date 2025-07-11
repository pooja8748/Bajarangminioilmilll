from django.db import models
from django.utils.text import slugify

class Product(models.Model):
    name_gujarati = models.CharField(max_length=100)
    name_english = models.CharField(max_length=100)
    slug = models.SlugField(unique=True, blank=True)
    description = models.TextField()
    features = models.JSONField(default=list)
    image = models.ImageField(upload_to='products/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        indexes = [
            models.Index(fields=['name_english']),
            models.Index(fields=['slug']),
            models.Index(fields=['created_at'])
        ]

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name_english)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name_english

class ProductPrice(models.Model):
    UNIT_CHOICES = [
        ('Kg', 'Kilogram'),
        ('Ltr', 'Liter'),
    ]
    
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='prices')
    package_size = models.CharField(max_length=20)
    unit_type = models.CharField(max_length=10, choices=UNIT_CHOICES)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    is_active = models.BooleanField(default=True)

    class Meta:
        unique_together = ['product', 'package_size', 'unit_type']

    def __str__(self):
        return f"{self.product.name_english} - {self.package_size}{self.unit_type}"