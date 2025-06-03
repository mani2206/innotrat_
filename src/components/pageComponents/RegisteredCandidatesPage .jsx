import React, { useState, useEffect } from 'react';

const RegisteredCandidatesPage = ({ onLogout, config }) => {
 
  const [candidates, setCandidates] = useState([
    {
      sNo: 1,
      candidateId: "ID number",
      candidateName: "Name",
      department: "Department",
      mockInterviewsAttended: 7,
      jobInterviewsAttended: 1,
      scheduledInterviewDetails: "View",
    },
    {
      sNo: 2,
      candidateId: "ID number",
      candidateName: "Name",
      department: "Department",
      mockInterviewsAttended: 3,
      jobInterviewsAttended: 2,
      scheduledInterviewDetails: "View",
    },
    {
      sNo: 3,
      candidateId: "ID number",
      candidateName: "Name",
      department: "Department",
      mockInterviewsAttended: 1,
      jobInterviewsAttended: 2,
      scheduledInterviewDetails: "View",
    },
    {
      sNo: 4,
      candidateId: "ID number",
      candidateName: "Name",
      department: "Department",
      mockInterviewsAttended: 5,
      jobInterviewsAttended: 1,
      scheduledInterviewDetails: "View",
    },
    {
      sNo: 5,
      candidateId: "ID number",
      candidateName: "Name",
      department: "Department",
      mockInterviewsAttended: 2,
      jobInterviewsAttended: 1,
      scheduledInterviewDetails: "View",
    },
    {
      sNo: 6,
      candidateId: "ID number",
      candidateName: "Name",
      department: "Department",
      mockInterviewsAttended: 4,
      jobInterviewsAttended: 2,
      scheduledInterviewDetails: "View",
    },
    {
      sNo: 7,
      candidateId: "ID number",
      candidateName: "Name",
      department: "Department",
      mockInterviewsAttended: 1,
      jobInterviewsAttended: 1,
      scheduledInterviewDetails: "View",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCandidates, setFilteredCandidates] = useState(candidates);

  
  useEffect(() => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const results = candidates.filter(candidate =>
      candidate.candidateName.toLowerCase().includes(lowerCaseSearchTerm) ||
      candidate.candidateId.toLowerCase().includes(lowerCaseSearchTerm) ||
      candidate.department.toLowerCase().includes(lowerCaseSearchTerm)
    );
    setFilteredCandidates(results);
  }, [searchTerm, candidates]);



  const { headerTitle, logoutButtonLabel, sidebarNav } = config;

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleAddCandidate = () => {
    console.log("Add Candidate clicked!");
    // Implement logic to navigate to an add candidate form or open a modal
  };

  const handleViewCandidateProfile = (candidateId) => {
    console.log("View Candidate Profile:", candidateId);
    // Implement navigation to candidate profile page
  };

  const handleSendApproval = (candidateId) => {
    console.log("Send Approval for:", candidateId);
   
  };

  const handleViewDetails = (candidateId) => {
    console.log("View Details for:", candidateId);
   
  };

  const handleShareProfile = (candidateId) => {
    console.log("Share Profile for:", candidateId);
    
  };

  return (
    <div className="flex h-screen bg-gray-100">


        {/* Main Content */}
        <main className="flex-1 p-6 bg-white overflow-y-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Registered Candidates</h2>

          {/* Search and Add Candidate Section */}
          <div className="flex items-center justify-between mb-6">
            <div className="relative flex-1 max-w-lg mr-4">
              <input
                type="text"
                placeholder="Search by Candidate name/ID number/department"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </span>
            </div>
            <button
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center"
              onClick={handleAddCandidate}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
              Add candidate
            </button>
          </div>

          {/* Candidates Table */}
          <div className="bg-white shadow overflow-hidden rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    S.No
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Candidate ID
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Candidate Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Department
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Mock Interviews Attended
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Job Interviews Attended
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Scheduled interview details
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Candidate Profile
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredCandidates.length > 0 ? (
                  filteredCandidates.map((candidate) => (
                    <tr key={candidate.sNo}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {candidate.sNo}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {candidate.candidateId}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {candidate.candidateName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {candidate.department}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                        {candidate.mockInterviewsAttended}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                        {candidate.jobInterviewsAttended}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <button
                          onClick={() => handleViewDetails(candidate.candidateId)}
                          className="text-blue-600 hover:underline"
                        >
                          {candidate.scheduledInterviewDetails}
                        </button>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => handleSendApproval(candidate.candidateId)}
                          className="text-blue-600 hover:underline mr-4"
                        >
                          Approval Sent
                        </button>
                        <button
                          onClick={() => handleViewCandidateProfile(candidate.candidateId)}
                          className="text-blue-600 hover:underline mr-4"
                        >
                          View
                        </button>
                        <button
                          onClick={() => handleShareProfile(candidate.candidateId)}
                          className="text-blue-600 hover:underline"
                        >
                          <svg className="w-5 h-5 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.882 13.904 9 14.502 9 15a6 6 0 01-6 6v-1a4 4 0 004-4c0-.602-.118-1.19-.316-1.742m7.568-7.316A4.002 4.002 0 0015 9.774v1.512c0 .67-.234 1.3-.659 1.808l-2.457 2.457a4.001 4.001 0 01-5.656 0l-.828-.828m9.192-8.524A2.002 2.002 0 0118.006 4a2.002 2.002 0 012 2.006A2.002 2.002 0 0118 8.002"></path></svg>
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="9" className="px-6 py-4 text-center text-gray-600">
                      No registered candidates found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination (dummy for now) */}
          <div className="flex justify-end items-center mt-6 text-sm text-gray-600">
            <span className="mr-4">Rows per page: 1-7 of 7</span>
            {/* Add pagination controls here if needed */}
            <button className="px-3 py-1 border rounded-md hover:bg-gray-200 disabled:opacity-50" disabled>
              &lt;
            </button>
            <button className="ml-2 px-3 py-1 border rounded-md hover:bg-gray-200 disabled:opacity-50" disabled>
              &gt;
            </button>
          </div>
        </main>

    </div>
  );
};

export default RegisteredCandidatesPage;