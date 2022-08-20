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
            <div className="row">
                {[1, 2, 3, 4, 5].map(element => {
                    return <div className="col-12 col-md-6 mb-3">
                        <div style={{ backgroundColor: "white" }} className="align-items-center align-content-start">
                            <div className="p-2 border" style={{ width: "content" }}>
                                <span className="text-bold">
                                    Transaction:
                                </span>
                                <span className="pl-2" style={{ fontWeight: "bold", paddingLeft: 12 }}>
                                    2BNB Sent
                                </span>
                            </div>
                            <div className="p-2 border-b border-r border-l" style={{ flex: 1 }}>
                                <div><span style={{ color: 'gray' }}>From: 0x4156d7972091c90c3aa5b4c563187374bdfc4e69</span></div>
                                <div><span style={{ color: 'gray' }}>Top: 0x4156d7972091c90c3aa5b4c563187374bdfc4e69</span></div>
                            </div>

                        </div>
                    </div>
                })}
            </div>
        </div>
    </div>
}