import React from 'react'

const client = () => {
  return (
    <section className="client_section layout_padding">
    <div className="container">
      <h2>
        What Our Clients Says
      </h2>
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="client_container layout_padding2">
              <div className="client_text">
                <p>
                  psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                </p>
              </div>
              <div className="detail-box">
                <div className="img-box">
                  <img src="images/client.png" alt=""/>
                </div>
                <div className="name">
                  <h5>
                    Joans Mark
                  </h5>
                  <p>
                    cal
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="client_container layout_padding2">
              <div className="client_text">
                <p>
                  psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                </p>
              </div>
              <div className="detail-box">
                <div className="img-box">
                  <img src="images/client.png" alt=""/>
                </div>
                <div className="name">
                  <h5>
                    Joans Mark
                  </h5>
                  <p>
                    cal
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="client_container layout_padding2">
              <div className="client_text">
                <p>
                  psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                </p>
              </div>
              <div className="detail-box">
                <div className="img-box">
                  <img src="images/client.png" alt=""/>
                </div>
                <div className="name">
                  <h5>
                    Joans Mark
                  </h5>
                  <p>
                    cal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="sr-only">Next</span>
        </a>
      </div>

    </div>
  </section>
  )
}

export default client