import { useState, useEffect } from 'react';
import { Card, Button, Container, Row } from 'react-bootstrap';
import { planets1 } from './ApiFetch.js';

const Planets = () => {
  const [planet, setPlanet] = useState([]);

  const listPlanet = () => {
    planets1.getListPlanets().then((data) => {
      setPlanet(data.results)
    })
  };

  useEffect(() =>
    listPlanet, []
  )

  function getPlanets() {
    if (!planet) return
    
    return planet.map((planeta) => {
      return (

        <Card key={planeta.uid} style={{ width: '15rem' }}>
          <Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/planets/${planeta.uid}.jpg`} />
          <Card.Body>
            <Card.Title>{planeta.name}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <a href={planeta.url}><Button variant="primary">Learn more</Button></a>
          </Card.Body>
        </Card>

      )
    });
  }


  return (
    <div>
      <h1>Planets</h1>
      <Container>
        <Row>
          {getPlanets()}
        </Row>
      </Container>
    </div>
  )
}

export default Planets