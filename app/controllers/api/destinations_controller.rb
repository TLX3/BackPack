class Api::DestinationsController < ApplicationController
  def create
  end

  def index
    if params[:query].present?
      @destinations = Destination.where("name ~ ?", params[:query])
    else
      @destinations = Destination.none
    end
  end

  def search
    if params[:query].present?
      @destinations = Destination.where("name ~ ?", params[:query])
    else
      @destinations = Destination.none
    end
    render :index
  end

  def show
  end

  def update
  end
end
