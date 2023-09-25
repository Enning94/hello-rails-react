class GreetingsController < ApplicationController

    def index
    end

    def random_greeting
        render json: {greeting: Greeting.all.sample.content }
    end


end
