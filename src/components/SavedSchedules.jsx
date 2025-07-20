
import React from 'react';
import { useRecurrence } from '../context/RecurrenceContext';

const SavedSchedules = () => {
  const { savedSchedules, deleteSchedule, handleEdit } = useRecurrence();

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-2">Saved Schedules:</h3>
      {savedSchedules.length === 0 && <p className="text-gray-500">No schedules yet.</p>}

      {savedSchedules.map((schedule, index) => (
        <div
          key={index}
          className="bg-white shadow-md p-4 rounded-md mb-2 flex justify-between items-center"
        >
          <div onClick={() => handleEdit(index)} className="cursor-pointer">
            <p className="font-medium">{schedule.note || '(No note)'}</p>
            <p className="text-sm text-gray-600">
              {schedule.startDate} to {schedule.endDate || '∞'} (
              {schedule.frequency} every {schedule.interval || 1})
            </p>
          </div>

          <button
            onClick={() => deleteSchedule(index)}
            className="text-red-500 hover:underline"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default SavedSchedules;
