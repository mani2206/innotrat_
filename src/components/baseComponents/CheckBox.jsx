const Checkbox = ({ label, id, checked, onChange }) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="form-checkbox h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
      />
      <label htmlFor={id} className="ml-2 text-sm text-gray-700 font-inter">
        {label}
      </label>
    </div>
  );
};

export default Checkbox