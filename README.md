
###Description:


### csv-parser-sync-plus-promise



A module to read csv synchronously or as promise



### Features



now read any csv synchronously or as promise. Choice is yours



### Usage

		let parser = require('csv-parser-sync-plus-promise')

// for sync

		let a=parser.readCsvSync('<filepath>')

// for promise

		let b=parser.readCsvPromise('<filepath>')

		**Note:** You can use both fully qualified and relative paths <filepath>

#### Errors

All errors will be printed as console.error and the process will exit with exit code 222
