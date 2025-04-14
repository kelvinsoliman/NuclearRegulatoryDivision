import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";

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
      once: true 
    });
    
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("http://localhost:5175/Activities");
      const formattedEvents = response.data.map(event => ({
        ...event,
        start: event.start ? new Date(event.start) : null,
        end: event.end ? new Date(event.end) : null
      }));
      setEvents(formattedEvents);
    } catch (error) {
      console.error("Error fetching events:", error);
      setError("Failed to fetch events. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5175/Activities", formData);
      setEvents(prev => [...prev, {
        ...response.data,
        start: response.data.start ? new Date(response.data.start) : null,
        end: response.data.end ? new Date(response.data.end) : null
      }]);
      setFormData({ title: "", start: "", end: "", description: "" });
    } catch (error) {
      console.error("Error adding event:", error);
      setError("Failed to add event. Please try again.");
    } finally {
      setLoading(false);
    }
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
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay"
            }}
            events={events}
            height="auto"
            nowIndicator={true}
            editable={true}
            selectable={true}
          />
        </div>
      )}


      <div className="bg-gray-100 shadow-lg rounded-lg p-6 max-w-lg mx-auto" data-aos="fade-up">
        <h2 className="text-xl font-semibold text-center mb-4">Add New Event</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Event Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>


          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Start Time</label>
              <input
                type="datetime-local"
                name="start"
                value={formData.start}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">End Time</label>
              <input
                type="datetime-local"
                name="end"
                value={formData.end}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={3}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 px-4 rounded font-bold text-white ${loading ? 'bg-blue-400' : 'bg-blue-500 hover:bg-blue-600'}`}
          >
            {loading ? 'Adding Event...' : 'Add Event'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Activities;