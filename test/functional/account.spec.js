const { test, trait } = use('Test/Suite')('AccountController Testing')

trait('Test/ApiClient')

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User')

test('It should register a user', async ({ assert, client }) => {
  const user = {
    username: 'cisino',
    fullname: 'Cisino da Silva Gomes Junior',
    email: 'cisinojr@icloud.com',
    password: `teste`,
  };

  const response = await client.post('/register').send(user).end();

  response.assertStatus(200)
  assert.exists(response.body)
})
