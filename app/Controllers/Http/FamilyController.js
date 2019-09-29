'use strict'

const Family = use('App/Models/Family');

class FamilyController {
  async register({request, response}) {
    const family = await Family.create(request.post());
    response.header('Content-type', 'application/json')
    response.type('application/json')
    return response.json(family)
  }

}

module.exports = FamilyController
