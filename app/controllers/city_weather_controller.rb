class CityWeatherController < ApplicationController

	def current
		current_data = HTTParty.get URL+params[:name]+KEY
		if current_data.code == 200
				max_temp = current_data["main"]["temp_max"]
				min_temp = current_data["main"]["temp_min"]
				time =  Time.at(current_data["dt"]).asctime
				msg = { max_temp: max_temp, min_temp: min_temp, time: time }
				render json: msg	
		else
				return_400
		end
		      		
	end

	def n_days_weather
		current_data = HTTParty.get(URL_DAYS+params[:name]+COUNT+params[:count]+KEY)
			if current_data.code == 200
				result = []
				current_data["list"].each do |temp|
					result << [Time.at(temp["dt"]).day,temp["temp"]["max"]]
				end
				json_res = {"arr": result}
				render json: json_res
			else
				return_400
		end
				
	end

	private
	def return_400
		render json: {"message": "An error has occured while fetching weather data or invalid input was provided"}, status: 400
	end
end
