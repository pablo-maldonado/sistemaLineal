$( ".result" ).hide();
$( "#submit" ).click(function() {
  main();
});

function main() {
  //set variables
  var operator_one = $( "select#one").val();
  var operator_two = $( "select#two").val();
  var x1 = $("input[type=number][name=mult_x_one]").val();
  var x2 = $("input[type=number][name=mult_x_two]").val();
  var y1 = $("input[type=number][name=mult_y_one]").val();
  if (operator_one == '-') {
    y1 = -y1;
  }
  var y2 = $("input[type=number][name=mult_y_two]").val();
  if (operator_two == '-') {
    y2 = -y2;
  }
  var r1 = $("input[type=number][name=result_one]").val();
  var r2 = $("input[type=number][name=result_two]").val();;
  var x, y;

  //new values equation_one
  negative_x2 = -x2;
  var new_x1 = x1*negative_x2;
  var new_y1 = y1*negative_x2;
  var new_r1 = r1*negative_x2;

  //new values equation_two
  var new_x2 = x2*x1;
  var new_y2 = y2*x1;
  var new_r2 = r2*x1;

  y = value_y(new_y1, new_y2, new_r1, new_r2, operator_one);
  x = value_x(new_x1, new_y1, new_r1, operator_one, y);

  //show result
  $( ".result" ).show();
  console.log(x);
  if (isNaN(x)) {
    $( "#result" ).html("Son iguales");
  } else {
    $( "#result" ).html("( " + x + ", " + y + ")");
  }
  // value_x(new_x1, new_y1, new_r1, operator_one, y)
};

//Result value of y
function value_y(new_y1, new_y2, new_r1, new_r2, operator_one) {
  var result_y, r_total;
  if (operator_one = '+') {
    result_y = new_y1 + new_y2;
  } else {
    result_y = new_y1 - new_y2;
  }
  r_total = (new_r1) + (new_r2);
  if (r_total == 0 && result_y == 0) {
    y = 0;
  } else if (r_total == 0) {
    y = undefined;
  } else {
    y = r_total / result_y;
  }
  return y;
}

//Result value of x
function value_x(new_x1, new_y1, new_r1, operator_one, y) {
  var result_y = new_y1 * y;
  if (result_y == -0) {
    result_y = 0;
  }
  var r_total = (new_r1) - (result_y);
  x = r_total / new_x1;
  return x;
}
