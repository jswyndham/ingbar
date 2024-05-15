import ingBarFullCustomers from "../../images/imageCarousel/ing-bar-customers-full.jpg";
import ingBarHako from "../../images/imageCarousel/ing-bar-hako.jpg";
import ingBarCounterCustomer from "../../images/imageCarousel/rock-bar-ing-customers-counter.jpg";
import ingBarBeer from "../../images/imageCarousel/rock-bar-ing-serves-sapporo.jpg";
import ingBarRoom from "../../images/imageCarousel/rock-bar-ing-room.jpg";
import ingBarPouringBeer from "../../images/imageCarousel/rock-bar-ing-pouring-beer.jpg";

function imageCarouselSchema() {
  return [
    {
      title: "Rock Bar ING customers chilling",
      alt: "ING customers full",
      image: ingBarFullCustomers,
    },
    {
      title: "Rock Bar ING with the master, Hako",
      alt: "ING counter with Hako",
      image: ingBarHako,
    },
    {
      title: "Rock Bar ING counter",
      alt: "ING counter",
      image: ingBarCounterCustomer,
    },
    {
      title: "Rock Bar ING serves bottles of Sapporo",
      alt: "ING Bar Sapporo",
      image: ingBarBeer,
    },
    {
      title: "Rock Bar ING at the start of the night",
      alt: "ING Bar Room",
      image: ingBarRoom,
    },
    {
      title: "Rock Bar ING hospitality",
      alt: "ING Bar hospitality",
      image: ingBarPouringBeer,
    },
  ];
}

export default imageCarouselSchema;
