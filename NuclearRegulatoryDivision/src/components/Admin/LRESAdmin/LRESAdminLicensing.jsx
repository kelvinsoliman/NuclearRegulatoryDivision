import React, { useState, useEffect } from "react";
import AOS from "aos"; // Import AOS if you are using it
import "aos/dist/aos.css"; // Import AOS CSS

const LRESAdminLicensing = () => {
  const [formData, setFormData] = useState({
    service_name: "",
    service_desc: "",
    requirements: "",
    details: "",
  });

  const [entries, setEntries] = useState([]); // Stores all form submissions
  const [isModalOpen, setIsModalOpen] = useState(false); // Controls modal visibility
  const [editIndex, setEditIndex] = useState(null); // Tracks the index of the entry being edited
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });

    const fetchLicenses = async () => {
      setLoading(true);
      try {
        const res = await fetch("http://localhost:5175/LRESAdminLicensing");
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

        const data = await res.json();
        setEntries(data);
        console.log(data);
        setError(null);
      } catch (err) {
        console.error("Error fetching licensing data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLicenses();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = "http://localhost:5175/LRESAdminLicensing";
    const method = editIndex !== null ? "PUT" : "POST"; // Use PUT for updates if needed

    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      if (editIndex !== null) {
        // Update existing entry in the state
        const updatedEntries = [...entries];
        updatedEntries[editIndex] = data;
        setEntries(updatedEntries);
      } else {
        // Add new entry to the state
        setEntries([...entries, data]);
      }

      // Reset form and close modal
      setFormData({ service_name: "", service_desc: "", requirements: "", details: "" });
      setIsModalOpen(false);
      setEditIndex(null);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleEdit = (index) => {
    setFormData(entries[index]); // Populate form with selected entry
    setEditIndex(index); // Set the index of the entry being edited
    setIsModalOpen(true); // Open modal
  };

  const handleDelete = (index) => {
    const updatedEntries = entries.filter((_, i) => i !== index); // Remove the entry
    setEntries(updatedEntries);
  };

  if (loading) {
    return (
      <div className="text-center py-10 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-700"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10 text-red-500 bg-gray-800">
        Error: {error}. Please try again later.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Add New Entry Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 mb-6"
      >
        Add New Entry
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-md w-full max-w-2xl">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                {editIndex !== null ? "Edit Entry" : "Add New Entry"}
              </h2>
              <form onSubmit={handleSubmit}>
                {/* Name and Description Fields */}
                <div className="md:flex justify-between gap-5 items-center p-4">
                  <div className="mb-6 w-full">
                    <label
                      htmlFor="service_name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="service_name"
                      name="service_name"
                      value={formData.service_name}
                      onChange={handleChange}
                      className="mt-1 block w-full outline-0 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="Enter name"
                      required
                    />
                  </div>
                  <div className="mb-6 w-full">
                    <label
                      htmlFor="service_desc"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Description
                    </label>
                    <textarea
                      id="service_desc"
                      name="service_desc"
                      value={formData.service_desc}
                      onChange={handleChange}
                      rows="3"
                      className="mt-1 outline-0 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="Enter description"
                      required
                    />
                  </div>
                </div>

                {/* Requirements Field */}
                <div className="mb-6">
                  <label
                    htmlFor="requirements"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Requirements
                  </label>
                  <textarea
                    id="requirements"
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleChange}
                    rows="3"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Enter requirements"
                    required
                  />
                </div>

                {/* Details Field */}
                <div className="mb-6">
                  <label
                    htmlFor="details"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Details
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    rows="5"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Enter details"
                    required
                  />
                </div>

                {/* Form Buttons */}
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
                  >
                    {editIndex !== null ? "Update" : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Entries Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Requirements
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Details
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {entries.map((entry, index) => (
              <tr key={index}>
                <td className="px-6 py-4">{entry.service_name}</td>
                <td className="px-6 py-4">{entry.service_desc}</td>
                <td className="px-6 py-4">{entry.requirements}</td>
                <td className="px-6 py-4">{entry.details}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleEdit(index)}
                    className="text-blue-600 hover:text-blue-800 mr-4"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LRESAdminLicensing;