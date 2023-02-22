import React from 'react'

function More() {
    return (
        <div>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <img src="https://images.unsplash.com/photo-1539711771763-098409f795f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFzaGlvbiUyMHZpZGVvc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60" className="img-thumbnail" alt="..." />
                    </div>
                    <div className="col">
                        <p className="fs-2 text-4">More Abut "Hebe"</p>
                        <p className="fs-6 text-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <button type="button" class="btn btn-dark">More About Us</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default More;
