class Agent < ApplicationRecord
    belongs_to :admin
    has_many :properties
end
