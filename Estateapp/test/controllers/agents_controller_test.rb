require 'test_helper'

class AgentsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @agent = agents(:one)
  end

  test "should get index" do
    get agents_url, as: :json
    assert_response :success
  end

  test "should create agent" do
    assert_difference('Agent.count') do
      post agents_url, params: { agent: { agentId: @agent.agentId, email: @agent.email, phoneNumber: @agent.phoneNumber, propertyId: @agent.propertyId, website: @agent.website } }, as: :json
    end

    assert_response 201
  end

  test "should show agent" do
    get agent_url(@agent), as: :json
    assert_response :success
  end

  test "should update agent" do
    patch agent_url(@agent), params: { agent: { agentId: @agent.agentId, email: @agent.email, phoneNumber: @agent.phoneNumber, propertyId: @agent.propertyId, website: @agent.website } }, as: :json
    assert_response 200
  end

  test "should destroy agent" do
    assert_difference('Agent.count', -1) do
      delete agent_url(@agent), as: :json
    end

    assert_response 204
  end
end
