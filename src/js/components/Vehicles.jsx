import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Container, Row } from 'react-bootstrap';
import { vehicle } from './ApiFetch.js';

const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);

  const listVehicles = () => {
    vehicle.getListVehicles().then((data) => {
      setVehicles(data.results)
    })
  };

  useEffect(() =>
    listVehicles, []
  )

  function getVehicles() {
    if (!vehicles) return
    
    return vehicles.map((vehicle) => {
      return (

        <Card key={vehicle.uid} style={{ width: '15rem' }}>
          <Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`} />
          <Card.Body>
            <Card.Title>{vehicle.name}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Link to={vehicle.url}><Button variant="primary">Learn more</Button></Link >
          </Card.Body>
        </Card>

      )
    });
  }


  return (
    <div>
      <h1>Vehicles</h1>
      <Container>
        <Row>
          {getVehicles()}
        </Row>
      </Container>
    </div>
  )
}

export default Vehicles