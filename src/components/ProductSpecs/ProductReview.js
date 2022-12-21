import React from "react";
import { Card } from "react-bootstrap";
import Star from "../Icons/Star";

function ProductReview() {
  return (
    <div>
      <Card>
        <div className="p-3">
          <h5>Deepak ✅ </h5>
          <div className="d-flex mb-2" style={{ marginTop: "-5px" }}>
            <div>
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <div className="ms-2" style={{ marginTop: "2px" }}>
              4
            </div>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </Card>
    </div>
  );
}

export default ProductReview;
