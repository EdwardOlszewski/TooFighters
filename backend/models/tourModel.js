import mongoose from 'mongoose'

const tourSchema = mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  venue: {
    type: String,
    required: true,
  },
  venueWebsite: {
    type: String,
    required: true,
  },
  fee: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
  },
})

const TourDate = mongoose.model('TourDate', tourSchema)
export default TourDate
