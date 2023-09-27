class GreetingsController < ApplicationController
  def random_greeting
    render json: { greeting: Greeting.all.sample.content }
  end
end
