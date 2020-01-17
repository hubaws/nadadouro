from django.shortcuts import render, redirect
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from json import loads

from apilog.sfdc import IndexSfdc

# Create your views here.

class IndexApiView(APIView):
    
    def get(self,request,*args, **kwargs):
        print('GET INDEX API')
        return Response({'method':'GET', 'indexpage': 'Index API'})

    def post(self,request,*args, **kwargs):
        print('POST INDEX API')
        post_data = loads(request.body.decode('utf-8'))
        email_user = post_data.get('data').get('email_signup')
        password_user = post_data.get('data').get('password_signup')
        test = IndexSfdc(key=email_user)
        test = test.getInitAndRedirect()
        return Response({'url':test})