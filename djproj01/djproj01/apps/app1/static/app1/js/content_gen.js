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
                  '<div class="table-simple-unit tab-col-3" id="ticker' + index + '_TF1_CC0_value_disp">777</div>'+
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
    console.log('kline dict length', Object.keys(klines).length);
}

function SMAoD_calc(klines, base) {

}

function SMAc_calc(klines, base) {

}

function SMAcD_calc(klines, base) {

}

function CCI_calc(klines, base) {

}

function RSI_calc(klines, base) {

}

function VOLSMA_calc(klines, base) {

}

function VOLSMAD_calc(klines, base) {

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

        let TF1_SMAo = SMAo_calc(kline_TF1_dict, parseInt(tickers_with_TFs_and_periods[kline_TF1_key + 'SMAo_base_disp']));
        let TF1_SMAc = SMAc_calc(kline_TF1_dict, parseInt(tickers_with_TFs_and_periods[kline_TF1_key + 'SMAc_base_disp']);
        let TF1_CCI = CCI_calc(kline_TF1_dict, parseInt(tickers_with_TFs_and_periods[kline_TF1_key + 'CCI_base_disp']));
        let TF1_RSI = RSI_calc(kline_TF1_dict, parseInt(tickers_with_TFs_and_periods[kline_TF1_key + 'RSI_base_disp']));
        let TF1_VOLSMA = VOLSMA_calc(kline_TF1_dict, parseInt(tickers_with_TFs_and_periods[kline_TF1_key + 'VOLSMA_base_disp']));

        let TF2_SMAo = SMAo_calc(kline_TF2_dict, parseInt(tickers_with_TFs_and_periods[kline_TF2_key + 'SMAo_base_disp']));
        let TF2_SMAc = SMAc_calc(kline_TF2_dict, parseInt(tickers_with_TFs_and_periods[kline_TF2_key + 'SMAc_base_disp']));
        let TF2_CCI = CCI_calc(kline_TF2_dict, parseInt(tickers_with_TFs_and_periods[kline_TF2_key + 'CCI_base_disp']));
        let TF2_RSI = RSI_calc(kline_TF2_dict, parseInt(tickers_with_TFs_and_periods[kline_TF2_key + 'RSI_base_disp']));
        let TF2_VOLSMA = VOLSMA_calc(kline_TF2_dict, parseInt(tickers_with_TFs_and_periods[kline_TF2_key + 'VOLSMA_base_disp']));

        let TF3_SMAo = SMAo_calc(kline_TF3_dict, parseInt(tickers_with_TFs_and_periods[kline_TF3_key + 'SMAo_base_disp']));
        let TF3_SMAc = SMAc_calc(kline_TF3_dict, parseInt(tickers_with_TFs_and_periods[kline_TF3_key + 'SMAc_base_disp']));
        let TF3_CCI = CCI_calc(kline_TF3_dict, parseInt(tickers_with_TFs_and_periods[kline_TF3_key + 'CCI_base_disp']));
        let TF3_RSI = RSI_calc(kline_TF3_dict, parseInt(tickers_with_TFs_and_periods[kline_TF3_key + 'RSI_base_disp']));
        let TF3_VOLSMA = VOLSMA_calc(kline_TF3_dict, parseInt(tickers_with_TFs_and_periods[kline_TF3_key + 'VOLSMA_base_disp']));

        document.getElementById(kline_TF1_key + '_SMAo_value_disp').innerHTML = '';
        document.getElementById(kline_TF2_key + '_SMAo_value_disp').innerHTML = '';
        document.getElementById(kline_TF3_key + '_SMAo_value_disp').innerHTML = '';

        document.getElementById(kline_TF1_key + '_SMAc_value_disp').innerHTML = '';
        document.getElementById(kline_TF2_key + '_SMAc_value_disp').innerHTML = '';
        document.getElementById(kline_TF3_key + '_SMAc_value_disp').innerHTML = '';

        document.getElementById(kline_TF1_key + '_CCI_value_disp').innerHTML = '';
        document.getElementById(kline_TF2_key + '_CCI_value_disp').innerHTML = '';
        document.getElementById(kline_TF3_key + '_CCI_value_disp').innerHTML = '';

        document.getElementById(kline_TF1_key + '_RSI_value_disp').innerHTML = '';
        document.getElementById(kline_TF2_key + '_RSI_value_disp').innerHTML = '';
        document.getElementById(kline_TF3_key + '_RSI_value_disp').innerHTML = '';

        document.getElementById(kline_TF1_key + '_VOLSMA_value_disp').innerHTML = '';
        document.getElementById(kline_TF2_key + '_VOLSMA_value_disp').innerHTML = '';
        document.getElementById(kline_TF3_key + '_VOLSMA_value_disp').innerHTML = '';

    });
}

apply_settings_btn.addEventListener('click', () => {

    console.log('apply_button_clicked_2');
    popUp2.classList.remove('active');
    clearInterval(timerID);

    put_changed_data_to_dict();

    timerID = setInterval(get_data_from_server_interval, 20000, tickers_with_TFs_and_periods);

})