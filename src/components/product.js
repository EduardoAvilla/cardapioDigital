import React, { useState } from "react";
import { useCallback, useEffect } from "react";
import generateQRCode from "../services/generateQRCode";

const products = [
 
  {
    img: "https://img.freepik.com/vetores-gratis/modelo-de-poster-de-restaurante-de-hamburgueres_23-2149005027.jpg?t=st=1702985214~exp=1702985814~hmac=7d7a6dc08f6d4b16011ced88db4f2b555ca6c63095bd2216c1913db4ef6847ee",
    nome: "Best Burguer",
    valor: "15.99",
    description:
      "pão de brioche, alface lisa fresquinha, bacon, queijo inglês e alho poró refogado com cream cheese.",
  },
  {
    img: "https://img.freepik.com/vetores-gratis/modelo-de-poster-de-comida-americana_23-2148843363.jpg",
    nome: "American Burguer",
    valor: "25.00",
    description:
      "pão de brioche, alface lisa fresquinha, bacon, queijo inglês e alho poró refogado com cream cheese.",
  },
  {
    img: "https://img.freepik.com/vetores-gratis/modelo-de-folheto-vertical-de-restaurante-de-hamburgueres_23-2149005024.jpg?t=st=1702985214~exp=1702985814~hmac=e586075573737772bc5e6d949d6265d9b9847d4d27f6a68e162343ca9d92a84c",
    nome: "Big Burguer",
    valor: "18.50",
    description:
      "pão de brioche, alface lisa fresquinha, bacon, queijo inglês e alho poró refogado com cream cheese.",
  },
];

const Product = () => {
  const [qrCodes, setQrCodes] = useState([]);

  useEffect(() => {
    const generateQRCodes = async () => {
      const qrCodePromises = products.map(async (element) => {
        const produtos = {
          nome: element.nome,
          valor: element.valor,
          descricao: element.description,
        };

        const res = await generateQRCode(produtos);
        console.log(res);

        return {
          url: res.url,
          produto: element.nome, // ou outras informações do produto que você deseja incluir
        };
      });

      const urls = await Promise.all(qrCodePromises);
      setQrCodes(urls);
    };

    generateQRCodes();
  }, []);

  console.log(qrCodes);

  console.log(qrCodes);

  return (
    <div className="card mb-3" style={{ maxWidth: "740px" }}>
      {products.map((item, index) => {
        const qrCode = qrCodes.find((code) => code.produto === item.nome);

        return (
          <div key={index} className="d-flex g-0">
            <div className="col-md-4 pt-5">
              <img
                src={item.img}
                className="img-fluid rounded-start"
                alt={`Product ${index}`}
              />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5>
                  <span className="badge bg-dark">{item.nome}</span>
                </h5>
                <h5>
                  Valor R$ <span className="badge bg-danger">{item.valor}</span>
                </h5>
                <p className="card-text">{item.description}</p>
              </div>
              <div className="d-flex justify-content-center">
                {qrCode && (
                  <img
                    src={qrCode.url}
                    className="img-fluid rounded-start"
                    alt={`QR Code ${index}`}
                  />
                )}
              </div>
            </div>
            <div class="p-2 bg-dark col-4">
              <div>
                <label
                  for="exampleFormControlTextarea1"
                  className="form-label text-light text-center"
                >
                  Observação:
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <div>
                
                <label
                  for="exampleFormControlTextarea1"
                  className="form-label text-light text-center"
                >
                  Quantidade
                </label>
                <input type="number" placeholder="0"></input>
              </div>
              <br></br>
                <div className="d-flex justify-content-center">
                <button type="button" class="btn btn-success">Adicionar</button>

                </div>
              
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
