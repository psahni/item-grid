class ProductsController < ApplicationController


	def index
		@products = Product.all[0..11]
	end

	def show
		product = Product.find(params[:id])
		respond_to do |format|
			format.json{ 		
				render :json => product.to_json
			}
		end
	end
end
