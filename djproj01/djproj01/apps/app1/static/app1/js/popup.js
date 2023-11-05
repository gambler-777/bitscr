const openPopUp = document.getElementById('btn-settings');
const closePopUp = document.getElementById('pop-up-close');
const popUp = document.getElementById('pop-up');
const loadList_btn = document.getElementById('load-list-btn');
const pop_up_title = document.getElementById('pop-up-title');
const pop_up2_title = document.getElementById('pop-up2-title');
const ticker_list_form = document.getElementById('ticker-list-form');
let start_observe_btn = document.createElement('button');
const pop_up_body = document.getElementById('pop-up-body');

    let enable_get_interval_data = true;
    let checkboxes_array = [];
    let ticker_labels_array = [];
    let ticker_list = "";
    let timerID;
    let main_dict_json = "";
    let tickers_with_TFs_and_periods = {};

// openPopUp.addEventListener('click', function (e) {
//     e.preventDefault();
//     popUp.classList.add('active');
//     console.log('got');
// })

function get_checked_list(chb, lab){
    let list = [];
    for(var i = 0; i<chb.length; i++){
        if(chb[i].checked){
            console.log(lab[i].innerText);
            list.push(lab[i].innerText);
        };
    };
    return list;
};

$("#btn-settings").click(function(e){
    //e.preventDefault()
    popUp.classList.add('active');
    console.log('got');

})

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active');
    console.log('close');
})

loadList_btn.addEventListener('click', () => {
    popUp.classList.add('active');
    console.log('load list');
    enable_get_interval_data = false;

        $.ajax({
        type: "GET",
        url: "../get_ticker_list",
        data: {
            'user_name': 'test',
        },
        dataType: "text",
        cache: false,
        success: function (data) {
            let tick_arr = data.split(",");
            // for (const char of data) {
            //     console.log(char);
            // }
            console.log(tick_arr);
            loadList_btn.remove();
            pop_up_title.innerHTML = 'Choose Tickers To Observe'

            //pop_up_body.style.paddingTop = '50px';
            for(const ticker of tick_arr){
                let label = document.createElement('label');
                let input = document.createElement('input');
                input.setAttribute('type', 'checkbox');
                input.setAttribute('name', 'ticker_checkbox');
                ticker_list_form.appendChild(label);
                label.innerText = ticker;
                label.appendChild(input);
                checkboxes_array.push(input);
                ticker_labels_array.push(label);
            }
            //let start_observe_btn = document.createElement('button');
            //start_observe_btn.type = 'button';

            ticker_list_form.appendChild(start_observe_btn);
            start_observe_btn.style.marginTop = '24px';
            start_observe_btn.innerHTML = 'OBSERVE';
            start_observe_btn.setAttribute('class', 'start_observe_btn');
            start_observe_btn.classList.add('classssssssss;')


            return true;
        }
    })
})

function get_stream_kline_data(tickers_with_TFs_and_periods){ //not using function
    console.log('interval!')
    $.ajax({
    type: "GET",
    url: "../get_stream_kline_data",
    data:  tickers_with_TFs_and_periods,
    dataType: "text",
    cache: false,
    success: function (data) {
        //console.log(data.replace(/'/g, '"'));
        console.log(data);
        return true;
    }
    })
}

function get_data_from_server_interval(tickers_with_TFs_and_periods){
    console.log("get_data_from_server_interval STARTING.....")
    console.log("tickers_with_TFs_and_periods (get_data_from_server_interval):", tickers_with_TFs_and_periods)
    $.ajax({
        type: "GET",
        url: "../observe_btn_clicked",
        data:  tickers_with_TFs_and_periods,
        dataType: "text",
        cache: false,
        success: function (data) {
            //console.log(data.replace(/'/g, '"'));
            main_dict_json = JSON.parse(data.replace(/'/g, '"'));
            console.log("MAIN_DICT_JSON (get_data_from_server_interval) :");
            console.log(main_dict_json);
            return true;
        }
    })

    set_TFs_and_bases_data_to_tables();
    if (main_dict_json) {
        set_indicators_data_to_tables()
    }

}

start_observe_btn.addEventListener('click', () => {

    console.log('button_clicked_2');

    clearInterval(timerID);
    main_dict_json = "";

    console.log("main_dict_json cleared.....");
    console.log("main_dict_json (start_observe_btn): ", main_dict_json);

    let ticker_list_array = get_checked_list(checkboxes_array, ticker_labels_array);
    ticker_list = ticker_list_array.join(',');
    console.log("ticker_list", ticker_list);
    tickers_with_TFs_and_periods = {};

    ticker_list_array.forEach((item, index) => {
        tickers_with_TFs_and_periods.ticker_qty = ticker_list_array.length;
        tickers_with_TFs_and_periods.ticker_list = ticker_list;

        key1 = "ticker" + index;
        tickers_with_TFs_and_periods[key1] = item;
        key2 = key1 + "_TF1";
        tickers_with_TFs_and_periods[key2] = "1h";
        key3 = key2 + "_SMAc_base_disp";
        tickers_with_TFs_and_periods[key3] = "14";
        key4 = key2 + "_SMAo_base_disp";
        tickers_with_TFs_and_periods[key4] = "15";
        key5 = key2 + "_CCI_base_disp";
        tickers_with_TFs_and_periods[key5] = "16";
        key6 = key2 + "_RSI_base_disp";
        tickers_with_TFs_and_periods[key6] = "17";
        key7 = key2 + "_VOLSMA_base_disp";
        tickers_with_TFs_and_periods[key7] = "18";

        key11 = "ticker" + index;
        tickers_with_TFs_and_periods[key11] = item;
        key12 = key11 + "_TF2";
        tickers_with_TFs_and_periods[key12] = "15m";
        key13 = key12 + "_SMAc_base_disp";
        tickers_with_TFs_and_periods[key13] = "20";
        key14 = key12 + "_SMAo_base_disp";
        tickers_with_TFs_and_periods[key14] = "21";
        key15 = key12 + "_CCI_base_disp";
        tickers_with_TFs_and_periods[key15] = "22";
        key16 = key12 + "_RSI_base_disp";
        tickers_with_TFs_and_periods[key16] = "23";
        key17 = key12 + "_VOLSMA_base_disp";
        tickers_with_TFs_and_periods[key17] = "24";

        key21 = "ticker" + index;
        tickers_with_TFs_and_periods[key21] = item;
        key22 = key21 + "_TF3";
        tickers_with_TFs_and_periods[key22] = "5m";
        key23 = key22 + "_SMAc_base_disp";
        tickers_with_TFs_and_periods[key23] = "25";
        key24 = key22 + "_SMAo_base_disp";
        tickers_with_TFs_and_periods[key24] = "26";
        key25 = key22 + "_CCI_base_disp";
        tickers_with_TFs_and_periods[key25] = "27";
        key26 = key22 + "_RSI_base_disp";
        tickers_with_TFs_and_periods[key26] = "28";
        key27 = key22 + "_VOLSMA_base_disp";
        tickers_with_TFs_and_periods[key27] = "29";

    });

    console.log("tickers_with_TFs_and_periods :");
    console.log(tickers_with_TFs_and_periods);
    create_chart(ticker_list_array);
    get_data_from_server_interval(tickers_with_TFs_and_periods);
    popUp.classList.remove('active');

    //let timerID = setInterval(get_stream_kline_data, 2000, tickers_with_TFs_and_periods)
    timerID = setInterval(get_data_from_server_interval, 20000, tickers_with_TFs_and_periods)

})

function content_gen(tickers) {

}