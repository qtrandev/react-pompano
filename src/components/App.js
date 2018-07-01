import React from 'react'
import Footer from './Footer'
import AddItem from '../containers/AddItem'
import VisibleItemList from '../containers/VisibleItemList'
import '../App.css';

const App = () => (
  <div>
    <h1>Pompano Beach Inspectors</h1>
    <AddItem />
    <VisibleItemList />
    <Footer />
  </div>
)

export default App