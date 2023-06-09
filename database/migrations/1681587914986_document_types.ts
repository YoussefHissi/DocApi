import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'document_types'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_Doc_Type')
      table.string('Doc_Type_Name')
      table.string('Doc_Type_Description')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true }).nullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
