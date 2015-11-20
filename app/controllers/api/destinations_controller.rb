class Api::DestinationsController < ApplicationController

  def create
    @destination = Destination.new(destination_params.merge({author_id: current_user.id}))
    if @destination.save
      current_user.destination_ids += [@destination.id]
      render json: {responseJSON: "Destination #{params[:title]} created", status: 200}
    else
      render json: @destination.errors.full_messages, status: :unprocessable_entity
    end
  end

  def index
    query = params[:query]
    puts query
      if query.present?
        if query[:searchText]
          @destinations = Destination.where("lower(title) ~ ?", query[:searchText].downcase)
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

  private
  def destination_params
    params.require(:destination).permit(:title,:description,:location,:cost,:picture_url)
  end

end
