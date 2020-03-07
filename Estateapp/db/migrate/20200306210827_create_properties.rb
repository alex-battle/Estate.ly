class CreateProperties < ActiveRecord::Migration[6.0]
  def change
    create_table :properties do |t|
      t.integer :propertyId
      t.string :address
      t.string :propertyType
      t.integer :rooms
      t.integer :bathrooms
      t.integer :rentAmount
      t.string :rentedTo
      t.integer :purchasePrice
      t.string :soldTo
      t.boolean :availability
      t.string :photo

      t.timestamps
    end
  end
end
