from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.shortcuts import get_object_or_404

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.decorators import parser_classes


from ..models import Local
from ..serializers import LocalSerializer

import json


@api_view(["GET"])
def get_locals(request):
    if request.method == "GET":
        locals = Local.objects.all()
        serializer = LocalSerializer(locals, many=True)

        return Response(serializer.data)

    return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET", "PUT", "DELETE"])
def manage_locals_by_id(request, id):
    local = get_object_or_404(Local, pk=id)
    try:
        local = Local.objects.get(pk=id)
    except:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == "GET":
        serializer = LocalSerializer(local)
        return Response(serializer.data)

    if request.method == "PUT":
        serializer = LocalSerializer(local, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)

        return Response(status=status.HTTP_400_BAD_REQUEST)

    if request.method == "DELETE":
        try:
            local_to_delete = Local.objects.get(pk=id)
            local_to_delete.delete()
            return Response(status=status.HTTP_202_ACCEPTED)
        except:
            return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(["POST"])
@parser_classes([MultiPartParser, FormParser])
def create_local(request):
    if request.method == "POST":
        new_local = request.data

        serializer = LocalSerializer(data=new_local)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(status=status.HTTP_400_BAD_REQUEST)
