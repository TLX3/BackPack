class Api::DestinationsController < ApplicationController
  def create
  end

  def index
    query = params[:query]
      if query.present?
        if query[:searchText]
          @destinations = Destination.where("name ~ ?", query[:searchText])
        elsif query[:getCurrentUserJoinedDestinations]
          @destinations = current_user.destinations
        end
    else
      @destinations = Destination.all
    end
  end

  def show
  end

  def update
  end
end
