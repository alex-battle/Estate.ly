class AuthenticationController < ApplicationController
    before_action :authorize_request, except: :login

  # POST /auth/login
  def login
    @admin = Admin.find_by_username(params[:username])
    if @admin.authenticate(params[:password]) #authenticate method provided by Bcrypt and 'has_secure_password'
      token = encode(admin_id: @admin.id, username: @admin.username)
      render json: { admin: @admin, token: token }, status: :ok
    else
      render json: { error: 'unauthorized' }, status: :unauthorized
    end
  end
  
  # GET /auth/verify
  def verify
    render json: @current_admin, status: :ok
  end


  private

  def login_params
    params.permit(:username, :password)
  end
end
