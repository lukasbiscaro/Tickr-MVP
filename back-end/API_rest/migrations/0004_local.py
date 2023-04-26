# Generated by Django 4.2 on 2023-04-26 17:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('API_rest', '0003_event'),
    ]

    operations = [
        migrations.CreateModel(
            name='Local',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('local_image', models.ImageField(default='no_image.jpg', upload_to='event_images')),
                ('local_name', models.CharField(default='', max_length=150)),
                ('local_date', models.CharField(default='', max_length=100)),
                ('local_time_start', models.TimeField(default='')),
                ('local_time_ends', models.TimeField(default='')),
                ('local_location', models.CharField(default='', max_length=300)),
                ('local_description', models.CharField(default='', max_length=1000)),
            ],
        ),
    ]
