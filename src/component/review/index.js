import { Fragment } from "react";
import Heading from "../heading";
import "./index.css";
import Box from "../box";

export default function Review({ list }) {
  return (
    <div className="review__block">
      <Heading border>Відгуки клієнтів</Heading>

      <div className="review__list">
        {list.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function Item({ guestName, rating, review }) {
  return (
    <div className="review">
      <Box className="review__card">
        <div className="review-item">
          <span className="review__name">{guestName}</span>
          <span className="review__rating">Рейтинг: {rating}</span>
        </div>
        <span className="review__description">{review}</span>
      </Box>
    </div>
  );
}
