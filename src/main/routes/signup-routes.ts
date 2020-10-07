import { Router } from 'express'

export default (router: Router): void => {
  router.post('/signup', async (req,res) => {
    res.json({ ok: true })
  })
}
