const MARK = /^[1-9][0-9]$/;

$(document).ready(function () {
  $("span").hide();
  $("button").click(function () {
    // console.log("button click");
    var data1 = $("#x1").val();
    var data2 = $("#x2").val();
    var data3 = $("#x3").val();
    console.log(data1);
    console.log(data2);
    console.log(data3);

    data1=Number(data1);
    data2=Number(data2);
    data3=Number(data3);

    var result1 = MARK.test(data1);
    var result2 = MARK.test(data2);
    var result3 = MARK.test(data3);
    console.log(result1);
    console.log(result2);
    console.log(result3);
    
    if(result1<35){
        ($("#x1").next().fadeIn(1000))
    }
    if(result2<35){
        ($("#x2").next().fadeIn(1000))
    }
    if(result3<35){
        ($("#x3").next().fadeIn(1000))
    }
var total=data1+data2+data3
   console.log(total)
  
    (result1 && result2 && result3) ? $("button").after("<p>valid</p>") : "";
  });
});
