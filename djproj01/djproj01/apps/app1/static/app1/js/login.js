$("#check_name_btn").click(function(){
  $.ajax({
    type: "GET",
    url: "check_user_name",
    data: {
        'user_name': $("#user_name_input").val(),
    },
    dataType: "text",
    cache: false,
    success: function (data) {
        if (data == "ok") {
            console.log('OK')
            var x = document.getElementById("check_label")
            x.innerHTML = "OK"
            return false;
        } else if (data == "no") {
            console.log('NO')
            var x = document.getElementById("check_label")
            x.innerHTML = "NO"
            return true;
        }
    }
});
})