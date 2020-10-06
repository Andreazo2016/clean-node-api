import { Request,Response,NextFunction } from 'express'
export const cors = (request: Request,response: Response,next: NextFunction): void => {
  response.set('access-contrtol-allow-origin','*')
  response.set('access-contrtol-allow-methods','*')
  response.set('access-contrtol-allow-headers','*')
  next()
}
