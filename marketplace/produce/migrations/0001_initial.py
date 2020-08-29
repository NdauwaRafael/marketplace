# Generated by Django 3.1 on 2020-08-29 08:10

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('produce_category', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Produce',
            fields=[
                ('uuid', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('name', models.CharField(default='', max_length=70)),
                ('price', models.IntegerField(default=0, max_length=50)),
                ('quantity', models.IntegerField(default=0, max_length=50)),
                ('description', models.CharField(default='', max_length=400)),
                ('category_id',
                 models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='produce_category',
                                   to='produce_category.producecategory')),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='produce_owner',
                                            to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]