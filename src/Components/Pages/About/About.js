import React from "react";
import "./About.css";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import { Helmet } from "react-helmet";
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
            <h1>About Job Viewers</h1>
            <p>
              On this platform you can find the job of your choice, here you
              have to post your profile with your original information.You
              should have no difficulty in finding better employment.You can get
              a good job only on a good platform, there are no charges. You can
              get your job at home without any problem. Come and visit this
              website to get a job.You can find any type of job on jobsviewers
              without any problem sitting at home. You can also post your job on
              it. If you are looking for a worker, then post the job with your
              information and the workers will contact you automatically. This
              website is related to job without any problem visit our website
              now without any charges. There will be a positive reaction.For
              your better future it is very important that you search for your
              job on good platform. You just have to create your profile and
              post it. Hope you get a good job.
            </p>
          </div>
        </div>
        <div className="section2">
          <div className="cards">
            <h1>1000+</h1>
            <p>Total Jobs Posted</p>
          </div>
          <div className="cards">
            <h1>1000+</h1>
            <p>Total Job Seekers</p>
          </div>
          <div className="cards">
            <h1>1000+</h1>
            <p>Monthly Visitors</p>
          </div>
        </div>
        <div className="section3">
          <div className="box">
            <h1>About Job Viewers</h1>
            <p>
              On this platform you can find the best employee of your choice,
              here you have to post your job.You can get your employee without
              any problem. Come and visit this website to get a employee. There
              will be a positive reaction.You can get a good employee only on a
              good platform, there are no charges. You can get your worker
              without any problem. Come and visit this website to get a
              employee. There will be a positive reaction. For your better
              future it is very important that you search for your worker on
              good platform. You just have to create your job and post it. Hope
              you get a good employee. Better to waste your time. Don't and
              definitely visit our website once. Thank you you can find any type
              of job on jobsviewers without any problem sitting at home. You can
              also post your job on it. If you are looking for a worker, then
              post the job.
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
