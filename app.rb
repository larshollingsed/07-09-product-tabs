require "sinatra"
require "sinatra/reloader"
require "pry"

require "sqlite3"
require_relative "database_setup.rb"

require_relative "models/products.rb"


require_relative "controllers/products_controller.rb"
