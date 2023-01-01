import { useNavigate, useParams } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Star from "../components/Icons/Star";
import CartIcon from "../components/Icons/CartIcon";
import WishListIcon from "../components/Icons/WishListIcon";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProductById } from "../store/features/productSlice";
import ProductSpecification from "../components/ProductSpecs/ProductSpecification";
import ProductReturnPolicy from "../components/ProductSpecs/ProductReturnPolicy";
import ProductReview from "../components/ProductSpecs/ProductReview";
import { gotoProductBucket } from "../store/features/orderSlice";

function Product() {
  const { id } = useParams();
  const { singleProduct } = useSelector((state) => state.product);
  const { buyNowProduct } = useSelector((state) => state.order);
  console.log("buyNowProduct:", buyNowProduct);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [qty, setQty] = useState(1);
  const [imgUrl, setImgUrl] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productMRP, setProductMRP] = useState("");
  const [productSize, setProductSize] = useState("");
  const [productColor, setProductColor] = useState("");
  const { userProfile } = useSelector((state) => state.user);
  const [totalQty, setTotalQty] = useState("");

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (
      !(
        Object.keys(singleProduct).length === 0 &&
        singleProduct.constructor === Object
      )
    ) {
      const minPrice = singleProduct.ProductPropJson.reduce(
        (min, p) => (p.price < min ? p.price : min),
        singleProduct.ProductPropJson[0].price
      );
      const { mrp, stock, size, color, img } =
        singleProduct.ProductPropJson.find(
          (product) => product.price === minPrice
        );
      setProductPrice(minPrice);
      setTotalQty(stock);
      setProductMRP(mrp);
      setProductSize(size);
      setProductColor(color);
      setImgUrl(img);
    }
  }, [singleProduct]);

  const removeItem = () => {
    if (qty > 1) {
      setQty((pre) => pre - 1);
    }
  };

  const addItem = () => {
    if (totalQty > qty) {
      setQty((pre) => pre + 1);
    }
  };

  const getSizePrice = (e) => {
    const selectedSize = e.target.value;
    const selectedProduct = singleProduct.ProductPropJson.find(
      (product) => product.size === selectedSize
    );
    setProductPrice(selectedProduct.price);
    setProductMRP(selectedProduct.mrp);
    setTotalQty(selectedProduct.stock);
  };

  const addToCart = () => {
    if (
      Object.keys(userProfile).length === 0 &&
      userProfile.constructor === Object
    ) {
      navigate("/login");
    } else {
      console.log("singleProduct.id:", singleProduct.id);
      console.log("qtyTop:", qty);
      console.log("productSize:", productSize);
      console.log("productColor:", productColor);
    }
  };

  const saveWishlist = () => {
    if (
      Object.keys(userProfile).length === 0 &&
      userProfile.constructor === Object
    ) {
      navigate("/login");
    } else {
      console.log("singleProduct.id:", singleProduct.id);
      console.log("qtyTop:", qty);
      console.log("productSize:", productSize);
      console.log("productColor:", productColor);
    }
  };

  const buyNow = () => {
    if (
      Object.keys(userProfile).length === 0 &&
      userProfile.constructor === Object
    ) {
      navigate("/login");
    } else {
      const totalPrice = productPrice * qty;
      const totalMRP = productMRP * qty;
      dispatch(
        gotoProductBucket([
          {
            imgUrl: imgUrl,
            productId: singleProduct.id,
            heading: singleProduct.productHeading,
            subHeading: singleProduct.productSubheading,
            qty: qty,
            size: productSize,
            color: productColor,
            price: totalPrice,
            mrp: totalMRP,
          },
        ])
      );
      navigate("/buynow");
    }
  };

  return (
    <Container style={{ marginTop: "70px" }}>
      {Object.keys(singleProduct).length === 0 &&
      singleProduct.constructor === Object ? (
        <h1 className="text-center">Loading...</h1>
      ) : (
        <>
          <Row>
            <Col sm={5}>
              <ImageGallery
                items={
                  singleProduct &&
                  singleProduct.ProductPropJson &&
                  singleProduct.ProductPropJson.map((item) => {
                    return {
                      original: item.img,
                      thumbnail: item.img,
                    };
                  })
                }
              />
            </Col>
            <Col sm={7}>
              <div className="fontsize40">{singleProduct.productHeading}</div>
              <div>{singleProduct.productSubheading}</div>
              <div className="d-flex">
                <div>
                  <Star />
                </div>
                <div className="ms-2" style={{ marginTop: "2px" }}>
                  {singleProduct.averageRating}
                </div>
                <div className="d-flex ms-4">
                  <div>
                    <CartIcon height="16" width="16" />
                  </div>
                  <div className="ms-1" style={{ marginTop: "2px" }}>
                    {singleProduct.totalOrder} orders
                  </div>
                </div>
                <div className="ms-3 text-success" style={{ marginTop: "3px" }}>
                  Free delivery
                </div>
              </div>
              <div className="fontsize20 mt-3 mb-3 text-success">
                Price <strong>{productPrice}</strong>{" "}
                <del className="text-danger ms-3">
                  MRP <strong>{productMRP}</strong>
                </del>
              </div>
              <div className="card p-2 mt-2">
                {singleProduct.productShortDesc}
              </div>
              <div className="mt-3">
                <Row>
                  <Col sm={3}>
                    <p>Color</p>
                    <Form.Select
                      style={{ marginTop: "-15px" }}
                      defaultValue={productColor}
                    >
                      {[
                        ...new Set(
                          singleProduct.ProductPropJson.map(
                            (item) => item.color
                          )
                        ),
                      ].map((value, index) => {
                        return (
                          <option key={index} value={value}>
                            {value}
                          </option>
                        );
                      })}
                    </Form.Select>
                  </Col>
                  <Col sm={3}>
                    <p>Size</p>
                    <Form.Select
                      style={{ marginTop: "-15px" }}
                      defaultValue={productSize}
                      onChange={getSizePrice}
                    >
                      {singleProduct.ProductPropJson.map((value, index) => {
                        return (
                          <option key={index} value={value.size}>
                            {value.size}
                          </option>
                        );
                      })}
                    </Form.Select>
                  </Col>
                  <Col sm={4}>
                    <p>Qty</p>
                    <div style={{ marginTop: "-15px" }}>
                      <Button
                        type="button"
                        className="me-2"
                        variant="danger"
                        onClick={removeItem}
                      >
                        Remove
                      </Button>
                      {qty}
                      <Button
                        className="ms-2"
                        type="button"
                        variant="success"
                        onClick={addItem}
                      >
                        Add
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
              <div>
                <div style={{ marginTop: "20px" }}>
                  <Button type="button" variant="warning" onClick={buyNow}>
                    Buy Now
                  </Button>
                  <Button
                    className="ms-2"
                    type="button"
                    variant="success"
                    onClick={addToCart}
                  >
                    <div className="d-flex">
                      <div>
                        <CartIcon height="16" width="16" />
                      </div>
                      <div className="ms-1" style={{ marginTop: "2px" }}>
                        Add to Cart
                      </div>
                    </div>
                  </Button>
                  <Button
                    className="ms-2"
                    type="button"
                    variant="secondary"
                    onClick={saveWishlist}
                  >
                    <div className="d-flex">
                      <div>
                        <WishListIcon height="16" width="16" />
                      </div>
                      <div className="ms-1" style={{ marginTop: "2px" }}>
                        Save
                      </div>
                    </div>
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="mt-5 mb-5">
            <img src={singleProduct.OneImg} fluid="true" alt="" />
          </Row>
          <Row style={{ marginBottom: "200px" }}>
            <Tabs
              defaultActiveKey="specification"
              id="specificationTab"
              className="mb-3"
              fill
            >
              <Tab eventKey="specification" title="Specification">
                <div className="overflow-auto removeScrollBar">
                  <ProductSpecification value={singleProduct.productDetails} />
                </div>
              </Tab>
              <Tab eventKey="returnpolicy" title="Return Policy">
                <div className="overflow-auto removeScrollBar">
                  <ProductReturnPolicy
                    value={singleProduct.productReturnPolicy}
                  />
                </div>
              </Tab>
              <Tab eventKey="review" title="Review">
                <ProductReview />
              </Tab>
            </Tabs>
          </Row>
        </>
      )}
    </Container>
  );
}

export default Product;
