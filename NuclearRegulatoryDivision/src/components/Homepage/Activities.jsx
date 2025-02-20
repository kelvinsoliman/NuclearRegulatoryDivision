import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import logo1 from "../../assets/BP-LOGO-BT.png"; // Add multiple logo imports
import logo2 from "../../assets/foi_logo.png";
import logo3 from "../../assets/INSO_Thumbnail.png";
import logo4 from "../../assets/AEW52_Thumbnail.png";
import FullCalendar from "@fullcalendar/react"; // FullCalendar library
import dayGridPlugin from "@fullcalendar/daygrid"; // Plugin for month view
import interactionPlugin from "@fullcalendar/interaction"; // Plugin for interactivity
import timeGridPlugin from "@fullcalendar/timegrid"; // Plugin for week/day view

const Activities = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  const [events, setEvents] = useState([]); // State to store calendar events
  const [formData, setFormData] = useState({
    title: "",
    start: "",
    end: "",
    description: "",
  });

  // Handle input changes for event form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission to add a new event
  const handleSubmit = (e) => {
    e.preventDefault();

    // Add the new event to the events array
    const newEvent = {
      title: formData.title,
      start: formData.start,
      end: formData.end,
      description: formData.description,
    };

    setEvents([...events, newEvent]);
    setFormData({ title: "", start: "", end: "", description: "" }); // Reset form
  };

  // Handle date click (optional: add event directly by clicking on the calendar)
  const handleDateClick = (arg) => {
    const title = prompt("Enter event title:");
    if (title) {
      const newEvent = { title, start: arg.dateStr, end: arg.dateStr };
      setEvents([...events, newEvent]);
    }
  };

  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Main Content with Logos and Calendar */}
      <section className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Left Section (Logos) */}
        <div
          className="flex flex-wrap md:flex-col items-center justify-center md:w-1/3 gap-4"
          data-aos="fade-right"
        >
          <img
            src={logo1}
            alt="Logo 1"
            className="h-20 w-20 md:h-30 md:w-30 rounded-full"
          />
          <img
            src={logo2}
            alt="Logo 2"
            className="h-20 w-20 md:h-30 md:w-30 rounded-full"
          />
          <img
            src={logo3}
            alt="Logo 3"
            className="h-20 w-20 md:h-30 md:w-30 rounded-full"
          />
          <img
            src={logo4}
            alt="Logo 3"
            className="h-20 w-20 md:h-30 md:w-30 rounded-full"
          />
        </div>

        {/* Right Section (Calendar and Event Form) */}
        <div className="md:w-2/3" data-aos="fade-left">
          {/* Calendar */}
          <div className="mb-8">
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              events={events}
              dateClick={handleDateClick} // Optional: Add event on date click
              headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay",
              }}
            />
          </div>

          {/* Event Form */}
          <h1 className="text-indigo-600 text-xl md:text-4xl font-bold capitalize">
            Add a New Event
          </h1>
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-xl shadow-lg mt-6"
          >
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">
                Event Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Event Title"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">
                Start Date & Time
              </label>
              <input
                type="datetime-local"
                name="start"
                value={formData.start}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">
                End Date & Time
              </label>
              <input
                type="datetime-local"
                name="end"
                value={formData.end}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                placeholder="Event Description"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-400 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 ease-in-out duration-500"
            >
              Add Event
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Activities;