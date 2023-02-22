function Hero() {
    return (
        <section className="hero-sec">
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active ">
                        <img src="https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" className="d-block  hero-img" alt="..." />
                    </div>
                </div>
                <div className="text-div">
                <p className="fs-1 text-1">Remain</p>
                <p className="fs-6 text-2">The Great Escape</p>
                <button type="button" className="btn btn-dark btn-2">Shop Now</button>
                </div>
              
            </div>
        </section>
    )
}
export default Hero;