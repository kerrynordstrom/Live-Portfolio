import React from "react";

const Work = () => (
  <div className="row work">
    <div className="three columns header-col">
      <h1>
        <span>Work</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>C.C. Filson Co.</h3>
          <p className="info">
            Product Data Specialist
            <span>&bull;</span>
            <em className="date"> October 2014 - September 2017</em>
          </p>

          <p>
          ● Developed best practices for data management within SQL-based ERP system across hundreds of tables
          <br />
          ● Maintained SOP documentation for engineering, production, planning, purchasing as related to use of ERP
          <br />
          ● Produced reports for management to track production efficiency and identify inventory oversights which improved accountability across multiple departments
          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>Wheat Ridge Cyclery</h3>
          <p className="info">
            Bicycle Technician
            <span>&bull;</span>
            <em className="date">March 2011 - February 2014</em>
          </p>

          <p>
          ● Introduced 24-hour turnaround policy for many repairs which was a direct contributor to beating profit goals for three consecutive years (~10% over each year prior)
          <br />
          ● Foreman of 15,000 sq ft store remodel which included managing project timeline across five vendors with accountability to the board, finishing weeks ahead of schedule.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Work;
