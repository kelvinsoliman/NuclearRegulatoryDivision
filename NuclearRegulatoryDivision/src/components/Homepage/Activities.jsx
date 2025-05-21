import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import Tooltip from "@mui/material/Tooltip";

const Activities = () => {
  const [events, setEvents] = useState([]);
  
  const [formData, setFormData] = useState({
    title: "",
    start: "",
    end: "",
    description: "",
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {

    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });


    fetchEvents();
  }, []);

  
  const fetchEvents = async () => {
    setLoading(true); 
    try {      
      const response = await axios.get("http://localhost:5175/Activities");
      
      const formattedEvents = response.data.map((event) => ({
        ...event,
        start: event.start ? new Date(event.start).toISOString().split("T")[0] : null,
        end: event.end ? new Date(event.end).toISOString().split("T")[0] : null,
      }));
      
      setEvents(formattedEvents);
    } catch (error) {      
      setError("Failed to fetch events. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const renderEventContent = (eventInfo) => {
    return (
      <Tooltip title={eventInfo.event.extendedProps.description || "No description"} arrow>
        <div className="fc-event-main-frame">
          <div className="fc-event-title-container">
            <div className="fc-event-title fc-sticky">
              {eventInfo.event.title}
            </div>
          </div>
        </div>
      </Tooltip>
    );
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6" data-aos="fade-down">
        Event Calendar
      </h1>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {loading ? (
        <div className="text-center py-8">Loading calendar...</div>
      ) : (
        <div className="bg-white shadow-md rounded-lg p-4 mb-6" data-aos="fade-up">
          <FullCalendar
            plugins={[dayGridPlugin]} 
            initialView="dayGridMonth" 
            headerToolbar={{
              left: "prev,next today", 
              center: "title",
              right: "", 
            }}
            events={events} 
            height="auto"
            eventContent={renderEventContent} 
            displayEventTime={false} 
          />
        </div>
      )}
    </div>
  );
};

export default Activities;