from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('test/', views.test, name='test'),
    path('about/', views.about, name='about'),
    path('contacts/', views.contacts, name='contacts'),
    path('index4/', views.index4, name='index4'),
    path('index2/', views.index2, name='index2'),
    path('get_ticker_list', views.get_ticker_list, name='get_ticker_list'),
    path('observe_btn_clicked', views.observe_btn_clicked, name='observe_btn_clicked'),
    path('get_stream_kline_data', views.get_stream_kline_data, name='get_stream_kline_data'),
]