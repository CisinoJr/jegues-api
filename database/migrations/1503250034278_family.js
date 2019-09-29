'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FamilySchema extends Schema {
  up () {
    this.create('families', (table) => {
      table.increments('id')
      table.string('name', 20).notNullable().unique()
      table.string('icon_url', 150)
      table.timestamps()
    })
  }

  down () {
    this.drop('families')
  }
}

module.exports = FamilySchema
