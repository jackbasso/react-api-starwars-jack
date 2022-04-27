import { useState, useEffect } from 'react'
import { ListGroup, Card, Button } from 'react-bootstrap';
import { people, planets1, vehicle } from './ApiFetch.js';
import '../../css/list.css';

function List() {
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

  const listVehicles = () => {
    vehicle.getListVehicles().then((data) => {
      setVehicles(data.results)
    })
  }

  const getCharacter = () => {
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

    function getVehicle() {
      if (!vehicles) return
      console.log(vehicles)
      return vehicles.map((vehi) => {
        return (
          <ListGroup.Item key={vehi.uid}>
            <Card style={{ width: '15rem' }}>
              <Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/vehicles/${vehi.uid}.jpg`} />
              <Card.Body>
                <Card.Title>{vehi.name}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <a href={vehi.url}><Button variant="primary">Learn more</Button></a>
              </Card.Body>
            </Card>
          </ListGroup.Item>
        )
      });
    }





    useEffect(() => {
      listPeople()
      listPlanets()
      listVehicles()
    }, [])


    return (
      <>
        <div>
          <h1>Characters</h1>
          <ListGroup horizontal style={{ "overflowX": "scroll" }} >
            {getCharacter()}
          </ListGroup >
        </div>
        <div>
          <h1>Planets</h1>
          <ListGroup horizontal style={{ "overflowX": "scroll" }} >
            {getPlanet()}
          </ListGroup>
        </div>

        <div>
        <h1>Vehicles</h1>
          <ListGroup horizontal style={{ "overflowX": "scroll" }} >
            {getVehicle()}
          </ListGroup>
        </div>
      </>
    )
  };

  export default List;
