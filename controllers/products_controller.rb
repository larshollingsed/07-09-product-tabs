get "/add_new_product" do
  erb :"products/add_product_form"
end

get "/add_product_confirm" do
  @new_product = Product.add(params["product"])
  erb :"home"
end