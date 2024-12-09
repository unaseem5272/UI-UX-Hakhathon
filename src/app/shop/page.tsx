import Image from "next/image"; // Import Image component
import ShopImage from "@/Pictures/shophero.png";
import { IoIosArrowForward } from "react-icons/io";
import Products from "@/compoents/Products";
import BlowHero from "@/compoents/ShopBlowHero";
import SecondLastBar from "@/compoents/Shop2ndLastBar";

export default function ShopHero() {
  interface Card {
    name: string;
    age: number;
    description: string;
    image: string;
    price: string;
  }

  const data: Card[] = [
    {
      name: "Syltherine",
      price: "Rp 2.500.000",
      age: 30,
      image: "Abc",
      description: "Stylish cafe chair",
    },
    {
      name: "Jane Smith",
      price: "Rp 2.500.000",
      age: 25,
      image: "https://via.placeholder.com/100",
      description: "A creative designer who loves creating stunning visuals.",
    },
    // Other cards...
  ];

  return (
    <>
      {/* Shop Hero Section */}
      <div className="relative">
        <Image src={ShopImage} alt="Shop Hero Image" width={1200} height={500} />
        <div className="absolute top-[50%] left-[50%] flex justify-center flex-col items-center">
          <h3 className="font-bold text-[1.5rem]">Shop</h3>
          <div className="flex items-center">
            <h3>Home</h3>
            <IoIosArrowForward />
            <h3>Shop</h3>
          </div>
        </div>
      </div>
      <BlowHero />
      <div className="cardsContainer">
        {data.map((card, index) => (
          <div className="card" key={index} style={{ width: "15rem" }}>
            <Image
              src={card.image}
              alt={`Image of ${card.name}`} // Make sure every image has a meaningful alt text
              width={288} // Set appropriate width
              height={288} // Set appropriate height
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
      <div className="flex gap-2 justify-center">
        <button className="w-[2.5rem] h-[2.5rem] mb-3  bg-[#F9F1E7] hover:bg-[#B88E2F] cursor-pointer text-white:">1</button>
        <button className="w-[2.5rem] h-[2.5rem] mb-3  bg-[#F9F1E7] hover:bg-[#B88E2F] cursor-pointer text-white:">2</button>
        <button className="w-[2.5rem] h-[2.5rem] mb-3  bg-[#F9F1E7] hover:bg-[#B88E2F] cursor-pointer text-white:">3</button>
        <button className="w-[4rem] h-[2.5rem] mb-3  bg-[#F9F1E7] hover:bg-[#B88E2F] cursor-pointer text-white:">Next</button>
      </div>
      <div className="flex justify-evenly items-center p-2 w-[100%] h-[8rem] bg-[#F9F1E7]">
        <div>
          <Image src="/Group.png" width={40} height={40} alt="High Quality Icon" />
          <h4 className="font-bold">High Quality</h4>
          <p>crafted from top materials</p>
        </div>
        <div>
          <Image src="/warr.png" width={40} height={40} alt="Warranty Protection Icon" />
          <h4 className="font-bold">Warranty Protection</h4>
          <p>Over 2 years</p>
        </div>
        <div>
          <Image src="/vector.png" width={40} height={40} alt="Free Shipping Icon" />
          <h4 className="font-bold">Free Shipping</h4>
          <p>Order over 150 $</p>
        </div>
        <div>
          <Image src="/customer.png" width={40} height={40} alt="Customer Support Icon" />
          <h4 className="font-bold">24 / 7 Support</h4>
          <p>Dedicated support</p>
        </div>
      </div>
    </>
  );
}
