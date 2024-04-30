import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';



function achievements() {
    return (

        <section id="achievements" className="box">
            <h1 data-entrance="from-bottom">Achievements</h1>
            <p data-entrance="from-bottom">Small steps towards a bigger goal</p>
            <Swiper
                pagination={{
                    type: 'progressbar',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src="https://manasjhamj.github.io/portfolio-basic/assets/images/achievements/2.svg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://manasjhamj.github.io/portfolio-basic/assets/images/achievements/1.svg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://manasjhamj.github.io/portfolio-basic/assets/images/achievements/3.svg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://manasjhamj.github.io/portfolio-basic/assets/images/achievements/4.svg" alt="" /></SwiperSlide>
            </Swiper>
        </section>
    )
}

export default achievements