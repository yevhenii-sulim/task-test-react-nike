export default function ToCatalog() {
  return (
    <div className="container to-catalog">
      <div className="tytle">
        <h2>Ми знаємо, що сподобається вашим “великим” друзям!</h2>
        <p>
          Обирай подарунок своїм друзями бодібілдерам із нашою новою колекцію
          термобілизни “Big warm”
        </p>
        <button type="button">До каталогу</button>
      </div>
      <div className="img">
        <img src={require('../../img/img/rectangle6.jpg')} alt="men" />
      </div>
    </div>
  );
}
