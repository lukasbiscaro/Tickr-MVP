from rest_framework import serializers

from .models import User
from .models import Event
from .models import Local


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = "__all__"


class LocalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Local
        fields = "__all__"
