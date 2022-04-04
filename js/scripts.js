$(document).ready(function () {
  $("form#quiz").submit(function (event) {
    event.preventDefault();
    const type1 = $("input:radio[name=type1]:checked").val();
    const type2 = $("input:radio[name=type2]:checked").val();
    const type3 = $("input:radio[name=type3]:checked").val();
    const type4 = $("input:radio[name=type4]:checked").val();
    const type5 = $("input:radio[name=type5]:checked").val();
    if (type1 == "qs1answer1" && (type2 == "qs2answer1" || type2 == "qs2answer2") && type3 === "qs3answer2" && type4 === "qs4answer1" && type5 === "qs5answer1") {
      $(".JavaScript").show();
      $(".Python").hide();
      $(".Swift").hide();
      $(".Wrong").hide();
    } else if (type1 == "qs1answer2" && type2 === "qs2answer1" && type3 === "qs3answer1" && type4 === "qs4answer2" && type5 === "qs5answer2") {
      $(".Python").show();
      $(".Swift").hide();
      $(".JavaScript").hide();
      $(".Wrong").hide();
    } else if (type1 == "qs1answer1" && type2 === "qs2answer1" && type3 === "qs3answer1" && type4 === "qs4answer1" && type5 === "qs5answer2") {
      $(".Swift").show();
      $(".Python").hide();
      $(".JavaScript").hide();
      $(".Wrong").hide();
    } else {
      $(".Wrong").show();
      $(".JavaScript").hide();
      $(".Python").hide();
      $(".Swift").hide();
    }
  });
});
