import { Card, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import OrderCanceIcon from "../components/Icons/OrderCanceIcon";
function CancelOrder() {
  const { userProfile } = useSelector((state) => state.user);

  return (
    <Container>
      <Row style={{ marginTop: "150px" }}>
        <Col sm={4}></Col>
        <Col sm={4}>
          <Card className="p-5" style={{ backgroundColor: "#f2f2f2" }}>
            <div className="text-center">
              <OrderCanceIcon />
            </div>
            <h5 className="text-center mt-3">Canceled Order</h5>
            <div className="text-center">{userProfile?.name}</div>
          </Card>
        </Col>
        <Col sm={4}></Col>
      </Row>
    </Container>
  );
}

export default CancelOrder;
