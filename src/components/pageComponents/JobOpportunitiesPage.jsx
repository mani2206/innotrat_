import Input from "../baseComponents/Input";
import JobCard from "../baseComponents/JobCard";
import Button from "../baseComponents/Button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const JobOpportunitiesPage = ({ onLogout, config }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);
  const {
    headerTitle,
    logoutButtonLabel,
    sidebarNav,
    mainContent,
    jobCardButtons,
    jobs,
  } = config || {};

  // Ensure jobCardButtons and its nested properties exist, provide defaults
  const {
    showApplyButton = true,
    showViewCandidatesButton = true,
    showViewDescriptionButton = true,
  } = jobCardButtons || {};

  const handleJobAction = (action, jobId) => {
    console.log(`${action} clicked for job ID: ${jobId}`);
  };

  const numberOfJobPosts = jobs ? jobs.length : 0;

  const renderIcon = (iconName) => {
    switch (iconName) {
      case "home":
        return (
          <svg
            className="w-5 h-5 mr-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
          </svg>
        );
      case "jobs":
        return (
          <svg
            className="w-5 h-5 mr-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
          </svg>
        );
      case "candidates":
        return (
          <svg
            className="w-5 h-5 mr-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zm-6 9a3 3 0 100-6 3 3 0 000 6zm7-3a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
        );
      case "profile":
        return (
          <svg
            className="w-5 h-5 mr-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path>
          </svg>
        );
      default:
        return null;
    }
  };

  useEffect(() => {
    if (jobs) {
      // Ensure jobs data is available
      const lowercasedSearchTerm = searchTerm.toLowerCase();
      const newFilteredJobs = jobs.filter(
        (job) =>
          job.jobTitle.toLowerCase().includes(lowercasedSearchTerm) ||
          job.companyName.toLowerCase().includes(lowercasedSearchTerm) ||
          job.location.toLowerCase().includes(lowercasedSearchTerm) ||
          job.jobCode.toLowerCase().includes(lowercasedSearchTerm)
      );
      setFilteredJobs(newFilteredJobs);
    }
  }, [jobs, searchTerm]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col font-inter">
      {/* Header */}
      <header className="bg-white shadow-sm p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="https://placehold.co/40x40/4F46E5/FFFFFF?text=Logo"
            alt="Company Logo"
            className="h-10 w-10 rounded-full mr-3"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/40x40/4F46E5/FFFFFF?text=Error";
            }}
          />
          <h1 className="text-xl font-bold text-gray-800">{headerTitle}</h1>
        </div>
        <Button
          label={logoutButtonLabel}
          onClick={onLogout}
          variant="secondary"
        />
      </header>

      <div className="flex flex-1 flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="w-full md:w-64 bg-white shadow-md p-4 md:p-6 border-b md:border-b-0 md:border-r border-gray-200">
          <nav>
            <ul>
              {sidebarNav &&
                sidebarNav.map(
                  (item, index) =>
                    // Conditionally render based on 'isVisible' property in JSON
                    (item.isVisible === undefined || item.isVisible) && (
                      <li key={index} className="mb-2">
                        <Link
                          to={item.path}
                          className={`text-sm flex items-center p-3 rounded-md transition-colors ${
                            item.isActive
                              ? "text-blue-600 bg-blue-50 font-semibold hover:bg-blue-100"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          {renderIcon(item.icon)}
                          {item.label}
                        </Link>
                      </li>
                    )
                )}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6">
          <div className="mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <h2 className="text-xl font-bold text-gray-800">
              {mainContent?.sectionTitle}
            </h2>
            <div className="flex gap-2 w-full sm:w-auto">
              <Input
                id="search-jobs"
                placeholder={mainContent?.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-grow"
              />
              <Button
                label={mainContent?.searchButtonLabel}
                onClick={() => console.log("Search clicked")}
                variant="primary"
                className="h-[8vh]"
              />
            </div>
          </div>

          <div className="mb-4 text-gray-700 text-sm font-medium">
            No. of Posts: <strong>{numberOfJobPosts}</strong>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <JobCard
                  key={job.id}
                  jobCode={job.jobCode}
                  jobTitle={job.jobTitle}
                  companyName={job.companyName}
                  location={job.location}
                  experience={job.experience}
                  applicants={job.applicants}
                  status={job.status}
                  showApplyButton={showApplyButton}
                  showViewCandidatesButton={showViewCandidatesButton}
                  showViewDescriptionButton={showViewDescriptionButton}
                  onApplyClick={() => handleJobAction("Apply", job.id)}
                  onViewCandidatesClick={() =>
                    handleJobAction("View Candidates", job.id)
                  }
                  onViewDescriptionClick={() =>
                    handleJobAction("View Description", job.id)
                  }
                />
              ))
            ) : (
              <p className="text-gray-600 col-span-full text-center">
                No job posts found matching your search.
              </p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default JobOpportunitiesPage;
