class Api::DestinationsController < ApplicationController

  def create
    join_destination = params[:joinDestination]
    if (join_destination)
      current_user.destination_ids = (current_user.destination_ids + [join_destination[:id]]).uniq
      render json: {responseJSON: "Destination joined", status: 200}
    else
      @destination = Destination.new(destination_params.merge({author_id: current_user.id}))
      if @destination.save
        current_user.destination_ids += [@destination.id]
        render json: {responseJSON: "Destination #{params[:name]} created", status: 200}
      else
        render json: @destination.errors.full_messages, status: :unprocessable_entity
      end
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
        elsif query[:getCurrentDestination]
          @destinations = Destination.where("id = ?", query[:getCurrentDestination])
        end
      else
        @destinations = Destination.all
      end
  end

  def show
    @destination = Destination.find(params[:id])
  end

  def update
  end

  private
  def destination_params
    params.require(:destination).permit(:title,:description,:location,:cost,:picture_url)
  end

end
