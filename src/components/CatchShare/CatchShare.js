export default function CatchShare() {
  return (
    <div className="container catch">
      <h2>Спіймай всі акції</h2>
      <p>
        Підписуйся на Email розсилку і отримуй інформацію про всі акції, які
        будуть з`влятись у нашому магазині. А у нас їх багато :D
      </p>
      <form>
        <input type="email" placeholder="введіть" />
        <button type="submit">Підписатися</button>
      </form>
    </div>
  );
}
