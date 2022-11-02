import React from "react";
import "./Counter.css";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { NavLink } from "react-router-dom";
import { FaUserAlt, FaWarehouse } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { GiTrophyCup } from "react-icons/gi";
import { VscWorkspaceTrusted } from "react-icons/vsc";

function Counter() {
  return (
    <>
      <div id="counter-main">
        <div className="counter">
          <div className="opecity">
            <div className="box1">
              <FaUserAlt className="countIcon" />
              <h1>
                <CountUp end={1200} duration={3}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start}>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </h1>
              <p>CLIENTS</p>
            </div>
            <div className="box1">
              <FaWarehouse className="countIcon" />
              <h1>
                <CountUp end={1277} duration={3}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start}>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </h1>
              <p>ITEM SOLD</p>
            </div>
            <div className="box1">
              <MdWork className="countIcon" />
              <h1>
                <CountUp end={869} duration={3}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start}>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </h1>
              <p>PROJECTS</p>
            </div>
            <div className="box1">
              <GiTrophyCup className="countIcon" />
              <h1>
                <CountUp end={76} duration={3}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start}>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </h1>
              <p>AWARDS</p>
            </div>
            <div className="box1">
              <VscWorkspaceTrusted className="countIcon" />
              <h1>
                <CountUp end={2019} duration={3}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start}>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </h1>
              <p>WORKING FROM</p>
            </div>
          </div>
          <div className="btn">
            <NavLink to="/portfolio">SEE PORTFOLIO</NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Counter;
