import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import VirtualTableCard from './VirtualTableCard';

export default function PopularTableSlider({ table }) {

    console.log('tablesssssss: ', table)

    return (
        <>
            <Swiper
                slidesPerView={1}
                centeredSlides={true}
                spaceBetween={30}
                loop={false}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 100,
                    },
                    992: {
                        slidesPerView: 2,
                        spaceBetween: 200,
                    },
                }}
            >
                {
                    table?.length > 0 && table?.map((item) => {
                        return (
                            <SwiperSlide>
                                <VirtualTableCard tableData={item} />
                            </SwiperSlide>
                        )
                    })
                }

                {/* <SwiperSlide>
                    <VirtualTableCard />
                </SwiperSlide>
                <SwiperSlide>
                    <VirtualTableCard />
                </SwiperSlide>
                <SwiperSlide>
                    <VirtualTableCard />
                </SwiperSlide>
                <SwiperSlide>
                    <VirtualTableCard />
                </SwiperSlide>
                <SwiperSlide>
                    <VirtualTableCard />
                </SwiperSlide>
                <SwiperSlide>
                    <VirtualTableCard />
                </SwiperSlide>
                <SwiperSlide>
                    <VirtualTableCard />
                </SwiperSlide>
                <SwiperSlide>
                    <VirtualTableCard />
                </SwiperSlide> */}
            </Swiper>
        </>
    );
}
