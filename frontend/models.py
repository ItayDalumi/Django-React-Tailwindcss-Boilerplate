from django.db import models

# Create your models here.
class Todo(models.Model):
    title = models.CharField(max_length=30, unique=True, null=False, default="no title")
    description = models.CharField(max_length=100, default="no description")
    mode = models.BooleanField(default=False)
    date = models.DateField(auto_now_add=True)
