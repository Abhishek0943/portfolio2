import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Script from 'next/script'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/js/particles.js';
    script.async = true;
    script.onload = () => {
      particlesJS('particles-js',  {
        "particles": {
          "number": {
            "value": 100,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#fff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#fff"
            },
            "polygon": {
              "nb_sides": 100
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 1,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 10,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 400
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true,
        "config_demo": {
          "hide_card": false,
          "background_color": "#fff",
          "background_image": "",
          "background_position": "50% 50%",
          "background_repeat": "no-repeat",
          "background_size": "cover"
        }
      }); // Your particlesJS configuration
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      <Head>
      </Head>
      <Script src="js/main.js" />
      <section id="particles-js">


      </section>
      <div className="hero">
        <nav className="hero_nav">
          <div className="hero_nav_contaner">
            <div className="hero_logo">
              abhitechie
            </div>
            <ul>
              <li>Home</li>
              <li>Servies</li>
              <li>Contact</li>
              <li>About</li>
            </ul>
            <div className="hero_btn_con">
              <button className="btnOne">LogIn</button>
              <button className="btnTwo">SingIn</button>
            </div>
          </div>
        </nav>
        <div className="main">
          <h1 className="hero_heading">Crafting Exceptional Web Solutions for Your Business Needs</h1>
          <p className="hero_sub_heading">"Building Better Web Experiences"</p>
          <p className="hero_para">As a passionate web developer, I am dedicated to crafting exceptional web solutions
            that meet your business needs, whether you require a simple website or a complex web application. With a
            focus on user experience, accessibility, and scalability, I deliver high-quality results that exceed
            yourexpectations.</p>
        </div>
        <div className="hero_btn_box">
          <button className="hire">Hire ME</button>
          <button className="fiverr">Fiverr</button>
        </div>
        <ul className="shoasjf">
          <li>
            {/* <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '60px', width: "60px", border- radius: '10px'}}
              viewBox="0 0 448 512">
            <path fill='#a7d389'
              d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
          </svg> */}
          </li>
          <li>
            {/* <svg xmlns="http://www.w3.org/2000/svg" style="height: 60px;width: 60px;border-radius: 10px;"
              viewBox="0 0 448 512">
              <path fill='#a7d389'
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path />
            </svg> */}
          </li>
        </ul>

      </div >
      <div className="about" id="about">

        <div className="line" id="line">
        </div>
        <div className="aboutTitle"> Evolution of Web Development</div>
        <div className="box" id="firstBox">
          <h3 className="timeLineHeading">
            Early Web Development
          </h3>
          <div className="timeLineDis">
            In the 1990s, web development was in its infancy, and HTML was the only language used for creating web
            pages. The focus was on creating static websites with simple layouts and minimal functionality.
          </div>
        </div>
        <div className="box">
          <h3 className="timeLineHeading">
            Emergence of Dynamic Websites
          </h3>
          <div className="timeLineDis">
            In the early 2000s, web development began to shift towards dynamic websites, with the use of scripting
            languages like JavaScript and server-side languages like PHP. This allowed for more interactive and
            dynamic web pages.
          </div>
        </div>
        <div className="box">
          <h3 className="timeLineHeading">
            Rise of Content Management Systems
          </h3>
          <div className="timeLineDis">
            With the emergence of content management systems (CMS) like WordPress and Drupal, web development became
            more accessible to non-technical users. CMS platforms made it easier to create and manage websites with
            minimal coding knowledge.
          </div>
        </div>
        <div className="box">
          <h3 className="timeLineHeading">
            Responsive Design
          </h3>
          <div className="timeLineDis">
            As mobile devices became more prevalent, responsive design became a crucial aspect of web development.
            Developers began to design and develop websites that could adapt to various screen sizes and
            resolutions.
          </div>
        </div>
        <div className="box">
          <h3 className="timeLineHeading">
            Introduction of Web Frameworks
          </h3>
          <div className="timeLineDis">
            Web development frameworks like Angular, React, and Vue.js emerged in the mid-2000s, allowing for more
            efficient and organized development of web applications.
          </div>
        </div>
        <div className="box">
          <h3 className="timeLineHeading">
            Cloud Computing
          </h3>
          <div className="timeLineDis">
            Cloud computing services like Amazon Web Services (AWS) and Google Cloud Platform (GCP) emerged,
            offering scalable infrastructure and services for web development. This allowed developers to focus on
            building applications without worrying about server management.
          </div>
        </div>
        <div className="box">
          <h3 className="timeLineHeading">
            APIs and Microservices
          </h3>
          <div className="timeLineDis">
            APIs and microservices became more popular in web development, allowing for the development of complex
            and scalable applications that can communicate with other services and systems.
          </div>
        </div>
        <div className="box">
          <h3 className="timeLineHeading">
            Machine Learning and AI
          </h3>
          <div className="timeLineDis">
            With the advancements in machine learning and AI, web development began to incorporate intelligent
            features and capabilities, such as chatbots and recommendation systems.
          </div>
        </div>
        <div className="box">
          <h3 className="timeLineHeading">
            Progressive Web Apps
          </h3>
          <div className="timeLineDis">
            Progressive web apps (PWA) emerged as a new approach to building web applications that can offer native
            app-like experiences. PWAs can be installed on devices and can work offline, providing a seamless user
            experience.
          </div>
        </div>
        <div className="box">
          <h3 className="timeLineHeading">
            Web 3.0
          </h3>
          <div className="timeLineDis">
            Web 3.0 is the next generation of the internet, characterized by decentralized, secure, and
            privacy-focused applications. Web 3.0 technologies like blockchain and decentralized networks are being
            incorporated into web development to create the next wave of innovative applications.
          </div>
        </div>
        <div className="extra">
          <div className="stackDivContaner">
            <h2 id="projectHeading">Project</h2>
            <div id="stackdiv">

              <div className="stackDiv">
                <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
                  <p className="projectNo">01</p>
                  <div style={{ flex: "1" }}>
                    <hr style={{ border: "1px solid black" }} />
                  </div>
                  <p className="projectName">
                    School Search
                  </p>
                </div>
                <img src="images/project.png" className="projectImg" alt="" />
              </div>
              <div className="stackDiv">
                <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
                  <p className="projectNo">02</p>
                  <div style={{ flex: "1" }}>
                    <hr style={{ border: "1px solid black" }} />
                  </div>
                  <p className="projectName">
                    Discount App
                  </p>
                </div>
                <img src="images/Screenshot 2023-04-27 033648.png" className="projectImg" alt="" />
              </div><div className="stackDiv">
                <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
                  <p className="projectNo">03</p>
                  <div style={{ flex: "1" }}>
                    <hr style={{ border: "1px solid black" }} />
                  </div>
                  <p className="projectName">
                    Portfolio
                  </p>
                </div>
                <img src="images/Screenshot 2023-04-27 033733.png" className="projectImg" alt="" />
              </div>
            </div>



          </div>

        </div>

      </div>
      <div id="work">
        <div>
          <h3 className="workHeading">Why you chose us</h3>
          <p className="workDis">At <span style={{ color: '#a7d389', fontWeight: '800' }}>ABHITECHIE</span>, we believe in
            incorporating strategy
            into every aspect of our work. From the initial planning stages of mobile app development to the
            implementation of UX/UI design best practices and the utilization of agile project management
            methodologies, we prioritize strategic thinking throughout our process. Our goal is not only to excel in
            the services we provide, but also to continuously refine and improve the way we approach our work.</p>
        </div>
        <div className="cardCon">
          <div className="cardBox">
            <img className="cardImag" src="images/cost.jpg" alt="" />
            <h6 className="cardHeading">Cost</h6>
            <p className="cardDis">Our services are highly cost-effective, providing excellent value for your investment
              while maintaining the highest level of quality and results.</p>
          </div>
          <div className="cardBox">
            <img className="cardImag" src="images/quality.jpg" alt="" />
            <h6 className="cardHeading">Quality</h6>
            <p className="cardDis">We take great pride in providing top-quality services that exceed our clients'
              expectations, with a strong focus on attention to detail and exceptional results.</p>
          </div>
          <div className="cardBox">
            <img className="cardImag" src="images/speed.jpg" alt="" />
            <h6 className="cardHeading">Cost</h6>
            <p className="cardDis">Our services offer quick and efficient development, ensuring timely delivery of
              projects without compromising on quality or attention to detail.</p>
          </div>
        </div>
      </div>
      <section id="contact" className="Contact ">
        <div className="contact-box">
          <div className="contact-links">
            <h2 className="contactHeading">CONTACT</h2>
            <div className="links">
              <div className="link">
                <a href="https://www.linkedin.com/in/abhishek-pundir-109358232/"><img className="contactImg" src="https://i.postimg.cc/m2mg2Hjm/linkedin.png" alt="linkedin" /></a>
              </div>
              <div className="link">
                <a href="https://github.com/Abhishek0943"><img className="contactImg" src="https://i.postimg.cc/YCV2QBJg/github.png" alt="github" /></a>
              </div>

              <div className="link">
                <a href="mailto:abhishekpundir077@gmail.com"><img className="contactImg" src="https://i.postimg.cc/NjLfyjPB/email.png" alt="email" /></a>
              </div>
            </div>
          </div>
          <div className="contact-form-wrapper">
            <form>
              <div className="form-item">
                <input type="text" name="sender" required />
                <label>Name:</label>
              </div>
              <div className="form-item">
                <input type="text" name="email" required />
                <label>Email:</label>
              </div>
              <div className="form-item">
                <textarea className="" name="message" required></textarea>
                <label>Message:</label>
              </div>
              <button className="submit-btn">Send</button>
            </form>
          </div>
        </div>
      </section>

    </>
  )
}
