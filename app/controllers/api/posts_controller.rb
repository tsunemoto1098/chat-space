class Api::PostsController < ApplicationController
  def index
    @group = Group.find(params[:group_id])
    @posts = @group.posts.includes(:user).where('id > ?', params[:last_id])
  end
end