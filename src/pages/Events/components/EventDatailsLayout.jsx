import { Link } from "react-router-dom";
import PageLayout from "../../../Components/PageLayout";
import TabView from "./Tabview";
import PropTypes from "prop-types";


export default function EventDetailsLayout({data}) {
  const descriptions = data["Description"].split(";").map(desc => desc.trim()).filter(desc => desc !== "");
  return (
    <PageLayout title={data["Event Name"]} imgUrl={`/common/conpetition.jpeg`}>
      <div className="px-4 md:px-12 py-4 md:py-12 font-playfair bg-background ShadowLarge">
        <div className="mb-4">
          <p className="font-semibold font-figtree textShadow-md text-4xl md:text-5xl text-gray-800 mb-3 overflow-visible">
            {data["Event Name"]}
          </p>
          {
            descriptions.map((desc, index) => (
              <p key={index} className="text-base mb-2">{desc}</p>
            ))
          }
          {/* <p className="text-base">{data["Description"]}</p> */}
        </div>
        <div className="mb-4">
          <p className="font-semibold text-gray-600 font-figtree textShadow-sm text-3xl overflow-visible mb-4">Timing</p>
          <p className="text-base mb-2">
            {data["Start Time"]} - {data["End Time"]} , Day {data["Day"]}
          </p>
        </div>
        <div className="mb-4">
          <p className="font-semibold text-gray-600 font-figtree textShadow-sm text-3xl overflow-visible mb-4">Venue</p>
          <p className="text-base mb-2">
            {data["Venue"]}
          </p>
        </div>
        <div className="mb-4">
          <p className="font-semibold text-gray-600 font-figtree textShadow-sm text-3xl overflow-visible mb-4">
            Entry Fee
          </p>
          <p className="text-base mb-2">
            <span className="font-bold mr-2">Entry Fee:</span>
            {data["Outside Entry Fee"] === ""
              ? ""
              : `₹ ${data["Outside Entry Fee"]}`}
          </p>
        </div>
        <button className="px-6 md:px-8 py-2 ShadowBlur text-sm md:text-base rounded-md font-semibold text-gray-800 bg-primary border border-primary focus:outline-none text-center mb-4">
          <Link
            to={"https://erp.nitsri.ac.in/Academic/Event/iitms59kYF9lC0cj3VbTS6unBiAl+l75Pr6We0g1qjBoOkzq3f3cNp1dZ7YOKj7wb+MDkvhXLxOyJOP47ksp5DwqNGQ==?%2fAcademic%2fEvent%2fEventRegistrationDetails.aspx"}
          >
            Register
          </Link>
        </button>
        <div className="mb-4">
          <p className="text-base mb-2">For Any Queries Contact</p>
          <ul className="list-disc list-inside pl-5 font-semibold">
              <li>
                {data["Lead Name"]} ({data["Lead Contact Number"]})
              </li>
          </ul>
        </div>

        {/* Tabs */}
        <div>
          <TabView data={data} />
        </div>
      </div>
    </PageLayout>
  );
}

EventDetailsLayout.propTypes = {  
  data: PropTypes.object.isRequired,
};