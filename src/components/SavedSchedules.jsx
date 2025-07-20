import React, { useEffect, useState } from 'react';

const SavedSchedules = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('savedSchedules')) || [];
    setEntries(saved);
  }, []);

  const handleDelete = (id) => {
    const updated = entries.filter(item => item.id !== id);
    localStorage.setItem('savedSchedules', JSON.stringify(updated));
    setEntries(updated);
  };

  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold mb-4">Saved Recurring Dates</h2>
      {entries.length === 0 ? (
        <p>No entries saved.</p>
      ) : (
        entries.map(entry => (
          <div key={entry.id} className="bg-white p-4 rounded shadow mb-4">
            <p><strong>Start:</strong> {entry.startDate}</p>
            <p><strong>End:</strong> {entry.endDate}</p>
            <p><strong>Frequency:</strong> {entry.frequency}</p>
            {entry.frequency === 'weekly' && (
              <p><strong>Days:</strong> {entry.selectedDays.join(', ')}</p>
            )}
            {entry.frequency === 'monthly' && (
              <p><strong>Day of Month:</strong> {entry.selectedMonthDay}</p>
            )}
            {entry.note && <p><strong>Note:</strong> {entry.note}</p>}
            <button
              className="text-red-600 mt-2"
              onClick={() => handleDelete(entry.id)}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default SavedSchedules;
