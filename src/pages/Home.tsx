import React, { Fragment } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Card from '../components/Card/Card'

type Props = {}

const Home = (props: Props) => {
  return (
    <Fragment>
        <Navbar />
        <Card />
    </Fragment>
  )
}

export default Home