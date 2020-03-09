class CreateAgents < ActiveRecord::Migration[6.0]
  def change
    create_table :agents do |t|
      t.integer :agentId
      t.string :name
      t.string :email
      t.string :phoneNumber
      t.string :website
      t.integer :propertyId

      t.timestamps
    end
  end
end
