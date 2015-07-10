get "/add_new_product" do
  erb :"products/add_product_form"
end

get "/add_product_confirm" do
  @new_product = Product.add(params["product"])
  erb :"home"
end

get "/see_all_products" do
  erb :"products/see_all_products"
end

get "/delete_product_form" do
  erb :"products/delete_product_form"
end

get "/delete_product_confirm" do
  @deleted_product = Product.find(params["product"]["id"])
  @deleted_product.delete
  erb :"home"
end

get "/modify_product_form1" do
  erb :"products/modify_product_form1"
end

get "/modify_product_form2" do
  @product = Product.find(params["product"]["id"])
  erb :"products/modify_product_form2"
end