import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Modal,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import MinusIcon from "../components/Icons/MinusIcon";
import PlusIcon from "../components/Icons/PlusIcon";
import {
  decreaseQtyReducer,
  deleteUserCart,
  fetchCartList,
  increaseQtyReducer,
} from "../store/features/cartSlice";
import { gotoProductBucket } from "../store/features/orderSlice";

function Cart() {
  const navigate = useNavigate();
  const { buyNowProduct } = useSelector((state) => state.order);
  const { cartList, deletedCartStatus } = useSelector(
    (state) => state.cartList
  );
  const [showDelete, setShowDelete] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(gotoProductBucket([]));
  }, [cartList, dispatch]);

  useEffect(() => {
    if (deletedCartStatus) {
      setShowDelete(false);
      window.location.reload();
    }
  }, [deletedCartStatus]);

  const handleCloseDelete = () => {
    setShowDelete(false);
  };

  const increaseQty = (id) => {
    dispatch(increaseQtyReducer({ id }));
  };

  const decreaseQty = (id, qty) => {
    if (qty > 1) {
      dispatch(decreaseQtyReducer({ id, qty }));
    }
  };

  const confirmDelete = (id) => {
    dispatch(deleteUserCart({ id }));
  };

  const sumWithInitial = cartList?.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.qty,
    0
  );

  const handleShowDelete = () => {
    setShowDelete(true);
  };

  const nextToBuy = () => {
    dispatch(gotoProductBucket(cartList));
    navigate("/buynow");
  };

  return (
    <Container style={{ marginTop: "70px" }}>
      <Row>
        <Col sm={2}></Col>
        <Col sm={8}>
          <h3 className="mb-3">Your cart list</h3>
          {cartList.length === 0 && <h1 className="text-center">Loading...</h1>}
          {cartList.map((value) => {
            return (
              <Card className="bg-light p-2 mb-3" key={value.id}>
                <Row>
                  <Col sm={2}>
                    <Link
                      to={`/product/${value.productType}/${value.productId}`}
                    >
                      <img
                        src={value.imgUrl}
                        className="rounded mx-auto d-block rounded"
                        alt="sss"
                        height={100}
                        width={100}
                      />
                    </Link>
                  </Col>
                  <Col sm={8} className="mt-2">
                    <Link
                      className="link"
                      to={`/product/${value.productType}/${value.productId}`}
                    >
                      {value.heading}
                    </Link>
                    <div>{value.subHeading}</div>
                    <div className="text-muted">
                      Price:
                      <span>
                        <strong>
                          {/* Rs.{qtyPrice ? qtyPrice : value.price} &nbsp; */}
                          {value.price * value.qty}&nbsp;
                        </strong>
                      </span>
                      Color: <strong> {value.color}</strong>, Size:{" "}
                      <strong> {value.size} &nbsp;</strong>
                    </div>
                  </Col>
                  <Col sm={2}>
                    <div className="d-grid gap-2 mt-3">
                      <div className="mt-2">
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => decreaseQty(value.id, value.qty)}
                        >
                          <MinusIcon />
                        </Button>
                        <Button variant="light" className="ms-2" size="sm">
                          {value.qty}
                        </Button>
                        <Button
                          variant="success"
                          className="ms-2"
                          size="sm"
                          onClick={() => increaseQty(value.id)}
                        >
                          <PlusIcon />
                        </Button>
                      </div>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={handleShowDelete}
                      >
                        Remove
                      </Button>
                    </div>
                  </Col>
                </Row>
                <Modal show={showDelete} centered onHide={handleCloseDelete}>
                  <Modal.Header closeButton>
                    <Modal.Title>Delete</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <p className="">Are you sure</p>
                    <div className="d-flex justify-content-end mt-3">
                      <Button
                        variant="light"
                        className="me-2"
                        onClick={handleCloseDelete}
                      >
                        Cancel
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => confirmDelete(value.id)}
                      >
                        Confirm Delete
                      </Button>
                    </div>
                  </Modal.Body>
                </Modal>
              </Card>
            );
          })}
          {cartList.length !== 0 && (
            <Button className="mb-5" variant="warning" onClick={nextToBuy}>
              Next Rs.{sumWithInitial}
            </Button>
          )}
        </Col>

        <Col sm={2}></Col>
      </Row>
    </Container>
  );
}

export default Cart;
