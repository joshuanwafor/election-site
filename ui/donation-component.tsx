import { Button, Col, Row } from "react-bootstrap"


export const DonationAdress = () => {
    return <div>
        <div className='container'>
            <h3>Donation Addresses</h3>
            <Row style={{ marginTop: 4 }}>
                {["Eth", "Btc", "Bnb"].map(element => {
                    return <Col md={4} style={{ marginTop: 16 }}>
                        <div className="p-3   border" style={{ borderRadius: 10, backgroundColor: "white" }}>
                            <div>
                                <p>{element.toLocaleUpperCase()}</p>
                            </div>
                            <div className="divider"></div>
                            <p className="">3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy</p>
                            <a href="https://etherscan.io/">
                                <Button variant="secondary">View on scan</Button>
                            </a>
                        </div>
                    </Col>
                })}
            </Row>
        </div>
    </div>
}



export const Donations = () => {
    return <div>
        <div className='container mt-5'>
            <h3>Donation Addresses</h3>


            {[1, 2, 3, 4, 5].map(element => {
                return <div style={{ backgroundColor: "white" }} className="p-3 d-flex align-items-center">
                    <div className="p-3 border">
                        Tx
                    </div>
                    <div className="px-3" style={{ flex: 1 }}>
                        <div>From: 0x4156d7972091c90c3aa5b4c563187374bdfc4e69</div>
                        <div>Top: 0x4156d7972091c90c3aa5b4c563187374bdfc4e69</div>
                    </div>

                    <div className="p-3 border">
                        2BNB
                    </div>
                </div>
            })}
        </div>
    </div>
}