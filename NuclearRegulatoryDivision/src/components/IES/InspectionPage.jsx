import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LresNavbar from "./IesNavbar";
import logo1 from "../../assets/BP-LOGO-BT.png"; // Add multiple logo imports
import logo2 from "../../assets/foi_logo.png";
import logo3 from "../../assets/INSO_Thumbnail.png";
import logo4 from "../../assets/AEW52_Thumbnail.png";
import LresHero from "./IesHero";
import IesFooter from "./IesFooter";
import LresRating from "./IesRating";
import Inspection from "../../assets/inspection.jpg";
import Enforcement from "../../assets/enforcement.jpg";
import { Link, useHref } from "react-router-dom";
import { Bold } from "lucide-react";
import Inspections from "../../assets/1.jpg";
import EAction from "../../assets/2.jpg";
import Permit from "../../assets/3.jpg";

const InspectionPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <div className="bg-gray-100 text-gray-900">
      {/* HERO */}
      <LresHero />

      {/* NAVBAR */}
      <LresNavbar />

      {/* Main Content with Logos and Text */}
      <section className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Quality Objectives and Contacts */}
        <div
          className="md:w-240 border-r-4 border-indigo-300 "
          data-aos="fade-right"
        >
          <h2 className="mt-5 text-4xl font-bold text-indigo-600 text-center md:text-left">
            Quality Objectives
          </h2>

          <div class="mt-10 mr-10 flex space-x-4">
            <div class="w-80 h-93 p-5 bg-white-200 rounded-xl shadow-lg border-l-4 border-indigo-500">
              <p className="font-bold text-2xl text-indigo-600">01</p>
              <p className="mt-2 text-justify" data-aos="fade-up">
                To undertake the conduct of regulatory inspection of licensed
                radioactive materials and facilities in accordance with the 2025
                inspection schedule, and to prepare the final official
                inspection report within twenty (20) working days after
                completion of the scheduled batch of inspections.
              </p>
            </div>

            <div class="w-80 p-5 bg-white rounded-xl shadow-lg border-l-4 border-indigo-500">
              <p className="font-bold text-2xl text-indigo-600">02</p>
              <p
                className="mt-2 text-justify"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                To ensure that appropriate Regulatory Enforcement Action in
                accordance with PNRI Administrative Order No. 3, s. 2004 is
                prepared within twenty-two (22) working days after
                recommendation to issue is approved by the NRD Chief.​
              </p>
            </div>

            <div class="w-80 p-5 bg-white rounded-xl shadow-lg border-l-4 border-indigo-500">
              <p className="font-bold text-2xl text-indigo-600">03</p>
              <p
                className="mt-2 text-justify"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                To prepare Permit of Transport with at most four (4) revision
                within four (4) hours upon request.​​
              </p>
            </div>
          </div>

          {/* Annual Report */}
          <h1 className="text-center mt-10 pt-10 text-indigo-600 text-xl md:text-4xl font-bold capitalize">
            2024 Annual Performance Report
          </h1>

          <div
            className="overflow-y-auto max-h-[500px] mt-5"
            style={{ direction: "rtl" }}
          >
            {" "}
            {/* Added scrollable container with max height */}
            <div
              className="bg-white rounded-xl shadow-lg border-l-4 mr-10 border-indigo-500 flex items-start space-x-4 mt-10 mb-5"
              data-aos="fade-right"
            >
              <img
                className="mx-auto h-100 w-150 rounded-xl"
                src={Inspections}
                alt="conducted inspection"
              />
            </div>
            <p className="text-2xl text-center">
              A total of 96 regulatory inspections were conducted for 2024.​
            </p>
            <div className="bg-white rounded-xl shadow-lg border-l-4 mr-10 border-indigo-500 flex items-start space-x-4 mt-15 mb-5">
              <img
                className="mx-auto h-100 w-150 rounded-xl"
                src={EAction}
                alt="conducted inspection"
              />
            </div>
            <p className="text-2xl text-center">
              A total of 23 Enforcement Action were conducted for 2024.​
            </p>
            <div className="bg-white rounded-xl shadow-lg border-l-4 mr-10 border-indigo-500 flex items-start space-x-4 mt-15 mb-5">
              <img
                className="mx-auto h-100 w-150 rounded-xl"
                src={Permit}
                alt="conducted inspection"
              />
            </div>
            <p className="text-2xl text-center">
              A total of 7888 permit to transport were issued for 2025.​​
            </p>
          </div>
        </div>

        {/* Conducting Regulatory Inspection */}
        <div
          className=" flex flex-col justify-between md:w-200"
          data-aos="fade-left"
        >
          <h3 className="text-center mb-5 text-4xl font-bold text-indigo-600">
            Conducting Regulatory Inspection
          </h3>

          <div className="p-5 mt-5 bg-black-200 border-2 border-indigo-500 rounded-xl shadow-lg">
            <div
              data-aos="fade-up"
              data-aos-delay="1500"
              class="max-h-[350px] overflow-y-auto p-5"
            >
              <p className=" text-xl text-justify">
                The PNRI imposes enforcement actions to licensees who are found
                to have violated any rule or regulation issued by the PNRI.
                These enforcement actions are issued in the form of:
              </p>

              <p className="p-5 text-2xl font-bold">(a) Notice of Violation</p>

              <p className="text-xl text-justify">
                A Notice of Violation is a written notice that sets forth one or
                more violations to PNRI requirements and requires the licensee
                to submit a written reply containing:{" "}
              </p>

              <p className="text-xl ">
                (1) An explanation why or how the violation occurred or, if
                contested, the basis for disputing the violation;{" "}
              </p>

              <p className="text-xl">
                (2) Corrective actions that have been taken and the results
                achieved;
              </p>

              <p className="text-xl">
                (3) Corrective actions to be taken to prevent recurrence; and
              </p>

              <p className="text-xl">
                (4) The date when full compliance will be achieved.
              </p>

              <p className="p-5 text-2xl font-bold">(b) Orders </p>
              <p className="text-xl">
                An <b>ORDER</b> is a written PNRI directive to modify, suspend,
                or revoke a license; to cease and desist from a given practice
                or activity; or to take such other action as may be proper.{" "}
              </p>

              <p className="mt-5 text-xl text-justify">
                Orders are also used when the PNRI has identified deliberate
                misconduct that may cause a licensee to violate a PNRI
                requirement, or where incomplete or inaccurate information is
                deliberately submitted, or where the PNRI is not assured that
                the licensee, or any of its authorized personnel, will meet PNRI
                requirements.
              </p>

              <p className="mt-5 text-xl text-justify">
                Orders may also be issued as appropriate for Severity levels I,
                II, or III violations, as follows:
              </p>

              <p className="mt-5 text-xl text-justify">
                <b>(1) License Modification Orders</b> are issued when change in
                licensee equipment, procedures, personnel or management controls
                are necessary. This type of Order may be issued by reason of
                addition or withdrawal of specific authority in the license, or
                amendment of rules or regulations, or as a result of a
                determination of a significant violation requiring such
                directive.{" "}
              </p>

              <p className="mt-5 text-xl text-justify">
                <b>(2) Suspension Orders</b> may be used:
              </p>
              <p className="text-xl text-justify ml-8">
                (i) To remove a threat to public health and safety, security of
                radioactive sources, the environment or the national interest;{" "}
              </p>

              <p className="text-xl text-justify ml-8 mt-5 mb-3">
                (ii) To stop the construction of a facility when:
              </p>
              <p className="text-xl text-justify ml-20">
                - Further work could preclude or significantly hinder the
                identification or correction of an improperly constructed
                safety-related system or component; or{" "}
              </p>
              <p className="text-xl text-justify ml-20">
                - The licensee's quality assurance program implementation is not
                adequate to provide confidence that construction activities are
                being properly carried out;{" "}
              </p>

              <p className="text-xl text-justify ml-8 mt-3">
                (iii) When the licensee has not responded adequately to a
                previous enforcement action;
              </p>

              <p className="text-xl text-justify ml-8 mt-3">
                (iv) When the licensee interferes with the conduct of an
                inspection or investigation; or{" "}
              </p>

              <p className="text-xl text-justify ml-8 mt-3">
                (v) For any reason not mentioned above for which license
                suspension is legally authorized under Section 27 of RA 5207{" "}
              </p>

              <p className="mt-5 text-xl text-justify">
                <b>(3) Cease and Desist Orders</b> may be used to stop an
                unauthorized or unsafe activity that has continued after
                notification by the PNRI that the activity is unauthorized or
                unsafe, and/or a suspension order has not been followed.{" "}
              </p>

              <p className="text-xl text-justify mt-5">
                <b>(4) Revocation Orders</b> may be used:
              </p>
              <p className="text-xl text-justify ml-8 mt-3">
                (i)When a licensee refuses to correct a violation;{" "}
              </p>
              <p className="text-xl text-justify ml-8 mt-3">
                (ii)When a licensee does not respond to a Notice of Violation
                where a response was required;{" "}
              </p>
              <p className="text-xl text-justify ml-8 mt-3">
                (iii)When a licensee refuses to pay any prescribed fee under the
                PNRI regulations; or{" "}
              </p>
              <p className="text-xl text-justify ml-8 mt-3">
                (v)For any other reason for which revocation is authorized under
                Section 27 of the Atomic Energy Regulatory and Liability Act of
                1958, “R.A No. 5207”.{" "}
              </p>

              <p className="p-5 text-2xl font-bold">
                (c) Administrative Sanctions{" "}
              </p>
              <p className="text-xl text-justify">
                In addition to Notices of Violations and Orders, the PNRI also
                uses administrative regulatory actions, such as Confirmatory
                Action Letters, Letters of Reprimand, and Demand for Information
                to supplement its enforcement program. The PNRI expects
                licensees to adhere to any obligations and commitments resulting
                from these actions and will not hesitate to issue appropriate
                Orders and/or sanctions to ensure that these obligations and
                commitments are met.{" "}
              </p>

              <p className="mt-5 text-xl text-justify">
                <b>(1) Confirmatory Action Letters</b> are letters confirming a
                licensee's agreement to take certain actions to remove
                significant concerns about health and safety or the environment.{" "}
              </p>

              <p className="mt-5 text-xl text-justify">
                <b>(2) Letters of Reprimand</b> are letters addressed to
                individuals named in the license identifying a significant
                deficiency in their performance of licensed activities.
              </p>

              <p className="mt-5 text-xl text-justify">
                <b>(3) Demand for Information</b> are demand letters to the
                licensee for information for the purpose of enabling the PNRI to
                determine whether or not an order or other enforcement action
                should be issued.{" "}
              </p>

              <p className="text-xl text-justify mt-5">
                Some mechanisms employed by the PNRI to aid enforcement are
                regulatory conferences with licensees and issuance of regulatory
                bulletins or information notices. Regulatory conferences are
                meetings organized by the PNRI with licensee management to
                discuss safety, security or environmental issues, licensee's
                compliance with regulatory requirements, licensee's proposed
                corrective measures and enforcement options available to the
                PNRI. Regulatory bulletins or information notices are written
                notifications to licensees identifying specific problems and
                recommending specific actions.{" "}
              </p>
            </div>
          </div>

          {/* Issuance Section */}
          <div className="bg-white mt-10">
            <h4 className="text-center text-4xl font-bold text-indigo-600">
              Enforcement Action and
            </h4>
            <h4 className="text-center text-4xl font-bold text-indigo-600">
              Related Administrative Sanctions
            </h4>

            <div className="p-5 mt-10 bg-black-200 border-2 border-indigo-500 rounded-xl shadow-lg">
              <div
                data-aos="fade-up"
                data-aos-delay="1500"
                class="max-h-[350px] overflow-y-auto p-4"
              >
                <p className=" text-xl text-justify">
                  The PNRI imposes enforcement actions to licensees who are
                  found to have violated any rule or regulation issued by the
                  PNRI. These enforcement actions are issued in the form of:
                </p>

                <p className="p-5 text-2xl font-bold">
                  (a) Notice of Violation
                </p>

                <p className="text-xl text-justify">
                  A Notice of Violation is a written notice that sets forth one
                  or more violations to PNRI requirements and requires the
                  licensee to submit a written reply containing:{" "}
                </p>

                <p className="text-xl ">
                  (1) An explanation why or how the violation occurred or, if
                  contested, the basis for disputing the violation;{" "}
                </p>

                <p className="text-xl">
                  (2) Corrective actions that have been taken and the results
                  achieved;
                </p>

                <p className="text-xl">
                  (3) Corrective actions to be taken to prevent recurrence; and
                </p>

                <p className="text-xl">
                  (4) The date when full compliance will be achieved.
                </p>

                <p className="p-5 text-2xl font-bold">(b) Orders </p>
                <p className="text-xl">
                  An <b>ORDER</b> is a written PNRI directive to modify,
                  suspend, or revoke a license; to cease and desist from a given
                  practice or activity; or to take such other action as may be
                  proper.{" "}
                </p>

                <p className="mt-5 text-xl text-justify">
                  Orders are also used when the PNRI has identified deliberate
                  misconduct that may cause a licensee to violate a PNRI
                  requirement, or where incomplete or inaccurate information is
                  deliberately submitted, or where the PNRI is not assured that
                  the licensee, or any of its authorized personnel, will meet
                  PNRI requirements.
                </p>

                <p className="mt-5 text-xl text-justify">
                  Orders may also be issued as appropriate for Severity levels
                  I, II, or III violations, as follows:
                </p>

                <p className="mt-5 text-xl text-justify">
                  <b>(1) License Modification Orders</b> are issued when change
                  in licensee equipment, procedures, personnel or management
                  controls are necessary. This type of Order may be issued by
                  reason of addition or withdrawal of specific authority in the
                  license, or amendment of rules or regulations, or as a result
                  of a determination of a significant violation requiring such
                  directive.{" "}
                </p>

                <p className="mt-5 text-xl text-justify">
                  <b>(2) Suspension Orders</b> may be used:
                </p>
                <p className="text-xl text-justify ml-8">
                  (i) To remove a threat to public health and safety, security
                  of radioactive sources, the environment or the national
                  interest;{" "}
                </p>

                <p className="text-xl text-justify ml-8 mt-5 mb-3">
                  (ii) To stop the construction of a facility when:
                </p>
                <p className="text-xl text-justify ml-20">
                  - Further work could preclude or significantly hinder the
                  identification or correction of an improperly constructed
                  safety-related system or component; or{" "}
                </p>
                <p className="text-xl text-justify ml-20">
                  - The licensee's quality assurance program implementation is
                  not adequate to provide confidence that construction
                  activities are being properly carried out;{" "}
                </p>

                <p className="text-xl text-justify ml-8 mt-3">
                  (iii) When the licensee has not responded adequately to a
                  previous enforcement action;
                </p>

                <p className="text-xl text-justify ml-8 mt-3">
                  (iv) When the licensee interferes with the conduct of an
                  inspection or investigation; or{" "}
                </p>

                <p className="text-xl text-justify ml-8 mt-3">
                  (v) For any reason not mentioned above for which license
                  suspension is legally authorized under Section 27 of RA 5207{" "}
                </p>

                <p className="mt-5 text-xl text-justify">
                  <b>(3) Cease and Desist Orders</b> may be used to stop an
                  unauthorized or unsafe activity that has continued after
                  notification by the PNRI that the activity is unauthorized or
                  unsafe, and/or a suspension order has not been followed.{" "}
                </p>

                <p className="text-xl text-justify mt-5">
                  <b>(4) Revocation Orders</b> may be used:
                </p>
                <p className="text-xl text-justify ml-8 mt-3">
                  (i)When a licensee refuses to correct a violation;{" "}
                </p>
                <p className="text-xl text-justify ml-8 mt-3">
                  (ii)When a licensee does not respond to a Notice of Violation
                  where a response was required;{" "}
                </p>
                <p className="text-xl text-justify ml-8 mt-3">
                  (iii)When a licensee refuses to pay any prescribed fee under
                  the PNRI regulations; or{" "}
                </p>
                <p className="text-xl text-justify ml-8 mt-3">
                  (v)For any other reason for which revocation is authorized
                  under Section 27 of the Atomic Energy Regulatory and Liability
                  Act of 1958, “R.A No. 5207”.{" "}
                </p>

                <p className="p-5 text-2xl font-bold">
                  (c) Administrative Sanctions{" "}
                </p>
                <p className="text-xl text-justify">
                  In addition to Notices of Violations and Orders, the PNRI also
                  uses administrative regulatory actions, such as Confirmatory
                  Action Letters, Letters of Reprimand, and Demand for
                  Information to supplement its enforcement program. The PNRI
                  expects licensees to adhere to any obligations and commitments
                  resulting from these actions and will not hesitate to issue
                  appropriate Orders and/or sanctions to ensure that these
                  obligations and commitments are met.{" "}
                </p>

                <p className="mt-5 text-xl text-justify">
                  <b>(1) Confirmatory Action Letters</b> are letters confirming
                  a licensee's agreement to take certain actions to remove
                  significant concerns about health and safety or the
                  environment.{" "}
                </p>

                <p className="mt-5 text-xl text-justify">
                  <b>(2) Letters of Reprimand</b> are letters addressed to
                  individuals named in the license identifying a significant
                  deficiency in their performance of licensed activities.
                </p>

                <p className="mt-5 text-xl text-justify">
                  <b>(3) Demand for Information</b> are demand letters to the
                  licensee for information for the purpose of enabling the PNRI
                  to determine whether or not an order or other enforcement
                  action should be issued.{" "}
                </p>

                <p className="text-xl text-justify mt-5">
                  Some mechanisms employed by the PNRI to aid enforcement are
                  regulatory conferences with licensees and issuance of
                  regulatory bulletins or information notices. Regulatory
                  conferences are meetings organized by the PNRI with licensee
                  management to discuss safety, security or environmental
                  issues, licensee's compliance with regulatory requirements,
                  licensee's proposed corrective measures and enforcement
                  options available to the PNRI. Regulatory bulletins or
                  information notices are written notifications to licensees
                  identifying specific problems and recommending specific
                  actions.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <IesFooter />
    </div>
  );
};

export default InspectionPage;
