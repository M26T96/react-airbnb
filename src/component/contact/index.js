import "./index.css";
import Heading from "../heading";

export default function Contact({
  name,
  image,
  response_rate,
  response_time,
  info,
  phone,
}) {
  return (
    <div className="contact">
      <div className="contact__left">
        <Heading>Господар {name}</Heading>
        <img src={image} alt="photo" className="contact__photo"></img>
        <div className="contact__info">
          <span className="contact__info-item">{phone}</span>
          <span className="contact__info-item">{response_time}</span>
          <span className="contact__info-item">
            {response_rate}%відсотків швидкості відгуку
          </span>
        </div>
      </div>
      {info}
    </div>
  );
}
