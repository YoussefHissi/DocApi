import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import Privilege from './Privilege'

export default class Role extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public rolename: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(() => Privilege, {
    pivotTable: 'role_privileges',
  })
  public privileges: ManyToMany<typeof Privilege>
}