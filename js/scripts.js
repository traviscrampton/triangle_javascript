var triangle = function(side1, side2, side3) {
  if ((side1 + side2 > side3) && (side3 + side1 > side2) && (side2 + side3 > side1)) {
    if ((side1 === side2) && (side2 === side3)) {
      return "equilateral";
    } else if ((side1 === side2) || (side1 === side3) || (side2 === side3)) {
      return "isosceles";
    } else {
      return "scalene";
    }
  } else {
    return false;
  }
};


$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());
    var result = triangle(side1, side2, side3);

    if (result) {
      $(".triangle-type").text(result)
    } else if (!result) {
      $(".not").text("do not");
    }

    $("#result").show();
    event.preventDefault();
  });
});
