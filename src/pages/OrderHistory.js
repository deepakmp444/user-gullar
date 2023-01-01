import { useEffect } from "react";
import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import img1 from "../assests/product/bannerv1.png";
import OrderCard from "../components/Order/OrderCard";
import { fetchAllOrder } from "../store/features/orderSlice";
function OrderHistory() {
  const { orderList } = useSelector((state) => state.order);
  const dispatch = useDispatch();
  console.log("orderList:", orderList);

  useEffect(() => {
    dispatch(fetchAllOrder());
  }, [dispatch]);

  return (
    <Container>
      <Row style={{ marginTop: "100px" }}>
        <Col sm={2}></Col>
        <Col sm={8}>
          {orderList.map((value, index) => {
            return <OrderCard key={index} value={value} />;
          })}
        </Col>
        <Col sm={2}></Col>
      </Row>
    </Container>
  );
}

export default OrderHistory;
