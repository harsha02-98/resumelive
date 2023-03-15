import React from "react";
import Header from "../components/Header";

const Education = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Header />
       
        <hr class="m-0" />

        <section class="resume-section" id="education">
          <div class="resume-section-content">
            <h2 class="mb-5">Education</h2>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">Vel Tech High Tech Engineering College</h3>
                <div class="subheading mb-3">Bachelor of Engineering</div>
                <div>Computer Science Engineering </div>
                <p>Percentage: 66%</p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">June 20016 - May 2020</span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between">
              <div class="flex-grow-1">
                <h3 class="mb-0">Vidyaa Vikass Higher Secondary School</h3>
                <div class="subheading mb-3">Higher Secondary Course</div>
                <div>Computer Science </div>
                <p class="mb-5">Percentage: 68%</p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">March 2015 - April 2016</span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between">
              <div class="flex-grow-1">
                <h3 class="mb-0">Campion Anglo-Indian Higher Secondary School</h3>
                <div class="subheading ">State Board</div>
                <p>Percentage: 77%</p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">March 2013 - April 2014</span>
              </div>
            </div>
          </div>
        </section>
        <hr class="m-0" />
      </div>
    </>
  );
};

export default Education;
