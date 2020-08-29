import uuid as uuid
from django.db import models
from django.conf import settings
from marketplace.produce_category.models import ProduceCategory


# Create your models here.
class Produce(models.Model):
    uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=70, blank=False, default='')
    price = models.IntegerField(max_length=50, blank=False, default=0)
    quantity = models.IntegerField(max_length=50, blank=False, default=0)
    description = models.CharField(max_length=400, blank=False, default='')
    category_id = models.ForeignKey(ProduceCategory, on_delete=models.CASCADE, related_name='produce_category',
                                    null=True)
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, related_name="produce_owner", on_delete=models.CASCADE,
                              null=True)
