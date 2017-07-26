$(document).ready(function(){
  var total = 0;

  var grocery = [];  

  var $userFood = $("#foodType"); 
  var $quantity = $("#foodNum");
  var $price = $("#foodPrice"); 
  var $newList = $("#listItems");
  var $printTotal = $("#finalTotal");

function calc(){
  return $price.val() * $quantity.val();
}

function getTotal(){
 total += Number(calc());
 console.log(total);
  // return total;
}

$('button').on('click', function(){

    var $item = $("<li></li>")
    $newList.append($item);
    $item.append($userFood.val() + ": $" + $price.val() + "  (x" + $quantity.val() + ") || $" + calc());
    getTotal(); 
    $printTotal.text("$"+total);
});          

console.log(total);




    







  

}); // end .ready() method
