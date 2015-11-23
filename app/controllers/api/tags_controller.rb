class Api::TagsController < ApplicationController

  def index
    query = params[:query]
       if query.present?
         if query[:getCurrentUserTags]
           @tags = Tag.joins(:user_taggings, :users).where("users.id = ?", current_user.id)
           @tags = current_user.tags
         elsif query[:fetchNone]
          @tags = Tag.none
         end
       else
         @tags = Tag.all
       end
  end

  def destroy
    @tag = Tag.find_by_name(params[:name])
    if @tag.present?
      new_tag_ids = current_user.tag_ids - [@tag.id]
      current_user.tag_ids = new_tag_ids
      render json: {responseJSON: "Tag #{params[:name]} removed", status: 200}
    else
      render json: {responseJSON: "Tag does not exist", status: :unprocessable_entity}
    end
  end
end
