import React, { useEffect, useState } from 'react'
import 'antd/dist/antd.css'
import { Select } from 'antd'

const { Option } = Select
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec'
]

export const DatePicker = ({ onDateUpdate }) => {
  const [year, setYear] = useState('YYYY')
  const [month, setMonth] = useState('MM')
  const [day, setDay] = useState('DD')

  function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate()
  }

  const renderYears = () => {
    const years = []
    for (let start = 1900; start <= new Date().getFullYear(); start++) {
      years.push(<Option value={start}>{start}</Option>)
    }
    return years
  }

  const renderMonths = () => {
    return months.map((month) => {
      // eslint-disable-next-line react/jsx-key
      return <Option value={month}>{month}</Option>
    })
  }

  const renderDays = () => {
    const years = []
    const [startDate, endDate] = [
      1,
      daysInMonth(months.indexOf(month) + 1, year)
    ]

    for (let start = startDate; start <= endDate; start++) {
      years.push(<Option value={start}>{start}</Option>)
    }
    return years
  }

  const onDateChanged = () => {
    const givenMonthTotalDays = daysInMonth(months.indexOf(month) + 1, year)
    if (day <= givenMonthTotalDays) {
      onDateUpdate(`${year}-${months.indexOf(month) + 1}-${day}`)
    } else {
      onDateUpdate(null)
      setDay('DD')
    }
  }

  useEffect(() => {
    year && month && day && onDateChanged()
  }, [year, month, day])

  return (
    <div>
      <Select
        value={year}
        showSearch
        style={{ width: 100, marginRight: 10 }}
        placeholder='YYYY'
        optionFilterProp='children'
        onChange={(value) => {
          setYear(value)
        }}
      >
        {renderYears()}
      </Select>
      <Select
        value={month}
        showSearch
        disabled={!year}
        style={{ width: 80, marginRight: 10 }}
        placeholder='MM'
        optionFilterProp='children'
        onChange={(value) => {
          setMonth(value)
        }}
      >
        {renderMonths()}
      </Select>
      <Select
        showSearch
        value={day}
        disabled={!month}
        style={{ width: 70 }}
        placeholder='DD'
        optionFilterProp='children'
        onChange={(value) => {
          setDay(value)
        }}
      >
        {renderDays()}
      </Select>
    </div>
  )
}

export default DatePicker
