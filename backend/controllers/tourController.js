import asyncHandler from 'express-async-handler'
import TourDate from '../models/tourModel.js'

// @desc    Create a Tour date
// @route   POST /api/tour
// @access  Private/Admin
const createTourDate = asyncHandler(async (req, res) => {
  const tourDate = new TourDate({
    date: new Date(),
    time: '01:00',
    address: 'Example Address',
    city: 'Example City',
    state: 'IL',
    venue: 'Example Venue',
    venueWebsite: 'Example Venue Website',
    isActive: true,
    fee: 1.0,
  })
  const createdPost = await tourDate.save()
  res.status(201).json(createdPost)
})

// @desc    Fetch all tour dates
// @route   GET /api/tour
// @access  Public
const listTourDates = asyncHandler(async (req, res) => {
  const tourDates = await TourDate.find().sort({ date: -1 })
  res.json(tourDates)
})

// @desc    Fetch single tour date
// @route   GET /api/events/:id
// @access  Public
const listTourDateDetails = asyncHandler(async (req, res) => {
  const tourDate = await TourDate.findById(req.params.id)
  if (tourDate) {
    res.json(tourDate)
  } else {
    res.status(404)
    throw new Error('Tour date not found')
  }
})

// @desc    Delete a single tour date
// @route   DELETE /api/events/:id
// @access  Private
const deleteTourDate = asyncHandler(async (req, res) => {
  const tourDate = await TourDate.findById(req.params.id)

  if (tourDate) {
    tourDate.remove()
    res.json({ message: 'Product removed' })
  } else {
    res.status(404)
    throw new Error('Tour date not found')
  }
})

// @desc    Update a single tour date
// @route   PUT /api/events/:id
// @access  Private
const updateTourDate = asyncHandler(async (req, res) => {
  const {
    date,
    time,
    address,
    city,
    state,
    venue,
    venueWebsite,
    fee,
    isActive,
  } = req.body

  const tourDate = await TourDate.findById(req.params.id)

  if (tourDate) {
    tourDate.date = date
    tourDate.time = time
    tourDate.address = address
    tourDate.city = city
    tourDate.state = state
    tourDate.venue = venue
    tourDate.venueWebsite = venueWebsite
    tourDate.fee = fee
    tourDate.isActive = isActive

    const updatedDate = await tourDate.save()
    res.json(updatedDate)
  } else {
    res.status(404)
    throw new Error('Tour date not found')
  }
})

export {
  createTourDate,
  listTourDates,
  listTourDateDetails,
  deleteTourDate,
  updateTourDate,
}
