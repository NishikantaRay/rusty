import Footer from "../components/footer/footer";
import Navbar from "../components/nav/navBar";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import NewsLetter from "../components/newsletter/newsLetter";
import coursesData from "../data/course_details.json";
const localizer = momentLocalizer(moment);

const eventsData = [
  {
    id: 1,
    title: "Initial Consulting",
    start: "2024-11-25T10:00:00",
    end: "2024-11-25T11:00:00",
  },
  {
    id: 2,
    title: "Follow-Up Session",
    start: "2024-11-26T14:00:00",
    end: "2024-11-26T15:00:00",
  },
];

const generateTimeSlots = (start, end) => {
  const slots = [];
  let current = moment(start, "HH:mm");
  const endTime = moment(end, "HH:mm");

  while (current.isBefore(endTime)) {
    slots.push(current.format("HH:mm"));
    current = current.add(30, "minutes");
  }

  return slots;
};
const popupStyles = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  padding: "20px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
  zIndex: 1000,
};

const slotsContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
  marginTop: "10px",
};

const slotBoxStyle = {
  width: "80px",
  height: "40px",
  border: "1px solid #007BFF",
  borderRadius: "5px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  userSelect: "none",
};
const CourseDetails = () => {
  const { id } = useParams();
  const course = coursesData.find((course) => course.id === id);
  console.log(id, course);
  //   if (!course) {
  //     return <div>Course not found</div>;
  //   }
  const [events, setEvents] = useState([]);
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const timeSlots = generateTimeSlots("09:00", "17:00"); // 9:00 AM to 5:00 PM

  useEffect(() => {
    const formattedEvents = eventsData.map((event) => ({
      ...event,
      start: new Date(event.start),
      end: new Date(event.end),
    }));
    setEvents(formattedEvents);
  }, []);

  const handleDateSelection = (slotInfo) => {
    setSelectedDate(slotInfo.start);
    setPopupVisible(true);
  };

  const confirmBooking = () => {
    if (!selectedSlot) {
      alert("Please select a time slot.");
      return;
    }

    const startDateTime = new Date(
      moment(selectedDate).format("YYYY-MM-DD") + "T" + selectedSlot
    );
    const endDateTime = moment(startDateTime).add(30, "minutes").toDate();

    const isOverlapping = events.some(
      (event) => startDateTime < event.end && endDateTime > event.start
    );

    if (isOverlapping) {
      alert("This slot overlaps with an existing booking!");
      return;
    }

    const newEvent = {
      id: events.length + 1,
      title: "New Booking",
      start: startDateTime,
      end: endDateTime,
    };

    setEvents([...events, newEvent]);
    setPopupVisible(false);
    setSelectedSlot(null);
    console.log("Slot booked successfully!", newEvent);
    alert("Slot booked successfully!");
  };
  return (
    <>
      <Navbar />
      <section className="course_details-area pt-60 pb-60">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="course_details-wrap mb-55">
                <div className="course_details-top mb-60">
                  <h3 className="course_details-title">
                    {course.title}{" "}
                    
                  </h3>
                  <div className="course_details-meta-right">
                      <Link className="theme-btn theme-btn-medium">
                        Price: $ {course.price}
                      </Link>
                    </div>
                  <div className="course_details-meta">
                    {/* <div className="course_details-meta-left">
                      <div className="course_details-author">
                        <div className="course_details-author-img">
                          <img src={course.auther_img} alt="" />
                        </div>
                        <div className="course_details-author-info">
                          <span>Teacher</span>
                          <h5>
                            <Link to="/">{course.auther_name}</Link>
                          </h5>
                        </div>
                      </div>
                      <div className="course_details-category">
                        <span>Categories</span>
                        <h5>
                          <Link to="/">{course.auther_role}</Link>
                        </h5>
                      </div>
                      <div className="course_details-rating">
                        <span>Review</span>
                        <ul>
                          {Array.from(
                            { length: course.author_review },
                            (_, index) => (
                              <li>
                                {" "}
                                <i key={index} className="fa-solid fa-star"></i>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                    <div className="course_details-meta-right">
                      <Link className="theme-btn theme-btn-medium">
                        {course.stat}
                      </Link>
                    </div> */}
                  </div>
                </div>
                <div className="course_details-tab-button">
                  <ul className="nav nav-pills" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-home"
                        type="button"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true">
                        <i className="fa-solid fa-bookmark"></i>
                        <span>Overview</span>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false">
                        <i className="fa-thin fa-box"></i>
                        <span>Curriculum</span>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-contact-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-contact"
                        type="button"
                        role="tab"
                        aria-controls="pills-contact"
                        aria-selected="false">
                        <i className="fa-thin fa-user"></i>
                        <span>Instructor</span>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-four-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-four"
                        type="button"
                        role="tab"
                        aria-controls="pills-four"
                        aria-selected="false">
                        <i className="fa-thin fa-message-dots"></i>
                        <span>Reviews</span>
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="course_details-tab-content">
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                      tabindex="0">
                      <div className="course_details-content">
                        <h4 className="course_details-content-title mb-15">
                          Courses Description
                        </h4>
                        <p className="mb-25">{course.description1}</p>
                        <p className="mb-40">{course.description2}</p>
                        <h4 className="course_details-content-title mb-20">
                          {course.sub_header}
                        </h4>
                        <div className="course_details-content-list">
                          <ul>
                            {course.listData.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-profile"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                      tabindex="0">
                      <div className="course_details-curriculum">
                        <h4 className="course_details-content-title mb-15">
                          Course Curriculum
                        </h4>
                        <p className="mb-25">
                          Curabitur tempus tincidunt tellus ac placerat. Nullam
                          non libero nisi. Fusce congue est eget nisl tristique
                          ornare. Vestibulum id massa felis. Nullam vehicula
                          bibendum nulla eu vulputate. Aenean fringilla tortor
                          ut laoreet congue magna, a viverra turpis consectetur
                          porta.
                        </p>
                        <div className="accordion" id="Expp">
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                              <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne">
                                Greetings and introduction
                              </button>
                            </h2>
                            <div
                              id="collapseOne"
                              className="accordion-collapse collapse show"
                              aria-labelledby="headingOne"
                              data-bs-parent="#Expp">
                              <div className="accordion-body">
                                <ul>
                                  <li>
                                    <a href="#">
                                      <i className="fa-brands fa-youtube"></i>
                                      Getting Started{" "}
                                    </a>
                                    <span>
                                      04:00
                                      <i className="fa-light fa-lock-keyhole"></i>
                                    </span>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fa-brands fa-youtube"></i>WP
                                      Theme Development{" "}
                                    </a>
                                    <span>
                                      04:00
                                      <i className="fa-light fa-lock-keyhole"></i>
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree">
                                Lesson 1
                              </button>
                            </h2>
                            <div
                              id="collapseThree"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingThree"
                              data-bs-parent="#Expp">
                              <div className="accordion-body">
                                <ul>
                                  <li>
                                    <a href="#">
                                      <i className="fa-brands fa-youtube"></i>
                                      Getting Started{" "}
                                    </a>
                                    <span>
                                      04:00
                                      <i className="fa-light fa-lock-keyhole"></i>
                                    </span>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fa-brands fa-youtube"></i>WP
                                      Theme Development{" "}
                                    </a>
                                    <span>
                                      04:00
                                      <i className="fa-light fa-lock-keyhole"></i>
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFour">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseFour"
                                aria-expanded="false"
                                aria-controls="collapseFour">
                                Lesson 2
                              </button>
                            </h2>
                            <div
                              id="collapseFour"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingFour"
                              data-bs-parent="#Expp">
                              <div className="accordion-body">
                                <ul>
                                  <li>
                                    <a href="#">
                                      <i className="fa-brands fa-youtube"></i>
                                      Getting Started{" "}
                                    </a>
                                    <span>
                                      04:00
                                      <i className="fa-light fa-lock-keyhole"></i>
                                    </span>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fa-brands fa-youtube"></i>WP
                                      Theme Development{" "}
                                    </a>
                                    <span>
                                      04:00
                                      <i className="fa-light fa-lock-keyhole"></i>
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFive">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseFive"
                                aria-expanded="false"
                                aria-controls="collapseFive">
                                Lesson 3
                              </button>
                            </h2>
                            <div
                              id="collapseFive"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingFive"
                              data-bs-parent="#Expp">
                              <div className="accordion-body">
                                <ul>
                                  <li>
                                    <a href="#">
                                      <i className="fa-brands fa-youtube"></i>
                                      Getting Started{" "}
                                    </a>
                                    <span>
                                      04:00
                                      <i className="fa-light fa-lock-keyhole"></i>
                                    </span>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fa-brands fa-youtube"></i>WP
                                      Theme Development{" "}
                                    </a>
                                    <span>
                                      04:00
                                      <i className="fa-light fa-lock-keyhole"></i>
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingSix">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseSix"
                                aria-expanded="false"
                                aria-controls="collapseSix">
                                Lesson 4
                              </button>
                            </h2>
                            <div
                              id="collapseSix"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingSix"
                              data-bs-parent="#Expp">
                              <div className="accordion-body">
                                <ul>
                                  <li>
                                    <a href="#">
                                      <i className="fa-brands fa-youtube"></i>
                                      Getting Started{" "}
                                    </a>
                                    <span>
                                      04:00
                                      <i className="fa-light fa-lock-keyhole"></i>
                                    </span>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fa-brands fa-youtube"></i>WP
                                      Theme Development{" "}
                                    </a>
                                    <span>
                                      04:00
                                      <i className="fa-light fa-lock-keyhole"></i>
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-contact"
                      role="tabpanel"
                      aria-labelledby="pills-contact-tab"
                      tabindex="0">
                      <div className="course_details-instructor">
                        <div className="course_details-thumbnail w_img">
                          <img
                            src="/assets/img/teacher/2/1.jpg"
                            alt="team images"
                          />
                        </div>
                        <div className="course_details-author-content">
                          <h6 className="course_details-author-title">
                            Jane Seymour
                          </h6>
                          <span className="course_details-author-subtitle">
                            Founder &amp; CEO
                          </span>
                          <p>
                            Consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt labore et dolore magna aliqua enim minim
                            veniam quis nostrud exercitation ulla mco laboris
                            nisi ut aliquip ex ea commodo consequat. duis aute
                            irure dolor in reprehenderit in voluptate.
                          </p>
                          <div className="contact-social">
                            <span>Social Media</span>
                            <ul>
                              <li>
                                <a href="#">
                                  <i className="fa-brands fa-twitter"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa-brands fa-facebook-f"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa-brands fa-linkedin-in"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa-brands fa-behance"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-four"
                      role="tabpanel"
                      aria-labelledby="pills-four-tab"
                      tabindex="0">
                      <div className="course_details-review">
                        <h4 className="course_details-review-title">
                          Student Ratings &amp; Reviews
                        </h4>
                        <div className="course_details-review-wrap">
                          <div className="row d-flex align-items-center">
                            <div className="col-md-4 col-sm-4">
                              <div className="course_details-review-left">
                                <h5>5.0</h5>
                                <ul>
                                  <li>
                                    <a href="#">
                                      <i className="fa-solid fa-star"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fa-solid fa-star"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fa-solid fa-star"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fa-solid fa-star"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fa-solid fa-star"></i>
                                    </a>
                                  </li>
                                </ul>
                                <p>(4 Reviews)</p>
                              </div>
                            </div>
                            <div className="col-md-8 col-sm-8">
                              <div className="course_details-review-content">
                                <ul>
                                  <li>
                                    <span className="review-rating">
                                      5 <i className="fa-solid fa-star"></i>
                                    </span>
                                    <span className="review-progress-bar"></span>
                                    <span className="review-rating-count">
                                      1
                                    </span>
                                  </li>
                                  <li>
                                    <span className="review-rating">
                                      4 <i className="fa-solid fa-star"></i>
                                    </span>
                                    <span className="review-progress-bar"></span>
                                    <span className="review-rating-count">
                                      3
                                    </span>
                                  </li>
                                  <li>
                                    <span className="review-rating">
                                      5 <i className="fa-solid fa-star"></i>
                                    </span>
                                    <span className="review-progress-bar"></span>
                                    <span className="review-rating-count">
                                      0
                                    </span>
                                  </li>
                                  <li>
                                    <span className="review-rating">
                                      5 <i className="fa-solid fa-star"></i>
                                    </span>
                                    <span className="review-progress-bar"></span>
                                    <span className="review-rating-count">
                                      0
                                    </span>
                                  </li>
                                  <li>
                                    <span className="review-rating">
                                      5 <i className="fa-solid fa-star"></i>
                                    </span>
                                    <span className="review-progress-bar"></span>
                                    <span className="review-rating-count">
                                      0
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="course_details-sidebar mb-60">
                <div className="account-main">
                  <h3 className="account-title">Lets Book 👋</h3>
                  <form action="#" className="account-form">
                    <div className="account-form-item mb-20">
                      <div className="account-form-label">
                        <label>Name</label>
                      </div>
                      <div className="account-form-input">
                        <input type="text" placeholder="Enter Your Name" />
                      </div>
                    </div>

                    <div className="account-form-item mb-20">
                      <div className="account-form-label">
                        <label>Email</label>
                      </div>
                      <div className="account-form-input">
                        <input type="email" placeholder="Enter Your Email" />
                      </div>
                    </div>
                    <div className="account-form-item mb-20">
                      <div className="account-form-label">
                        <label>Phone</label>
                      </div>
                      <div className="account-form-input">
                        <input type="phone" placeholder="Enter Your Phone" />
                      </div>
                    </div>
                    <div>
                      <Calendar
                        localizer={localizer}
                        events={events}
                        selectable
                        onSelectSlot={handleDateSelection}
                        defaultView="month"
                        views={["month"]}
                        defaultDate={new Date()}
                        style={{ height: 400 }}
                      />
                      {popupVisible && (
                        <div style={popupStyles}>
                          <h3>
                            Select Time Slot for{" "}
                            {moment(selectedDate).format("MMMM Do YYYY")}
                          </h3>
                          <div style={slotsContainerStyle}>
                            {timeSlots.map((slot) => (
                              <div
                                key={slot}
                                style={{
                                  ...slotBoxStyle,
                                  backgroundColor:
                                    selectedSlot === slot ? "#007BFF" : "#FFF",
                                  color:
                                    selectedSlot === slot ? "#FFF" : "#000",
                                }}
                                onClick={() => setSelectedSlot(slot)}>
                                {moment(slot, "HH:mm").format("h:mm A")}
                              </div>
                            ))}
                          </div>
                          <div style={{ marginTop: "10px" }}>
                            <button
                              style={{
                                marginRight: "10px",
                                padding: "10px",
                                background: "#007BFF",
                                color: "white",
                                border: "none",
                              }}
                              onClick={confirmBooking}>
                              Confirm
                            </button>
                            <button
                              style={{
                                padding: "10px",
                                background: "#DC3545",
                                color: "white",
                                border: "none",
                              }}
                              onClick={() => setPopupVisible(false)}>
                              Cancel
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                    <br />
                    <div className="account-form-button">
                      <button type="submit" className="account-btn">
                        Confirm Booking
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default CourseDetails;
