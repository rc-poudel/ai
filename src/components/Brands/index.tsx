'use client';

import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// Define responsive settings for Carousel
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1800 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 1800, min: 992 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 992, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3
  }
};

const Brands = () => {
  return (
    <section className="pt-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="dark:bg-gray-dark px-8 py-8">
            {/* <div className="flex flex-wrap items-center justify-center rounded-sm bg-gray-light px-8 py-8 dark:bg-gray-dark sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]"> */}
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                arrows={false}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="all 0.5s"
                transitionDuration={500}
                containerClass="carousel-container"
                itemClass="carousel-item"
              >
                {brandsData.map((brand) => (
                  <SingleBrand key={brand.id} brand={brand} />
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, imageLight, name } = brand;

  return (
    <div className="flex w-full items-center justify-center px-3 py-[15px]">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-10 w-full opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100"
      >
        <Image src={imageLight} alt={name} fill className="hidden dark:block" />
        <Image src={image} alt={name} fill className="block dark:hidden" />
      </a>
    </div>
  );
};
