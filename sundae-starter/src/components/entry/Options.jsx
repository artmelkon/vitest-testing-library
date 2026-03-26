import { useEffect, useState } from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import ScoopOption from "./ScoopOption";

export default function Options({ optionType }) {
  const [items, setItems] = useState([])

  // optionType is 'scoops' or 'toppings'
  useEffect(() => {
    axios.get(`http://localhost:3030/${optionType}`)
      .then(res => setItems(res.data))
      .catch(err => {
        // TODO: handle errors response
      })
  }, [optionType])

  const ItemComponent = optionType === 'scoops' ? ScoopOption : null

  const optionItems = items.map(item => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ))

  return <Row>{optionItems}</Row>
}
