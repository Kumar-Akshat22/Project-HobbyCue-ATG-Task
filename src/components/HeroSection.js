import React from 'react'
import HeroLeft from '../assets/HeroLeft.svg'
import HeroRight from '../assets/HeroRight.svg'

function HeroSection() {
  return (
    <section className='w-100' style={{backgroundColor:'#F7F5F9'}}>
        <div className='d-flex align-items-center p-3' style={{minWidth:'1440px', height:'678px'}}>

            {/* Left Div */}
            <div className='d-flex flex-column row-gap-5 position-relative' style={{width:'707px'}}>
                
                {/* Title */}
                <div>
                    <h2 className='fst-italic fw-bold '>Explore your <span style={{color:'#0096C8'}}>hobby</span> or <span style={{color:'#8064A2'}}>passion</span></h2>
                </div>

                {/* Content */}
                <div>
                    <p className='lh-lg' style={{fontSize:'14px'}}>
                        Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
                    </p>

                    <p className='lh-lg' style={{fontSize:'14px'}}>
                        If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.
                    </p>
                </div>

                {/* Vector Graphics */}
                <div className='d-flex'>
                    
                    {/* Left */}
                    <div>
                        <img src={HeroLeft}></img>
                    </div>

                    {/* Right */}
                    <div>
                        <img src={HeroRight}></img>
                    </div>

                </div>
            </div>

            {/* Right Div */}
            <div>
                
                
            </div>


        </div>
    </section>
)
}

export default HeroSection