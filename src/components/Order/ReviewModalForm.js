import { Form } from "react-bootstrap";

function ReviewModalForm({
  setUserRating,
  setUserDescriptions,
  userDescriptions,
  userRating,
}) {
  console.log("userDescriptions:", userDescriptions);
  console.log("userRating:", userRating);
  return (
    <Form>
      <Form.Label>Rating</Form.Label>
      <Form.Select
        aria-label="Default select example"
        value={userRating}
        onChange={(e) => setUserRating(e.target.value)}
      >
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        <option value="4">Four</option>
        <option value="5">Five</option>
      </Form.Select>

      <Form.Group
        className="mb-3 mt-2"
        controlId="exampleForm.ControlTextarea1"
      >
        <Form.Label>Review</Form.Label>
        <Form.Control
          as="textarea"
          placeholder={
            userDescriptions ? userDescriptions : "Write your review"
          }
          onChange={(e) => setUserDescriptions(e.target.value)}
          rows={3}
        />
      </Form.Group>
    </Form>
  );
}

export default ReviewModalForm;
