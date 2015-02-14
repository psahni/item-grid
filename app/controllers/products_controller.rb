class ProductsController < ApplicationController


	def index
		@products = Product.page(params[:page])		
		respond_to do |format|
			format.js{
				sleep 0.5                   # => JUST TO SHOW LOADER. THIS LINE IS NOT NEEDED
			}
			format.html{}
		end
	end

	def show
		product = Product.find(params[:id])
		sleep 0.5                   # => JUST TO SHOW LOADER. THIS LINE IS NOT NEEDED
		respond_to do |format|
			format.json{ 		
				render :json => product.to_json
			}
		end
	end
end
