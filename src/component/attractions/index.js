import { Fragment } from "react";
import Heading from "../heading";
import "./index.css";
import Box from "../box";
import ListItem from "../list-item";

export default function Attractions({ list }) {
  return (
    <div className="attraction__block">
      <Heading border>Пам'ятки поблизу</Heading>

      <div className="attraction__list">
        {list.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function Item({ name, link }) {
  return (
    <Box>
      <a href={link}>{name}</a>
    </Box>
  );
}
