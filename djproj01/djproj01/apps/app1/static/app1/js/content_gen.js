const content_container = document.getElementById('content-container');
let head01 = document.createElement('h1');
const popUp2 = document.getElementById('pop-up2');
const apply_settings_btn = document.getElementById('apply-settings-btn');

function create_chart(ticker_list_array) {
    $('#content-container').empty();
    content_container.appendChild(head01);
    head01.innerHTML = ticker_list;
    head01.setAttribute('id', 'h1_page_ticker_list');

    ticker_list_array.forEach((item, index) =>{
        console.log(index, item);
        let wnd = document.createElement('div');
        wnd.setAttribute('id', 'ticker'+index+'container');
        wnd.setAttribute('class', 'ticker-container');
        content_container.appendChild(wnd);
        wnd.style.display = 'inline-block';
        wnd.innerHTML =
        '<!-- TradingView Widget BEGIN --><div class="tradingview-widget-container" style="height:100%;width:100%">  <div id="tradingview_9bba' + index + '" style="height:calc(100% - 32px);width:100%"></div>     </div><!-- TradingView Widget END -->'
        ;
        new TradingView.widget({
          "width": 600,
          "height": 400,
          "symbol": "BINANCE:" + item + ".P",
          "interval": "60",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "1",
          "locale": "en",
          "enable_publishing": false,
          "allow_symbol_change": false,
            "container_id": "tradingview_9bba" + index}
            );
        wnd.insertAdjacentHTML("beforeend", '<div class="line-under-chart"></div>');
        wnd.insertAdjacentHTML("beforeend",
            '<div class="tab-header-line tab-row">'+
                  '<img class="settings-tab-gear ticker' + index + '" src="static/app1/img/Settings_logo_blue_02 1.svg" alt="" style="bottom: 0px;">'+
                  '<div class="table-header-unit tab-col-1">ITEM</div>'+
                  '<div class="table-header-unit tab-col-2">BASE</div>'+
                  '<div class="table-header-unit tab-col-3" id="ticker' + index + '_TF1">1H</div>'+
                  '<div class="table-header-unit tab-col-4">BASE</div>'+
                  '<div class="table-header-unit tab-col-5" id="ticker' + index + '_TF2">1H</div>'+
                  '<div class="table-header-unit tab-col-6">BASE</div>'+
                  '<div class="table-header-unit tab-col-7" id="ticker' + index + '_TF3">1H</div>'+
              '</div>'+

              '<div class="line-under-chart"></div>'+

              '<div class="tab-simple-line tab-row">'+
                  '<img class="settings-tab-gear ticker' + index + '" src="static/app1/img/Settings_logo_blue_02 1.svg" alt="">'+
                  '<div class="table-simple-unit tab-col-1">SMAo</div>'+
                  '<div class="table-simple-unit tab-col-2" id="ticker' + index + '_TF1_SMAo_base_disp">10</div>'+
                  '<div class="table-simple-unit tab-col-3" id="ticker' + index + '_TF1_SMAo_value_disp">777</div>'+
                  '<div class="table-simple-unit tab-col-4" id="ticker' + index + '_TF2_SMAo_base_disp">10</div>'+
                  '<div class="table-simple-unit tab-col-5" id="ticker' + index + '_TF2_SMAo_value_disp">777</div>'+
                  '<div class="table-simple-unit tab-col-6" id="ticker' + index + '_TF3_SMAo_base_disp">10</div>'+
                  '<div class="table-simple-unit tab-col-7" id="ticker' + index + '_TF3_SMAo_value_disp">777</div>'+
              '</div>'+

              '<div class="tab-simple-line tab-row">'+
                  '<img class="settings-tab-gear ticker' + index + '" src="static/app1/img/Settings_logo_blue_02 1.svg" alt="">'+
                  '<div class="table-simple-unit tab-col-1">SMAo.Δ</div>'+
                  '<div class="table-simple-unit tab-col-2">-</div>'+
                  '<div class="table-simple-unit tab-col-3" id="ticker' + index + '_TF1_SMAoD_value_disp">555</div>'+
                  '<div class="table-simple-unit tab-col-4">-</div>'+
                  '<div class="table-simple-unit tab-col-5" id="ticker' + index + '_TF2_SMAoD_value_disp">555</div>'+
                  '<div class="table-simple-unit tab-col-6">-</div>'+
                  '<div class="table-simple-unit tab-col-7" id="ticker' + index + '_TF3_SMAoD_value_disp">555</div>'+
              '</div>'+

              '<div class="tab-simple-line tab-row">'+
                  '<img class="settings-tab-gear ticker' + index + '" src="static/app1/img/Settings_logo_blue_02 1.svg" alt="">'+
                  '<div class="table-simple-unit tab-col-1">SMAc</div>'+
                  '<div class="table-simple-unit tab-col-2" id="ticker' + index + '_TF1_SMAc_base_disp">10</div>'+
                  '<div class="table-simple-unit tab-col-3" id="ticker' + index + '_TF1_SMAc_value_disp">777</div>'+
                  '<div class="table-simple-unit tab-col-4" id="ticker' + index + '_TF2_SMAc_base_disp">10</div>'+
                  '<div class="table-simple-unit tab-col-5" id="ticker' + index + '_TF2_SMAc_value_disp">777</div>'+
                  '<div class="table-simple-unit tab-col-6" id="ticker' + index + '_TF3_SMAc_base_disp">10</div>'+
                  '<div class="table-simple-unit tab-col-7" id="ticker' + index + '_TF3_SMAc_value_disp">777</div>'+
              '</div>'+

              '<div class="tab-simple-line tab-row">'+
                  '<img class="settings-tab-gear ticker' + index + '" src="static/app1/img/Settings_logo_blue_02 1.svg" alt="">'+
                  '<div class="table-simple-unit tab-col-1">SMAc.Δ</div>'+
                  '<div class="table-simple-unit tab-col-2">-</div>'+
                  '<div class="table-simple-unit tab-col-3" id="ticker' + index + '_TF1_SMAcD_value_disp">555</div>'+
                  '<div class="table-simple-unit tab-col-4">-</div>'+
                  '<div class="table-simple-unit tab-col-5" id="ticker' + index + '_TF2_SMAcD_value_disp">555</div>'+
                  '<div class="table-simple-unit tab-col-6">-</div>'+
                  '<div class="table-simple-unit tab-col-7" id="ticker' + index + '_TF3_SMAcD_value_disp">555</div>'+
              '</div>'+

              '<div class="tab-simple-line tab-row">'+
                  '<img class="settings-tab-gear ticker' + index + '" src="static/app1/img/Settings_logo_blue_02 1.svg" alt="">'+
                  '<div class="table-simple-unit tab-col-1">CCI</div>'+
                  '<div class="table-simple-unit tab-col-2" id="ticker' + index + '_TF1_CCI_base_disp">10</div>'+
                  '<div class="table-simple-unit tab-col-3" id="ticker' + index + '_TF1_CCI_value_disp">777</div>'+
                  '<div class="table-simple-unit tab-col-4" id="ticker' + index + '_TF2_CCI_base_disp">10</div>'+
                  '<div class="table-simple-unit tab-col-5" id="ticker' + index + '_TF2_CCI_value_disp">777</div>'+
                  '<div class="table-simple-unit tab-col-6" id="ticker' + index + '_TF3_CCI_base_disp">10</div>'+
                  '<div class="table-simple-unit tab-col-7" id="ticker' + index + '_TF3_CCI_value_disp">777</div>'+
              '</div>'+

              '<div class="tab-simple-line tab-row">'+
                  '<img class="settings-tab-gear ticker' + index + '" src="static/app1/img/Settings_logo_blue_02 1.svg" alt="">'+
                  '<div class="table-simple-unit tab-col-1">RSI</div>'+
                  '<div class="table-simple-unit tab-col-2" id="ticker' + index + '_TF1_RSI_base_disp">10</div>'+
                  '<div class="table-simple-unit tab-col-3" id="ticker' + index + '_TF1_RSI_value_disp">777</div>'+
                  '<div class="table-simple-unit tab-col-4" id="ticker' + index + '_TF2_RSI_base_disp">10</div>'+
                  '<div class="table-simple-unit tab-col-5" id="ticker' + index + '_TF2_RSI_value_disp">777</div>'+
                  '<div class="table-simple-unit tab-col-6" id="ticker' + index + '_TF3_RSI_base_disp">10</div>'+
                  '<div class="table-simple-unit tab-col-7" id="ticker' + index + '_TF3_RSI_value_disp">777</div>'+
              '</div>'+

              '<div class="tab-simple-line tab-row">'+
                  '<img class="settings-tab-gear ticker' + index + '" src="static/app1/img/Settings_logo_blue_02 1.svg" alt="">'+
                  '<div class="table-simple-unit tab-col-1">VOL.SMA</div>'+
                  '<div class="table-simple-unit tab-col-2" id="ticker' + index + '_TF1_VOLSMA_base_disp">10</div>'+
                  '<div class="table-simple-unit tab-col-3" id="ticker' + index + '_TF1_VOLSMA_value_disp">777</div>'+
                  '<div class="table-simple-unit tab-col-4" id="ticker' + index + '_TF2_VOLSMA_base_disp">10</div>'+
                  '<div class="table-simple-unit tab-col-5" id="ticker' + index + '_TF2_VOLSMA_value_disp">777</div>'+
                  '<div class="table-simple-unit tab-col-6" id="ticker' + index + '_TF3_VOLSMA_base_disp">10</div>'+
                  '<div class="table-simple-unit tab-col-7" id="ticker' + index + '_TF3_VOLSMA_value_disp">777</div>'+
              '</div>'+

              '<div class="tab-simple-line tab-row" style="margin-bottom: 50px">'+
                  '<img class="settings-tab-gear ticker' + index + '" src="static/app1/img/Settings_logo_blue_02 1.svg" alt="">'+
                  '<div class="table-simple-unit tab-col-1">VOL.SMA.Δ</div>'+
                  '<div class="table-simple-unit tab-col-2">-</div>'+
                  '<div class="table-simple-unit tab-col-3" id="ticker' + index + '_TF1_VOLSMAD_value_disp">555</div>'+
                  '<div class="table-simple-unit tab-col-4">-</div>'+
                  '<div class="table-simple-unit tab-col-5" id="ticker' + index + '_TF2_VOLSMAD_value_disp">555</div>'+
                  '<div class="table-simple-unit tab-col-6">-</div>'+
                  '<div class="table-simple-unit tab-col-7" id="ticker' + index + '_TF3_VOLSMAD_value_disp">555</div>'+
              '</div>')

    })

        var elements = document.querySelectorAll(".settings-tab-gear");
        for (var i = 0; i < elements.length; i++) {
            elements[i].onclick = function (e) {
                popUp2.classList.add('active');
                let name_str = e.target.className
                console.log(name_str);
                let name = name_str.split(' ')[1];
                console.log(name);
                pop_up2_title.innerHTML = 'Ticker "' + tickers_with_TFs_and_periods[name] + '" Settings';

                set_data_to_settings_window(name);
                popUp2.setAttribute('name', name);
            };
        };

        $("#pop-up2-close").click(function(e) {
            //e.preventDefault()
            popUp2.classList.remove('active');
            console.log('close2');
        })
}

function SMAo_calc(klines, base) {
    let dict_len = Object.keys(klines).length;
    //console.log('kline dict length', dict_len, 'base is', base);
    let sum = 0;
    for(let i = 0; i < base; i++){
        //console.log('dict_len-1 - i', dict_len-1 - i);
        //console.log('klines[dict_len-1 - i]', klines[dict_len-1 - i]);
        sum = sum + parseFloat(klines[dict_len-1 - i]['o']);
    }
    console.log('SMAo is: ' , sum / base);
    return sum / base;
}

function SMAoD_calc(klines, base) {

    let dict_len = Object.keys(klines).length;
    let curr_price = parseFloat(klines[dict_len-1]['c']);
    let sma = SMAo_calc(klines, base);
    console.log('curr_price', curr_price);
    console.log('SMAc_calc(klines, base)', sma);
    console.log('curr_price - sma', curr_price - sma);
    console.log('calculated', (curr_price - sma)/curr_price * 100);
    return (curr_price - sma)/curr_price * 100;

}

function SMAc_calc(klines, base) {
    let dict_len = Object.keys(klines).length;
    //console.log('kline dict length', dict_len, 'base is', base);
    let sum = 0;
    for(let i = 0; i < base; i++){
        sum = sum + parseFloat(klines[dict_len-1 - i]['c']);
    }
    console.log('SMAc is: ' , sum / base);
    return sum / base;
}

function SMAcD_calc(klines, base) {
    let dict_len = Object.keys(klines).length;
    let curr_price = parseFloat(klines[dict_len-1]['c']);
    let sma = SMAc_calc(klines, base);
    console.log('curr_price', curr_price);
    console.log('SMAc_calc(klines, base)', sma);
    console.log('curr_price - sma', curr_price - sma);
    console.log('calculated', (curr_price - sma)/curr_price * 100);
    return (curr_price - sma)/curr_price * 100;
}

function CCI_calc(klines, base) {
    let dict_len = Object.keys(klines).length;
    let typ_price = [];
    let typ_price_sum = 0;
    let typ_price_average = 0;
    for(let i = 0; i < base; i++){
        typ_price[i] = (parseFloat(klines[dict_len-1 - i]['h']) + parseFloat(klines[dict_len-1 - i]['l']) + parseFloat(klines[dict_len-1 - i]['c']))/3;
        typ_price_sum = typ_price_sum + typ_price[i]
    }
    typ_price_average = typ_price_sum / base;
    let mean_dev =0;
    for(let i = 0; i < base; i++){
        mean_dev = mean_dev + (Math.abs(typ_price_average - typ_price[i]) / base);
        //console.log('typ_price[i]', typ_price[i]);
    }
    console.log('typ_price[0]', typ_price[0]);
    console.log('typ_price_average', typ_price_average);
    console.log('mean_dev', mean_dev);
    return (typ_price[0] - typ_price_average) / (0.015 * mean_dev);
}

function RSI_calc(klines, base) {
    let dict_len = Object.keys(klines).length;
    let U_sum = 0;
    let D_sum = 0;
    for(let i = 0; i < base; i++){
        if((parseFloat(klines[dict_len-1 - i]['c']) - parseFloat(klines[dict_len-1 - i]['o'])) > 0) {
            U_sum = U_sum + parseFloat(klines[dict_len-1 - i]['c']) - parseFloat(klines[dict_len-1 - i]['o']);
        }
        else if ((parseFloat(klines[dict_len-1 - i]['c']) - parseFloat(klines[dict_len-1 - i]['o'])) < 0){
            D_sum = D_sum + Math.abs(parseFloat(klines[dict_len-1 - i]['c']) - parseFloat(klines[dict_len-1 - i]['o']));
        }
    }
    return 100 - (100 / (1 + (U_sum / D_sum)));
}

function VOLSMA_calc(klines, base) {
    let dict_len = Object.keys(klines).length;
    //console.log('kline dict length', dict_len, 'base is', base);
    let sum = 0;
    for(let i = 0; i < base; i++){
        sum = sum + parseFloat(klines[dict_len-1 - i]['v']);
    }
    console.log('VOLSMA is: ', sum / base);
    return sum / base;
}

function VOLSMAD_calc(klines, base) {
    let dict_len = Object.keys(klines).length;
    let curr_price = parseFloat(klines[dict_len-1]['v']);
    let sma = VOLSMA_calc(klines, base);
    console.log('curr_VOLUME', curr_price);
    console.log('VOLSMA_calc(klines, base)', sma);
    console.log('curr_VOLUME - sma', curr_price - sma);
    console.log('calculated', (curr_price - sma)/curr_price * 100);
    return (curr_price - sma)/curr_price * 100;
}

function set_element_background_color(elem, bottom_value, top_value) {
    let value = parseFloat(elem.innerHTML);
    console.log('elem.value = ', value);
    let delta = top_value - bottom_value;
    let part = delta / 8;

    if(value <= bottom_value){elem.setAttribute("style", 'background-color: #e6583a;')}
    else if (value > bottom_value && value <= bottom_value + part){elem.setAttribute("style", 'background-color: #f79055;')}
    else if (value > bottom_value + part && value <= bottom_value + part * 2){elem.setAttribute("style", 'background-color: #fdb66c;')}
    else if (value > bottom_value + part * 2 && value <= bottom_value + part * 3){elem.setAttribute("style", 'background-color: #fdd989;')}
    else if (value > bottom_value + part * 3 && value <= bottom_value + part * 4){elem.setAttribute("style", 'background-color: #f8f7ad;')}
    else if (value > bottom_value + part * 4 && value <= bottom_value + part * 5){elem.setAttribute("style", 'background-color: #ceea88;')}
    else if (value > bottom_value + part * 5 && value <= bottom_value + part * 6){elem.setAttribute("style", 'background-color: #90cf6b;')}
    else if (value > bottom_value + part * 6 && value <= bottom_value + part * 7){elem.setAttribute("style", 'background-color: #4daf5b;')}
    else if (value > bottom_value + part * 7){elem.setAttribute("style", 'background-color: #23964f;')}
}

function set_data_to_settings_window(name) {

    let select = document.querySelector('#tickerS_TF1').getElementsByTagName('option');
    for (let i = 0; i < select.length; i++) {
        if (select[i].value === tickers_with_TFs_and_periods[name + '_TF1']) select[i].selected = true;
    }

    select = document.querySelector('#tickerS_TF2').getElementsByTagName('option');
    for (let i = 0; i < select.length; i++) {
        if (select[i].value === tickers_with_TFs_and_periods[name + '_TF2']) select[i].selected = true;
    }

    select = document.querySelector('#tickerS_TF3').getElementsByTagName('option');
    for (let i = 0; i < select.length; i++) {
        if (select[i].value === tickers_with_TFs_and_periods[name + '_TF3']) select[i].selected = true;
    }


    select = document.querySelector('#tickerS_TF1_SMAo_base_set').getElementsByTagName('option');
    for (let i = 0; i < select.length; i++) {
        if (select[i].value === tickers_with_TFs_and_periods[name + '_TF1_SMAo_base_disp']) select[i].selected = true;
    }

    select = document.querySelector('#tickerS_TF2_SMAo_base_set').getElementsByTagName('option');
    for (let i = 0; i < select.length; i++) {
        if (select[i].value === tickers_with_TFs_and_periods[name + '_TF2_SMAo_base_disp']) select[i].selected = true;
    }

    select = document.querySelector('#tickerS_TF3_SMAo_base_set').getElementsByTagName('option');
    for (let i = 0; i < select.length; i++) {
        if (select[i].value === tickers_with_TFs_and_periods[name + '_TF3_SMAo_base_disp']) select[i].selected = true;
    }


    select = document.querySelector('#tickerS_TF1_SMAc_base_set').getElementsByTagName('option');
    for (let i = 0; i < select.length; i++) {
        if (select[i].value === tickers_with_TFs_and_periods[name + '_TF1_SMAc_base_disp']) select[i].selected = true;
    }

    select = document.querySelector('#tickerS_TF2_SMAc_base_set').getElementsByTagName('option');
    for (let i = 0; i < select.length; i++) {
        if (select[i].value === tickers_with_TFs_and_periods[name + '_TF2_SMAc_base_disp']) select[i].selected = true;
    }

    select = document.querySelector('#tickerS_TF3_SMAc_base_set').getElementsByTagName('option');
    for (let i = 0; i < select.length; i++) {
        if (select[i].value === tickers_with_TFs_and_periods[name + '_TF3_SMAc_base_disp']) select[i].selected = true;
    }


    select = document.querySelector('#tickerS_TF1_CCI_base_set').getElementsByTagName('option');
    for (let i = 0; i < select.length; i++) {
        if (select[i].value === tickers_with_TFs_and_periods[name + '_TF1_CCI_base_disp']) select[i].selected = true;
    }

    select = document.querySelector('#tickerS_TF2_CCI_base_set').getElementsByTagName('option');
    for (let i = 0; i < select.length; i++) {
        if (select[i].value === tickers_with_TFs_and_periods[name + '_TF2_CCI_base_disp']) select[i].selected = true;
    }

    select = document.querySelector('#tickerS_TF3_CCI_base_set').getElementsByTagName('option');
    for (let i = 0; i < select.length; i++) {
        if (select[i].value === tickers_with_TFs_and_periods[name + '_TF3_CCI_base_disp']) select[i].selected = true;
    }


    select = document.querySelector('#tickerS_TF1_RSI_base_set').getElementsByTagName('option');
    for (let i = 0; i < select.length; i++) {
        if (select[i].value === tickers_with_TFs_and_periods[name + '_TF1_RSI_base_disp']) select[i].selected = true;
    }

    select = document.querySelector('#tickerS_TF2_RSI_base_set').getElementsByTagName('option');
    for (let i = 0; i < select.length; i++) {
        if (select[i].value === tickers_with_TFs_and_periods[name + '_TF2_RSI_base_disp']) select[i].selected = true;
    }

    select = document.querySelector('#tickerS_TF3_RSI_base_set').getElementsByTagName('option');
    for (let i = 0; i < select.length; i++) {
        if (select[i].value === tickers_with_TFs_and_periods[name + '_TF3_RSI_base_disp']) select[i].selected = true;
    }


    select = document.querySelector('#tickerS_TF1_VOLSMA_base_set').getElementsByTagName('option');
    for (let i = 0; i < select.length; i++) {
        if (select[i].value === tickers_with_TFs_and_periods[name + '_TF1_VOLSMA_base_disp']) select[i].selected = true;
    }

    select = document.querySelector('#tickerS_TF2_VOLSMA_base_set').getElementsByTagName('option');
    for (let i = 0; i < select.length; i++) {
        if (select[i].value === tickers_with_TFs_and_periods[name + '_TF2_VOLSMA_base_disp']) select[i].selected = true;
    }

    select = document.querySelector('#tickerS_TF3_VOLSMA_base_set').getElementsByTagName('option');
    for (let i = 0; i < select.length; i++) {
        if (select[i].value === tickers_with_TFs_and_periods[name + '_TF3_VOLSMA_base_disp']) select[i].selected = true;
    }
}

function put_changed_data_to_dict() {
    let name = popUp2.getAttribute('name');

    let select = document.getElementById('tickerS_TF1');
    tickers_with_TFs_and_periods[name + '_TF1'] = select.value;
    select = document.getElementById('tickerS_TF2');
    tickers_with_TFs_and_periods[name + '_TF2'] = select.value;
    select = document.getElementById('tickerS_TF3');
    tickers_with_TFs_and_periods[name + '_TF3'] = select.value;

    select = document.getElementById('tickerS_TF1_SMAo_base_set');
    tickers_with_TFs_and_periods[name + '_TF1_SMAo_base_disp'] = select.value;
    select = document.getElementById('tickerS_TF2_SMAo_base_set');
    tickers_with_TFs_and_periods[name + '_TF2_SMAo_base_disp'] = select.value;
    select = document.getElementById('tickerS_TF3_SMAo_base_set');
    tickers_with_TFs_and_periods[name + '_TF3_SMAo_base_disp'] = select.value;

    select = document.getElementById('tickerS_TF1_SMAc_base_set');
    tickers_with_TFs_and_periods[name + '_TF1_SMAc_base_disp'] = select.value;
    select = document.getElementById('tickerS_TF2_SMAc_base_set');
    tickers_with_TFs_and_periods[name + '_TF2_SMAc_base_disp'] = select.value;
    select = document.getElementById('tickerS_TF3_SMAc_base_set');
    tickers_with_TFs_and_periods[name + '_TF3_SMAc_base_disp'] = select.value;

    select = document.getElementById('tickerS_TF1_CCI_base_set');
    tickers_with_TFs_and_periods[name + '_TF1_CCI_base_disp'] = select.value;
    select = document.getElementById('tickerS_TF2_CCI_base_set');
    tickers_with_TFs_and_periods[name + '_TF2_CCI_base_disp'] = select.value;
    select = document.getElementById('tickerS_TF3_CCI_base_set');
    tickers_with_TFs_and_periods[name + '_TF3_CCI_base_disp'] = select.value;

    select = document.getElementById('tickerS_TF1_RSI_base_set');
    tickers_with_TFs_and_periods[name + '_TF1_RSI_base_disp'] = select.value;
    select = document.getElementById('tickerS_TF2_RSI_base_set');
    tickers_with_TFs_and_periods[name + '_TF2_RSI_base_disp'] = select.value;
    select = document.getElementById('tickerS_TF3_RSI_base_set');
    tickers_with_TFs_and_periods[name + '_TF3_RSI_base_disp'] = select.value;

    select = document.getElementById('tickerS_TF1_VOLSMA_base_set');
    tickers_with_TFs_and_periods[name + '_TF1_VOLSMA_base_disp'] = select.value;
    select = document.getElementById('tickerS_TF2_VOLSMA_base_set');
    tickers_with_TFs_and_periods[name + '_TF2_VOLSMA_base_disp'] = select.value;
    select = document.getElementById('tickerS_TF3_VOLSMA_base_set');
    tickers_with_TFs_and_periods[name + '_TF3_VOLSMA_base_disp'] = select.value;
}

function set_TFs_and_bases_data_to_tables() {
    let tick_arr = ticker_list.split(',');
    tick_arr.forEach((tick, index) => {

        let TF1_div_id = 'ticker' + index + '_TF1';
        let TF2_div_id = 'ticker' + index + '_TF2';
        let TF3_div_id = 'ticker' + index + '_TF3';

        let TF1_div = document.getElementById(TF1_div_id);
        let TF2_div = document.getElementById(TF2_div_id);
        let TF3_div = document.getElementById(TF3_div_id);

        TF1_div.innerHTML = tickers_with_TFs_and_periods[TF1_div_id];
        TF2_div.innerHTML = tickers_with_TFs_and_periods[TF2_div_id];
        TF3_div.innerHTML = tickers_with_TFs_and_periods[TF3_div_id];

    })

    tick_arr.forEach((tick, index) => {

        let TF1_SMAo_div_id = 'ticker' + index + '_TF1_SMAo_base_disp';
        let TF2_SMAo_div_id = 'ticker' + index + '_TF2_SMAo_base_disp';
        let TF3_SMAo_div_id = 'ticker' + index + '_TF3_SMAo_base_disp';

        let TF1_div = document.getElementById(TF1_SMAo_div_id);
        let TF2_div = document.getElementById(TF2_SMAo_div_id);
        let TF3_div = document.getElementById(TF3_SMAo_div_id);

        TF1_div.innerHTML = tickers_with_TFs_and_periods[TF1_SMAo_div_id];
        TF2_div.innerHTML = tickers_with_TFs_and_periods[TF2_SMAo_div_id];
        TF3_div.innerHTML = tickers_with_TFs_and_periods[TF3_SMAo_div_id];

    })

    tick_arr.forEach((tick, index) => {

        let TF1_SMAc_div_id = 'ticker' + index + '_TF1_SMAc_base_disp';
        let TF2_SMAc_div_id = 'ticker' + index + '_TF2_SMAc_base_disp';
        let TF3_SMAc_div_id = 'ticker' + index + '_TF3_SMAc_base_disp';

        let TF1_div = document.getElementById(TF1_SMAc_div_id);
        let TF2_div = document.getElementById(TF2_SMAc_div_id);
        let TF3_div = document.getElementById(TF3_SMAc_div_id);

        TF1_div.innerHTML = tickers_with_TFs_and_periods[TF1_SMAc_div_id];
        TF2_div.innerHTML = tickers_with_TFs_and_periods[TF2_SMAc_div_id];
        TF3_div.innerHTML = tickers_with_TFs_and_periods[TF3_SMAc_div_id];

    })

    tick_arr.forEach((tick, index) => {

        let TF1_CCI_div_id = 'ticker' + index + '_TF1_CCI_base_disp';
        let TF2_CCI_div_id = 'ticker' + index + '_TF2_CCI_base_disp';
        let TF3_CCI_div_id = 'ticker' + index + '_TF3_CCI_base_disp';

        let TF1_div = document.getElementById(TF1_CCI_div_id);
        let TF2_div = document.getElementById(TF2_CCI_div_id);
        let TF3_div = document.getElementById(TF3_CCI_div_id);

        TF1_div.innerHTML = tickers_with_TFs_and_periods[TF1_CCI_div_id];
        TF2_div.innerHTML = tickers_with_TFs_and_periods[TF2_CCI_div_id];
        TF3_div.innerHTML = tickers_with_TFs_and_periods[TF3_CCI_div_id];

    })

    tick_arr.forEach((tick, index) => {

        let TF1_RSI_div_id = 'ticker' + index + '_TF1_RSI_base_disp';
        let TF2_RSI_div_id = 'ticker' + index + '_TF2_RSI_base_disp';
        let TF3_RSI_div_id = 'ticker' + index + '_TF3_RSI_base_disp';

        let TF1_div = document.getElementById(TF1_RSI_div_id);
        let TF2_div = document.getElementById(TF2_RSI_div_id);
        let TF3_div = document.getElementById(TF3_RSI_div_id);

        TF1_div.innerHTML = tickers_with_TFs_and_periods[TF1_RSI_div_id];
        TF2_div.innerHTML = tickers_with_TFs_and_periods[TF2_RSI_div_id];
        TF3_div.innerHTML = tickers_with_TFs_and_periods[TF3_RSI_div_id];

    })

    tick_arr.forEach((tick, index) => {

        let TF1_VOLSMA_div_id = 'ticker' + index + '_TF1_VOLSMA_base_disp';
        let TF2_VOLSMA_div_id = 'ticker' + index + '_TF2_VOLSMA_base_disp';
        let TF3_VOLSMA_div_id = 'ticker' + index + '_TF3_VOLSMA_base_disp';

        let TF1_div = document.getElementById(TF1_VOLSMA_div_id);
        let TF2_div = document.getElementById(TF2_VOLSMA_div_id);
        let TF3_div = document.getElementById(TF3_VOLSMA_div_id);

        TF1_div.innerHTML = tickers_with_TFs_and_periods[TF1_VOLSMA_div_id];
        TF2_div.innerHTML = tickers_with_TFs_and_periods[TF2_VOLSMA_div_id];
        TF3_div.innerHTML = tickers_with_TFs_and_periods[TF3_VOLSMA_div_id];

    })

}

function set_indicators_data_to_tables() {
    let tick_arr = ticker_list.split(',');
    tick_arr.forEach((tick, index) => {
        let kline_TF1_key = tickers_with_TFs_and_periods['ticker' + index + '_TF1'];
        let kline_TF2_key = tickers_with_TFs_and_periods['ticker' + index + '_TF2'];
        let kline_TF3_key = tickers_with_TFs_and_periods['ticker' + index + '_TF3'];

        let kline_TF1_dict = main_dict_json[tick][kline_TF1_key];
        let kline_TF2_dict = main_dict_json[tick][kline_TF2_key];
        let kline_TF3_dict = main_dict_json[tick][kline_TF3_key];

        console.log(tick, kline_TF1_key, ': ');
        console.log(kline_TF1_dict);
        console.log(tick, kline_TF2_key, ': ');
        console.log(kline_TF2_dict);
        console.log(tick, kline_TF3_key, ': ');
        console.log(kline_TF3_dict);

        let key = 'ticker' + index + '_TF1_SMAo_base_disp';
        console.log('key is: ', key);
        console.log('tickers_with_TFs_and_periods[key]', tickers_with_TFs_and_periods['ticker' + index + '_TF1_SMAo_base_disp'])

        let TF1_SMAo = SMAo_calc(kline_TF1_dict, parseInt(tickers_with_TFs_and_periods['ticker' + index + '_TF1_SMAo_base_disp']));
        let TF1_SMAoD = SMAoD_calc(kline_TF1_dict, parseInt(tickers_with_TFs_and_periods['ticker' + index + '_TF1_SMAo_base_disp']));
        let TF1_SMAc = SMAc_calc(kline_TF1_dict, parseInt(tickers_with_TFs_and_periods['ticker' + index + '_TF1_SMAc_base_disp']));
        let TF1_SMAcD = SMAcD_calc(kline_TF1_dict, parseInt(tickers_with_TFs_and_periods['ticker' + index + '_TF1_SMAc_base_disp']));
        let TF1_CCI = CCI_calc(kline_TF1_dict, parseInt(tickers_with_TFs_and_periods['ticker' + index + '_TF1_CCI_base_disp']));
        let TF1_RSI = RSI_calc(kline_TF1_dict, parseInt(tickers_with_TFs_and_periods['ticker' + index + '_TF1_RSI_base_disp']));
        let TF1_VOLSMA = VOLSMA_calc(kline_TF1_dict, parseInt(tickers_with_TFs_and_periods['ticker' + index + '_TF1_VOLSMA_base_disp']));
        let TF1_VOLSMAD = VOLSMAD_calc(kline_TF1_dict, parseInt(tickers_with_TFs_and_periods['ticker' + index + '_TF1_VOLSMA_base_disp']));

        let TF2_SMAo = SMAo_calc(kline_TF2_dict, parseInt(tickers_with_TFs_and_periods['ticker' + index + '_TF2_SMAo_base_disp']));
        let TF2_SMAoD = SMAoD_calc(kline_TF2_dict, parseInt(tickers_with_TFs_and_periods['ticker' + index + '_TF2_SMAo_base_disp']));
        let TF2_SMAc = SMAc_calc(kline_TF2_dict, parseInt(tickers_with_TFs_and_periods['ticker' + index + '_TF2_SMAc_base_disp']));
        let TF2_SMAcD = SMAcD_calc(kline_TF2_dict, parseInt(tickers_with_TFs_and_periods['ticker' + index + '_TF2_SMAc_base_disp']));
        let TF2_CCI = CCI_calc(kline_TF2_dict, parseInt(tickers_with_TFs_and_periods['ticker' + index + '_TF2_CCI_base_disp']));
        let TF2_RSI = RSI_calc(kline_TF2_dict, parseInt(tickers_with_TFs_and_periods['ticker' + index + '_TF2_RSI_base_disp']));
        let TF2_VOLSMA = VOLSMA_calc(kline_TF2_dict, parseInt(tickers_with_TFs_and_periods['ticker' + index + '_TF2_VOLSMA_base_disp']));
        let TF2_VOLSMAD = VOLSMAD_calc(kline_TF2_dict, parseInt(tickers_with_TFs_and_periods['ticker' + index + '_TF2_VOLSMA_base_disp']));

        let TF3_SMAo = SMAo_calc(kline_TF3_dict, parseInt(tickers_with_TFs_and_periods['ticker' + index + '_TF3_SMAo_base_disp']));
        let TF3_SMAoD = SMAoD_calc(kline_TF3_dict, parseInt(tickers_with_TFs_and_periods['ticker' + index + '_TF3_SMAo_base_disp']));
        let TF3_SMAc = SMAc_calc(kline_TF3_dict, parseInt(tickers_with_TFs_and_periods['ticker' + index + '_TF3_SMAc_base_disp']));
        let TF3_SMAcD = SMAcD_calc(kline_TF3_dict, parseInt(tickers_with_TFs_and_periods['ticker' + index + '_TF3_SMAc_base_disp']));
        let TF3_CCI = CCI_calc(kline_TF3_dict, parseInt(tickers_with_TFs_and_periods['ticker' + index + '_TF3_CCI_base_disp']));
        let TF3_RSI = RSI_calc(kline_TF3_dict, parseInt(tickers_with_TFs_and_periods['ticker' + index + '_TF3_RSI_base_disp']));
        let TF3_VOLSMA = VOLSMA_calc(kline_TF3_dict, parseInt(tickers_with_TFs_and_periods['ticker' + index + '_TF3_VOLSMA_base_disp']));
        let TF3_VOLSMAD = VOLSMAD_calc(kline_TF3_dict, parseInt(tickers_with_TFs_and_periods['ticker' + index + '_TF3_VOLSMA_base_disp']));

        console.log('TF1_SMAo', TF1_SMAo);
        console.log('TF2_SMAo', TF2_SMAo);
        console.log('TF3_SMAo', TF3_SMAo);

        let elem = document.getElementById('ticker' + index + '_TF1_SMAo_value_disp');
        elem.innerHTML = TF1_SMAo.toPrecision(5);

        elem = document.getElementById('ticker' + index + '_TF2_SMAo_value_disp');
        elem.innerHTML = TF2_SMAo.toPrecision(5);

        elem = document.getElementById('ticker' + index + '_TF3_SMAo_value_disp');
        elem.innerHTML = TF3_SMAo.toPrecision(5);

        elem = document.getElementById('ticker' + index + '_TF1_SMAoD_value_disp');
        elem.innerHTML = TF1_SMAoD.toPrecision(3);
        set_element_background_color(elem, -2, 2);

        elem = document.getElementById('ticker' + index + '_TF2_SMAoD_value_disp');
        elem.innerHTML = TF2_SMAoD.toPrecision(3);
        set_element_background_color(elem, -2, 2);

        elem = document.getElementById('ticker' + index + '_TF3_SMAoD_value_disp');
        elem.innerHTML = TF3_SMAoD.toPrecision(3);
        set_element_background_color(elem, -2, 2);


        elem = document.getElementById('ticker' + index + '_TF1_SMAc_value_disp');
        elem.innerHTML = TF1_SMAc.toPrecision(5);

        elem = document.getElementById('ticker' + index + '_TF2_SMAc_value_disp');
        elem.innerHTML = TF2_SMAc.toPrecision(5);

        elem = document.getElementById('ticker' + index + '_TF3_SMAc_value_disp');
        elem.innerHTML = TF3_SMAc.toPrecision(5);


        elem = document.getElementById('ticker' + index + '_TF1_SMAcD_value_disp');
        elem.innerHTML = TF1_SMAcD.toPrecision(3);
        set_element_background_color(elem, -2, 2);

        elem = document.getElementById('ticker' + index + '_TF2_SMAcD_value_disp');
        elem.innerHTML = TF2_SMAcD.toPrecision(3);
        set_element_background_color(elem, -2, 2);

        elem = document.getElementById('ticker' + index + '_TF3_SMAcD_value_disp');
        elem.innerHTML = TF3_SMAcD.toPrecision(3);
        set_element_background_color(elem, -2, 2);


        elem = document.getElementById('ticker' + index + '_TF1_CCI_value_disp');
        elem.innerHTML = TF1_CCI.toPrecision(4);
        set_element_background_color(elem, -200, 200);

        elem = document.getElementById('ticker' + index + '_TF2_CCI_value_disp');
        elem.innerHTML = TF2_CCI.toPrecision(4);
        set_element_background_color(elem, -200, 200);

        elem = document.getElementById('ticker' + index + '_TF3_CCI_value_disp');
        elem.innerHTML = TF3_CCI.toPrecision(4);
        set_element_background_color(elem, -200, 200);


        elem = document.getElementById('ticker' + index + '_TF1_RSI_value_disp');
        elem.innerHTML = TF1_RSI.toPrecision(4);
        set_element_background_color(elem, 20, 80);

        elem = document.getElementById('ticker' + index + '_TF2_RSI_value_disp');
        elem.innerHTML = TF2_RSI.toPrecision(4);
        set_element_background_color(elem, 20, 80);

        elem = document.getElementById('ticker' + index + '_TF3_RSI_value_disp');
        elem.innerHTML = TF3_RSI.toPrecision(4);
        set_element_background_color(elem, 20, 80);


        elem = document.getElementById('ticker' + index + '_TF1_VOLSMA_value_disp');
        elem.innerHTML = TF1_VOLSMA.toPrecision(4);
        elem = document.getElementById('ticker' + index + '_TF2_VOLSMA_value_disp');
        elem.innerHTML = TF2_VOLSMA.toPrecision(4);
        elem = document.getElementById('ticker' + index + '_TF3_VOLSMA_value_disp');
        elem.innerHTML = TF3_VOLSMA.toPrecision(4);

        elem = document.getElementById('ticker' + index + '_TF1_VOLSMAD_value_disp');
        elem.innerHTML = TF1_VOLSMAD.toPrecision(4);
        set_element_background_color(elem, -500, 500);

        elem = document.getElementById('ticker' + index + '_TF2_VOLSMAD_value_disp');
        elem.innerHTML = TF2_VOLSMAD.toPrecision(4);
        set_element_background_color(elem, -500, 500);

        elem = document.getElementById('ticker' + index + '_TF3_VOLSMAD_value_disp');
        elem.innerHTML = TF3_VOLSMAD.toPrecision(4);
        set_element_background_color(elem, -500, 500);

    });
}

apply_settings_btn.addEventListener('click', () => {

    console.log('apply_button_clicked_2');
    popUp2.classList.remove('active');
    clearInterval(timerID);

    put_changed_data_to_dict();

    timerID = setInterval(get_data_from_server_interval, 20000, tickers_with_TFs_and_periods);

})