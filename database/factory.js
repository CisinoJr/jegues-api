'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

Factory.blueprint('App/Models/Family', (faker) => {
  return {
    name: faker.name(),
    icon_url: faker.avatar({protocol: 'https'})
  }
})

Factory.blueprint('App/Models/User', (faker, i, data = {}) => {
  return {
    username: faker.name(),
    fullname: faker.name(),
    email: faker.email(),
    password: faker.string(),
    ...data
  }
})
