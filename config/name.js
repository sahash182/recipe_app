var PersonArr = [];
var displayFunction = function() {
    var myStr = "";
    for (i = 0; i < PersonArr.length; i++) {
        myStr = "<p data-phonevalue=" + PersonArr[i].phone + ">" + "Name: <br>" + PersonArr[i].name + "<br> Email: <br>" + PersonArr[i].email + "<br>Phone: <br>" + PersonArr[i].phone + "<button class='del'>delete   person</button>" + "</p>";
    }
    $(".result").append(myStr);
};

$(".submit").on("click", function() {
    var newObj = {
        name: $('.name').val(),
        email: $('.email').val(),
        phone: $('.phone').val()
    };
    PersonArr.push(newObj);
    //$(".result").html("");
    displayFunction();
});
$('.result').on("click", "button", function() {
    var phoneValue = $(this).parent().data("phonevalue");
    var index = -1;
    for (i = 0; i < PersonArr.length; i++) {
        if (phoneValue == PersonArr[i].phone) {
            index = i;
            break;
        }
    }
    PersonArr.splice(index, 1);
    $(".result").html("");

    console.log(PersonArr);
    displayFunction();


});

  // Full Name:<br>
  // <input type="text" class="name" name="Full Name"><br>
  // Email:<br>
  // <input type="text" class="email" name="Email"><br>
  // Phone:<br>
  //  <input type="Integer" class="phone" name="Phone"><br>
  //  <button class="submit">submit</button>
  //  <div class="result"></div>