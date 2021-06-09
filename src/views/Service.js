import React from 'react'
import PropTypes from 'prop-types'

const Service = props => {
    return (
        <section class="page-section" id="services">
        <div class="container">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">Skill</h2>
            <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
          <div class="row text-center">
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-code fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="my-3">Fullstack Dev</h4>
              <p class="text-muted">PHP,NodeJS,React-js,Vue-js,laravel,express-js,</p>
            </div>
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="my-3">Responsive Design</h4>
              <p class="text-muted">Bootstrap,tailwind,css native ,sasss</p>
            </div>
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-lock fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="my-3">Web Security</h4>
              <p class="text-muted"></p>
            </div>
          </div>
        </div>
        <br />
        {props.children}
      </section>
    )
}

export default Service
