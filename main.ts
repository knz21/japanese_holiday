const japaneseHolidayCalendarId = 'ja.japanese#holiday@group.v.calendar.google.com'
function getHoliday(date: Date | undefined): string {
    if (!date) return ''
    const startOfDate = new Date(date.getFullYear(), date.getMonth(), date.getDate())
    const endOfDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59)
    const events = CalendarApp.getCalendarById(japaneseHolidayCalendarId).getEvents(startOfDate, endOfDate)
    return events[0]?.getTitle() || ''
}