


import React, { useState } from 'react';
import { useRecurrence } from '../context/RecurrenceContext';

const weekdayList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const RecurringDatePicker = () => {
  const {
    recurrence, setRecurrence,
    interval, setInterval,
    weekdays, setWeekdays,
    pattern, setPattern,
    startDate, setStartDate,
    endDate, setEndDate,
    note, setNote,
    saved, addSchedule, deleteSchedule, updateSchedule
  } = useRecurrence();

  const [editingIndex, setEditingIndex] = useState(null);

  const handleWeekdayToggle = (day) => {
    setWeekdays(prev =>
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
    );
  };

  const handleSave = () => {
    const schedule = { recurrence, interval, weekdays, pattern, startDate, endDate, note };
    if (editingIndex !== null) {
      updateSchedule(editingIndex, schedule);
      setEditingIndex(null);
    } else {
      addSchedule(schedule);
    }

    setStartDate('');
    setEndDate('');
    setNote('');
    setWeekdays([]);
    setInterval(1);
  };

  const handleEdit = (index) => {
    const item = saved[index];
    setRecurrence(item.recurrence);
    setInterval(item.interval);
    setWeekdays(item.weekdays);
    setPattern(item.pattern);
    setStartDate(item.startDate);
    setEndDate(item.endDate);
    setNote(item.note);
    setEditingIndex(index);
  };

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white shadow-md rounded-xl mt-6">
     

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <div>
          <label className="block font-semibold">Recurrence:</label>
          <select
            className="w-full mt-1 p-2 border rounded"
            value={recurrence}
            onChange={(e) => setRecurrence(e.target.value)}
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold">Interval:</label>
          <input
            type="number"
            className="w-full mt-1 p-2 border rounded"
            value={interval}
            onChange={(e) => setInterval(Number(e.target.value))}
            min="1"
          />
        </div>

        <div>
          <label className="block font-semibold">Start Date:</label>
          <input
            type="date"
            className="w-full mt-1 p-2 border rounded"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>

        <div>
          <label className="block font-semibold">End Date:</label>
          <input
            type="date"
            className="w-full mt-1 p-2 border rounded"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>

        {recurrence === 'weekly' && (
          <div className="col-span-1 md:col-span-2">
            <label className="block font-semibold">Weekdays:</label>
            <div className="flex flex-wrap mt-2 gap-2">
              {weekdayList.map(day => (
                <button
                  key={day}
                  type="button"
                  className={`px-3 py-1 rounded-full border ${
                    weekdays.includes(day)
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 text-black'
                  }`}
                  onClick={() => handleWeekdayToggle(day)}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>
        )}

        {recurrence === 'monthly' && (
          <div className="col-span-1 md:col-span-2">
            <label className="block font-semibold">Pattern:</label>
            <input
              type="text"
              placeholder="e.g., 2nd Tuesday"
              className="w-full mt-1 p-2 border rounded"
              value={pattern}
              onChange={(e) => setPattern(e.target.value)}
            />
          </div>
        )}

        <div className="col-span-1 md:col-span-2">
          <label className="block font-semibold">Note:</label>
          <textarea
            placeholder="Add your note here..."
            className="w-full mt-1 p-2 border rounded"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>

        <div className="col-span-1 md:col-span-2">
          <button
            onClick={handleSave}
            className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            {editingIndex !== null ? 'Update Schedule' : 'Save Schedule'}
          </button>
        </div>
      </div>

      {/* Saved Entries */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Saved Schedules:</h3>
        <ul className="space-y-3">
          {saved.map((item, index) => (
            <li
              key={index}
              className="bg-gray-100 p-4 rounded-md shadow-sm break-words"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                <div className="text-sm space-y-1">
                  <p><strong>Type:</strong> {item.recurrence}</p>
                  <p><strong>Interval:</strong> Every {item.interval} {item.recurrence}</p>
                  {item.weekdays?.length > 0 && (
                    <p><strong>Weekdays:</strong> {item.weekdays.join(', ')}</p>
                  )}
                  {item.pattern && (
                    <p><strong>Pattern:</strong> {item.pattern}</p>
                  )}
                  <p><strong>Start:</strong> {item.startDate}</p>
                  <p><strong>End:</strong> {item.endDate}</p>
                  <p><strong>Note:</strong> {item.note}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    className="bg-yellow-500 text-white px-3 py-1 rounded"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-600 text-white px-3 py-1 rounded"
                    onClick={() => deleteSchedule(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecurringDatePicker;
