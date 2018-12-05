import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="site-inner">
          <div className="content-sidebar-wrap">
            <main className="content">
              <div className="homepage-splash">{}</div>

              <div className="homepage-navigation">
                <div className="text-banner banner-menu">
                  <a href="http://cafedulce.co/menu/">Our menu</a>
                </div>
                <div className="text-banner banner-about">
                  <a href="http://cafedulce.co/about/">Our story</a>
                </div>
                <div className="text-banner banner-locations">
                  <a href="http://cafedulce.co/contact/">Our locations</a>
                </div>
              </div>
              <div />
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
