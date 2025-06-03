// src/baseComponents/JobCard.jsx
import React from 'react';
import Button from './Button'; // Assuming you have a Button component

const JobCard = ({
  jobCode,
  jobTitle,
  companyName,
  location,
  experience,
  applicants,
  status,
  onApplyClick,
  onViewCandidatesClick,
  onViewDescriptionClick,
  showApplyButton = true,
  showViewCandidatesButton = true,
  showViewDescriptionButton = true,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-200">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-gray-900">{jobTitle}</h3>
        <span className="text-sm font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
          {jobCode}
        </span>
      </div>
      <p className="text-sm text-gray-700 mb-1">{companyName}</p>
      <p className="text-sm text-gray-500 mb-3">{location} • {experience}</p>
      <div className="flex justify-between items-center text-sm mb-4">
        <span className="text-gray-600">Applicants: {applicants}</span>
        <span className={`font-semibold ${status === 'Active' ? 'text-green-600' : 'text-red-600'}`}>
          {status}
        </span>
      </div>
      <div className="flex flex-col space-y-2">
        {showApplyButton && (
          <Button label="Apply Now" onClick={onApplyClick} variant="primary" className="w-full" />
        )}
        {showViewCandidatesButton && (
          <Button label="View Candidates" onClick={onViewCandidatesClick} variant="secondary" className="w-full" />
        )}
        {showViewDescriptionButton && (
          <Button label="View Description" onClick={onViewDescriptionClick} variant="ghost" className="w-full" />
        )}
      </div>
    </div>
  );
};

export default JobCard;