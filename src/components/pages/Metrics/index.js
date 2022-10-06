// Dependencies
import { Container, Row, Col } from 'react-bootstrap'
import { Box } from '../../common'

export const MetricsPage = () => {
  return (
    <Col className="p-4 bg-primary">
      <Container>
        <h3 className="text-center text-white mb-4">Métricas Web</h3>
        <Row className="text-center g-4">
          <Col md={3} sm={12}>
            <Box
              bgColor="bg-dark"
              textColor="text-light"
              title="Visitas al Blog"
              icon="bi bi-speedometer"
              bodyText="100"
              buttonColor="btn-primary"
              buttonText="Ver Trabajos"
              goTo="/offers"
            />
          </Col>

          <Col md={3} sm={12}>
            <Box
              bgColor="bg-secondary"
              textColor="text-light"
              title="Todos los Posts"
              icon="bi bi-speedometer"
              bodyText="100"
              buttonColor="btn-primary"
              buttonText="Ver Trabajos"
              goTo="/offers"
            />
          </Col>

          <Col md={3} sm={12}>
            <Box
              bgColor="bg-dark"
              textColor="text-light"
              title="Post más Visitado"
              icon="bi bi-speedometer"
              bodyText="200"
              buttonColor="btn-dark"
              buttonText="Ver Trabajos"
              goTo="/offers"
            />
          </Col>

          <Col md={3} sm={12}>
            <Box
              bgColor="bg-secondary"
              textColor="text-light"
              title="Post menos Visitado"
              icon="bi bi-speedometer"
              bodyText="50"
              buttonColor="btn-primary"
              buttonText="Ver Trabajos"
              goTo="/offers"
            />
          </Col>
        </Row>
      </Container>
    </Col>
  )
}
