import React from 'react';
import Header from './Header';
import img1 from '../images/book-1.png';
import img2 from '../images/book-2.png';
import img3 from '../images/book-3.png';
import img4 from '../images/book-4.png';

export default function Categories() {
    return (
        <>
            <Header />
            <div className='body1'>
                <div class="container1">
                    <div class="card1">
                        <div class="imgBx">
                            <img src={img1} alt="nike-air-shoe" />
                        </div>

                        <div class="contentBx">

                            <h2>Nike Shoes</h2>

                            <div class="size">
                                <h3>Size :</h3>
                                <span>7</span>
                                <span>8</span>
                                <span>9</span>
                                <span>10</span>
                            </div>

                            <div class="color">

                                <h3>Color :</h3>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <a href="#">Buy Now</a>
                        </div>

                    </div>
                    <div class="card1">
                        <div class="imgBx">
                            <img src={img2} alt="nike-air-shoe" />
                        </div>

                        <div class="contentBx">

                            <h2>Nike Shoes</h2>

                            <div class="size">
                                <h3>Size :</h3>
                                <span>7</span>
                                <span>8</span>
                                <span>9</span>
                                <span>10</span>
                            </div>

                            <div class="color">

                                <h3>Color :</h3>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <a href="#">Buy Now</a>
                        </div>

                    </div>
                    <div class="card1">
                        <div class="imgBx">
                            <img src={img3} alt="nike-air-shoe" />
                        </div>

                        <div class="contentBx">

                            <h2>Nike Shoes</h2>

                            <div class="size">
                                <h3>Size :</h3>
                                <span>7</span>
                                <span>8</span>
                                <span>9</span>
                                <span>10</span>
                            </div>

                            <div class="color">

                                <h3>Color :</h3>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <a href="#">Buy Now</a>
                        </div>

                    </div>
                    <div class="card1">
                        <div class="imgBx">
                            <img src={img4} alt="nike-air-shoe" />
                        </div>

                        <div class="contentBx">

                            <h2>Nike Shoes</h2>

                            <div class="size">
                                <h3>Size :</h3>
                                <span>7</span>
                                <span>8</span>
                                <span>9</span>
                                <span>10</span>
                            </div>

                            <div class="color">

                                <h3>Color :</h3>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <a href="#">Buy Now</a>
                        </div>

                    </div>
                </div>
                </div>




  


        </>
    )
}
