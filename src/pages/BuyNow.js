import { useEffect } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AddressCard from "../components/Address/AddressCard";
import AddressForm from "../components/Address/AddressForm";
import { fetchAddress } from "../store/features/addressSlice";

function BuyNow() {
  const { buyNowProduct } = useSelector((state) => state.order);
  console.log("buyNowProduct:", buyNowProduct);
  const { userProfile } = useSelector((state) => state.user);
  const { address, orderAddress } = useSelector((state) => state.address);
  const [cookies, setCookie] = useCookies(["userOrder"]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const backToShop = () => {
    navigate(-1);
  };

  const totalPrice = buyNowProduct.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.qty,
    0
  );
  const totalMRP = buyNowProduct.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.mrp * currentValue.qty,
    0
  );

  const discounts = totalMRP - totalPrice;

  useEffect(() => {
    if (buyNowProduct.length === 0) {
      navigate(-1);
    }
  }, [buyNowProduct.length, navigate]);

  useEffect(() => {
    dispatch(fetchAddress());
  }, [dispatch]);

  useEffect(() => {
    if (totalPrice === 0) {
      navigate(-1);
    }
  }, [navigate, totalPrice]);

  const handleClick = async () => {
    const areTruthy = Object.values(orderAddress).every((value) => value);

    if (!areTruthy) {
      return alert("Please Enter address");
    }

    const totalPrice = await buyNowProduct.reduce(
      (accumulator, currentValue) => accumulator + currentValue.price,
      0
    );

    setCookie("orderAddress", orderAddress, { path: "/" });
    
    setCookie("buyNowProduct", buyNowProduct, { path: "/" });

    const response = await fetch("http://localhost:9000/api/v1/orders/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: totalPrice }),
    });

    const order = await response.json();
    const KEY = process.env.REACT_APP_RAZORPAY_KEY;
    const options = {
      key: KEY, // Enter the Key ID generated from the Dashboard
      amount: order.response.amount,
      currency: "INR",
      name: userProfile?.name,
      description: "Test Transaction",
      image: "https://avatars.githubusercontent.com/u/48873989?v=4",
      order_id: order.response.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: "http://localhost:9000/api/v1/order-verification",
      prefill: {
        name: orderAddress.name,
        email: orderAddress.email,
        contact: orderAddress.phone,
      },
      notes: {
        address: `${orderAddress.landmark},${orderAddress.city},${orderAddress.state},${orderAddress.pincode}`,
      },
      theme: {
        color: "#3399cc",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
  };

  return (
    <Container>
      <Row style={{ marginTop: "100px" }}>
        <Col sm={8} className="mb-5">
          <div>
            <div className="mb-3 text-success">
              <strong>Billing Address</strong>
            </div>
            <AddressForm hideButton="true" />
          </div>

          {address.map((value, index) => {
            return (
              <AddressCard key={index} value={value} deleteButton="false" />
            );
          })}
        </Col>
        <Col sm={4}>
          <Card className="p-4 mb-2" style={{ backgroundColor: "#f2f2f2" }}>
          <strong>Products</strong>
            {buyNowProduct.map((value, index) => {
              return (
                <div key={index} className="d-flex mt-2">
                  <img src={value.imgUrl} className="rounded" alt="" height="50" width="50" />
                  <div className="ms-2">{value.heading}</div>        
                </div>
              );
            })}
          </Card>
          <Card className="p-4 mb-5" style={{ backgroundColor: "#f2f2f2" }}>
            <div className="d-flex justify-content-between">
              <div>Price:</div>
              <div>
                <strong className="text-primary">Rs.{totalPrice}</strong>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div>MRP:</div>
              <div>
                <strong className="text-danger">
                  <del>Rs.{totalMRP}</del>
                </strong>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div>Discount:</div>
              <div>
                <strong className="text-success">Rs.{discounts}</strong>
              </div>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <div>Total:</div>
              <div>
                <strong>Rs.{totalPrice}</strong>{" "}
              </div>
            </div>
            <div className="d-grid gap-2 mt-4">
              <Button variant="primary" size="sm" onClick={handleClick}>
                Make Purchase
              </Button>
              <Button variant="outline-primary" size="sm" onClick={backToShop}>
                Back to Shop
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default BuyNow;
