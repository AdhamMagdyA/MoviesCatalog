import {
  Navbar,
  Container,
  Form,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import "./styles/navbar.css";

function NavBar({ searchMovies }) {
  const onSearch = (e) => {
    searchMovies(e.target.value);
  };
  const onSearchSubmit = (e) => {
    e.preventDefault();
    window.location.href = "/";
    searchMovies(e.target[0].value);
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container className="my-1 ">
        <Navbar.Brand href="/">أفلام</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form
            className="d-flex flex-grow-1 justify-content-center"
            onSubmit={onSearchSubmit}
          >
            <InputGroup
              className="d-flex justify-content-center me-3"
              dir="ltr"
            >
              <FormControl
                type="search"
                placeholder="بحث"
                aria-label="Search"
                dir="rtl"
                className="search-input "
                onChange={onSearch}
              />
            </InputGroup>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
