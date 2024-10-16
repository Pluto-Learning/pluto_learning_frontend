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
                slidesPerView={2}
                centeredSlides={true}
                spaceBetween={200}
                loop={false}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
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
