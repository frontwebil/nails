import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar as CalendarIcon, Clock, User, Phone, Scissors, ChevronLeft, ChevronRight, Plus, X, Trash2, Search, Edit2 } from 'lucide-react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday, parseISO, addMonths, subMonths, startOfWeek, endOfWeek } from 'date-fns';
import { de } from 'date-fns/locale';

type Booking = {
  id: string;
  date: string;
  time: string;
  name: string;
  phone: string;
  service: string;
};

type NewBooking = Omit<Booking, 'id'>;

function AdminPage() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [searchDate, setSearchDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [newBooking, setNewBooking] = useState<NewBooking>({
    date: format(new Date(), 'yyyy-MM-dd'),
    time: '10:00',
    name: '',
    phone: '',
    service: ''
  });
  const [editingBooking, setEditingBooking] = useState<Booking | null>(null);
  const [bookings, setBookings] = useState<Booking[]>([
    {
      id: '1',
      date: '2024-03-20',
      time: '14:00',
      name: 'Sarah Johnson',
      phone: '+49 123 456789',
      service: 'Gel Nails'
    },
    {
      id: '2',
      date: '2024-03-20',
      time: '16:30',
      name: 'Maria Schmidt',
      phone: '+49 987 654321',
      service: 'Manicure'
    }
  ]);

  const correctPassword = 'MinhThu121072';

  const timeSlots = [];
  for (let hour = 10; hour < 19; hour++) {
    timeSlots.push(`${hour.toString().padStart(2, '0')}:00`);
    timeSlots.push(`${hour.toString().padStart(2, '0')}:30`);
  }
  timeSlots.push('19:00');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  const getDaysInMonth = () => {
    const start = startOfMonth(currentDate);
    const end = endOfMonth(currentDate);
    const firstDay = startOfWeek(start, { locale: de });
    const lastDay = endOfWeek(end, { locale: de });
    return eachDayOfInterval({ start: firstDay, end: lastDay });
  };

  const getBookingsForDate = (date: Date) => {
    const dateStr = format(date, 'yyyy-MM-dd');
    return bookings.filter(booking => booking.date === dateStr)
      .sort((a, b) => a.time.localeCompare(b.time));
  };

  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));

  const handleAddBooking = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check for time slot conflicts
    const existingBooking = bookings.find(
      booking => booking.date === newBooking.date && booking.time === newBooking.time
    );

    if (existingBooking) {
      alert('Dieser Zeitslot ist bereits belegt. Bitte wählen Sie eine andere Zeit.');
      return;
    }

    const id = Math.random().toString(36).substr(2, 9);
    setBookings([...bookings, { ...newBooking, id }]);
    setShowAddModal(false);
    setNewBooking({
      date: format(new Date(), 'yyyy-MM-dd'),
      time: '10:00',
      name: '',
      phone: '',
      service: ''
    });
  };

  const handleEditBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingBooking) return;

    // Check for time slot conflicts (excluding the current booking)
    const existingBooking = bookings.find(
      booking => 
        booking.id !== editingBooking.id && 
        booking.date === editingBooking.date && 
        booking.time === editingBooking.time
    );

    if (existingBooking) {
      alert('Dieser Zeitslot ist bereits belegt. Bitte wählen Sie eine andere Zeit.');
      return;
    }

    setBookings(bookings.map(booking => 
      booking.id === editingBooking.id ? editingBooking : booking
    ));
    setShowEditModal(false);
    setEditingBooking(null);
  };

  const handleDeleteBooking = (id: string) => {
    if (window.confirm('Sind Sie sicher, dass Sie diesen Termin löschen möchten?')) {
      setBookings(bookings.filter(booking => booking.id !== id));
    }
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    setSearchDate(format(date, 'yyyy-MM-dd'));
  };

  const startEditing = (booking: Booking) => {
    setEditingBooking(booking);
    setShowEditModal(true);
  };

  const filteredBookings = bookings
    .filter(booking => booking.date === searchDate)
    .sort((a, b) => a.time.localeCompare(b.time));

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold text-pink-600 mb-6 text-center">Admin Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700 transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-pink-600">Admin Dashboard</h1>
            <Link to="/" className="text-pink-600 hover:text-pink-700">
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calendar Section */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-bold text-gray-800">Kalender</h2>
                <button
                  onClick={() => setShowAddModal(true)}
                  className="flex items-center gap-2 bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition-colors"
                >
                  <Plus size={20} />
                  Termin hinzufügen
                </button>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={prevMonth}
                  className="p-2 hover:bg-pink-50 rounded-full"
                >
                  <ChevronLeft className="text-pink-600" size={24} />
                </button>
                <h3 className="text-lg font-medium text-gray-700">
                  {format(currentDate, 'MMMM yyyy', { locale: de })}
                </h3>
                <button
                  onClick={nextMonth}
                  className="p-2 hover:bg-pink-50 rounded-full"
                >
                  <ChevronRight className="text-pink-600" size={24} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-2">
              {['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'].map(day => (
                <div key={day} className="text-center font-medium text-gray-500 py-2">
                  {day}
                </div>
              ))}
              {getDaysInMonth().map((date) => {
                const dayBookings = getBookingsForDate(date);
                const isSelected = selectedDate && format(date, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd');
                return (
                  <button
                    key={date.toISOString()}
                    onClick={() => handleDateClick(date)}
                    className={`
                      min-h-[100px] p-2 border rounded-lg text-left transition-colors
                      ${!isSameMonth(date, currentDate) ? 'bg-gray-50 text-gray-400' : 'bg-white'}
                      ${isToday(date) ? 'border-pink-600' : 'border-gray-200'}
                      ${isSelected ? 'ring-2 ring-pink-600 ring-offset-2' : ''}
                      hover:border-pink-400
                    `}
                  >
                    <div className="text-right text-sm text-gray-500 mb-1">
                      {format(date, 'd')}
                    </div>
                    <div className="space-y-1">
                      {dayBookings.length > 0 && (
                        <div className="text-xs bg-pink-100 text-pink-800 px-1.5 py-0.5 rounded-full inline-block">
                          {dayBookings.length} Termine
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Appointments List */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Termine</h2>
              <div className="flex gap-4 items-center">
                <div className="flex-1">
                  <input
                    type="date"
                    value={searchDate}
                    onChange={(e) => setSearchDate(e.target.value)}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                  />
                </div>
                <button
                  onClick={() => setSearchDate(format(new Date(), 'yyyy-MM-dd'))}
                  className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors"
                >
                  Heute
                </button>
              </div>
            </div>
            
            <div className="space-y-4">
              {filteredBookings.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  Keine Termine für dieses Datum
                </div>
              ) : (
                filteredBookings.map(booking => (
                  <div key={booking.id} className="border-l-4 border-pink-600 pl-4 py-2 group">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <User className="text-pink-600" size={20} />
                          <span className="font-medium">{booking.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="text-pink-600" size={20} />
                          <span>{booking.phone}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Clock className="text-pink-600" size={20} />
                          <span>{booking.time} Uhr</span>
                        </div>
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <Scissors className="text-pink-600" size={20} />
                            <span>{booking.service}</span>
                          </div>
                          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button
                              onClick={() => startEditing(booking)}
                              className="text-pink-600 hover:text-pink-700"
                            >
                              <Edit2 size={20} />
                            </button>
                            <button
                              onClick={() => handleDeleteBooking(booking.id)}
                              className="text-pink-600 hover:text-pink-700"
                            >
                              <Trash2 size={20} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Add Booking Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-8 max-w-md w-full relative">
            <button 
              onClick={() => setShowAddModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            <h3 className="text-2xl font-bold text-pink-600 mb-6">Neuen Termin hinzufügen</h3>
            <form onSubmit={handleAddBooking} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                  value={newBooking.name}
                  onChange={(e) => setNewBooking({...newBooking, name: e.target.value})}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Telefonnummer</label>
                <input
                  type="tel"
                  id="phone"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                  value={newBooking.phone}
                  onChange={(e) => setNewBooking({...newBooking, phone: e.target.value})}
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service</label>
                <input
                  type="text"
                  id="service"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                  value={newBooking.service}
                  onChange={(e) => setNewBooking({...newBooking, service: e.target.value})}
                />
              </div>
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">Datum</label>
                <input
                  type="date"
                  id="date"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                  value={newBooking.date}
                  onChange={(e) => setNewBooking({...newBooking, date: e.target.value})}
                />
              </div>
              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700">Uhrzeit</label>
                <select
                  id="time"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                  value={newBooking.time}
                  onChange={(e) => setNewBooking({...newBooking, time: e.target.value})}
                >
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>
                      {time} Uhr
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex gap-4 mt-6">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors"
                >
                  Abbrechen
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700 transition-colors"
                >
                  Termin hinzufügen
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Booking Modal */}
      {showEditModal && editingBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-8 max-w-md w-full relative">
            <button 
              onClick={() => {
                setShowEditModal(false);
                setEditingBooking(null);
              }}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            <h3 className="text-2xl font-bold text-pink-600 mb-6">Termin bearbeiten</h3>
            <form onSubmit={handleEditBooking} className="space-y-4">
              <div>
                <label htmlFor="edit-name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="edit-name"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                  value={editingBooking.name}
                  onChange={(e) => setEditingBooking({...editingBooking, name: e.target.value})}
                />
              </div>
              <div>
                <label htmlFor="edit-phone" className="block text-sm font-medium text-gray-700">Telefonnummer</label>
                <input
                  type="tel"
                  id="edit-phone"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                  value={editingBooking.phone}
                  onChange={(e) => setEditingBooking({...editingBooking, phone: e.target.value})}
                />
              </div>
              <div>
                <label htmlFor="edit-service" className="block text-sm font-medium text-gray-700">Service</label>
                <input
                  type="text"
                  id="edit-service"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                  value={editingBooking.service}
                  onChange={(e) => setEditingBooking({...editingBooking, service: e.target.value})}
                />
              </div>
              <div>
                <label htmlFor="edit-date" className="block text-sm font-medium text-gray-700">Datum</label>
                <input
                  type="date"
                  id="edit-date"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                  value={editingBooking.date}
                  onChange={(e) => setEditingBooking({...editingBooking, date: e.target.value})}
                />
              </div>
              <div>
                <label htmlFor="edit-time" className="block text-sm font-medium text-gray-700">Uhrzeit</label>
                <select
                  id="edit-time"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                  value={editingBooking.time}
                  onChange={(e) => setEditingBooking({...editingBooking, time: e.target.value})}
                >
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>
                      {time} Uhr
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex gap-4 mt-6">
                <button
                  type="button"
                  onClick={() => {
                    setShowEditModal(false);
                    setEditingBooking(null);
                  }}
                  className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors"
                >
                  Abbrechen
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700 transition-colors"
                >
                  Änderungen speichern
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminPage;