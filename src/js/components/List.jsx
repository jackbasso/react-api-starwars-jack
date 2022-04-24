import { useState, useEffect } from 'react'
import { ListGroup, Card, Button } from 'react-bootstrap';
import { people, planets1 } from './ApiFetch.js';

export default function List() {
  const [character, setCharacter] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [vehicles, setVehicles] = useState([])

  const listPeople = () => {
    people.getList().then((data) => {
      setCharacter(data.results)
    })
  };

  const listPlanets = () => {
    planets1.getListPlanets().then((data) => {
      setPlanets(data.results)
    })
  }

  function getCharacter() {
    if (!character) return
    console.log(character)
    return character.map((person) => {
      return (
        <ListGroup.Item key={person.uid}>
          <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/characters/${person.uid}.jpg`} />
            <Card.Body>
              <Card.Title>{person.name}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <a href={person.url}><Button variant="primary">Learn more</Button></a>
            </Card.Body>
          </Card>
        </ListGroup.Item>
      )
    });
  }

    function getPlanet() {
      if (!planets) return;
      return planets.map((planet) => {
        return (
          <ListGroup.Item key={planet.uid}>
            <Card style={{ width: '15rem' }}>
              <Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} />
              <Card.Body>
                <Card.Title>{planet.name}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <a href={planet.url}><Button variant="primary">Learn more</Button></a>
              </Card.Body>
            </Card>
          </ListGroup.Item>
        )
      })
    };







    useEffect(() => {
      listPeople()
      listPlanets()
    }, [])


    return (
      <>
        <div>
          <h2>Characters</h2>
          <ListGroup horizontal>
            {getCharacter()}
          </ListGroup >
        </div>
        <div>
          <h2>Planets</h2>
          <ListGroup horizontal>
            {getPlanet()}
          </ListGroup>
        </div>

        <div>
          <ListGroup horizontal>
            <ListGroup.Item>
              <h2>Vehicles</h2>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://starwars-visualguide.com/assets/img/characters/1.jpg" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </>
    )
  };