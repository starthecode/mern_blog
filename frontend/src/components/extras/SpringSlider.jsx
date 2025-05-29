import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Heading } from '../Heading/Heading';
import { SecondaryButton } from '../Buttons/SecondaryButton';
import NewsCards from '../Cards/NewsCards';

export default function ServiceSlider({ otherservicesData }) {
  return (
    <section
      className="relative pt-28 xl:pb-40 z-10 bg-black"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://bizsiteuploads.blob.core.windows.net/uploads/1744992778190-back-image.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
     
      <NewsCards />
    </section>
  );
}
