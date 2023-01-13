import React, { useEffect, useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import AddressCard from "../components/Address/AddressCard";
import AddressForm from "../components/Address/AddressForm";
import Profile from "../components/Profile/Profile";
import { fetchAddress } from "../store/features/addressSlice";

function Setting() {
  const [tab, setTab] = useState("profile");
  const { address } = useSelector((state) => state.address);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAddress());
  }, [dispatch]);

  return (
    <Container style={{ marginTop: "120px" }}>
      <div className="center">
        <Button
          className={
            tab === "profile" ? "ms-2 btn btn-secondary" : "ms-2 btn btn-light"
          }
          onClick={() => setTab("profile")}
        >
          Profile
        </Button>
        <Button
          className={
            tab === "address" ? "ms-2 btn btn-secondary" : "ms-2 btn btn-light"
          }
          onClick={() => setTab("address")}
        >
          Address
        </Button>
      </div>
      <Row>
        {tab === "profile" && <Profile />}
        {tab === "address" && (
          <>
            <AddressForm />

            {address.map((value, index) => {
              return <AddressCard key={index} value={value} />;
            })}
          </>
        )}
      </Row>
    </Container>
  );
}

export default Setting;
