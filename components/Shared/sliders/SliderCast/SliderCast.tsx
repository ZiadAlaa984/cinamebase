"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode } from "swiper/modules";
import "./styles.css";
import Image from "next/image";
import { Cast } from "@/interface/Types";

export default function SliderCast({ cast }: { cast: Cast[] }) {
  return (
    <Swiper
      slidesPerView={10}
      spaceBetween={20}
      freeMode={true}
      modules={[FreeMode]}
      className="mySwiper"
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 7,
          spaceBetween: 30,
        },
        1440: {
          slidesPerView: 10,
          spaceBetween: 40,
        },
      }}
    >
      {cast.length > 0 ? (
        cast.map(
          (actor, index) =>
            actor.profile_path && (
              <SwiperSlide
                key={index}
                className="rounded-lg overflow-hidden text-[12px] bg-transparent text-2xl backdrop-blur-3xl border border-white/30 lg:text-sm mBlur borderGlass inline-block text-white font-medium"
              >
                {/* <Link href={`/celebritiesDetalis/${actor.id}`}> */}
                <div className="cast-member">
                  {actor.profile_path ? (
                    <Image
                      src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                      alt={actor.name}
                      width={300}
                      height={200}
                      className="cast-img h-[40px] object-conver "
                    />
                  ) : (
                    <div className="no-image">No Image</div>
                  )}
                  <p className="cast-name text-sm mt-1">
                    {actor.name.split(" ").slice(0, 1).join(" ")}
                  </p>
                </div>
                {/* </Link> */}
              </SwiperSlide>
            )
        )
      ) : (
        <h3 className="text-white font-bold text-center text-3xl">
          No cast available
        </h3>
      )}
    </Swiper>
  );
}
