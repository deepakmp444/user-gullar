import { Card, Col, Container, Row } from "react-bootstrap"
import OrderDoneIcon from "../components/Icons/OrderDoneIcon"

function UserEmailVerify() {
  return (
    <Container>
      <Row style={{ marginTop: "150px" }}>
        <Col sm={4}></Col>
        <Col sm={4}>
          <Card className="p-5" style={{ backgroundColor: "#f2f2f2" }}>
            <div className="text-center">
              <OrderDoneIcon />
            </div>
            <h5 className="text-center mt-3">Email verified</h5>
          </Card>
        </Col>
        <Col sm={4}></Col>
      </Row>
    </Container>
  )
}

export default UserEmailVerify