class Api::DestinationsController < ApplicationController
  def create
  end

  def index
    @destinations = Destination.all
  end

  def show
  end

  def update
  end
end
