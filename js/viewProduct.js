// Product Header
$("#productHeading02").hide();
$("#productHeading03").hide();
$("#productHeading04").hide();
$("#productHeading05").hide();
$("#productHeading06").hide();
$("#productHeading07").hide();
$("#productHeading08").hide();
$("#productHeading09").hide();
$("#productHeading10").hide();
$("#productHeading11").hide();

//Product Content
$("#productSelect").on('change', function () {
    if ($(this).val() == "1") {
        $("#productHeading01").show();
        $("#productHeading02").hide();
        $("#productHeading03").hide();
        $("#productHeading04").hide();
        $("#productHeading05").hide();
        $("#productHeading06").hide();
        $("#productHeading07").hide();
        $("#productHeading08").hide();
        $("#productHeading09").hide();
        $("#productHeading10").hide();
        $("#productHeading11").hide();
    }

    if ($(this).val() == "2") {
        $("#productHeading01").hide();
        $("#productHeading02").show();
        $("#productHeading03").hide();
        $("#productHeading04").hide();
        $("#productHeading05").hide();
        $("#productHeading06").hide();
        $("#productHeading07").hide();
        $("#productHeading08").hide();
        $("#productHeading09").hide();
        $("#productHeading10").hide();
        $("#productHeading11").hide();
        $(".profile").css({"background": "url('https://cdn.shopify.com/s/files/1/0777/7633/products/cp_hover_facecream_33bda464-5330-49aa-8961-82b6af892e66_grande.gif?v=1546644294') center 10%", "height":"100vh", "background-size":"cover"})
    }

    else if ($(this).val() == "3") {
        $("#productHeading01").hide();
        $("#productHeading02").hide();
        $("#productHeading03").show();
        $("#productHeading04").hide();
        $("#productHeading05").hide();
        $("#productHeading06").hide();
        $("#productHeading07").hide();
        $("#productHeading08").hide();
        $("#productHeading09").hide();
        $("#productHeading10").hide();
        $("#productHeading11").hide();
        $(".profile").css({"background": "url('https://ferbena.com/wp-content/uploads/2018/07/korean-beauty-cloudless-skin.gif') center 10%", "height":"100vh", "background-size":"cover"})
    }

    else if ($(this).val() == "4") {
        $("#productHeading01").hide();
        $("#productHeading02").hide();
        $("#productHeading03").hide();
        $("#productHeading04").show();
        $("#productHeading05").hide();
        $("#productHeading06").hide();
        $("#productHeading07").hide();
        $("#productHeading08").hide();
        $("#productHeading09").hide();
        $("#productHeading10").hide();
        $("#productHeading11").hide();
    }

    else if ($(this).val() == "5") {
        $("#productHeading01").hide();
        $("#productHeading02").hide();
        $("#productHeading03").hide();
        $("#productHeading04").hide();
        $("#productHeading05").show();
        $("#productHeading06").hide();
        $("#productHeading07").hide();
        $("#productHeading08").hide();
        $("#productHeading09").hide();
        $("#productHeading10").hide();
        $("#productHeading11").hide();
        $(".profile").css({"background": "url('https://cdn.shopify.com/s/files/1/0777/7633/products/cp_hover_facecream_33bda464-5330-49aa-8961-82b6af892e66_grande.gif?v=1546644294') center 10%", "height":"100vh", "background-size":"cover"})
    }

    else if ($(this).val() == "6") {
        $("#productHeading01").hide();
        $("#productHeading02").hide();
        $("#productHeading03").hide();
        $("#productHeading04").hide();
        $("#productHeading05").hide();
        $("#productHeading06").show();
        $("#productHeading07").hide();
        $("#productHeading08").hide();
        $("#productHeading09").hide();
        $("#productHeading10").hide();
        $("#productHeading11").hide();
    }

    else if ($(this).val() == "7") {
        $("#productHeading01").hide();
        $("#productHeading02").hide();
        $("#productHeading03").hide();
        $("#productHeading04").hide();
        $("#productHeading05").hide();
        $("#productHeading06").hide();
        $("#productHeading07").show();
        $("#productHeading08").hide();
        $("#productHeading09").hide();
        $("#productHeading10").hide();
        $("#productHeading11").hide();
    }

    else if ($(this).val() == "8") {
        $("#productHeading01").hide();
        $("#productHeading02").hide();
        $("#productHeading03").hide();
        $("#productHeading04").hide();
        $("#productHeading05").hide();
        $("#productHeading06").hide();
        $("#productHeading07").hide();
        $("#productHeading08").show();
        $("#productHeading09").hide();
        $("#productHeading10").hide();
        $("#productHeading11").hide();
    }

    else if ($(this).val() == "9") {
        $("#productHeading01").hide();
        $("#productHeading02").hide();
        $("#productHeading03").hide();
        $("#productHeading04").hide();
        $("#productHeading05").hide();
        $("#productHeading06").hide();
        $("#productHeading07").hide();
        $("#productHeading08").hide();
        $("#productHeading09").show();
        $("#productHeading10").hide();
        $("#productHeading11").hide();
    }

    else if ($(this).val() == "10") {
        $("#productHeading01").hide();
        $("#productHeading02").hide();
        $("#productHeading03").hide();
        $("#productHeading04").hide();
        $("#productHeading05").hide();
        $("#productHeading06").hide();
        $("#productHeading07").hide();
        $("#productHeading08").hide();
        $("#productHeading09").hide();
        $("#productHeading10").show();
        $("#productHeading11").hide();
    }

    else if ($(this).val() == "11") {
        $("#productHeading01").hide();
        $("#productHeading02").hide();
        $("#productHeading03").hide();
        $("#productHeading04").hide();
        $("#productHeading05").hide();
        $("#productHeading06").hide();
        $("#productHeading07").hide();
        $("#productHeading08").hide();
        $("#productHeading09").hide();
        $("#productHeading10").hide();
        $("#productHeading11").show();
    }
});