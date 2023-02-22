import React from 'react'

function Arrivals() {
    return (
        <div>
            <div className="container text-center">
                <div className="row">
                    <p className="fs-2 ">New Arrivals</p>
                    <div className="col">
                        <div className="text-center">
                        <p class="text-uppercase text-6">New Arrival</p>
                            <img src="https://images.unsplash.com/photo-1536243298747-ea8874136d64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmV3JTIwZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60" className="rounded img-1" alt="..." />
                        </div>
                    </div>
                    <div className="col">
                        <div className="text-center">
                        <p class="text-uppercase text-6">Coming Soon</p>
                            <img src="https://images.unsplash.com/photo-1506152983158-b4a74a01c721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" className="rounded img-1" alt="..." />
                        </div>
                    </div>
                    <div className="col">
                        <div className="text-center">
                        <p class="text-uppercase text-7">Sale</p>
                            <img src="https://images.unsplash.com/photo-1597175848600-5ef8d4d15c30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" className="rounded img-1" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Arrivals;
