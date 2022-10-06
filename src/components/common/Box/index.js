// Dependencies
import { Card } from 'react-bootstrap'

export const Box = (props) => {
  return (
    <Card className={`${props.bgColor} ${props.textColor}`}>
      <Card.Body className="text-center">
        <h1 className="mb-3">
          <i className={props.icon}></i>
        </h1>
        <h4 className="card-title mb-3">{props.title}</h4>
        <p className="card-text h1">{props.bodyText}</p>
      </Card.Body>
    </Card>
  )
}
