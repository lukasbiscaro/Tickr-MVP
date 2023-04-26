from django.contrib import admin
from django.urls import path

from .views import users_views
from .views import events_views

urlpatterns = [
    path("users/", users_views.get_users, name="get_all_users"),
    path("users/create/", users_views.create_user, name="create_user"),
    path("users/manage/<str:nick>", users_views.manage_users_by_nick, name="manage_by_nick"),
    path("events/", events_views.get_events, name="get_all_events"),
    path("events/create/", events_views.create_event, name="create_event"),
    path("events/manage/<int:id>", events_views.manage_events_by_id, name="manage_by_id"),
]
