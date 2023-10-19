import "./index.css";
import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";
import Gt from "./guests.svg";
import Bd from "./bedrooms.svg";
import Bds from "./beds.svg";
import Bts from "./baths.svg";

export default function Property_details({ guests, bedrooms, beds, baths }) {
  return (
    <Box className="property">
      <Heading>Деталі властивості</Heading>
      <ListItem imageSrc={Gt}>
        <span>{guests} гості</span>
      </ListItem>
      <ListItem imageSrc={Bd}>
        <span>{bedrooms} спальня</span>
      </ListItem>
      <ListItem imageSrc={Bds}>
        <span>{beds} ліжко</span>
      </ListItem>
      <ListItem imageSrc={Bts}>
        <span>{baths} ванна кімната</span>
      </ListItem>
    </Box>
  );
}
