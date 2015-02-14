class ProductsController < ApplicationController


	def index
		@products = Product.page(params[:page]).per(Product::PER_PAGE)
		respond_to do |format|
			format.js{
				sleep 0.5                   # => JUST TO SHOW LOADER. THIS LINE IS NOT NEEDED
			}
			format.html{}
		end
	end

	def show
		product = Product.find(params[:id])
		respond_to do |format|
			format.json{ 		
				sleep 0.5                   # => JUST TO SHOW LOADER. THIS LINE IS NOT NEEDED
				render :json => product.to_json
			}
		end
	end

	def scroll
		if 	params[:offset].to_i
			sleep 1						# => JUST TO SHOW LOADER. THIS LINE IS NOT NEEDED
			@products = Product.limit(Product::PER_PAGE).offset(params[:offset].to_i)
			render :partial => 'products/product', :object => @products if request.xhr?
		end
	end

end

