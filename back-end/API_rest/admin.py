from django.contrib import admin

from .models import User
from .models import Event
from .models import Local

admin.site.register(User)
admin.site.register(Event)
admin.site.register(Local)
