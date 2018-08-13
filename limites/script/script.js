$( ".result" ).hide();
$( "#submit_one" ).click(function() {
  main_limit_one();
});

$( "#submit_two" ).click(function() {
    main_limit_two();
  });

$( "#submit_three" ).click(function() {
   main_limit_three();
});

function main_limit_one() {
    var a = parseInt($("input[type=number][name=value_a]").val());
    var b = parseInt($("input[type=number][name=value_b]").val());
    var x = parseInt($("input[type=number][name=value_x_one]").val());

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
    var a_two = parseInt($("input[type=number][name=value_a_two]").val());
    var b_two = parseInt($("input[type=number][name=value_b_two]").val());
    var x = parseInt($("input[type=number][name=value_x_two]").val());

    //verifica que los input no esten vacios
    if (not_empty('limit-two')) {
        var limit = calculate_limit_two(a_one, b_one, a_two, b_two, x);
        if (limit == 0) {
            $( "#result" ).html("El límite no existe");
        } else {
            $( "#result" ).html("El límite de la función es " + limit);
        };
    };

    $( ".result" ).show();
};

function main_limit_three() {
    var a = parseInt($("input[type=number][name=value_a_three]").val());
    var b = parseInt($("input[type=number][name=value_b_three]").val());
    var x = parseInt($("input[type=number][name=value_x_three]").val());

    //verificar que los input no esten vacios
    if (not_empty('limit-three')) {
        var limit = calculate_limit_three(a, b, x);
        if(limit >= 0){
            $( "#result" ).html("El límite de la función es " + limit);
        }
    }; 
    //sustituir X por el valor de la variable x

    //mostrar el resultado
    $( ".result" ).show();
    
};

function calculate_limit_one(a, b, x) {
    return parseInt(a * x + b);
};

function calculate_limit_two(a_one, b_one, a_two, b_two, x) {
    var denominador = a_two * (x * x) - b_two;
    var limit = 0;
    if (denominador == 0) {
        $( "#result" ).html("El límite no existe");
    } else {
       var nominador = a_one * x + b_one;
       limit = nominador / denominador;
    }
    return limit;
};

function calculate_limit_three(a_three, b_three, x) {
    var limit = (a_three * x) - b_three;
    if (limit < 0) {
        $( "#result" ).html("El límite no existe");
    } else {
        limit = Math.sqrt(limit);
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