import React from 'react'

import { DatePicker } from 'dropdown-date-picker'

const App = () => {
  return (
    <div style={{ margin: 20 }}>
      <DatePicker
        onDateUpdate={(updatedDate) => {
          console.log(updatedDate)
        }}
      />
    </div>
  )
}

export default App
