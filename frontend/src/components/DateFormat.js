const DateFormat = (oldDate) => {
  var newDate = new Date(oldDate)

  const months = [
    'Jan.',
    'Feb.',
    'Mar.',
    'Apr.',
    'May.',
    'Jun.',
    'Jul.',
    'Aug.',
    'Sep.',
    'Oct.',
    'Nov.',
    'Dec.',
  ]
  return (
    months[newDate.getMonth()] +
    ' ' +
    newDate.getDate() +
    ', 20' +
    (newDate.getYear() % 100)
  )
}

export default DateFormat
