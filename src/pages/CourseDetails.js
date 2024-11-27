import Footer from "../components/footer/footer";
import Navbar from "../components/nav/navBar";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, momentLocalizer } from "react-big-calendar";
import axios from "axios";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import NewsLetter from "../components/newsletter/newsLetter";
import coursesData from "../data/course_details.json";
const localizer = momentLocalizer(moment);

const eventsData = [
  // {
  //   id: 1,
  //   title: "Initial Consulting",
  //   start: "2024-11-25T10:00:00",
  //   end: "2024-11-25T11:00:00",
  // },
  // {
  //   id: 2,
  //   title: "Follow-Up Session",
  //   start: "2024-11-26T14:00:00",
  //   end: "2024-11-26T15:00:00",
  // },
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
  height: "80px",
  border: "1px solid #007BFF",
  borderRadius: "5px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  userSelect: "none",
};

const BASE_URL = process.env.REACT_APP_BASE_URL;
const CourseDetails = () => {
  const { id } = useParams();
  const course = coursesData.find((course) => course.id === id);
  // if (!course) {
  //   return <div>Course not found</div>;
  // }
  const [events, setEvents] = useState([]);
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [courseId, setCourseId] = useState("course_id_example"); 
  const [price, setPrice] = useState(1000);
  const timeSlots = generateTimeSlots("09:00", "17:00");

  useEffect(() => {
    const formattedEvents = eventsData.map((event) => ({
      ...event,
      start: new Date(event.start),
      end: new Date(event.end),
    }));
    setEvents(formattedEvents);
  }, []);

  const handleDateSelection = (slotInfo) => {
    const currentTime = moment();

  // Allow the selection of today's date, but ensure the time is after the current moment
  const selectedTime = moment(slotInfo.start);
  
  if (selectedTime.isBefore(currentTime, 'day')) {
    alert("Please select a time in the future.");
    return;
  }
    setSelectedDate(slotInfo.start);
    setPopupVisible(true);
  };
  const createOrder = async (amount) => {
    try {
      const response = await axios.post(`${BASE_URL}/slots/order`, {
        amount: amount,
      });
      if (response && response.data && response.data.order_id) {
        const options = {
          key: process.env.REACT_APP_RAZORPAY_KEY_ID,
          amount: amount * 100,
          currency: "INR",
          name: "Your Company Name",
          description: "Payment for Order",
          order_id: response.data.order_id,
          handler: async function (paymentResponse) {
            console.log("Payment Success:", paymentResponse);
            try {
              const res = await axios.post(`${BASE_URL}/slots/verify-capture`, {
                razorpay_order_id: paymentResponse.razorpay_order_id,
                razorpay_payment_id: paymentResponse.razorpay_payment_id,
                razorpay_signature: paymentResponse.razorpay_signature,
              });

              if (res.status === 200) {
                console.log("Payment Verified and Slot Booked");
              }
            } catch (error) {
              console.error("Error verifying payment:", error);
            }
          },
          prefill: {
            name: "Customer Name",
            email: "customer@example.com",
            phone_number: "1234567890",
          },
          theme: {
            color: "#F37254",
          },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();

        return {
          order_id: response.data.order_id,
          amount: amount,
          currency: "INR",
        };
      } else {
        console.error("Order creation failed: No order ID returned");
        return null;
      }
    } catch (error) {
      console.error(
        "Error creating order:",
        error.response?.data || error.message
      );
      return null;
    }
  };
  const calendarStyle = (date) => {
    const today = new Date();
    today.setDate(today.getDate() - 1); // Subtract 1 day to allow the current date and disable the day before
    
    // Compare the date with today minus 1 day
    if (date < today) {
      return {
        style: {
          backgroundColor: '#D3D3D3', // Light grey background for past dates
          cursor: 'not-allowed', // Change cursor to indicate it's disabled
          pointerEvents: 'none', // Disable interaction with past dates
          color: '#A9A9A9', // Grey out the text of the date
          border: '1px solid #A9A9A9', // Optional border to make it look more disabled
          margin: 0,
          padding: 0,
        },
      };
    }
  
    return {};
  };
  
 
  const bookSlot = async (slotData) => {
    try {
      const response = await axios.post(`${BASE_URL}/slots/book`, slotData);

      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.error(
        "Error booking slot:",
        error.response?.data || error.message
      );
      return null;
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !phone) {
      alert("Please fill in all fields.");
      return;
    }

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
    const orderData = await createOrder(price);
    if (!orderData) return;

    const { order_id, amount, currency } = orderData;
    const newEvent = {
      id: events.length + 1,
      title: `Booking by ${name}`,
      start: startDateTime,
      end: endDateTime,
    };
    setEvents([...events, newEvent]);
    setPopupVisible(false);
    setSelectedSlot(null);
    const formData = {
      name,
      email,
      phone,
      courseId: course.id,
      price,
      paymentId: order_id,
      platform: "goggle",
      dateTime: startDateTime.toISOString(),
      start_date: startDateTime.toISOString(),
      end_date: endDateTime.toISOString(),
    };
    const response = await bookSlot(formData);
    if (!response) {
      alert("Error booking slot. Please try again later.");
      return;
    }
    alert("Slot booked successfully!");
  };
 

  return (
    <>
      <Navbar />
      <section className="course_details-area pt-60 pb-60">
        <div className="container">
          <div className="course_details-top">
            <div className="row">
              <div className="col-md-10 col-12">
                <h3 className="course_details-title">{course.title} </h3>
              </div>
              <div className="col-md-2 col-12">
                <div className="course_details-meta-right">
                  <Link className="theme-btn theme-btn-medium">
                    Price: $ {course.price}
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="course_details-wrap ">
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
                          <p className="mb-40"  >{course.description2}</p>
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
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="">
                  <div className="account-main">
                    <form className="account-form" onSubmit={handleSubmit}>
                      <div className="account-form-item mb-20">
                        <div className="account-form-label">
                          <label>Name</label>
                        </div>
                        <div className="account-form-input">
                          <input
                            type="text"
                            placeholder="Enter Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="account-form-item mb-20">
                        <div className="account-form-label">
                          <label>Email</label>
                        </div>
                        <div className="account-form-input">
                          <input
                            type="email"
                            placeholder="Enter Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="account-form-item mb-20">
                        <div className="account-form-label">
                          <label>Phone</label>
                        </div>
                        <div className="account-form-input">
                          <input
                            type="tel"
                            placeholder="Enter Your Phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                          />
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
                          className="calendar-container"
                          dayPropGetter={calendarStyle}
                          
                        />

                        {popupVisible && (
                          <div style={popupStyles}>
                            <p>
                              Select Time Slot for{" "}
                              {moment(selectedDate).format("MMMM Do YYYY")}
                            </p>
                            <div style={slotsContainerStyle}>
                              {timeSlots.map((slot) => (
                                <div
                                  key={slot}
                                  style={{
                                    ...slotBoxStyle,
                                    backgroundColor:
                                      selectedSlot === slot
                                        ? "#007BFF"
                                        : "#FFF",
                                    color:
                                      selectedSlot === slot ? "#FFF" : "#000",
                                  }}
                                  onClick={() => setSelectedSlot(slot)}>
                                  {moment(slot, "HH:mm").format("h:mm A")}
                                </div>
                              ))}
                            </div>
                            <div
                              style={{ marginTop: "10px" }}
                              className="text-center mt-2">
                              <button
                                style={{
                                  marginRight: "10px",
                                  padding: "10px",
                                  background: "#007BFF",
                                  color: "white",
                                  border: "none",
                                  width: "200px",
                                  borderRadius: "5px",
                                }}
                                onClick={() => setPopupVisible(false)}>
                                Confirm
                              </button>
                              <button
                                style={{
                                  padding: "10px",
                                  background: "#e86602",
                                  color: "white",
                                  border: "none",
                                  width: "200px",
                                  borderRadius: "5px",
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
                        <button
                          type="submit"
                          className="account-btn"
                          onClick={(e) => {
                            handleSubmit(e);
                          }}>
                          Confirm Booking
                        </button>
                      </div>
                    </form>
                  </div>
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
