Rails.application.routes.draw do

  get 'images/index', to: 'images#index'

  root to: 'images#index'

end
