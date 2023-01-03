import { Container } from "react-bootstrap";
import Error from "../components/PageNotFound";

function PageNotFound() {
  return (
    <Container className="desktopMargin">
      <Error />
    </Container>
  );
}

export default PageNotFound;
