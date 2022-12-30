import { Card, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import OrderDoneIcon from "../components/Icons/OrderDoneIcon";
function ConfirmOrder() {
  const { userProfile } = useSelector((state) => state.user);

  return (
    <Container>
      <Row style={{ marginTop: "150px" }}>
        <Col sm={4}></Col>
        <Col sm={4}>
          <Card className="p-5" style={{ backgroundColor: "#f2f2f2" }}>
            <div className="text-center">
              <OrderDoneIcon />
            </div>
            <h5 className="text-center mt-3">Thank you for order</h5>
            <div className="text-center">{userProfile?.name}</div>
          </Card>
        </Col>
        <Col sm={4}></Col>
      </Row>
    </Container>
  );
}

export default ConfirmOrder;
