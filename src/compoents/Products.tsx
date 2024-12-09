import Image from "next/image";

export default function Products() {
  interface Card {
    name: string;
    age: number;
    description: string;
    image: string;
    price: string;
  }

  const data: Card[] = [
    {
      name: 'Syltherine',
      price: "Rp 2.500.000",
      age: 30,
      image: "/p1.png",
      description: 'Stylish cafe chair',
    },
    {
      name: 'Jane Smith',
      price: "Rp 2.500.000",
      age: 25,
      image: "/p2.png",
      description: 'A creative designer who loves creating stunning visuals.',
    },
    {
      name: 'Sam Wilson',
      price: "Rp 2.500.000",
      age: 28,
      image: '/p3.png',
      description: 'A software engineer specializing in backend systems.',
    },
    // Other product data...
  ];

  return (
    <>
      <div className="subText1">
        <h2 className="items-center justify-center pt-5 p-2 font-extrabold text-[3rem]">Our Product</h2>
      </div>
      <div className="cardsContainer">
        {data.map((card, index) => (
          <div className="card" key={index} style={{ width: "15rem" }}>
            <Image
              src={card.image}
              alt={card.name} // Provide alt text here for accessibility
              width={288} // Adjust width as needed
              height={288} // Adjust height as needed
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title" style={{ fontWeight: "bold" }}>
                {card.name}
              </h5>
              <p className="card-text">{card.description}</p>
              <h5 className="card-title" style={{ fontWeight: "bold" }}>
                {card.price}
              </h5>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mb-12">
        <button className="productBtn text-[#B88E2F] p-2 border-2 border-[#B88E2F]">Show More</button>
      </div>
    </>
  );
}
