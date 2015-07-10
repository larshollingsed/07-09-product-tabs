require_relative "../database_instance_methods.rb"
require_relative "../database_methods.rb"

class Product
  extend DatabaseClassMethods
  include DatabaseInstanceMethods
  
  def initialize(args={})
    @id = args["id"]
    @technical_specs = args["technical_specs"]
    @where_to_buy = args["where to buy"]
    @general_info = args["general_info"]
  end