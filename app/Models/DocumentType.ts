import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class DocumentType extends BaseModel {
  @column({ isPrimary: true })
  public id_Doc_Type: number
  
  @column()
  public Doc_Type_Name: string
  @column()
  public Doc_Type_Description: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
