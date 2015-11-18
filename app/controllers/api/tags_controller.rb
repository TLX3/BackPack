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
end
