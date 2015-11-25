class UsersController < ApplicationController

  def new
    @user = User.new
    @tags = Tag.all
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      redirect_to root_url
    else
      @tags = Tag.all
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def index
  u_params = params[:user]
    if u_params && user_params[:destination_id]
      @users = Destination.find(user_params[:destination_id]).users
    end
  end

   def show
    if user_params && user_params[:showUserById]
      @user = User.find(user_params[:showUserById])
    end
   end

  def update
    @user = current_user
      if @user.update(user_params)
        render json: {responseJSON: "User updated", status: 200}
      else
        render json: @user.errors.full_messages, status: :unprocessable_entity
      end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :bio, :showUserById, :picture_url, :destination_id, tag_ids: [])
  end

end
