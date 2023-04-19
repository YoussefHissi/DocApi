import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class RolePrivileges extends BaseSchema {
  protected tableName = 'role_privileges'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('privilege_id').unsigned().references('privileges')
      table.integer('role_id').unsigned().references('roles')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true }).nullable()
      table.unique(['privilege_id', 'role_id'])
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
