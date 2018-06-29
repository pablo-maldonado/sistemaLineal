$( ".result" ).hide();
$( "#submit_one" ).click(function() {
  main_limit_one();
});

$( "#submit_two" ).click(function() {
    main_limit_two();
  });

function main_limit_one() {
    var a = parseInt($("input[type=number][name=value_a]").val());
    var b = parseInt($("input[type=number][name=value_b]").val());
    var x = parseInt($("input[type=number][name=value_x]").val());

    //verificar que los input no esten vacios
    if (not_empty('limit-one')) {
        var limit = calculate_limit_one(a, b, x);
        $( "#result" ).html("El límite de la función es " + limit);
    }; 
    //sustituir X por el valor de la variable x

    //mostrar el resultado
    $( ".result" ).show();
    
};

function main_limit_two(){
    var a_one = parseInt($("input[type=number][name=value_a_one]").val());
    var b_one = parseInt($("input[type=number][name=value_b_one]").val());
    var x_one = parseInt($("input[type=number][name=value_x_one]").val());
    var a_two = parseInt($("input[type=number][name=value_a_two]").val());
    var b_two = parseInt($("input[type=number][name=value_b_two]").val());
    var x_two = parseInt($("input[type=number][name=value_x_two]").val());

    //verifica que los input no esten vacios
    if (not_empty('limit-two')) {
        var limit = calculate_limit_two(a_one, b_one, x_one, a_two, b_two, x_two);
        if (limit == 0) {
            $( "#result" ).html("El límite no existe");
        } else {
            $( "#result" ).html("El límite de la función es " + limit);
        };
    };

    $( ".result" ).show();
};

function calculate_limit_one(a, b, x) {
    return parseInt(a * x + b);
};

function calculate_limit_two(a_one, b_one, x_one, a_two, b_two, x_two) {
    var denominador = a_two * (x_two * x_two) - b_two;
    var limit = 0;
    if (denominador == 0) {
        $( "#result" ).html("El límite no existe");
    } else {
       var nominador = a_one * x_one + b_two;
       limit = nominador / denominador;
    }
    return limit;
};

function not_empty(_class){
    var matches = 0;
    var empty;
    $("input." + _class).each(function(i, val) {
      if ($(this).val() == '') {
        $(this).addClass("has-error");
        matches++;
      }else {
        $(this).removeClass("has-error");
      }
    });
    if (0 < matches && matches <= 6) {
        empty = false;
      $( "#result" ).html("Debe ingresar los valores faltantes");
    }else{
        empty = true;
    }
    return empty;
}