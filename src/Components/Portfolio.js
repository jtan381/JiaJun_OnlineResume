import React, { Component } from "react";

class Portfolio extends Component {
  render() {
    if (this.props.data) {
      var projects = this.props.data.projects.map(function(projects) {
        var projectImage = "images/portfolio/" + projects.image;
        return (
          <a href={projects.url} title={projects.title} target="_blank">
            <div key={projects.title} className="columns portfolio-item">
              <div className="item-wrap">
                <img alt={projects.title} src={projectImage} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{projects.title}</h5>
                    <p>{projects.category}</p>
                  </div>
                </div>
                {/* <div className="link-icon">
                  <i className="fa fa-link"></i>
                </div> */}
              </div>
            </div>
          </a>
        );
      });
    }
    return (
      // <portfolio>
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>

            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {projects}
            </div>
          </div>
        </div>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open"></i>
          </a>
        </div>
      </section>
      // </portfolio>
    );
  }
}

export default Portfolio;
