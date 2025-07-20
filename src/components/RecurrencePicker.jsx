import React from 'react';
import { useRecurrence } from '../context/RecurrenceContext';

const RecurrencePicker = () => {
  const { recurrence, setRecurrence, interval, setInterval, weekdays, setWeekdays, pattern, setPattern } = useRecurrence();

  const toggleWeekday = (day) => {
    setWeekdays(prev =>
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
    );
  };

  return (
    <div className="bg-white p-6 rounded shadow-md mb-6">
      <label className="block mb-2 font-semibold">Recurrence</label>
      <select value={recurrence} onChange={(e) => setRecurrence(e.target.value)} className="border p-2 mb-4 w-full">
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>

      <label className="block mb-2 font-semibold">Every X {recurrence}s</label>
      <input type="number" value={interval} min="1" onChange={(e) => setInterval(Number(e.target.value))} className="border p-2 mb-4 w-full" />

      {(recurrence === 'weekly' || recurrence === 'daily') && (
        <>
          <label className="block mb-2 font-semibold">Select weekdays</label>
          <div className="flex gap-2 mb-4">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
              <label key={day} className="flex items-center gap-1">
                <input type="checkbox" checked={weekdays.includes(day)} onChange={() => toggleWeekday(day)} />
                {day}
              </label>
            ))}
          </div>
        </>
      )}

      {(recurrence === 'monthly' || recurrence === 'yearly') && (
        <>
          <label className="block mb-2 font-semibold">Pattern (e.g., 2nd Tuesday)</label>
          <input type="text" value={pattern} onChange={(e) => setPattern(e.target.value)} className="border p-2 mb-4 w-full" />
        </>
      )}
    </div>
  );
};

export default RecurrencePicker;