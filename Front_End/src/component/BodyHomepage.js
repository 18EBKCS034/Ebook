import React from 'react';

import img1 from '../images/book-1.png';
import img2 from '../images/book-2.png';
import img3 from '../images/book-3.png';
import img4 from '../images/book-4.png';
import img5 from '../images/book-5.png';
import img6 from '../images/book-6.png';
import img7 from '../images/stand.png';

export default function BodyHomepage() {
 
    return (
        <>
            <section class="home" id="home">

                <div class="row">

                    <div class="content">
                        <h3>upto 75% off</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam deserunt nostrum accusamus. Nam alias sit necessitatibus, aliquid ex minima at!</p>
                        <a href="#" class="btn">shop now</a>
                    </div>

                    <div class="swiper books-slider ">
                        <div class="swiper-wrapper carousel-caption d-none d-md-block">
                            <a href="#" class="swiper-slide"><img src={img1} alt="" /></a>
                            <a href="#" class="swiper-slide"><img src={img2} alt="" /></a>
                            <a href="#" class="swiper-slide"><img src={img3} alt="" /></a>
                            <a href="#" class="swiper-slide"><img src={img4} alt="" /></a>
                            <a href="#" class="swiper-slide"><img src={img5} alt="" /></a>
                            {/* <a href="#" class="swiper-slide"><img src={img6} alt="" /></a> */}
                        </div>
                        <img src={img7} class="stand" alt="" />
                    </div>

                </div>

            </section>
            <section class="icons-container">

                <div class="icons">
                    <i class="fas fa-shipping-fast"></i>
                    <div class="content">
                        <h3>free shipping</h3>
                        <p>order over $100</p>
                    </div>
                </div>

                <div class="icons">
                    <i class="fas fa-lock"></i>
                    <div class="content">
                        <h3>secure payment</h3>
                        <p>100 secure payment</p>
                    </div>
                </div>

                <div class="icons">
                    <i class="fas fa-redo-alt"></i>
                    <div class="content">
                        <h3>easy returns</h3>
                        <p>10 days returns</p>
                    </div>
                </div>

                <div class="icons">
                    <i class="fas fa-headset"></i>
                    <div class="content">
                        <h3>24/7 support</h3>
                        <p>call us anytime</p>
                    </div>
                </div>

            </section>

            {/* <!-- icons section ends --> */}

            {/* <!-- featured section starts  --> */}

            <section class="featured" id="featured">

                <h1 class="heading"> <span>featured books</span> </h1>

                <div class="swiper featured-slider">

                    <div class="swiper-wrapper">

                        <div class="swiper-slide box">
                            <div class="icons">
                                <a href="#" class="fas fa-search"></a>
                                <a href="#" class="fas fa-heart"></a>
                                <a href="#" class="fas fa-eye"></a>
                            </div>
                            <div class="image">
                                <img src={img1} alt="" />
                            </div>
                            <div class="content">
                                <h3>featured books</h3>
                                <div class="price">$15.99 <span>$20.99</span></div>
                                <a href="#" class="btn">add to cart</a>
                            </div>
                        </div>

                        <div class="swiper-slide box">
                            <div class="icons">
                                <a href="#" class="fas fa-search"></a>
                                <a href="#" class="fas fa-heart"></a>
                                <a href="#" class="fas fa-eye"></a>
                            </div>
                            <div class="image">
                                <img src="image/book-2.png" alt="" />
                            </div>
                            <div class="content">
                                <h3>featured books</h3>
                                <div class="price">$15.99 <span>$20.99</span></div>
                                <a href="#" class="btn">add to cart</a>
                            </div>
                        </div>

                        <div class="swiper-slide box">
                            <div class="icons">
                                <a href="#" class="fas fa-search"></a>
                                <a href="#" class="fas fa-heart"></a>
                                <a href="#" class="fas fa-eye"></a>
                            </div>
                            <div class="image">
                                <img src="image/book-3.png" alt="" />
                            </div>
                            <div class="content">
                                <h3>featured books</h3>
                                <div class="price">$15.99 <span>$20.99</span></div>
                                <a href="#" class="btn">add to cart</a>
                            </div>
                        </div>

                        <div class="swiper-slide box">
                            <div class="icons">
                                <a href="#" class="fas fa-search"></a>
                                <a href="#" class="fas fa-heart"></a>
                                <a href="#" class="fas fa-eye"></a>
                            </div>
                            <div class="image">
                                <img src="image/book-4.png" alt="" />
                            </div>
                            <div class="content">
                                <h3>featured books</h3>
                                <div class="price">$15.99 <span>$20.99</span></div>
                                <a href="#" class="btn">add to cart</a>
                            </div>
                        </div>

                        <div class="swiper-slide box">
                            <div class="icons">
                                <a href="#" class="fas fa-search"></a>
                                <a href="#" class="fas fa-heart"></a>
                                <a href="#" class="fas fa-eye"></a>
                            </div>
                            <div class="image">
                                <img src="image/book-5.png" alt="" />
                            </div>
                            <div class="content">
                                <h3>featured books</h3>
                                <div class="price">$15.99 <span>$20.99</span></div>
                                <a href="#" class="btn">add to cart</a>
                            </div>
                        </div>

                        <div class="swiper-slide box">
                            <div class="icons">
                                <a href="#" class="fas fa-search"></a>
                                <a href="#" class="fas fa-heart"></a>
                                <a href="#" class="fas fa-eye"></a>
                            </div>
                            <div class="image">
                                <img src="image/book-6.png" alt="" />
                            </div>
                            <div class="content">
                                <h3>featured books</h3>
                                <div class="price">$15.99 <span>$20.99</span></div>
                                <a href="#" class="btn">add to cart</a>
                            </div>
                        </div>

                        <div class="swiper-slide box">
                            <div class="icons">
                                <a href="#" class="fas fa-search"></a>
                                <a href="#" class="fas fa-heart"></a>
                                <a href="#" class="fas fa-eye"></a>
                            </div>
                            <div class="image">
                                <img src="image/book-7.png" alt="" />
                            </div>
                            <div class="content">
                                <h3>featured books</h3>
                                <div class="price">$15.99 <span>$20.99</span></div>
                                <a href="#" class="btn">add to cart</a>
                            </div>
                        </div>

                        <div class="swiper-slide box">
                            <div class="icons">
                                <a href="#" class="fas fa-search"></a>
                                <a href="#" class="fas fa-heart"></a>
                                <a href="#" class="fas fa-eye"></a>
                            </div>
                            <div class="image">
                                <img src="image/book-8.png" alt="" />
                            </div>
                            <div class="content">
                                <h3>featured books</h3>
                                <div class="price">$15.99 <span>$20.99</span></div>
                                <a href="#" class="btn">add to cart</a>
                            </div>
                        </div>

                        <div class="swiper-slide box">
                            <div class="icons">
                                <a href="#" class="fas fa-search"></a>
                                <a href="#" class="fas fa-heart"></a>
                                <a href="#" class="fas fa-eye"></a>
                            </div>
                            <div class="image">
                                <img src="image/book-9.png" alt="" />
                            </div>
                            <div class="content">
                                <h3>featured books</h3>
                                <div class="price">$15.99 <span>$20.99</span></div>
                                <a href="#" class="btn">add to cart</a>
                            </div>
                        </div>

                        <div class="swiper-slide box">
                            <div class="icons">
                                <a href="#" class="fas fa-search"></a>
                                <a href="#" class="fas fa-heart"></a>
                                <a href="#" class="fas fa-eye"></a>
                            </div>
                            <div class="image">
                                <img src="image/book-10.png" alt="" />
                            </div>
                            <div class="content">
                                <h3>featured books</h3>
                                <div class="price">$15.99 <span>$20.99</span></div>
                                <a href="#" class="btn">add to cart</a>
                            </div>
                        </div>

                    </div>

                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>

                </div>

            </section>

            {/* <!-- featured section ends --> */}

            {/* <!-- newsletter section starts --> */}

            {/* <section class="newsletter">

                <form action="">
                    <h3>subscribe for latest updates</h3>
                    <input type="email" name="" placeholder="enter your email" id="" class="box" />
                    <input type="submit" value="subscribe" class="btn" />
                </form>

            </section> */}

            {/* <!-- newsletter section ends --> */}

            {/* <!-- arrivals section starts  --> */}

            {/* <section class="arrivals" id="arrivals">

                <h1 class="heading"> <span>new arrivals</span> </h1>

                <div class="swiper arrivals-slider">

                    <div class="swiper-wrapper">

                        <a href="#" class="swiper-slide box">
                            <div class="image">
                                <img src="image/book-1.png" alt="" />
                            </div>
                            <div class="content">
                                <h3>new arrivals</h3>
                                <div class="price">$15.99 <span>$20.99</span></div>
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                </div>
                            </div>
                        </a>

                        <a href="#" class="swiper-slide box">
                            <div class="image">
                                <img src="image/book-2.png" alt="" />
                            </div>
                            <div class="content">
                                <h3>new arrivals</h3>
                                <div class="price">$15.99 <span>$20.99</span></div>
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                </div>
                            </div>
                        </a>

                        <a href="#" class="swiper-slide box">
                            <div class="image">
                                <img src="image/book-3.png" alt="" />
                            </div>
                            <div class="content">
                                <h3>new arrivals</h3>
                                <div class="price">$15.99 <span>$20.99</span></div>
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                </div>
                            </div>
                        </a>

                        <a href="#" class="swiper-slide box">
                            <div class="image">
                                <img src="image/book-4.png" alt="" />
                            </div>
                            <div class="content">
                                <h3>new arrivals</h3>
                                <div class="price">$15.99 <span>$20.99</span></div>
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                </div>
                            </div>
                        </a>

                        <a href="#" class="swiper-slide box">
                            <div class="image">
                                <img src="image/book-5.png" alt="" />
                            </div>
                            <div class="content">
                                <h3>new arrivals</h3>
                                <div class="price">$15.99 <span>$20.99</span></div>
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                </div>
                            </div>
                        </a>

                    </div>

                </div>

                <div class="swiper arrivals-slider">

                    <div class="swiper-wrapper">

                        <a href="#" class="swiper-slide box">
                            <div class="image">
                                <img src="image/book-6.png" alt="" />
                            </div>
                            <div class="content">
                                <h3>new arrivals</h3>
                                <div class="price">$15.99 <span>$20.99</span></div>
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                </div>
                            </div>
                        </a>

                        <a href="#" class="swiper-slide box">
                            <div class="image">
                                <img src="image/book-7.png" alt="" />
                            </div>
                            <div class="content">
                                <h3>new arrivals</h3>
                                <div class="price">$15.99 <span>$20.99</span></div>
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                </div>
                            </div>
                        </a>

                        <a href="#" class="swiper-slide box">
                            <div class="image">
                                <img src="image/book-8.png" alt="" />
                            </div>
                            <div class="content">
                                <h3>new arrivals</h3>
                                <div class="price">$15.99 <span>$20.99</span></div>
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                </div>
                            </div>
                        </a>

                        <a href="#" class="swiper-slide box">
                            <div class="image">
                                <img src="image/book-9.png" alt="" />
                            </div>
                            <div class="content">
                                <h3>new arrivals</h3>
                                <div class="price">$15.99 <span>$20.99</span></div>
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                </div>
                            </div>
                        </a>

                        <a href="#" class="swiper-slide box">
                            <div class="image">
                                <img src="image/book-10.png" alt="" />
                            </div>
                            <div class="content">
                                <h3>new arrivals</h3>
                                <div class="price">$15.99 <span>$20.99</span></div>
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                </div>
                            </div>
                        </a>

                    </div>

                </div>

            </section> */}

            {/* <!-- arrivals section ends --> */}

            {/* <!-- deal section starts  --> */}

            {/* <section class="deal">

                <div class="content">
                    <h3>deal of the day</h3>
                    <h1>upto 50% off</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde perspiciatis in atque dolore tempora quaerat at fuga dolorum natus velit.</p>
                    <a href="#" class="btn">shop now</a>
                </div>

                <div class="image">
                    <img src="image/deal-img.jpg" alt="" />
                </div>

            </section> */}

            {/* <!-- deal section ends --> */}

            {/* <!-- reviews section starts  --> */}

            {/* <section class="reviews" id="reviews">

                <h1 class="heading"> <span>client's reviews</span> </h1>

                <div class="swiper reviews-slider">

                    <div class="swiper-wrapper">

                        <div class="swiper-slide box">
                            <img src="image/pic-1.png" alt="" />
                            <h3>john deo</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique facere hic.</p>
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                        </div>

                        <div class="swiper-slide box">
                            <img src="image/pic-2.png" alt="" />
                            <h3>john deo</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique facere hic.</p>
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                        </div>

                        <div class="swiper-slide box">
                            <img src="image/pic-3.png" alt="" />
                            <h3>john deo</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique facere hic.</p>
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                        </div>
                        <div class="swiper-slide box">
                            <img src="image/pic-4.png" alt="" />
                            <h3>john deo</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique facere hic.</p>
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                        </div>

                        <div class="swiper-slide box">
                            <img src="image/pic-5.png" alt="" />
                            <h3>john deo</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique facere hic.</p>
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                        </div>

                        <div class="swiper-slide box">
                            <img src="image/pic-6.png" alt="" />
                            <h3>john deo</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique facere hic.</p>
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                        </div>

                    </div>

                </div>

            </section> */}

            {/* <!-- reviews section ends --> */}

            {/* <!-- blogs section starts  --> */}

            {/* <section class="blogs" id="blogs">

                <h1 class="heading"> <span>our blogs</span> </h1>

                <div class="swiper blogs-slider">

                    <div class="swiper-wrapper">

                        <div class="swiper-slide box">
                            <div class="image">
                                <img src="image/blog-1.jpg" alt="" />
                            </div>
                            <div class="content">
                                <h3>blog title goes here</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, odio.</p>
                                <a href="#" class="btn">read more</a>
                            </div>
                        </div>

                        <div class="swiper-slide box">
                            <div class="image">
                                <img src="image/blog-2.jpg" alt="" />
                            </div>
                            <div class="content">
                                <h3>blog title goes here</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, odio.</p>
                                <a href="#" class="btn">read more</a>
                            </div>
                        </div>

                        <div class="swiper-slide box">
                            <div class="image">
                                <img src="image/blog-3.jpg" alt="" />
                            </div>
                            <div class="content">
                                <h3>blog title goes here</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, odio.</p>
                                <a href="#" class="btn">read more</a>
                            </div>
                        </div>

                        <div class="swiper-slide box">
                            <div class="image">
                                <img src="image/blog-4.jpg" alt="" />
                            </div>
                            <div class="content">
                                <h3>blog title goes here</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, odio.</p>
                                <a href="#" class="btn">read more</a>
                            </div>
                        </div>

                        <div class="swiper-slide box">
                            <div class="image">
                                <img src="image/blog-5.jpg" alt="" />
                            </div>
                            <div class="content">
                                <h3>blog title goes here</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, odio.</p>
                                <a href="#" class="btn">read more</a>
                            </div>
                        </div>

                    </div>

                </div>

            </section> */}

            {/* <!-- blogs section ends --> */}

            {/* <!-- footer section starts  --> */}

            {/* <section class="footer">

                <div class="box-container">

                    <div class="box">
                        <h3>our locations</h3>
                        <a href="#"> <i class="fas fa-map-marker-alt"></i> india </a>
                        <a href="#"> <i class="fas fa-map-marker-alt"></i> USA </a>
                        <a href="#"> <i class="fas fa-map-marker-alt"></i> russia </a>
                        <a href="#"> <i class="fas fa-map-marker-alt"></i> france </a>
                        <a href="#"> <i class="fas fa-map-marker-alt"></i> japan </a>
                        <a href="#"> <i class="fas fa-map-marker-alt"></i> africa </a>
                    </div>

                    <div class="box">
                        <h3>quick links</h3>
                        <a href="#"> <i class="fas fa-arrow-right"></i> home </a>
                        <a href="#"> <i class="fas fa-arrow-right"></i> featured </a>
                        <a href="#"> <i class="fas fa-arrow-right"></i> arrivals </a>
                        <a href="#"> <i class="fas fa-arrow-right"></i> reviews </a>
                        <a href="#"> <i class="fas fa-arrow-right"></i> blogs </a>
                    </div>

                    <div class="box">
                        <h3>extra links</h3>
                        <a href="#"> <i class="fas fa-arrow-right"></i> account info </a>
                        <a href="#"> <i class="fas fa-arrow-right"></i> ordered items </a>
                        <a href="#"> <i class="fas fa-arrow-right"></i> privacy policy </a>
                        <a href="#"> <i class="fas fa-arrow-right"></i> payment method </a>
                        <a href="#"> <i class="fas fa-arrow-right"></i> our serivces </a>
                    </div>

                    <div class="box">
                        <h3>contact info</h3>
                        <a href="#"> <i class="fas fa-phone"></i> +123-456-7890 </a>
                        <a href="#"> <i class="fas fa-phone"></i> +111-222-3333 </a>
                        <a href="#"> <i class="fas fa-envelope"></i> shaikhanas@gmail.com </a>
                        <img src="image/worldmap.png" class="map" alt="" />
                    </div>

                </div>

                <div class="share">
                    <a href="#" class="fab fa-facebook-f"></a>
                    <a href="#" class="fab fa-twitter"></a>
                    <a href="#" class="fab fa-instagram"></a>
                    <a href="#" class="fab fa-linkedin"></a>
                    <a href="#" class="fab fa-pinterest"></a>
                </div>

                <div class="credit"> created by <span>mr. web designer</span> | all rights reserved! </div>

            </section> */}

            {/* <!-- footer section ends --> */}

            {/* <!-- loader  --> */}

            {/* <div class="loader-container">
                <img src="image/loader-img.gif" alt="" />
            </div> */}



        </>
    )
}
