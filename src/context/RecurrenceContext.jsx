
import React, { createContext, useContext, useState } from 'react';

const RecurrenceContext = createContext();

export const RecurrenceProvider = ({ children }) => {
  const [recurrence, setRecurrence] = useState('daily');
  const [interval, setInterval] = useState(1);
  const [weekdays, setWeekdays] = useState([]);
  const [pattern, setPattern] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [note, setNote] = useState('');
  const [saved, setSaved] = useState([]);

  const addSchedule = (schedule) => {
    setSaved(prev => [...prev, schedule]);
  };

  const deleteSchedule = (index) => {
    setSaved(prev => prev.filter((_, i) => i !== index));
  };

  const updateSchedule = (index, updatedSchedule) => {
    setSaved(prev => prev.map((item, i) => (i === index ? updatedSchedule : item)));
  };

  return (
    <RecurrenceContext.Provider value={{
      recurrence, setRecurrence,
      interval, setInterval,
      weekdays, setWeekdays,
      pattern, setPattern,
      startDate, setStartDate,
      endDate, setEndDate,
      note, setNote,
      saved, addSchedule, deleteSchedule, updateSchedule
    }}>
      {children}
    </RecurrenceContext.Provider>
  );
};

export const useRecurrence = () => useContext(RecurrenceContext);
