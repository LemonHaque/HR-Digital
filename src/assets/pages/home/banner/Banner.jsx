import banner from "../../../../../public/assets/banner0.jpg"
import banner1 from "../../../../../public/assets/banner1.jpg"
import banner2 from "../../../../../public/assets/banner3.jpg"
import banner3 from "../../../../../public/assets/home.jpg"

function Banner() {
  return (
    <>
      <div>
            <div className="carousel max-h-[610px] rounded">
                <div id="item1" className="carousel-item relative w-full z-1">

                    <img src={banner} className="w-full" />
                    <div className="absolute h-full">
                        <div className="px-10 pt-16 md:px-36 md:pt-36">
                            
                            <h1 className="text-4xl md:text-6xl font-bold text-white w-2/5">IT Consulting Services For Your Business</h1>   
                            <p className="pt-2 md:pt-6 text-white text-lg w-2/5">We are leading technology solutions providing company all over the world over 4 years.</p>
                        </div>
                        <div className="px-10 py-8 md:px-36">
                        <button className="btn className='btn btn-primary hover:bg-white hover:text-black font-semibold rounded-lg mr-6">Explore More</button>
                            <button className='btn btn-outline btn-primary  '>Enroll Now</button>
                        </div>
                    </div>

                </div>
                <div id="item2" className="carousel-item relative w-full">

                    <img src={banner1} className="w-full rounded" />
                    <div className="absolute h-full">
                        <div className="px-10 pt-16 md:px-36 md:pt-36">
                            
                            <h1 className="text-4xl md:text-6xl font-bold text-white w-2/5">IT Consulting Services For Your Business</h1>   
                            <p className="pt-2 md:pt-6 text-white text-lg w-2/5">We are leading technology solutions providing company all over the world over 4 years.</p>
                        </div>
                        <div className="px-10 py-8 md:px-36">
                        <button className="btn className='btn btn-primary hover:bg-white hover:text-black font-semibold rounded-lg mr-6">Explore More</button>
                            <button className='btn btn-outline btn-primary  '>Enroll Now</button>
                        </div>
                    </div>

                </div>
                <div id="item3" className="carousel-item relative w-full">

                    <img src={banner2} className="w-full rounded" />
                    <div className="absolute h-full">
                        <div className="px-10 pt-16 md:px-36 md:pt-36">
                            
                            <h1 className="text-4xl md:text-6xl font-bold text-white w-2/5">IT Consulting Services For Your Business</h1>   
                            <p className="pt-2 md:pt-6 text-white text-lg w-2/5">We are leading technology solutions providing company all over the world over 4 years.</p>
                        </div>
                        <div className="px-10 py-8 md:px-36">
                        <button className="btn className='btn btn-primary hover:bg-white hover:text-black font-semibold rounded-lg mr-6">Explore More</button>
                            <button className='btn btn-outline btn-primary  '>Enroll Now</button>
                        </div>
                    </div>

                </div>
                <div id="item4" className="carousel-item relative w-full">

                    <img src={banner3} className="w-full rounded" />
                    <div className="absolute h-full">
                        <div className="px-10 pt-16 md:px-36 md:pt-36">
                            
                            <h1 className="text-4xl md:text-6xl font-bold text-white w-2/5">IT Consulting Services For Your Business</h1>   
                            <p className="pt-2 md:pt-6 text-white text-lg w-2/5">We are leading technology solutions providing company all over the world over 4 years.</p>
                        </div>
                        <div className="px-10 py-8 md:px-36">
                        <button className="btn className='btn btn-primary hover:bg-white hover:text-black font-semibold rounded-lg mr-6">Explore More</button>
                            <button className='btn btn-outline btn-primary  '>Enroll Now</button>
                        </div>
                    </div>

                </div>

            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-primary btn-xs">1</a>
                <a href="#item2" className="btn btn-primary btn-xs">2</a>
                <a href="#item3" className="btn btn-primary btn-xs">3</a>
                <a href="#item4" className="btn btn-primary btn-xs">4</a>
            </div>
        </div>
    </>
  );
}

export default Banner;
