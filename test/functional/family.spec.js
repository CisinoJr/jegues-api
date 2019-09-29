const { test, trait } = use('Test/Suite')('AccountController Testing')

trait('Test/ApiClient')

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Family = use('App/Models/Family')

test('It should register a family', async ({ assert, client }) => {
  const family = {
    name: 'Gomes',
    icon_url: 'https://www.gravatar.com/avatar/f40260c4058cc904b7db652c26099966'
  }

  await Factory.model('App/Models/Family').create(family);

  const response = await client.post('/family').send(family).end();

  response.assertStatus(200)
  assert.exists(response.body)
})
