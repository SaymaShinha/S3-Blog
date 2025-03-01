import "./Quote.css";
import data from "../quotes.json";

const Quotes = () => {
  const quotes = data.map((item) => (
    <div key={item.id}>
      <p>{item.quote}</p>
    </div>
  ));

  return <div className="quotes">{quotes}</div>;
};

const Quote = () => {
  return (
    <>
      <h3>Quotes</h3>
      <div className="container">
        <Quotes />
      </div>
    </>
  );
};

export default Quote;
