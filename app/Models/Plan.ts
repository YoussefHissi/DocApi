import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import Privilege from 'App/Models/Privilege'

export default class Role extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public rolename: string

  @manyToMany(() => Privilege, {
    pivotTable: 'role_privileges',
  })
  public privileges: ManyToMany<typeof Privilege>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
