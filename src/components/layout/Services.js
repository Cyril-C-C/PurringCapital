import React, { Fragment } from 'react';

const Services = () => {
  return (
    <Fragment>
      <section className='testiomonial'>
        <h1>Services</h1>
        <h1 style={{ color: 'red', fontSize: '1.25rem' }}>B2Bs & B2Cs</h1>
        <p>
          We have the best expertise in proffering unique and best values to
          businesses and customers with incredible speed, but yet sustainable.
        </p>

        <section className='row'>
          <section className='testimonial-col' id='testimonial-col'>
            <i class='fa fa-laptop' id='set' aria-hidden='true' />
            <section>
              <span>Web Development</span>
              <hr />
              <p>
                We create your uniqueness that markets your brands; hence,
                drives your successes.
              </p>
              <i className='fa fa-star' id='fa fa-star'></i>
              <i className='fa fa-star' id='fa fa-star'></i>
              <i className='fa fa-star' id='fa fa-star'></i>
              <i className='fa fa-star' id='fa fa-star'></i>
              <i className='fa fa-star' id='fa fa-star'></i>
            </section>
          </section>

          <section className='testimonial-col' id='testimonial-col'>
            <i class='fa fa-mobile' id='set' aria-hidden='true' />
            <section>
              <span>Mobile App Development</span>
              <hr />
              <p>
                We create impactful mobile applications that are bespoke to your
                brands and industry.
              </p>
              <i className='fa fa-star' id='fa fa-star'></i>
              <i className='fa fa-star' id='fa fa-star'></i>
              <i className='fa fa-star' id='fa fa-star'></i>
              <i className='fa fa-star' id='fa fa-star'></i>
              <i className='fa fa-star' id='fa fa-star'></i>
            </section>
          </section>

          <section className='testimonial-col' id='testimonial-col'>
            <i class='fa fa-desktop' id='set' aria-hidden='true' />
            <section>
              <span>UI/UX Design</span>
              <hr />
              <p>
                We research your suitabilities; and proffer clean and
                sustainable product designs.
              </p>
              <i className='fa fa-star' id='fa fa-star'></i>
              <i className='fa fa-star' id='fa fa-star'></i>
              <i className='fa fa-star' id='fa fa-star'></i>
              <i className='fa fa-star' id='fa fa-star'></i>
              <i className='fa fa-star' id='fa fa-star'></i>
            </section>
          </section>
        </section>
      </section>
      <hr />

      <section className='testiomonial'>
        <h1 style={{ color: 'red', fontSize: '1.25rem' }}>B2Bs</h1>
        <p>
          The success of your business shapes how we build our vision, culture
          and community. You have the goals; we have the technologies...
        </p>

        <section className='row'>
          <section className='testimonial-col' id='testimonial-col'>
            <i
              class='fa fa-assistive-listening-systems'
              id='set'
              aria-hidden='true'
            />
            <section>
              <span>IT Consulting</span>
              <hr />
              <p>
                Our expertise helps your automations and digitalization,
                optimise software, and implement lastest tech.
              </p>
              <i className='fa fa-star' id='fa fa-star'></i>
              <i className='fa fa-star' id='fa fa-star'></i>
              <i className='fa fa-star' id='fa fa-star'></i>
              <i className='fa fa-star' id='fa fa-star'></i>
              <i className='fa fa-star' id='fa fa-star'></i>
            </section>
          </section>

          <section className='testimonial-col' id='testimonial-col'>
            <i class='fa fa-cloud' id='set' aria-hidden='true' />
            <section>
              <span>Cloud Computing</span>
              <hr />
              <p>
                We stay at par with world emerging technologies and various tech
                and business intelligences.
              </p>
              <i className='fa fa-star' id='fa fa-star'></i>
              <i className='fa fa-star' id='fa fa-star'></i>
              <i className='fa fa-star' id='fa fa-star'></i>
              <i className='fa fa-star' id='fa fa-star'></i>
              <i className='fa fa-star' id='fa fa-star'></i>
            </section>
          </section>

          <section className='testimonial-col' id='testimonial-col'>
            <i class='fa fa-globe' id='set' aria-hidden='true' />
            <section>
              <span>General Contracts</span>
              <hr />
              <p>
                We position ourselves to tackle and provide incredible and
                sustainable values and services in all technology spaces.
              </p>
              <i className='fa fa-star' id='fa fa-star'></i>
              <i className='fa fa-star' id='fa fa-star'></i>
              <i className='fa fa-star' id='fa fa-star'></i>
              <i className='fa fa-star' id='fa fa-star'></i>
              <i className='fa fa-star' id='fa fa-star'></i>
            </section>
          </section>
        </section>
      </section>
    </Fragment>
  );
};

export default Services;
