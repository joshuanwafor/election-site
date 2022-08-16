import type { NextPage } from 'next'
import Head from 'next/head'
import { DonationAdress, Donations } from '../ui/donation-component'
import SiteHeader from '../ui/header/Header'

const Home: NextPage = () => {
  return (
    <div>

      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5 justify-content-center text-center">
          <div className="col-md-8">
            <h1 className="display-5 fw-bold lh-1 mb-3">Lorem ipsum dolor sit amet, adipisicing elit. Atque.</h1>
            <p className="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit voluptas dolorem quae magni doloremque rerum numquam itaque, animi tempore quia nemo ullam eligendi fugit dolores officia architecto, magnam accusamus quis?</p>
            <div className="">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Donate</button>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">Stats</button>
            </div>
          </div>
        </div>
      </div>

      <DonationAdress />

      <Donations />

    </div>
  )
}

export default Home
