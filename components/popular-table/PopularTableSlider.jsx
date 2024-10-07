import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import VirtualTableCard from './VirtualTableCard';

export default function PopularTableSlider({ tables }) {

    console.log('tables: ', tables)

    return (
        <>
            <Swiper
                slidesPerView={2}
                centeredSlides={true}
                spaceBetween={200}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {/* {
                    tables && tables?.length > 0 && tables?.map((item) => {
                        <SwiperSlide>
                            <VirtualTableCard />
                        </SwiperSlide>
                    })
                } */}
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
                </SwiperSlide>
                <SwiperSlide>
                    <VirtualTableCard />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
