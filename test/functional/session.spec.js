const { test, trait } = use('Test/Suite')('Session');

trait('Test/ApiClient')

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User');

/** @type {typeof import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');

test('It should return JWT token when session created', async ({ assert, client }) => {
  const sessionPaylod = {
    email: 'cisinojr@icloud.com',
    password: 'teste'
  };

  const response = await client
    .post('/authenticate')
    .send(sessionPaylod)
    .end();

  response.assertStatus(200);
  assert.exists(response.body.token);
});
