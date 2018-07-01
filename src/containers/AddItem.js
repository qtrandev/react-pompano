import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../actions'
import Papa from 'papaparse'

const AddItem = ({ dispatch }) => {
  let input

  // Load sample data
  const csvFilePath = require("../InspectionDataSample.csv")
  Papa.parse(csvFilePath, {
    header: true,
    download: true,
    complete: function(results, file) {
      if (results) {
        //console.log ("Results: "+JSON.stringify(results.data));
        for (var i = 0; i < results.data.length; i++) {
          dispatch(addItem(results.data[i].InspectionCodeDesc+" - "+results.data[i].Address))
        }
      }
    },
  })

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addItem(input.value))
          input.value = ''
        }}
      >
        <input ref={node => input = node} />
        <button type="submit">
          Add
        </button>
      </form>
    </div>
  )
}

export default connect()(AddItem)