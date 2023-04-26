from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from ..models import User
from ..serializers import UserSerializer

import json


@api_view(["GET"])
def get_users(request):
    if request.method == "GET":
        users = User.objects.all()

        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)

    return Response(status=status.HTTP_404_NOT_FOUND)


@api_view(["GET", "PUT", "DELETE"])
def manage_users_by_nick(request, nick):
    try:
        user = User.objects.get(pk=nick)
    except:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == "GET":
        serializer = UserSerializer(user)
        return Response(serializer.data)

    if request.method == "PUT":
        serializer = UserSerializer(user, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)

        return Response(status=status.HTTP_400_BAD_REQUEST)

    if request.method == "DELETE":
        try:
            user_to_delete = User.objects.get(pk=nick)
            user_to_delete.delete()
            return Response(status=status.HTTP_202_ACCEPTED)
        except:
            return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(["POST"])
def create_user(request):
    if request.method == "POST":
        new_user = request.data

        serializer = UserSerializer(data=new_user)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        errors = serializer.errors
        return Response(errors, status=status.HTTP_400_BAD_REQUEST)
