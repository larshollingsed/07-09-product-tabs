require_relative "../database_instance_methods.rb"
require_relative "../database_methods.rb"

class Product
  extend DatabaseClassMethods
  include DatabaseInstanceMethods
  
  attr_accessor :id, :product_name, :where_to_buy, :technical_specs, :general_info
  
  def initialize(args={})
    @id = args["id"]
    @product_name = args["product_name"]
    @technical_specs = args["technical_specs"]
    @where_to_buy = args["where_to_buy"]
    @general_info = args["general_info"]
  end
end