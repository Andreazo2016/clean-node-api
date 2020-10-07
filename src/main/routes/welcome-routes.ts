import { Router } from 'express'

export default (router: Router): void => {
  router.get('/', async (req,res) => {
    res.json({ ok: true })
  })
}
