   var userData = JSON.parse(localStorage.getItem("todo"));
        var today = $("#currentDay");
        var save = $(".saveBtn");
        var time = moment().format("LL");
        today.text(time);

        // console.log(localData);
$(".time-slot").each(function(){
        var currentHour = moment().hours();
        console.log(currentHour); 
        var blockHour = parseInt($(this).attr("data-hour"));
        console.log(blockHour);     

        if (blockHour < currentHour) {
            $(this).addClass("past");
        }
        else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        else{
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
})
        

        
        function firstShow() {
            var userData = JSON.parse(localStorage.getItem("toDo"));
            if (userData === null) {
                return;
            } else {
            var firstnine = $("#nine"); 
            var firstTen = $("#ten");
            var firstElev = $("#elev");
            var firstTwelve = $("#twelve");
            var firstOne = $("#one");
            var firstTwo = $("#two");
            var firstThree = $("#three");
            var firstFour = $("#four");
            var firstfive = $("#five");
            firstnine.text(userData[0].nine);
            firstTen.text(userData[0].ten);
            firstElev.text(userData[0].elev);
            firstTwelve.text(userData[0].twelve);
            firstOne.text(userData[0].one);
            firstTwo.text(userData[0].two);
            firstThree.text(userData[0].three);
            firstFour.text(userData[0].four);
            firstfive.text(userData[0].five);
            // console.log(userData[0].nine);
        }
        }

        

            save.on("click", function(){
                userData = JSON.parse(localStorage.getItem("todo")) || [];
            var save = $(".saveBtn");
            var nineAm = $("#nine").val().trim();
        var tenAm = $("#ten").val().trim();
        var elevAm = $("#elev").val().trim();
        var twelvePm = $("#twelve").val().trim();
        var onePm = $("#one").val().trim();
        var twoPm = $("#two").val().trim();
        var threePm = $("#three").val().trim();
        var fourPm = $("#four").val().trim();
        var fivePm = $("#five").val().trim();

            var list = {
            nine : nineAm,
            ten : tenAm,
            elev : elevAm,
            twelve : twelvePm,
            one : onePm,
            two : twoPm,
            three : threePm,
            four : fourPm,
            five : fivePm
            }
            userData.push(list);

            localStorage.setItem("toDo", JSON.stringify(userData));   

            })

        firstShow()