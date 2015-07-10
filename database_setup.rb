DB = SQLite3::Database.new("products.db")

DB.execute("CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY, product_name TEXT, general_info TEXT, technical_specs TEXT, where_to_buy TEXT);")

DB.results_as_hash = true