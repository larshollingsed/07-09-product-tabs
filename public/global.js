document.getElementById("product1general_info_tab").onclick = show_product1_general_info;

function show_product1_general_info() {
  document.getElementById("product1general_info").className = "content_template";
  document.getElementById("product1technical_specs").className = "content_template hidden";
  document.getElementById("product1where_to_buy").className = "content_template hidden";
}

document.getElementById("product1technical_specs_tab").onclick = show_product1_technical_specs;

function show_product1_technical_specs() {
  document.getElementById("product1general_info").className = "content_template hidden";
  document.getElementById("product1technical_specs").className = "content_template";
  document.getElementById("product1where_to_buy").className = "content_template hidden";
}

document.getElementById("product1where_to_buy_tab").onclick = show_product1_where_to_buy;

function show_product1_where_to_buy() {
  document.getElementById("product1general_info").className = "content_template hidden";
  document.getElementById("product1technical_specs").className = "content_template hidden";
  document.getElementById("product1where_to_buy").className = "content_template";
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