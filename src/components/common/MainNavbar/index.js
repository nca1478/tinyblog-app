// Dependencies
import { useForm } from 'react-hook-form'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Container, Nav, Navbar, Form } from 'react-bootstrap'

export const MainNavbar = () => {
  const { register, handleSubmit, setValue } = useForm()
  const navigate = useNavigate()

  const handleOnBlur = () => {
    setValue('searchText', null)
  }

  const onSubmit = (data) => {
    navigate(`/search?q=${data.searchText}`)
  }

  const styleActive = ({ isActive }) => {
    return 'nav-item nav-link ' + (isActive ? 'active' : '')
  }

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="py-3">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="navbar-brand text-primary">
              TINYBLOG
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <NavLink to="/" className={styleActive}>
                Inicio
              </NavLink>

              <NavLink to="/posts" className={styleActive}>
                Posts
              </NavLink>

              <NavLink to="/admin/dashboard" className={styleActive}>
                Dashboard
              </NavLink>

              <NavLink to="/admin/post/add" className={styleActive}>
                Agregar Post
              </NavLink>
            </Nav>

            <Form
              className="d-flex justify-content-around"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Form.Control
                type="search"
                placeholder="Buscar por título"
                className="me-2"
                aria-label="Search"
                {...register('searchText', {
                  onBlur: handleOnBlur,
                })}
              />
            </Form>

            <NavLink to="/admin" className="btn btn-primary me-2">
              Admin
            </NavLink>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
