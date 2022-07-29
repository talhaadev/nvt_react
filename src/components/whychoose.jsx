import React from 'react'

const whychoose = () => {
  return (
    <section className="why_section layout_padding">
    <div className="container">
      <div className="custom_heading-container">
        <h2>
          Why Choose Us
        </h2>
      </div>
      <div className="content-container">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis
        </p>
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="img-box">
              <img src="images/smiley.png" alt=""/>
            </div>
            <div className="detail-box">
              <h3>
                99%
              </h3>
              <h6>
                SATISFIED CLIENTS
              </h6>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="img-box">
              <img src="images/monitor.png" alt=""/>
            </div>
            <div className="detail-box">
              <h3>
                4700+
              </h3>
              <h6>
                AWESOME planing
              </h6>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="img-box">
              <img src="images/multiple-users-silhouette.png" alt=""/>
            </div>
            <div className="detail-box">
              <h3>
                4500+
              </h3>
              <h6>
                CLIENTS
              </h6>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="img-box">
              <img src="images/bar-chart.png" alt=""/>
            </div>
            <div className="detail-box">
              <h3>
                19000+
              </h3>
              <h6>
                DAILY business
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default whychoose