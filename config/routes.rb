Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/city/:name', to: 'city_weather#current'
  get '/city/:name/:count', to: 'city_weather#n_days_weather'
end
