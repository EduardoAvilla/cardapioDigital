import react from "react";
import Product from "../components/product";
import './../App.css'
const Home = () => {
  return (
    <main className="w-100">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src="https://img.freepik.com/vetores-gratis/hamburguer-queijo-com-ilustracao-do-icone-do-vetor-dos-desenhos-animados-do-fogo-conceito-de-icone-de-objeto-de-comida-isolado-premium_138676-5539.jpg?w=740&t=st=1703065671~exp=1703066271~hmac=e81745180ff8f5f116921fba8edb9722a13278bb968e50b62aebedd054e653d2"
              alt=""
              width="50"
              height="44"
              className="d-inline-block align-text-start rounded-pill"
            />
            KING BURGUER
          </a>
        </div>
      </nav>
      <section className="w-100 d-flex">
        <div className="w-50">
          <Product></Product>
        </div>

        <div className="w-50 d-flex justify-content-center">
          <div class="col-md-5 col-lg-6 order-md-last p-4">
            <h4 class="d-flex justify-content-between align-items-center mb-3">
              <span className="badge bg-danger w-75">Your Cart</span>
              <span class="badge bg-dark rounded-pill">3</span>
            </h4>
            <ul class="list-group mb-3">
              <li class="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 class="my-0">Best Burguer</h6>
                  <small class="text-muted">Brief description</small>
                </div>
                <span class="text-muted">$15,99</span>
              </li>
              <li class="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 class="my-0">American Burguer</h6>
                  <small class="text-muted">Brief description</small>
                </div>
                <span class="text-muted">$26,00</span>
              </li>
              <li class="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 class="my-0">Big Burguer</h6>
                  <small class="text-muted">Brief description</small>
                </div>
                <span class="text-muted">$18,50</span>
              </li>
              <li class="list-group-item d-flex justify-content-between bg-light">
                <div class="text-success">
                  <h6 class="my-0">Promo code</h6>
                  <small>EXAMPLECODE</small>
                </div>
                <span class="text-success">−$5</span>
              </li>
              <li class="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>$54,49</strong>
              </li>
            </ul>

            <form class="card p-2">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Promo code"
                />
                <button type="submit" class="btn btn-secondary">
                  Redeem
                </button>
              </div>
             
            </form>
            <br></br>
            <div className="d-flex justify-content-center">
              <button type="submit" class="btn btn-danger">
                  Enviar Pedido
                </button>
              </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
