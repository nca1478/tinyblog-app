// Dependencies
import { Row, Col, Container } from 'react-bootstrap'

// Custom Dependencies
import showcase from '../../../assets/img/showcase.svg'

export const Showcase = () => {
  return (
    <Col className="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
      <Container>
        <Row className="d-sm-flex align-items-center justify-content-between">
          <Col>
            <h1>
              Bienvenido a Tinyblog, información actualizada y{' '}
              <span className="text-warning">mucho más.</span>
            </h1>
            <p className="lead fw-bold my-4">
              No te olvides de calificar la que más te guste.
            </p>

            <a href="#last-post" className="btn btn-primary btn-lg">
              Ver Últimos Posts
            </a>
          </Col>
          <img
            className="img-fluid w-50 d-none d-md-block"
            src={showcase}
            alt="showcase"
          />
        </Row>
      </Container>
    </Col>
  )
}
