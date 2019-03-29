$(document).ready(function(){
  $("form#calculator").submit(function(event){
    var firstInput = parseInt($("#input1").val());
    var secondInput = parseInt($("#input2").val());
    var thirdInput = parseInt($("#input3").val());


    if(firstInput === secondInput && secondInput === thirdInput ) {
      //console.log("hi");
      $("#Equal").show();

    } else if (firstInput === secondInput || secondInput === thirdInput || firstInput === thirdInput){
      //console.log("hi");
      $("#Isos").show();

    } else if ((firstInput + secondInput <= thirdInput) || (firstInput + thirdInput <= secondInput) ||       (secondInput + thirdInput <= firstInput)) {
      //console.log("hi");
      $("#NotTri").show();


    } else if ((firstInput + secondInput > thirdInput) || (firstInput + thirdInput > secondInput) ||         (secondInput + thirdInput > firstInput)){
      console.log("hi");
      $("#Scal").show();


    }

    event.preventDefault();
  });
});
