import express from 'express'
const router = express.Router()
import {
  createTourDate,
  listTourDates,
  listTourDateDetails,
  deleteTourDate,
  updateTourDate,
} from '../controllers/tourController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').post(protect, admin, createTourDate).get(listTourDates)

router
  .route('/:id')
  .get(listTourDateDetails)
  .delete(deleteTourDate, protect, admin)
  .put(updateTourDate, protect, admin)

export default router
