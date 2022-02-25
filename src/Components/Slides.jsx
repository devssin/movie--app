// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { MoviesContext } from '../context/MoviesContext';
// import required modules
import { Pagination } from 'swiper';
import { useContext } from 'react';

export default function App() {
  const {popular} = useContext(MoviesContext)
  console.log(popular);
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[]}
        className="mySwiper"
      >
        {popular.map((movie) => (
          <SwiperSlide className="relative">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              width={400}
              className="rounded-lg"
            />
            <h2 className="text-white absolute bottom-5 ml-5 bg-[#000000ad] p-2">
              {movie.title}
            </h2>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
