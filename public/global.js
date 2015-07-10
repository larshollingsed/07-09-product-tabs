for (counter = 0; counter < document.getElementsByClassName("general_tab").length; counter++) {
  document.getElementsByClassName("general_tab")[counter].onclick = show_product_general_info;  
}


function show_product_general_info() {
  this.parentNode.parentNode.childNodes[3].childNodes[1].className = "content_template";
    this.parentNode.parentNode.childNodes[3].childNodes[3].className = "content_template hidden";
  this.parentNode.parentNode.childNodes[3].childNodes[5].className = "content_template hidden";
}

for (counter = 0; counter < document.getElementsByClassName("tech_tab").length; counter++) {
  document.getElementsByClassName("tech_tab")[counter].onclick = show_product_technical_specs;  
}


function show_product_technical_specs() {
  this.parentNode.parentNode.childNodes[3].childNodes[1].className = "content_template hidden";
  this.parentNode.parentNode.childNodes[3].childNodes[3].className = "content_template";
  this.parentNode.parentNode.childNodes[3].childNodes[5].className = "content_template hidden";
}

for (counter = 0; counter < document.getElementsByClassName("buy_tab").length; counter++) {
  document.getElementsByClassName("buy_tab")[counter].onclick = show_product_where_to_buy;  
}

function show_product_where_to_buy() {
  this.parentNode.parentNode.childNodes[3].childNodes[1].className = "content_template hidden";
  this.parentNode.parentNode.childNodes[3].childNodes[3].className = "content_template hidden";
  this.parentNode.parentNode.childNodes[3].childNodes[5].className = "content_template";
}



// var number_of_products = 5;
// var gen_info;
// var tech_specs;
// var where;
// for (counter = 1; counter < number_of_products; counter++) {
//   gen_info = "product" + counter + "general_info";
//   tech_specs = "product" + counter + "technical_specs";
//   where = "product" + counter + "where_to_buy";
//
//   document.getElementById("product1general_info_tab").onclick = show_product1_general_info;
//   var function_name = "show_product" + counter + "_general_info"
//
//   function function_name() {
//     document.getElementById(gen_info).className = "content_template";
//     document.getElementById(tech_specs).className = "content_template hidden";
//     document.getElementById(where).className = "content_template hidden"
//   }
// }