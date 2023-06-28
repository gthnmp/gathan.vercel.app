export default function Transition(){
  const items = [];
  for (let i = 1; i <= 8; i++) {
    const imageUrl = `/assets/${i}.jpg`;
    const item = (
      <div key={`layer__item-${i}`} className="layers__item">
        <div className="layers__item-img" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      </div>
    );
    items.push(item);
  }
  return (
    <div className="layers">
      {items}
    </div>
  )
}