import React from 'react';
import pic1 from "./1.png";
import pic2 from "./2.png";
import pic3 from "./3.png";
import pic4 from "./4.png";
import pic5 from "./5.png";
import pic6 from "./6.png";
import pic7 from "./7.png";
import pic8 from "./8.png";
const Home = () => {
  return (
    <>
    <h1>8 Restaurants</h1>
    <section id="products" className='container mt-5'>
        <div className='row'>
            <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                <div className='card p-3 rounded'>
                    <img className='card-img-top mx-auto'
                    src={pic1}
                    alt="rest"
                    
                    ></img>
                    <div className='card-body d-flex flex-column'>
                        <h5 className='card-title'>ROY's Kitchen</h5>
                        <p className='rest_address'>Shams circle, Main road, Bhatkal- 581320</p>
                        <div className='ratings mt-auto'>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star-half-o'></i>
                            <i className='fa fa-star-o'></i>
                            <span id="no_of_reviews">35 Reviews</span>


                        </div>

                    </div>



                </div>
                
                
                </div> 

                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                <div className='card p-3 rounded'>
                    <img className='card-img-top mx-auto'
                    src={pic2}
                    alt="rest"
                    
                    ></img>
                    <div className='card-body d-flex flex-column'>
                        <h5 className='card-title'>Afeef's Table</h5>
                        <p className='rest_address'>Azad Rd,Shastri nagar, Bhatkal- 581320</p>
                        <div className='ratings mt-auto'>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star-o'></i>
                            <span id="no_of_reviews">21 Reviews</span>


                        </div>

                    </div>



                </div>
                
                
                </div> 


                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                <div className='card p-3 rounded'>
                    <img className='card-img-top mx-auto'
                    src={pic3}
                    alt="rest"
                    
                    ></img>
                    <div className='card-body d-flex flex-column'>
                        <h5 className='card-title'>Junoon Fast-Food</h5>
                        <p className='rest_address'>Jakti nagar, Main road, Shiroor- 581321</p>
                        <div className='ratings mt-auto'>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star-half-o'></i>
                            <i className='fa fa-star-o'></i>
                            <i className='fa fa-star-o'></i>
                            <span id="no_of_reviews">35 Reviews</span>


                        </div>

                    </div>



                </div>
                
                
                </div> 

                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                <div className='card p-3 rounded'>
                    <img className='card-img-top mx-auto'
                    src={pic4}
                    alt="rest"
                    
                    ></img>
                    <div className='card-body d-flex flex-column'>
                        <h5 className='card-title'>Olives</h5>
                        <p className='rest_address'>Bunder road, nagin nagar, Shiroor- 581321</p>
                        <div className='ratings mt-auto'>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-stars'></i>
                            <i className='fa fa-star-o'></i>
                            <span id="no_of_reviews">44 Reviews</span>


                        </div>

                    </div>



                </div>
                
                
                </div>

                <div className='col-sm-12 col-md-6 col-lg-3'>
                <div className='card p-3 rounded'>
                    <img className='card-img-top mx-auto'
                    src={pic5}
                    alt="rest"
                    
                    ></img>
                    <div className='card-body d-flex flex-column'>
                        <h5 className='card-title'>Sea shore food</h5>
                        <p className='rest_address'>Bunder, Beach road, Shiroor- 581321</p>
                        <div className='ratings mt-auto'>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star-half-o'></i>
                            <i className='fa fa-star-o'></i>
                            <span id="no_of_reviews">90 Reviews</span>


                        </div>

                    </div>



                </div>
                
                
                </div>


                <div className='col-sm-12 col-md-6 col-lg-3'>
                <div className='card p-3 rounded'>
                    <img className='card-img-top mx-auto'
                    src={pic6}
                    alt="rest"
                    
                    ></img>
                    <div className='card-body d-flex flex-column'>
                        <h5 className='card-title'>Anil's Kitchen</h5>
                        <p className='rest_address'>Madina colony, bd road, Bhatkal 581320</p>
                        <div className='ratings mt-auto'>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star-half-o'></i>
                            <i className='fa fa-star-o'></i>
                            <span id="no_of_reviews">90 Reviews</span>


                        </div>

                    </div>



                </div>
                
                
                </div>

                <div className='col-sm-12 col-md-6 col-lg-3'>
                <div className='card p-3 rounded'>
                    <img className='card-img-top mx-auto'
                    src={pic7}
                    alt="rest"
                    
                    ></img>
                    <div className='card-body d-flex flex-column'>
                        <h5 className='card-title'>Sensational dining</h5>
                        <p className='rest_address'>Nawayath colony, NH-66, Bhatkal 581320</p>
                        <div className='ratings mt-auto'>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star-o'></i>
                            <span id="no_of_reviews">110 Reviews</span>


                        </div>

                    </div>



                </div>
                
                
                </div>
                
                <div className='col-sm-12 col-md-6 col-lg-3'>
                <div className='card p-3 rounded'>
                    <img className='card-img-top mx-auto'
                    src={pic8}
                    alt="rest"
                    
                    ></img>
                    <div className='card-body d-flex flex-column'>
                        <h5 className='card-title'>Burger kings</h5>
                        <p className='rest_address'>Noor circle, NH-66, Bhatkal 581320</p>
                        <div className='ratings mt-auto'>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star-o'></i>
                            <span id="no_of_reviews">56 Reviews</span>


                        </div>

                    </div>



                </div>
                
                
                </div>
                
                

        </div>



    </section>
    
    
    
    </>
  )
}

export default Home
