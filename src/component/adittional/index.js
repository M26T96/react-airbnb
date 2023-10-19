import "./index.css";
import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";

export default function Adittional({
  house_rules,
  cancellation_policy,
  local_transportation,
  host_languages,
  special_offers,
}) {
  return (
    <Box className="adittional">
      <ListItem>
        <div className="adittional__item">
          <Heading>Правила дому</Heading>
          {house_rules}
        </div>
      </ListItem>
      <ListItem>
        <div className="adittional__item">
          <Heading>Політика спілкування</Heading>
          {cancellation_policy}
        </div>
      </ListItem>
      <ListItem>
        <div className="adittional__item">
          <Heading>Місцевий транспорт</Heading>
          {local_transportation}
        </div>
      </ListItem>
      <ListItem>
        <div className="adittional__item">
          <Heading>Мови хоста</Heading>
          {host_languages}
        </div>
      </ListItem>
      <ListItem>
        <div className="adittional__item">
          <Heading>Спеціальні пропозиції</Heading>
          {special_offers}
        </div>
      </ListItem>
    </Box>
  );
}
