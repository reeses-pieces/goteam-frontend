class SportsController < ApplicationController

  before_action :set_sports

  def index
    @uniq_sports = @sports.uniq { |sport| sport["category"] }
  end

  def show
    @sport = SportsHelper.get(params["id"])
    @stat = StatsHelper.get(params["id"], current_user['id'])
  end

  def get_type
    # Hit route from Sports Index view
    if request.xhr?
      # All matches for sport category
      @game_types = @sports.select { |sport| sport["category"] == params[:sport][:category]}
      render json: @game_types
    end
  end

  private

  def set_sports
    @sports = SportsHelper.list
  end
end
