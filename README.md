# React Dropdown Date Picker

[![NPM](https://img.shields.io/npm/v/dropdown-date-picker.svg)](https://www.npmjs.com/package/dropdown-date-picker) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save dropdown-date-picker
```

## Usage

```jsx
import React from 'react'

import { DatePicker } from 'dropdown-date-picker'

const App = () => {
  return (
    <DatePicker
      onDateUpdate={(updatedDate) => {
        console.log(updatedDate)
      }}
    />
  )
}

export default App
```

## Output
![Output](https://i.ibb.co/0MJHp4q/Screenshot-2021-04-09-at-1-34-53-PM.png)

## License

MIT © [sultanfendonus](https://github.com/sultanfendonus)
