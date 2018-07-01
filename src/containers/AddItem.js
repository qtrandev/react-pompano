import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../actions'
import Papa from 'papaparse'
import firebase from 'firebase'

const AddItem = ({ dispatch }) => {
  let input
  let database

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

  var config = {
    apiKey: "AIzaSyBi0nYDoBipKq49lyDra1j5vhHnUF5-vLI",
    authDomain: "react-pompano.firebaseapp.com",
    databaseURL: "https://react-pompano.firebaseio.com",
    projectId: "react-pompano",
  };
  firebase.initializeApp(config);
  database = firebase.database();
  database.ref('/').once('value')
    .then(sections => {
        console.log("Got something from Firebase: "+JSON.stringify(sections));
        dispatch(addItem(sections.child("test").val()));
    })
    .catch(error => {
      console.log("Got error from Firebase: "+JSON.stringify(error));
    });

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