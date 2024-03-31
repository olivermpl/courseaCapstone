import MenuCard from './MenuCard';

const specials = [
  {
    name: 'Greek Salad',
    text: 'The famous greek Salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    price: 12.99,
    image: '/greeksalad.jpg',
  },
  {
    name: 'Bruchetta',
    text: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned salt and olive oil',
    price: 5.99,
    image: '/bruchetta.svg',
  },
  {
    name: 'Lemon Dessert',
    text: 'This comes straight from grandmas recipe book, every last ingredient has been sourced and is as authentic as can be imagined',
    price: 5.0,
    image: '/lemondessert.jpg',
  },
];

function Special() {
  return (
    <div className="specials">
      <div className="specials-header">
        <h1>This weeks special</h1>{' '}
        <button className="btn-primary">
          <span>Online Menu</span>
        </button>
      </div>
      <div className="menuCard-container">
        {specials.map((s) => {
          return <MenuCard key={s.name} {...s} />;
        })}
      </div>
    </div>
  );
}

export default Special;
