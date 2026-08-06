import './App.css';
import { useState, useEffect } from 'react';

function EventCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 1, 1));
  const [events, setEvents] = useState(() => {
    const saved = localStorage.getItem('calendarEvents');
    return saved ? JSON.parse(saved) : {};
  });
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventTitle, setEventTitle] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  // Sauvegarder les événements dans localStorage
  useEffect(() => {
    localStorage.setItem('calendarEvents', JSON.stringify(events));
  }, [events]);

  // Sauvegarder le mode sombre dans localStorage
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const monthNames = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
  
  const dayNames = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const handleDateClick = (day) => {
    const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    const dateKey = newDate.toISOString().split('T')[0];
    setSelectedDate({ day, dateKey, date: newDate });
    setShowForm(true);
  };

  const addEvent = () => {
    if (!eventTitle.trim() || !selectedDate) return;

    const dateKey = selectedDate.dateKey;
    const newEvent = {
      id: Date.now(),
      title: eventTitle,
      description: eventDescription,
      date: dateKey
    };

    setEvents(prev => ({
      ...prev,
      [dateKey]: [...(prev[dateKey] || []), newEvent]
    }));

    setEventTitle('');
    setEventDescription('');
    setShowForm(false);
  };

  const deleteEvent = (dateKey, eventId) => {
    setEvents(prev => ({
      ...prev,
      [dateKey]: prev[dateKey].filter(e => e.id !== eventId)
    }));
  };

  const daysInMonth = getDaysInMonth(currentMonth);
  const firstDay = getFirstDayOfMonth(currentMonth);
  const days = [];

  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const getDateKey = (day) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    return date.toISOString().split('T')[0];
  };

  return (
    <div className="event-container">
      <div className="container-header">
        <h1>📅 Mon Calendrier d'Événements</h1>
        <button 
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
          title={darkMode ? "Mode clair" : "Mode sombre"}
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>

      <div className="calendar-main">
        <div className="calendar-wrapper">
          <div className="calendar-header">
            <button onClick={previousMonth} className="nav-btn">←</button>
            <h2>{monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}</h2>
            <button onClick={nextMonth} className="nav-btn">→</button>
          </div>

          <div className="calendar-grid">
            {dayNames.map(day => (
              <div key={day} className="day-header">
                {day}
              </div>
            ))}
            {days.map((day, index) => {
              const dateKey = day ? getDateKey(day) : null;
              const dayEvents = dateKey ? (events[dateKey] || []) : [];
              
              return (
                <div
                  key={index}
                  className={`calendar-day ${day ? 'active' : 'empty'} ${dayEvents.length > 0 ? 'has-events' : ''}`}
                  onClick={() => day && handleDateClick(day)}
                >
                  <div className="day-number">{day}</div>
                  {dayEvents.length > 0 && (
                    <div className="event-indicators">
                      {dayEvents.slice(0, 2).map((event, idx) => (
                        <div key={idx} className="event-dot" title={event.title}></div>
                      ))}
                      {dayEvents.length > 2 && <span className="more-events">+{dayEvents.length - 2}</span>}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="events-sidebar">
          {selectedDate && (
            <>
              <h3>
                {selectedDate.date.toLocaleDateString('fr-FR', {
                  weekday: 'long',
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}
              </h3>

              {showForm && (
                <div className="event-form">
                  <h4>Ajouter un événement</h4>
                  <input
                    type="text"
                    placeholder="Titre de l'événement"
                    value={eventTitle}
                    onChange={(e) => setEventTitle(e.target.value)}
                    className="form-input"
                  />
                  <textarea
                    placeholder="Description (optionnel)"
                    value={eventDescription}
                    onChange={(e) => setEventDescription(e.target.value)}
                    className="form-textarea"
                  />
                  <div className="form-buttons">
                    <button onClick={addEvent} className="btn-add">Ajouter</button>
                    <button onClick={() => setShowForm(false)} className="btn-cancel">Annuler</button>
                  </div>
                </div>
              )}

              {!showForm && (
                <button onClick={() => setShowForm(true)} className="btn-new-event">
                  + Nouvel événement
                </button>
              )}

              <div className="events-list">
                {events[selectedDate.dateKey] && events[selectedDate.dateKey].length > 0 ? (
                  events[selectedDate.dateKey].map((event) => (
                    <div key={event.id} className="event-item">
                      <div className="event-header">
                        <h4>{event.title}</h4>
                        <button
                          onClick={() => deleteEvent(selectedDate.dateKey, event.id)}
                          className="btn-delete"
                        >
                          ✕
                        </button>
                      </div>
                      {event.description && <p>{event.description}</p>}
                    </div>
                  ))
                ) : (
                  <p className="no-events">Aucun événement ce jour</p>
                )}
              </div>
            </>
          )}

          {!selectedDate && (
            <p className="select-date">Sélectionnez un jour pour ajouter des événements</p>
          )}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <EventCalendar />
    </div>
  );
}

export default App;
