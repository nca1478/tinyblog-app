// Dependencies
import { useForm } from 'react-hook-form'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap'

// Custom Dependencies
import { InputGroupForm } from './components/InputGroupForm'

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log('submit')
  }

  return (
    <Col className="bg-primary">
      <Container className="p-4 bg-primary">
        <Row className="text-center">
          <Col md={{ span: 6, offset: 3 }}>
            <Card className="text-dark py-3">
              <Card.Body className="text-center animate__animated animate__fadeIn">
                <h1 className="mb-3">
                  <i className="bi bi-person-circle"></i>
                </h1>
                <h3 className="card-title mb-3">Login</h3>

                <Form className="mx-3" onSubmit={handleSubmit(onSubmit)}>
                  {/* Username */}
                  <InputGroupForm
                    type="text"
                    register={register}
                    errors={errors.email}
                    icon="bi bi-person-circle"
                    label="Email"
                    name="email"
                    validationRules={{ required: 'Email es requerido' }}
                  />

                  {/* Password */}
                  <InputGroupForm
                    type="password"
                    register={register}
                    errors={errors.password}
                    icon="bi bi-key"
                    label="Contraseña"
                    name="password"
                    validationRules={{ required: 'Contraseña es requerida' }}
                  />

                  {/* Login Buttons */}
                  <Button type="submit" variant="dark" className="w-100">
                    Login
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Col>
  )
}
