from django.db import models


class User(models.Model):
    user_nickname = models.CharField(primary_key=True, max_length=100, default="")
    user_name = models.CharField(max_length=150, default="")
    user_email = models.EmailField(default="")
    user_age = models.IntegerField(default=0)

    def __str__(selƒ):
        return f"Nickname: {selƒ.user_nickname} | E-mail: {selƒ.user_email}"


class Event(models.Model):
    event_image = models.ImageField(upload_to="event_images", default="no_image.jpg")
    event_name = models.CharField(max_length=150, default="")
    event_price = models.DecimalField(max_digits=8, decimal_places=2, default="")
    event_date = models.CharField(max_length=100, default="")
    event_time_start = models.TimeField(default="")
    event_time_ends = models.TimeField(default="")
    event_location = models.CharField(max_length=300, default="")
    event_description = models.CharField(max_length=1000, default="")

    def __str__(selƒ):
        return f"ID: {selƒ.id} | Event Name: {selƒ.event_name} | Event Price: {selƒ.event_price}"


class Local(models.Model):
    local_image = models.ImageField(upload_to="event_images", default="no_image.jpg")
    local_name = models.CharField(max_length=150, default="")
    local_date = models.CharField(max_length=100, default="")
    local_time_start = models.TimeField(default="")
    local_time_ends = models.TimeField(default="")
    local_location = models.CharField(max_length=300, default="")
    local_description = models.CharField(max_length=1000, default="")

    def __str__(selƒ):
        return f"ID: {selƒ.id} | Local Name: {selƒ.local_name}"
