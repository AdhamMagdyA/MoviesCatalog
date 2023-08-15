import {
  Navbar,
  Container,
  Form,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import "./styles/navbar.css";
import { useDispatch } from "react-redux";
import { getAllMovies, searchMovies } from "../redux/actions/moviesAction";

function NavBar() {
  const dispatch = useDispatch();
  const onSearch = (e) => {
    const searchValue = e.target.value;
    if (searchValue === "") dispatch(getAllMovies());
    else dispatch(searchMovies(searchValue));
  };
  const onSearchSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container className="my-1 ">
        <Navbar.Brand href="/">اتفرج</Navbar.Brand>
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
                id="search-input"
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
