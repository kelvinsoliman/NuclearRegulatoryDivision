import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LresNavbar from "./IesNavbar";
import LresHero from "./IesHero";
import IesFooter from "./IesFooter";
import emailjs from "@emailjs/browser"; // Updated import for EmailJS v3+

const IesComplaint = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
    emailjs.init("bhs5Mg-5UOfqJqJVK"); // Initialize EmailJS with your user ID
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    mobileNo: "",
    licensee: "",
    address: "",
    complaintSummary: "",
  });

  const [responseSent, setResponseSent] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [agreeToPolicy, setAgreeToPolicy] = useState(false);
  const [errors, setErrors] = useState({});
  
  const validateForm = () => {
    const newErrors = {};

    if (!isAnonymous) {
      if (!formData.firstName.trim())
        newErrors.firstName = "First name is required";
      if (!formData.lastName.trim())
        newErrors.lastName = "Last name is required";
      if (!formData.email.trim()) newErrors.email = "Email is required";
      else if (!/^\S+@\S+\.\S+$/.test(formData.email))
        newErrors.email = "Invalid email format";
      if (!formData.mobileNo.trim())
        newErrors.mobileNo = "Mobile number is required";
    }

    if (!formData.licensee.trim()) newErrors.licensee = "Licensee is required";
    if (!formData.complaintSummary.trim())
      newErrors.complaintSummary = "Complaint summary is required";
    if (!agreeToPolicy)
      newErrors.policy = "You must agree to the privacy policy";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when field is edited
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleCheckboxChange = (e) => {
    const checked = e.target.checked;
    setIsAnonymous(checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const templateParams = {
        ...formData,
        to_email: "kelvinsoliman5@gmail.com",
        complainSummary: formData.complaintSummary,
        Licensee: formData.licensee,
        address: formData.address,
        isAnonymous: isAnonymous ? "Yes" : "No",
      };

      await emailjs.send("service_snipdea", "template_j0znk5a", templateParams);
      setResponseSent(true);
      // Reset form
      setFormData({
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        mobileNo: "",
        licensee: "",
        address: "",
        complaintSummary: "",
      });
      setIsAnonymous(false);
      setAgreeToPolicy(false);

      setTimeout(() => setResponseSent(false), 5000);
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Failed to submit the form. Please try again later.");
    }
  };

  return (
    <div className="bg-gray-100 text-gray-900">
      <LresHero />
      <LresNavbar />

      <section className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center md:items-start gap-10">
        <div className="md:w-2/3" data-aos="fade-down">
          <h2 className="text-4xl font-bold text-indigo-600 text-center md:text-left">
            File a Complaint
          </h2>

          <div className="mt-5 flex items-center">
            <input
              className="mr-2"
              type="checkbox"
              checked={isAnonymous}
              onChange={handleCheckboxChange}
              id="anonymousCheckbox"
            />
            <label htmlFor="anonymousCheckbox">
              Report Anonymously (I-check ang box kung ayaw magpakilala sa
              reklamo)
            </label>
          </div>

          <form className="flex flex-col mt-5" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row md:space-x-4 mb-4 mt-2">
              <div className="flex flex-col mb-4 md:mb-0 md:w-1/3">
                <label
                  className={`font-serif ${
                    isAnonymous ? "text-gray-400" : "text-black"
                  }`}
                >
                  First Name{" "}
                  {!isAnonymous && <span className="text-red-500">*</span>}
                </label>
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Firstname"
                  className={`h-10 border rounded-sm px-2 ${
                    errors.firstName ? "border-red-500" : "border-gray-400"
                  } ${isAnonymous ? "bg-gray-100" : "bg-white"}`}
                  type="text"
                  disabled={isAnonymous}
                />
                {errors.firstName && (
                  <span className="text-red-500 text-sm">
                    {errors.firstName}
                  </span>
                )}
              </div>

              <div className="flex flex-col mb-4 md:mb-0 md:w-1/3">
                <label
                  className={`font-serif ${
                    isAnonymous ? "text-gray-400" : "text-black"
                  }`}
                >
                  Middle Name
                </label>
                <input
                  name="middleName"
                  value={formData.middleName}
                  onChange={handleChange}
                  placeholder="Middlename"
                  className={`h-10 border rounded-sm px-2 ${
                    isAnonymous ? "bg-gray-100" : "bg-white"
                  } border-gray-400`}
                  type="text"
                  disabled={isAnonymous}
                />
              </div>

              <div className="flex flex-col mb-4 md:mb-0 md:w-1/3">
                <label
                  className={`font-serif ${
                    isAnonymous ? "text-gray-400" : "text-black"
                  }`}
                >
                  Last Name{" "}
                  {!isAnonymous && <span className="text-red-500">*</span>}
                </label>
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Lastname"
                  className={`h-10 border rounded-sm px-2 ${
                    errors.lastName ? "border-red-500" : "border-gray-400"
                  } ${isAnonymous ? "bg-gray-100" : "bg-white"}`}
                  type="text"
                  disabled={isAnonymous}
                />
                {errors.lastName && (
                  <span className="text-red-500 text-sm">
                    {errors.lastName}
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:space-x-4 mb-4 mt-2">
              <div className="flex flex-col mb-4 md:mb-0 md:w-1/2">
                <label
                  className={`font-serif ${
                    isAnonymous ? "text-gray-400" : "text-black"
                  }`}
                >
                  Email{" "}
                  {!isAnonymous && <span className="text-red-500">*</span>}
                </label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ex.juandelacruz@gmail.com"
                  className={`h-10 border rounded-sm px-2 ${
                    errors.email ? "border-red-500" : "border-gray-400"
                  } ${isAnonymous ? "bg-gray-100" : "bg-white"}`}
                  type="email"
                  disabled={isAnonymous}
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">{errors.email}</span>
                )}
              </div>

              <div className="flex flex-col mb-4 md:mb-0 md:w-1/2">
                <label
                  className={`font-serif ${
                    isAnonymous ? "text-gray-400" : "text-black"
                  }`}
                >
                  Mobile No.{" "}
                  {!isAnonymous && <span className="text-red-500">*</span>}
                </label>
                <input
                  name="mobileNo"
                  value={formData.mobileNo}
                  onChange={handleChange}
                  placeholder="+63"
                  className={`h-10 border rounded-sm px-2 ${
                    errors.mobileNo ? "border-red-500" : "border-gray-400"
                  } ${isAnonymous ? "bg-gray-100" : "bg-white"}`}
                  type="tel"
                  disabled={isAnonymous}
                />
                {errors.mobileNo && (
                  <span className="text-red-500 text-sm">
                    {errors.mobileNo}
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:space-x-4 mb-4 mt-2">
              <div className="flex flex-col mb-4 md:mb-0 md:w-1/2">
                <label className="font-serif">
                  Licensees/Facilities Complained of{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  name="licensee"
                  value={formData.licensee}
                  onChange={handleChange}
                  placeholder="Name / Company"
                  className={`h-10 border rounded-sm px-2 ${
                    errors.licensee ? "border-red-500" : "border-gray-400"
                  } bg-white`}
                  type="text"
                />
                {errors.licensee && (
                  <span className="text-red-500 text-sm">
                    {errors.licensee}
                  </span>
                )}
              </div>

              <div className="flex flex-col mb-4 md:mb-0 md:w-1/2">
                <label className="font-serif">Address of Agency</label>
                <input
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Address"
                  className="h-10 border border-gray-400 rounded-sm px-2 bg-white"
                  type="text"
                />
              </div>
            </div>

            <div className="flex flex-col w-full mb-4">
              <label className="font-serif">
                Summary of Complaint <span className="text-red-500">*</span>
              </label>
              <textarea
                name="complaintSummary"
                value={formData.complaintSummary}
                onChange={handleChange}
                className={`h-40 border rounded-sm px-2 py-2 ${
                  errors.complaintSummary ? "border-red-500" : "border-gray-400"
                } bg-white`}
                placeholder="Enter complaint details"
              />
              {errors.complaintSummary && (
                <span className="text-red-500 text-sm">
                  {errors.complaintSummary}
                </span>
              )}
            </div>

            <div className="mb-4">
              <p className="font-bold">Disclaimer:</p>
              <p className="italic">
                "Kapag ang inyong reklamo ay naangkop. Aming tinitiyak na ang
                inyong personal na impormasyon o pagkakakilanlan ay ligtas at
                kompindensyal."
              </p>
            </div>

            <div className="mb-4">
              <p className="font-bold">Data Privacy Notice:</p>
              <p className="italic">
                "Ang anumang impormasyon na aming makukuha ay gagamitin sa
                transaksyon na ito at sa pakikipag-ugnayan sa Inspection and
                Enforcement Section at sa mga susunod pang mga hakbang tungkol
                sa inyong reklamo, alinsunod sa Data Privacy Act at sa aming
                Data Privacy Policy na inyong mababasa sa www.op-proper.gov.ph.
                Ang pagpapatuloy ay nangangahulugan ng inyong pagsang-ayon."
              </p>
            </div>

            <div className="mb-6">
              <div className="flex items-center">
                <input
                  className="mr-2"
                  type="checkbox"
                  checked={agreeToPolicy}
                  onChange={(e) => setAgreeToPolicy(e.target.checked)}
                  id="policyCheckbox"
                />
                <label htmlFor="policyCheckbox">
                  I Agree to{" "}
                  <span className="text-red-500">Privacy Policy</span>
                </label>
              </div>
              {errors.policy && (
                <span className="text-red-500 text-sm">{errors.policy}</span>
              )}
            </div>

            <button
              className="bg-gray-700 mt-4 rounded-sm text-white h-10 w-full md:w-32 hover:bg-gray-600 transition-colors"
              type="submit"
            >
              Submit
            </button>

            {responseSent && (
              <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-sm">
                Response Sent! Thank you for your cooperation.
              </div>
            )}
          </form>
        </div>
      </section>

      <IesFooter />
    </div>
  );
};

export default IesComplaint;
