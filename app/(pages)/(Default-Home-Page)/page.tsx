import Image from 'next/image'
import sectionImage from "../../public/images/scandinavian-interior-mockup-wall-decal-background 1.png"
import diningPhoto from "../../public/images/Mask Group.png"
import LivingPhoto from "../../public/images/image 100.png"
import BedroomPhoto from "../../public/images/image 101.png"
// import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import pro1 from "../../public/images/Images.png"
import pro2 from "../../public/images/image 2.png"
import pro3 from "../../public/images/image 3.png"
import pro4 from "../../public/images/Images(1).png"
import pro5 from "../../public/images/Images(2).png"
import pro6 from "../../public/images/Images(3).png"
import pro7 from "../../public/images/Images(4).png"
import pro8 from "../../public/images/image 8.png"

import Label1 from "../../public/images/Label.png"
import ProductCard from '@/app/Components/ProductCard'

import rect36 from "../../public/images/Furniture-image/Rectangle 36.png"
import rect38 from "../../public/images/Furniture-image/Rectangle 38.png"
import rect37 from "../../public/images/Furniture-image/Rectangle 37.png"
import rect39 from "../../public/images/Furniture-image/Rectangle 39.png"
import rect40 from "../../public/images/Furniture-image/Rectangle 40.png"
import rect44 from "../../public/images/Furniture-image/Rectangle 44.png"
import rect41 from "../../public/images/Furniture-image/Rectangle 41.png"
import rect43 from "../../public/images/Furniture-image/Rectangle 43.png"
import rect45 from "../../public/images/Furniture-image/Rectangle 45.png"
// import carousalImg1 from "../../public/images/carousle/Image.png"
// import carousalImg2 from "../../public/images/carousle/Rectangle 25.png"



// const slides = [
//   { id: 1, img: carousalImg1, num: "01", category: "Bed Room", title: "Inner Peace" },
//   { id: 2, img: carousalImg2, num: "02", category: "Living Room", title: "Nordic Vibe" },
//   { id: 3, img: carousalImg1, num: "03", category: "Dining Room", title: "Cozy Space" },
// ];










export { diningPhoto, LivingPhoto, BedroomPhoto, sectionImage }

const IMAGES_DATA = [
  { id: 1, image: diningPhoto, text: "Dining" },
  { id: 2, image: LivingPhoto, text: "Living" },
  { id: 3, image: BedroomPhoto, text: "Bedroom" }
];

const PRODUCT_IMAGE_DATA = [
  {
    id: 1,
    Label: Label1,
    image: pro1,
    heading: "Syltherine",
    paragraph: "Stylish cafe chair",
    price: "Rp 2.500.000",
    cutPrice: "Rp 3.500.000",
  },
  {
    id: 2,

    image: pro2,
    heading: "Leviosa",
    paragraph: "Stylish cafe chair",
    price: "Rp 2.500.000",
  },
  {
    id: 3,
    Label: Label1,

    image: pro3,
    heading: "Lolito",
    paragraph: "Luxury big sofa",
    price: "Rp 7.000.000",
    cutPrice: "Rp 14.000.000"

  },
  {
    id: 4,
    Label: Label1,

    image: pro4,
    heading: "Respira",
    paragraph: "Outdoor bar table and stool",
    price: "Rp 500.000"
  },
  {
    id: 5,
    image: pro5,
    heading: "Grifo",
    paragraph: "Night lamp",
    price: "Rp 1.500.000"
  },
  {
    id: 6,
    Label: Label1,

    image: pro6,
    heading: "Muggo",
    paragraph: "Small mug",
    price: "Rp 150.000"
  },
  {
    id: 7,
    Label: Label1,

    image: pro7,
    heading: "Pingky",
    paragraph: "Cute bed set",
    price: "Rp 7.000.000",
    cutPrice: "Rp 14.000.000"
  },
  {
    id: 8,
    Label: Label1,

    image: pro8,
    heading: "Potty",
    paragraph: "Minimalist flower pot",
    price: "Rp 500.000"
  }
]

export default function Page() {
  return (
    <main className="w-full min-h-screen bg-white space-y-[32px]">
      {/* Hero Section */}
      <section className="relative w-full h-[716px] overflow-hidden">
        <Image
          src={sectionImage}
          alt="Beautiful scandinavian interior mockup background showing a decorated wall"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        <div className="absolute inset-x-4 bottom-8 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:left-auto md:right-[5%] lg:right-[10%] w-[calc(100%-32px)] max-w-[643px] bg-[#FFF3E3] rounded-[10px] p-6 sm:p-10 md:p-14 shadow-lg">
          <div className="flex flex-col gap-4 w-full">
            <span className="font-poppins font-semibold text-[#333333] text-sm tracking-[3px] uppercase">
              New Arrival
            </span>

            <h1 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-[52px] [-webkit-text-stroke:1px_black] lg:leading-[65px] text-[#B88E2F]">
              Discover Our <br className="hidden sm:inline" />New Collection
            </h1>

            <p className="font-poppins font-medium text-base sm:text-lg leading-relaxed text-[#333333] mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
            </p>

            <button className="bg-[#B88E2F] w-full sm:w-fit cursor-pointer hover:bg-[#a07b27] transition-all px-12 py-4  font-poppins font-bold text-white text-sm uppercase tracking-wider rounded-sm">
              BUY NOW
            </button>
          </div>
        </div>
      </section>
      {/* //image  */}

      <section className="w-full max-w-[1283px] mx-auto py-8 flex flex-col gap-12 items-center">
        {/* Header */}
        <div className="text-center max-w-[559px] flex flex-col gap-2">
          <h2 className="font-bold font-poppins text-2xl sm:text-[32px] text-[#333333]">
            Browse The Range
          </h2>
          <p className="font-poppins text-base sm:text-[20px] text-[#8A8A8A]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full ">
          {IMAGES_DATA.map((item) => (
            <div key={item.id} className="flex flex-col items-center gap-4 group cursor-pointer">
              <div className="relative w-full aspect-[4/5] rounded-lg">
                <Image
                  src={item.image}
                  alt={item.text}
                  fill
                  className="object-cover  transition-transform duration-300"
                />
              </div>
              <h3 className="font-poppins font-semibold text-lg sm:text-xl text-[#333333]">
                {item.text}
              </h3>
            </div>
          ))}
        </div>
      </section>


      {/* //products  */}
      <section className='w-full max-w-[1236px]  mx-auto items-center space-y-[32px]'>
        <h2 className='font-bold text-[40px] flex justify-center pb-3'>Our Products</h2>
        <div className='grid grid-cols-1 gap-[32px]  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center mx-auto'>

          {PRODUCT_IMAGE_DATA.map(ProductData => (
            <ProductCard
              id={ProductData.id}
              key={ProductData.id}
              Label={ProductData.Label ?? ""}
              image={ProductData.image}
              heading={ProductData.heading}
              paragraph={ProductData.paragraph}
              price={ProductData.price}
              cutPrice={ProductData.cutPrice}

            />
          ))}





        </div>
        <button className="text-[#B88E2F] w-full sm:w-fit cursor-pointer    border-[#B88E2F] border-[1px] flex justify-center mx-auto items-center transition-all px-12 py-4  font-poppins font-bold text-sm uppercase tracking-wider rounded-sm">
          Show More
        </button>

      </section>
      {/* // furniture picture  */}

      {/* //carousle  */}
      <div className='w-full max-w-[1440] flex gap-3 items-center mx-auto  justify-between'>
        <div className='w-full max-w-[422px]  flex flex-col '>
          <h1 className='font-bold font-poppins text-[40px] leading-[120%] tracking-normal'>50+ Beautiful rooms
            inspiration</h1>
          <p className='text-[16px] font-medium leading-[150%] tracking-normal'>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>

        </div>

        {/* //caorusle here  */}
        


      </div>
      {/* 9. Bottom-Right Kitchen Tiles (Rectangle 44) */}
      <section className="w-full max-w-[1799px] space-x-[-39px] space-y-[-39px] mx-auto py-12  overflow-hidden">

        {/* Header Section */}
        <div className="flex flex-col items-center justify-center text-center mb-10">
          <h2 className="font-poppins font-semibold text-[20px] text-gray-500 mb-1">
            Share your setup with
          </h2>
          <h1 className="font-poppins font-bold text-[40px] leading-[120%] tracking-normal text-[#3A3A3A]">
            #FuniroFurniture
          </h1>
        </div>

        {/* Grid Layout Setup */}
        <div className="grid grid-cols-12 gap-4 auto-rows-[140px] md:auto-rows-[180px] lg:auto-rows-[220px]">

          {/* --- TOP ROW BLOCKS --- */}
          {/* 1. Tall Left Shelf (Rectangle 36) */}
          <div className="col-span-2 row-span-2">
            <Image src={rect36} alt="Furniture setup" className="w-full h-full object-cover rounded-sm" />
          </div>

          {/* 2. Center-Left Laptop Desk (Rectangle 38) */}
          <div className="col-span-4 row-span-2">
            <Image src={rect38} alt="Furniture setup" className="w-full h-full object-cover rounded-sm" />
          </div>

          {/* 3. Center Tall Dining Set (Rectangle 40) */}
          <div className="col-span-3 row-span-3">
            <Image src={rect40} alt="Furniture setup" className="w-full h-full object-cover rounded-sm" />
          </div>

          {/* 4. Center-Right Cozy Bedroom (Rectangle 43) */}
          <div className="col-span-2 row-span-2">
            <Image src={rect43} alt="Furniture setup" className="w-full h-full object-cover rounded-sm" />
          </div>

          {/* 5. Right Edge Brick Dining Wall (Rectangle 45) */}
          <div className="col-span-1 row-span-2">
            <Image src={rect45} alt="Furniture setup" className="w-full h-full object-cover rounded-sm" />
          </div>


          {/* --- BOTTOM ROW BLOCKS --- */}

          {/* 6. Bottom-Left Vintage Chair (Rectangle 37) */}
          <div className="col-span-2 row-span-2">
            <Image src={rect37} alt="Furniture setup" className="w-full h-full object-cover rounded-sm" />
          </div>

          {/* 7. Bottom Center-Left Two Stool Vases (Rectangle 39) */}
          <div className="col-span-4 row-span-2">
            <Image src={rect39} alt="Furniture setup" className="w-full h-full object-cover rounded-sm" />
          </div>

          {/* 8. Bottom Center-Right Small Frame (Rectangle 41) */}
          <div className="col-span-1 row-span-1">
            <Image src={rect41} alt="Furniture setup" className="w-full h-full object-cover rounded-sm" />
          </div>

          {/* 9. Bottom-Right Kitchen Tiles (Rectangle 44) */}
          <div className="col-span-2 row-span-1">
            <Image src={rect44} alt="Furniture setup" className="w-full h-full object-cover rounded-sm" />
          </div>

        </div>
      </section>

    </main>
  )
}
