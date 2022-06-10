import React from 'react';
import img1 from '../images/banner1.jpg';
import img2 from '../images/banner2.jpg';
import img3 from '../images/banner3.jpg';

export default function Carousel() {
    return (
        <>
            <div className='body2'>

                <div class='slider'>
                    <input style={{ display: "none" }} name="input-slider" id='input-slide-0' type="radio" class='input-slide input-slide-num' />
                    <input style={{ display: "none" }} name="input-slider" id='input-slide-1' type="radio" class='input-slide input-slide-num' />
                    <input style={{ display: "none" }} name="input-slider" id='input-slide-2' type="radio" class='input-slide input-slide-num' />
                    <input style={{ display: "none" }} name="input-slider" id='input-slide-3' type="radio" class='input-slide input-slide-num' />
                    <input style={{ display: "none" }} name="input-slider" id='input-slide-autoplay' type="radio" class='input-slide' checked />
                    <ul>
                        <li class='slide-0'> <img class="text-slide" src={img1} /></li>
                        <li class='slide-1'> <img class="text-slide" src={img2} /></li>
                        <li class='slide-2'><img class="text-slide" src={img3} /></li>
                        <li class='slide-3'><img class="text-slide" src={img1}/></li>
                    </ul>
                    <div class='slider-arrow-prev'>
                        <label class='slide-0' for='input-slide-0'></label>
                        <label class='slide-1' for='input-slide-1'></label>
                        <label class='slide-2' for='input-slide-2'></label>
                        <label class='slide-3' for='input-slide-3'></label>
                    </div>
                    <div class='slider-arrow-next'>
                        <label class='slide-0' for='input-slide-0'></label>
                        <label class='slide-1' for='input-slide-1'></label>
                        <label class='slide-2' for='input-slide-2'></label>
                        <label class='slide-3' for='input-slide-3'></label>
                    </div>
                    <div class='slider-dot'>
                        <label class='slide-0' for='input-slide-0'></label>
                        <label class='slide-1' for='input-slide-1'></label>
                        <label class='slide-2' for='input-slide-2'></label>
                        <label class='slide-3' for='input-slide-3'></label>
                    </div>
                </div>


            </div>

        </>
    )
}
