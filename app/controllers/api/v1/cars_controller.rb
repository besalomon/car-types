class Api::V1::CarsController < ApplicationController

  def index
    @cars = Car.all
  end
  def show
    @car = Car.find_by(id:params[:id])
  end

  def create
    @car = Car.create(name: params[:name], model: params[:model], manufacturer: params[:manufacturer]
      )
    render json: @car
  end

  def update
    @car = Car.find_by(id:params[:id])
    @car.update(name: params[:name], model: params[:model], manufacturer: params[:manufacturer]
      )
    render :show

  end

  def destroy
    @car = Car.find_by(id:params[:id])
    @car.destroy
  end
end
