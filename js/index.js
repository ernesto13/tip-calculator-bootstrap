$(document).ready(function() {
    $("#btnCal").click(function() {
        $(".fad").fadeIn(2000);
        /*
                $(document).ready(function() {

                    $('input').focus(function() {

                        $(this).css('outline-color', '#FF0000');

                    });



                });*/
        var total = parseFloat(document.getElementById("tot").value);

        var tip = parseFloat(document.getElementById("percent").value) * 0.01;
        var partyGuest = parseFloat(document.getElementById("guest").value);

        var totalTip = total * tip;
        var totalBill = total + totalTip;
        var totalguest = (total + totalTip) / partyGuest;

        if (isNaN(total) || total === "") { //for total
            document.getElementById("totalOutPut").innerHTML = "Please input bill amount";
        } else {
            document.getElementById("totalOutPut").innerHTML = "Total Bill Amount" + "<br> $" + parseFloat(totalBill).toFixed(2);


        }

        if (isNaN(tip) || tip === "") { //for tip
            document.getElementById("party").innerHTML = "You forgot the tip";
        } else {
            document.getElementById("percentage").innerHTML = "Total Tip" + "<br> $" + parseFloat(totalTip).toFixed(2);
        }


        if (partyGuest >= 1) { //for the number of guests
            document.getElementById("party").innerHTML = "Each Guest Owes" + "<br> $" + parseFloat(totalguest).toFixed(2);
        } else if (isNaN(partyGuest)) {
            document.getElementById("party").innerHTML = "";
        } else(document.getElementById("party").innerHTML = "Looks like it's your treat");




        $(".container").animate({

            height: 550

        }, 700);


    });


});



$("#btnClear").click(function() {

    document.getElementById("totalOutPut").innerHTML = "";
    document.getElementById("percentage").innerHTML = "";
    document.getElementById("party").innerHTML = "";
    $(".fad").fadeOut(3000);
    document.getElementById("tot").value = ""; //clears input boxes
    document.getElementById("percent").value = "";
    document.getElementById("guest").value = "";

    //});

    $(".container").animate({

        height: 325

    }, 700);

});