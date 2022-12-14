import type { NextPage } from 'next'
import Head from 'next/head'
import { DonationAdress, Donations } from '../ui/donation-component'
import { PullingUnitsStats } from '../ui/organisms'

const Home: NextPage = () => {
  return (
    <div>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5 justify-content-center text-center">
          <div className="col-md-8">
            <h1 className="display-5 fw-bold lh-1 mb-3">Support the on going movement</h1>
            <p className="lead">This movement is bigger than all of us. Support the on going impact we have around the world and lets continue to build a more sustainable future for ourselves and our kids.</p>
          </div>
        </div>
      </div>


      {PullingUnitsStats}

    </div>
  )
}

export default Home
