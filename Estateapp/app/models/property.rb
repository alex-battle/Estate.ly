class Property < ApplicationRecord
    belongs_to :agent, dependent: destroy
end
