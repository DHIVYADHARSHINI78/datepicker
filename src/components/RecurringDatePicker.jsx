import React, { useState } from 'react';
import { useRecurrence } from '../context/RecurrenceContext';

const RecurringDatePicker = () => {
  const { startDate, setStartDate, endDate, setEndDate, saved, addSchedule, deleteSchedule, recurrence, interval, weekdays, pattern } = useRecurrence();
  const [note, setNote] = useState('');

  const save = () => {
    if (!startDate) return;
    addSchedule({ startDate, endDate, note, recurrence, interval, weekdays, pattern });
    setNote('');
    setStartDate('');
    setEndDate('');
  };

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <label className="block mb-2 font-semibold">Start Date</label>
      <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="border p-2 mb-4 w-full" />

      <label className="block mb-2 font-semibold">End Date (Optional)</label>
      <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="border p-2 mb-4 w-full" />

      <label className="block mb-2 font-semibold">Note</label>
      <input type="text" value={note} onChange={(e) => setNote(e.target.value)} className="border p-2 mb-4 w-full" />

      <button onClick={save} className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>

      <div className="mt-6">
        <h3 className="font-bold mb-2">Saved Schedules:</h3>
        {saved.map((s, index) => (
          <div key={index} className="flex justify-between items-center border p-2 mb-2 rounded">
            <div>
              <div><strong>{s.note}</strong></div>
              <div>{s.startDate} to {s.endDate || 'No end date'} ({s.recurrence} every {s.interval})</div>
              {s.weekdays?.length > 0 && <div>Weekdays: {s.weekdays.join(', ')}</div>}
              {s.pattern && <div>Pattern: {s.pattern}</div>}
            </div>
            <button onClick={() => deleteSchedule(index)} className="text-red-500">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecurringDatePicker;


