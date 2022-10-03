// Dependencies
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify'

// Custom Dependencies
import { InputForm, TextareaForm } from './components'

export const AddPostPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = () => {
    toast.info('Post ha sido creado exitosamente')
  }

  return (
    <Col className="bg-primary">
      <Container className="p-4 bg-primary">
        <Row className="py-2">
          <Col md={{ span: 8, offset: 2 }}>
            <Card>
              <Card.Header as="h5" className="text-center">
                <span>Agregar Post</span>
              </Card.Header>
              <Card.Body>
                <div className="animate__animated animate__fadeIn">
                  <Form className="mx-3" onSubmit={handleSubmit(onSubmit)}>
                    <InputForm
                      type="text"
                      name="title"
                      label="Título"
                      placeholder="Ingresa Título"
                      controlId="formBasicTitle"
                      register={register}
                      errors={errors.title}
                    />

                    <TextareaForm
                      name="summary"
                      label="Resumen"
                      placeholder="Ingresa Resumen"
                      controlId="formBasicSummary"
                      register={register}
                      rows={2}
                      errors={errors.summary}
                    />

                    <TextareaForm
                      name="body"
                      label="Cuerpo"
                      placeholder="Ingresa Cuerpo"
                      controlId="formBasicBody"
                      register={register}
                      rows={5}
                      errors={errors.body}
                    />

                    <div className="d-grid gap-1">
                      <Button type="submit" variant="dark">
                        Guardar
                      </Button>
                    </div>
                  </Form>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </Col>
  )
}