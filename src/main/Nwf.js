import React, {useEffect} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { Autoplay, Pagination } from 'swiper/modules';

const Nwf = (props) => {
    const cb = props.data

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return(
        <div id="d2c">
             <Swiper id="ulbox" spaceBetween={0} slidesPerView={1} pagination={{ clickable: true }} autoplay={{ delay: 8000, disableOnInteraction: false,}} modules={[Pagination]}>
                        {cb.nwf.d2.map((v, idx)=>{
                            return(
                                <SwiperSlide key={v.id}>
                                <div key={v.id} className="d2c">
                                    <div className="bgimg">
                                        <img src={v.bgimg} alt={v.bgimgalt} />
                                    </div>
                                    <ul key={`${v.id}_ul`} className={`box${idx+1}`}>
                                        <div className="left">
                                        <li key={`${v.id}_st`} className={v.stclass}>{v.subtitle}<span className="line"></span></li>
                                        <li key={`${v.id}_t1`} className={v.t1class}>{v.title1}</li>
                                        <li key={`${v.id}_t2`} className={v.t2class}>{v.title2}</li>
                                        <li key={`${v.id}_c1`} className={v.c1class}>{v.c1}</li>
                                        <li key={`${v.id}_c2`} className={v.c2class}>{v.c2}</li>
                                        <li key={`${v.id}_c3`} className={v.c3class}>{v.c3}</li>
                                        <li key={`${v.id}_c4`} className={v.c4class}>{v.c4}</li>
                                        {/* <li><img src={v.img} alt={v.imgalt}/></li> */}
                                        <li key={`${v.id}_btn`}><button>{v.button}</button></li>
                                        </div>
                                     <div key={`${v.id}_right`} className="right">
                                        <img src={v.img} alt={v.imgalt} />
                                        <div>{v.ect}</div>
                                    </div>
                                    </ul>
                                </div>
                                </SwiperSlide>
                                
                            )
                                    })
                                }
                </Swiper>

               

        </div>
    )

}
    export default Nwf;
