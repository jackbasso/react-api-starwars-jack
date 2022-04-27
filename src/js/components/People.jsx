import { useState, useEffect } from 'react';
import List from './List.jsx';
import { Card, Button, Container, Row } from 'react-bootstrap';
import { people } from './ApiFetch.js';
import '../../App.css';

const People = () => {
  const [character, setCharacter] = useState([]);

  const listPeople = () => {
    people.getList().then((data) => {
      setCharacter(data.results)
    })
  };

  useEffect(() =>
    listPeople, []
  )

  function getCharacter() {
    if (!character) return
    console.log(character)
    return character.map((person) => {
      return (

        <Card key={person.uid} style={{ width: '15rem' }}>
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

      )
    });
  }


  return (
    <div>
      <h1>Characters</h1>
      <Container>
        <Row>
          {getCharacter()}
        </Row>
      </Container>
    </div>
  )
}

export default People