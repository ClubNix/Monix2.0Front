import React from "react";
import Product, { ProductObject } from "../../Components/Products/Products";

const Catalog: React.FC = () => {
  const products: ProductObject[] = [
    {
      name: "Kinder",
      img: "https://confiseriedubonheur.net/akinsype/2021/03/qsfcxbvbcbcvx.webp",
      price: 1,
      stock: 10,
    },
    {
      name: "Ice Tea",
      img: "https://www.maisonreignier.com/wp-content/uploads/2020/08/ice-tea-peche-33cl.png",
      price: 1,
      stock: 10,
    },
    {
      name: "Monster",
      img: "https://cdn.monoprix.fr/cdn-cgi/image/width=580,quality=60,format=auto,metadata=none/assets/images/grocery/3741931/580x580.jpg",
      price: 2,
      stock: 10,
    },
    {
      name: "Ice Tea",
      img: "https://www.maisonreignier.com/wp-content/uploads/2020/08/ice-tea-peche-33cl.png",
      price: 1,
      stock: 10,
    },
    {
      name: "Monster",
      img: "https://cdn.monoprix.fr/cdn-cgi/image/width=580,quality=60,format=auto,metadata=none/assets/images/grocery/3741931/580x580.jpg",
      price: 2,
      stock: 10,
    },
    {
      name: "Ice Tea",
      img: "https://www.maisonreignier.com/wp-content/uploads/2020/08/ice-tea-peche-33cl.png",
      price: 1,
      stock: 10,
    },
    {
      name: "Monster",
      img: "https://cdn.monoprix.fr/cdn-cgi/image/width=580,quality=60,format=auto,metadata=none/assets/images/grocery/3741931/580x580.jpg",
      price: 2,
      stock: 10,
    },
  ];

  return (
    <div style={{ display: "flex", flexWrap: "wrap"}}>
      {products.map((value) => (
        <Product product={value} key={value.name} />
      ))}
    </div>
  );
};

export default Catalog;
