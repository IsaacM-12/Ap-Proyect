import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";


export default function Product() {
  const [product, setProduct] = React.useState([])
  let config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const { productID } = useParams();
  console.log(productID);
  React.useEffect(() => {
    axios.get(`http://localhost:8080/product/${productID}`, config)
      .then(res => { return res.data; })
      .then(product => setProduct(product))
  }, []);

  console.log(product);
  return (
    <section className="text-gray-400 bg-gray-900">
      <div className="container px-5 py-24 mx-auto">
        <div className="row">
          <div className="col-lg-6">
            <img
              alt={product.name}
              className="w-full h-64 object-cover object-center rounded"
              src={product.url}
            />
          </div>
          <div className="col-lg-6">
            <div className="lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-white text-3xl font-medium mb-8">
                {product.name}
              </h1>
              <p className="leading-relaxed">{product.description}</p>
              <div className="flex mt-6 pb-5 border-b-2 border-gray-800 mb-5"></div>
              <div className="flex">
                <span className="text-black text-2xl font-medium">
                  {product.price}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}