import React from 'react';
import { useRecurrence } from '../context/RecurrenceContext';
import { addDays, parseISO, format } from 'date-fns';

const CalendarPreview = () => {
  const { frequency, interval, startDate, endDate } = useRecurrence();

  const getRecurringDates = () => {
    if (!startDate) return [];

    const dates = [];
    let current = parseISO(startDate);
    const max = endDate ? parseISO(endDate) : addDays(current, 30); // fallback 30 days

    const stepMap = {
      daily: (date) => addDays(date, interval),
      weekly: (date) => addDays(date, interval * 7),
      monthly: (date) => new Date(date.setMonth(date.getMonth() + interval)),
      yearly: (date) => new Date(date.setFullYear(date.getFullYear() + interval)),
    };

    while (current <= max) {
      dates.push(format(current, 'yyyy-MM-dd'));
      current = stepMap[frequency](new Date(current));
    }

    return dates;
  };

  const recurringDates = getRecurringDates();

  return (
    <div className="mt-6 border-t pt-4">
      <h3 className="text-lg font-semibold mb-2">📅 Recurring Dates</h3>
      {recurringDates.length > 0 ? (
        <ul className="text-sm grid grid-cols-2 gap-1">
          {recurringDates.map((date, i) => (
            <li key={i} className="text-gray-600">{date}</li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-sm">No dates to preview</p>
      )}
    </div>
  );
};

export default CalendarPreview;
