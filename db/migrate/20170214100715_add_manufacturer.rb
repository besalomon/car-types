class AddManufacturer < ActiveRecord::Migration[5.0]
  def change
    add_column :cars, :manufacturer, :text
  end
end
