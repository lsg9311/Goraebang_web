Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  root 'main#index'
  get 'entering' => 'entering#sign_in'
  get 'entering/sign_up' => 'entering#sign_up'
end
