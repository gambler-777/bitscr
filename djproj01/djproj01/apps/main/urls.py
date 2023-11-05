from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index1'),
    path('test/', views.test, name='test1'),
    path('about/', views.about, name='about1')
]