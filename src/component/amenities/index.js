import "./index.css";
import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";
import Hp from "./hasPool.svg";
import Hg from "./hasGym.svg";
import Hfbf from "./hasFreeBreakfast.svg";
import Wifi from "./hasFreeWiFi.svg";
import Parking from "./hasParking.svg";
import Pets from "./hasPetsAllowed.svg";
import Air from "./hasAirportShuttle.svg";
import Concierg from "./hasConciergeService.svg";
import Rooms from "./hasRoomService.svg";
import Child from "./hasChildFriendly.svg";

export default function Property_details({
  hasPool,
  hasGym,
  hasFreeBreakfast,
  hasFreeWiFi,
  hasParking,
  hasPetsAllowed,
  hasAirportShuttle,
  hasConciergeService,
  hasRoomService,
  hasChildFriendly,
}) {
  return (
    <Box className="amenities">
      <Heading>Зручності</Heading>
      <ListItem imageSrc={Hp}>
        <span>{hasPool} Басейн</span>
      </ListItem>
      <ListItem imageSrc={Hg}>
        <span>{hasGym} Спортивний зал</span>
      </ListItem>
      <ListItem imageSrc={Hfbf}>
        <span>{hasFreeBreakfast} Безкоштовний сніданок</span>
      </ListItem>
      <ListItem imageSrc={Wifi}>
        <span>{hasFreeWiFi} Безкоштовний wi-fi</span>
      </ListItem>
      <ListItem imageSrc={Parking}>
        <span>{hasParking} Безкоштовний вуличний паркінг</span>
      </ListItem>
      <ListItem imageSrc={Pets}>
        <span>{hasPetsAllowed} Дозволено розміщення з домашіми тваринами</span>
      </ListItem>
      <ListItem imageSrc={Air}>
        <span>{hasAirportShuttle} Трансфер з/до аеропорту</span>
      </ListItem>
      <ListItem imageSrc={Concierg}>
        <span>{hasConciergeService} Консьєрж-сервіс</span>
      </ListItem>
      <ListItem imageSrc={Rooms}>
        <span>{hasRoomService} Обслуговування номерів</span>
      </ListItem>
      <ListItem imageSrc={Child}>
        <span>{hasChildFriendly} Підходить для дітей</span>
      </ListItem>
    </Box>
  );
}
