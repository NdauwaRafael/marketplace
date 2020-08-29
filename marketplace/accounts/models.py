from django.core.validators import RegexValidator
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings


# Create your models here.
class User(AbstractUser):
    id_no = models.CharField(max_length=50, null=True)
    phone_regex = RegexValidator(regex=r'^\+?1?\d{9,15}$',
                                 message="Phone number must be entered in the format: '+2547000000'. Up to 15 digits "
                                         "allowed.")
    phone = models.CharField(validators=[phone_regex], max_length=17, blank=True, unique=True, null=True)
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, related_name="user_owner", on_delete=models.CASCADE, null=True)
    bio = models.CharField(max_length=400, null=True, blank=True)
    is_farmer = models.BooleanField('farmer status', default=False)
    is_buyer = models.BooleanField('buyer status', default=False)
    is_admin = models.BooleanField('admin status', default=False)