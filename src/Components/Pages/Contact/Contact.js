import React from "react";
import "./Contact.css";
import Location from "./Location/Location";
import ContactForm from "./ContactForm/ContactForm";
import Aos from "aos";
import { Helmet } from "react-helmet";
function Contact() {
  Aos.init();
  Aos.refresh();
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact Us - JobsViewers</title>
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
      <div id="contact">
        <ContactForm />
        <Location />
      </div>
    </>
  );
}

export default Contact;
