'use strict'

const User = use('App/Models/User');

class AccountController {
  async register({request, response}) {
    const user = await User.create(request.post());
    response.header('Content-type', 'application/json')
    response.type('application/json')
    return response.json(user)
  }
}

module.exports = AccountController
