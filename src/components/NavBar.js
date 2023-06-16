import {
  Navbar,
  Container,
  Form,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import "./styles/navbar.css";

function NavBar({ searchMovies }) {
  const onSearch = (e) => {
    searchMovies(e.target.value);
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container className="my-1 ">
        <Navbar.Brand href="#">أفلام</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex flex-grow-1 justify-content-center">
            <InputGroup
              className="d-flex justify-content-center me-3"
              dir="ltr"
            >
              {/* <InputGroup.Text className="search-icon" dir="rtl">
                <BiSearch />
              </InputGroup.Text> */}
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
