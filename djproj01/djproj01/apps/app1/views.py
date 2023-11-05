from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect

# pip install python-binance
# pip install pip install binance-futures-connector

from binance.um_futures import UMFutures
from binance import AsyncClient, BinanceSocketManager
import requests
from binance import Client
import json
import websockets
import asyncio
import time

from asgiref.sync import sync_to_async
from asgiref.sync import async_to_sync

main_dict_kline = {}
stream_kline_data_str = ""
binanceConnected = False


def index(request):
    return render(request, 'app1/index.html')


def test(request):
    return render(request, 'app1/layout_old.html')


def about(request):
    return render(request, 'app1/about.html')


def contacts(request):
    return render(request, 'app1/contacts.html')


def index4(request):
    return render(request, 'app1/index4.html')


def index2(request):
    binanceConnected = True
    return render(request, 'app1/index2.html')

def um_get_ticker_list():
    usdt = set()
    usdt_dict = {}
    i = 1
    client_umf = UMFutures()
    exchange_info = client_umf.exchange_info()
    # print(exchange_info)
    for s in exchange_info['symbols']:
        if s['symbol'].endswith('USDT'):
            usdt_dict[i] = s['symbol']
            usdt.add(s['symbol'])
            i += 1
    # print(usdt_dict)
    # print(type(usdt))
    # print(f'tickers number is {len(usdt)}')
    usdt_list = list(usdt)
    usdt_list.sort()
    return str(usdt_list).replace("'", "").replace(" ", "").replace("[", "").replace("]", "")

async def kline_listener():
    #print("kline_listener started")
    client = await AsyncClient.create()
    #print("111111")
    bm = BinanceSocketManager(client)
    #print("2222222")
    global stream_kline_data_str
    #print("3333333")
    #async with bm.futures_multiplex_socket(['linkusdt@kline_30m', 'btcusdt@ticker', 'ethusdt@ticker']) as stream:
    # async with bm.multiplex_socket(['linkusdt@trade', 'btcusdt@trade', 'ethusdt@trade', 'xlmusdt@trade', 'xrpusdt@trade', 'trxusdt@trade']) as stream:
    #async with bm.futures_multiplex_socket(['linkusdt@trade', 'btcusdt@trade', 'ethusdt@trade']) as stream:
    #async with bm.kline_futures_socket('BTCUSDT', interval=client.KLINE_INTERVAL_1MINUTE) as stream:
    async with bm.futures_multiplex_socket(['linkusdt@kline_1m']) as stream:
        #print("4444444")
        while True:
            #print("5555555")
            res = await stream.recv()
            #print("6666666")
            stream_kline_data_str = str(res)
            print(f'stream_kline_data: {stream_kline_data_str}')


def get_ticker_list(request):
    if request.GET:
        print('getting_ticker_list.....')
        return HttpResponse(um_get_ticker_list(), content_type='text/html')


def calc_max_period(request_dict):
    ticker_qty = int(request_dict['ticker_qty'])
    period_set = set()

    print('request_dict: ', request_dict)

    for i in range(ticker_qty):
        ticker_index = 'ticker' + str(i) + '_TF1_SMAc_base_disp'
        curr_period = int(request_dict[ticker_index])
        period_set.add(curr_period)
        ticker_index = 'ticker' + str(i) + '_TF1_SMAo_base_disp'
        curr_period = int(request_dict[ticker_index])
        period_set.add(curr_period)
        ticker_index = 'ticker' + str(i) + '_TF1_CCI_base_disp'
        curr_period = int(request_dict[ticker_index])
        period_set.add(curr_period)
        ticker_index = 'ticker' + str(i) + '_TF1_RSI_base_disp'
        curr_period = int(request_dict[ticker_index])
        period_set.add(curr_period)
        ticker_index = 'ticker' + str(i) + '_TF1_VOLSMA_base_disp'
        curr_period = int(request_dict[ticker_index])
        period_set.add(curr_period)

        ticker_index = 'ticker' + str(i) + '_TF2_SMAc_base_disp'
        curr_period = int(request_dict[ticker_index])
        period_set.add(curr_period)
        ticker_index = 'ticker' + str(i) + '_TF2_SMAo_base_disp'
        curr_period = int(request_dict[ticker_index])
        period_set.add(curr_period)
        ticker_index = 'ticker' + str(i) + '_TF2_CCI_base_disp'
        curr_period = int(request_dict[ticker_index])
        period_set.add(curr_period)
        ticker_index = 'ticker' + str(i) + '_TF2_RSI_base_disp'
        curr_period = int(request_dict[ticker_index])
        period_set.add(curr_period)
        ticker_index = 'ticker' + str(i) + '_TF2_VOLSMA_base_disp'
        curr_period = int(request_dict[ticker_index])
        period_set.add(curr_period)

        ticker_index = 'ticker' + str(i) + '_TF3_SMAc_base_disp'
        curr_period = int(request_dict[ticker_index])
        period_set.add(curr_period)
        ticker_index = 'ticker' + str(i) + '_TF3_SMAo_base_disp'
        curr_period = int(request_dict[ticker_index])
        period_set.add(curr_period)
        ticker_index = 'ticker' + str(i) + '_TF3_CCI_base_disp'
        curr_period = int(request_dict[ticker_index])
        period_set.add(curr_period)
        ticker_index = 'ticker' + str(i) + '_TF3_RSI_base_disp'
        curr_period = int(request_dict[ticker_index])
        period_set.add(curr_period)
        ticker_index = 'ticker' + str(i) + '_TF3_VOLSMA_base_disp'
        curr_period = int(request_dict[ticker_index])
        period_set.add(curr_period)

        print(period_set)
        return max(period_set)


def get_TFs(tickers_arr, request_dict):
    ticker_tf_index = ''
    tf_arr = []
    for i in range(len(tickers_arr)):
        tmp_arr = []
        tmp_arr.append(request_dict['ticker' + str(i) + '_TF1'])
        tmp_arr.append(request_dict['ticker' + str(i) + '_TF2'])
        tmp_arr.append(request_dict['ticker' + str(i) + '_TF3'])
        tf_arr.append(tmp_arr)
    return tf_arr


def get_history_kline(tickers_arr, tf_arr, max_period):
    global main_dict_kline
    main_dict_kline = {}
    print('getting history kline function started........')
    for tick_idx in range(len(tickers_arr)):
        main_dict_kline[tickers_arr[tick_idx]] = {}
        for tf_idx in range(len(tf_arr[tick_idx])):
            url1 = 'https://fapi.binance.com/fapi/v1/klines?symbol=' + tickers_arr[tick_idx] +\
                   '&interval=' + tf_arr[tick_idx][tf_idx] + '&limit=' + str(max_period)
            print('URL IS: ' + url1)
            kline_response = requests.get(url1).json()

            print(kline_response)
            main_dict_kline[tickers_arr[tick_idx]][tf_arr[tick_idx][tf_idx]] = {}
            temp_dict = {}
            for kline_idx in range(max_period):
                temp_dict[str(kline_idx)] = {
                'o': kline_response[kline_idx][1],
                'h': kline_response[kline_idx][2],
                'l': kline_response[kline_idx][3],
                'c': kline_response[kline_idx][4],
                'v': kline_response[kline_idx][5],
                }
            main_dict_kline[tickers_arr[tick_idx]][tf_arr[tick_idx][tf_idx]] = temp_dict

            tf_idx += 1
        tick_idx += 1

    return main_dict_kline

async def return_stream_data_from_get_request():
    pass

def observe_btn_clicked(request):
    if request.GET:
        print('observing started')
        request_dict = request.GET.dict()
        print(f'request_dict: ....... ')
        ticker_qty = int(request_dict['ticker_qty'])
        max_period = calc_max_period(request_dict)
        ticker_list = request_dict['ticker_list']
        print(f'ticker_list: {ticker_list}')
        tickers_arr = ticker_list.split(',')
        print(f'tickers_arr: {tickers_arr}')
        tf_arr = get_TFs(tickers_arr, request_dict)
        print(f'tf_arr: {tf_arr}')

        #print(max_period)
        #print(tickers_arr)
        #print(tf_arr)

        main_dict_kline = get_history_kline(tickers_arr, tf_arr, max_period)
        print('observing ended... ')
        print('***********************')
        print(f'main_dict_kline {main_dict_kline}')

        #asyncio.run(kline_listener())
        #print("kline_listener returned drive")

        return HttpResponse(str(main_dict_kline), content_type='text/html')
        #return main_dict_kline

# def observe_btn_clicked_delete(request):
#     print('**************BEFORE**************')
#     my_response = asyncio.run(observe_btn_clicked_async(request))
#     print('**************AFTER**************')
#     return HttpResponse(str(my_response), content_type='text/html')

def get_stream_kline_data(request):
    if request.GET:
        print('getting_stream_kline_data')
        # request_dict = request.GET.dict()
        # #print(request_dict)
        # ticker_qty = int(request_dict['ticker_qty'])
        # max_period = calc_max_period(request_dict)
        # ticker_list = request_dict['ticker_list']
        # tickers_arr = ticker_list.split(',')
        # tf_arr = get_TFs(tickers_arr, request_dict)
        #
        # print(f"tf_arr: {tf_arr}")

        tickers_and_TFs_srting_to_listener = []

        #for tick in range(len(tickers_arr)):
        #    for tf in range(len())



    return HttpResponse(stream_kline_data_str, content_type='text/html')