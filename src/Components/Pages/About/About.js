import React from "react";
import "./About.css";
import image1 from "../../assets/image3.png";
import image2 from "../../assets/image4.jpeg";
import Counter from "../Counter/Counter";
import { Helmet } from "react-helmet";
import TeamMember from "../TeamMember/TeamMember";
function About() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title> About Us - JobsViewers</title>
        <meta
          name="description"
          content="You can find any type of job on jobsviewers without any problem sitting at home. You can also post your job on it. If you are looking for a worker, then post the job with your information and the workers will contact you automatically. This website is related to job without any problem visit our website now without any charges."
        />
        <meta
          name="keywords"
          content="all jobs, web development jobs, app development jobs, reactjs jobs, frontend developer jobs, backend developer jobs, mern stack web development jobs, software house jobs, internships,jobsviewers, jobs, jobs in lahore, jobs in pakistan, full time jobs, part time jobs, contract jobs, search jobs, digital marketing jobs, social media marketing jobs, QA jobs, graphic designing jobs, logo designer jobs, flyer designer jobs, designer jobs, seo expert jobs, seo jobs, website seo jobs, wordpress developer jobs, SQA jobs, content writter jobs, content writting jobs, website content writter, hr jobs, hr manager jobs, senior hr jobs, others, other jobs, php developer jobs, html developer jobs, react native developer jobs, internship in software house, find your jobs, jobs website, jobs searching, meri-jobs, latest jobs, new jobs,android developer, application programming, python developer jobs,dev ops jobs,"
        />
        <link rel="canonical" href="https://jobsviewers.com" />
      </Helmet>
      <div id="about">
        <div className="section1">
          <div className="box">
            <img src={image1} alt="" />
          </div>
          <div className="box">
            <h2>About Company</h2>
            <p>
              Grow your business digitally under the umbrella of company and
              convert your business into a brand. company, a web development
              company in Pakistan, has continuously strived to provide
              tailor-made, cutting-edge solutions for its valued clients for the
              last six years. "To meet every need," we try to fulfill our
              professional commitment by providing contemporary Website
              Development in Pakistan. Our website development services are
              available in Lahore, Karachi, Islamabad, and anywhere else around
              the Nation. You'll get shielded and well profound responsive web
              development services in Pakistan. We understand the power of
              responsive websites. Our web developers provide responsive
              websites that adapt to mobile, tablet, and desktop sizes to
              increase your website conversion rate.
            </p>
          </div>
        </div>
        <div>
          <TeamMember />
          <Counter />
        </div>
        <div className="section3">
          <div className="box">
            <h2>About Company</h2>
            <p>
              Moreover, in addition to being one of the leading hosting
              companies, company offers the best web hosting in Pakistan within
              the context of multiple web hosting features, technical
              specifications, 99.99% uptime guarantee, reliability, free .com
              domain registration, 24/7 support, free SSL certificate, with 10
              days money-back guarantee at a highly affordable price. As one of
              the most renowned businesses and E-commerce web development
              companies in Pakistan, we know how to design E-commerce websites
              that allow you to sell your items. If you struggle with low
              conversion rates due to unprofessional and unoptimized website
              design. In that case, our website designing team is available 24/7
              to solve your queries and facilitate you to create a website that
              is optimized for conversions.
            </p>
          </div>
          <div className="box">
            <img src={image2} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
