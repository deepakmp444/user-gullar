import React from "react";
import { Card, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { orderAddressReducer } from "../../store/features/addressSlice";

function AddressCard({ value }) {
  const dispatch = useDispatch();
  const handleOptionChange = (value) => {
    dispatch(orderAddressReducer(value));
  };

  return (
    <Card className="p-4 mb-5" style={{ backgroundColor: "#f2f2f2" }}>
      <div className="d-flex">
        <div>
          <Form.Check
            type="radio"
            id="address"
            name="address"
            onChange={() => handleOptionChange(value)}
          />
        </div>
        <div className="ms-2">
          <span>
            Name: <strong>{value.name}</strong>{" "}
          </span>
          <span className="ms-2">
            Email: <strong>{value.email}</strong>
          </span>
          <span className="ms-2">
            Phone: <strong>{value.phone}</strong>
          </span>
          <div>
            <span className="">
              State: <strong>{value.state}</strong>{" "}
            </span>
            <span className="ms-2">
              City: <strong>{value.city}</strong>{" "}
            </span>
            <span className="ms-2">
              Landmark: <strong>{value.landmark}</strong>{" "}
            </span>
            <span className="ms-2">
              Pincode: <strong>{value.pincode}</strong>{" "}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default AddressCard;
