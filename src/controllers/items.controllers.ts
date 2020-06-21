import Knex from '../database/connection'
import {Request, Response} from 'express'

class ItemsController {
  async index(request: Request, response: Response) {
    const items = await Knex('items').select('*')
    const mappingItems = items.map(item => {
      return {
        title: item.title,
        image_url: `http://localhost:3333/uploads/${item.image}`
      }
    })
    return response.json(mappingItems)
  }
}
export default ItemsController