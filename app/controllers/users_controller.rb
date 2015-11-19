class UsersController < ApplicationController

  def new
    @user = User.new
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

  def update
    @user = current_user
      if @user.update(user_params)
        render json: {message: "User updated", status: 200}
      else
        render json: @user.errors.full_messages, status: :unprocessable_entity
      end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
