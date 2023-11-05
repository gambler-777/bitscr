from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return HttpResponse("Hello2 world!")

def test(request):
    #print(request)
    return HttpResponse("<h4>Hello2 TEST!</h4>")

def about(request):
    return HttpResponse('<h4>ABOUT PAGE</h4>')