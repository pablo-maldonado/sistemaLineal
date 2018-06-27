$( ".result" ).hide();
$( "#submit" ).click(function() {
  main();
});

function main() {
  //set variables
  $( ".result" ).show();
  var point_x1 = $("input[type=number][name=point_x1]").val();
  var point_x2 = $("input[type=number][name=point_x2]").val();
  var point_y1 = $("input[type=number][name=point_y1]").val();
  var point_y2 = $("input[type=number][name=point_y2]").val();
  var slope, intersection_y;

  //calculate slope
  slope = (point_y2 - point_y1) / (point_x2 - point_x1);

  //calculate intersection for y
  intersection_y = point_y1 - (point_x1 * slope);

  //show explicita
  $( "#result" ).html("y = " + slope  + "x" + "+" + slope);
}
