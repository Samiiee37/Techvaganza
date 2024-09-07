import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import PropTypes from "prop-types";
const TabView = ({ data }) => {
  // Split the semicolon-separated fields dynamically
const rules = data["Rules"].split(";").map(rule => rule.trim()).filter(rule => rule !== "");
const prizes = data["Prizes"].split(";").map(prize => prize.trim()).filter(prize => prize !== "");
const judgingCriteria = data["Judging Criteria"].split(";").map(criteria => criteria.trim()).filter(criteria => criteria !== "");
  return (
    <>
      <Tabs>
        <TabList className="flex md:gap-5 my-3">
          <Tab
            className="px-14 py-3 text-base font-medium text-gray-800 bg-white border-gray-800 focus:outline-none hover:bg-gray-800 hover:text-primary hover:border-primary text-center border-2 tab-button cursor-pointer"
            selectedClassName="active-tab"
          >
            Rules / prizes
          </Tab>
          <Tab
            className="px-14 py-3 text-base font-medium text-gray-800 bg-white border-gray-800 focus:outline-none hover:bg-gray-800 hover:text-primary hover:border-primary text-center border-2 tab-button cursor-pointer"
            selectedClassName="active-tab"
          >
            Judging Criteria
          </Tab>
        </TabList>
        <div className="BoxShadow mx-2 my-2 px-3 py-4 pb-12">
          <TabPanel>
            <h1 className="entry-header text-3xl font-semibold text-gray-600 font-neotriad textShadow-sm mb-4 mt-4 mx-2 leading-normal">Rules/Prizes</h1>
            <div className="space-y-5 mx-4 font-semibold font-kodeMono">
              {rules.map((rule, index) => (
                <p key={index}>{rule}</p>
              ))}
            </div>

            <hr className="mt-4 border border-primary" />
            <h1 className="entry-header text-3xl tfont-semibold text-gray-600 font-neotriad textShadow-sm mb-4 mt-4 mx-2 leading-normal">Prizes</h1>
            <div className="space-y-5 mx-4 font-semibold font-kodeMono">
              {prizes.map((prize, index) => (
                <p key={index}>{prize}</p>
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <h2 className="entry-header text-3xl font-semibold text-gray-600 font-neotriad textShadow-sm mb-4 mt-4 mx-2 leading-normal">
              Judging Criteria
            </h2>
            <div className="space-y-5 mx-4 font-semibold font-kodeMono">
              {judgingCriteria.map((criteria, index) => (
                <p key={index}>{criteria}</p>
              ))}
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </>
  );
};

export default TabView;


TabView.propTypes = { 
  data: PropTypes.object.isRequired,
};