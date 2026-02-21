"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  Calendar,
  ChevronLeft,
  User,
  Mail,
  Phone,
  Building2,
  GraduationCap,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

// Sample events data (same as in calendar page)
const events = [
  {
    id: 1,
    title: "Tech Talk: AI in 2024",
    date: "2024-03-15",
    time: "14:00 - 16:00",
    location: "Auditorium A",
    category: "academic",
  },
  {
    id: 2,
    title: "Sports Fest Opening",
    date: "2024-03-18",
    time: "10:00 - 12:00",
    location: "Sports Complex",
    category: "sports",
  },
  {
    id: 3,
    title: "Cultural Night",
    date: "2024-03-20",
    time: "18:00 - 22:00",
    location: "Open Amphitheater",
    category: "cultural",
  },
  {
    id: 4,
    title: "Startup Workshop",
    date: "2024-03-22",
    time: "11:00 - 13:00",
    location: "E-Cell Room",
    category: "entrepreneurship",
  },
  {
    id: 5,
    title: "Career Fair",
    date: "2024-03-25",
    time: "09:00 - 17:00",
    location: "Main Hall",
    category: "career",
  },
  {
    id: 6,
    title: "Research Paper Writing",
    date: "2024-03-12",
    time: "15:00 - 17:00",
    location: "Library Seminar Room",
    category: "academic",
  },
  {
    id: 7,
    title: "Blood Donation Camp",
    date: "2024-03-28",
    time: "10:00 - 16:00",
    location: "Medical Center",
    category: "social",
  },
  {
    id: 8,
    title: "Hackathon Finals",
    date: "2024-03-30",
    time: "09:00 - 09:00",
    location: "Computer Center",
    category: "technical",
  },
];

const EventRegistrationPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const eventId = searchParams.get("eventId");

  const [selectedEventId, setSelectedEventId] = useState<string>(eventId || "");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    college: "",
    yearOfStudy: "",
    comments: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Set selected event from URL param
  useEffect(() => {
    if (eventId && events.some((e) => e.id.toString() === eventId)) {
      setSelectedEventId(eventId);
    }
  }, [eventId]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!selectedEventId) {
      newErrors.event = "Please select an event";
    }

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    if (!formData.college.trim()) {
      newErrors.college = "College/Organization is required";
    }

    if (!formData.yearOfStudy) {
      newErrors.yearOfStudy = "Please select year of study";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Reset form after success (optional)
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        college: "",
        yearOfStudy: "",
        comments: "",
      });
      setSelectedEventId("");

      setTimeout(() => {
        router.push("/dashboard");
      }, 1500);

      // Hide success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  const selectedEvent = events.find((e) => e.id.toString() === selectedEventId);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header with back button */}
        <div className="mb-6">
          <Link
            href="/dashboard"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition mb-4"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Events
          </Link>
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-100 rounded-xl">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                Event Registration
              </h1>
              <p className="text-gray-600">
                Register for your favorite campus events
              </p>
            </div>
          </div>
        </div>

        {/* Success message */}
        {submitSuccess && (
          <div className="mb-6 bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-green-800">
                Registration Successful!
              </h3>
              <p className="text-sm text-green-700">
                Thank you for registering. We've sent a confirmation to your
                email.
              </p>
            </div>
          </div>
        )}

        {/* Registration Form */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Event Selection */}
            <div>
              <label
                htmlFor="event"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Select Event <span className="text-red-500">*</span>
              </label>
              <select
                id="event"
                name="event"
                value={selectedEventId}
                onChange={(e) => setSelectedEventId(e.target.value)}
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
                  errors.event ? "border-red-300 bg-red-50" : "border-gray-300"
                }`}
              >
                <option value="">-- Choose an event --</option>
                {events.map((event) => (
                  <option key={event.id} value={event.id.toString()}>
                    {event.title} - {new Date(event.date).toLocaleDateString()}{" "}
                    ({event.time})
                  </option>
                ))}
              </select>
              {errors.event && (
                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.event}
                </p>
              )}
            </div>

            {/* Selected Event Info (if event selected) */}
            {selectedEvent && (
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <h3 className="font-semibold text-blue-800 mb-2">
                  {selectedEvent.title}
                </h3>
                <div className="grid grid-cols-2 gap-2 text-sm text-blue-700">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {new Date(selectedEvent.date).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>{selectedEvent.time}</span>
                  </div>
                  <div className="flex items-center gap-1 col-span-2">
                    <span>{selectedEvent.location}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
                      errors.fullName
                        ? "border-red-300 bg-red-50"
                        : "border-gray-300"
                    }`}
                    placeholder="John Doe"
                  />
                </div>
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
                      errors.email
                        ? "border-red-300 bg-red-50"
                        : "border-gray-300"
                    }`}
                    placeholder="john@example.com"
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
                      errors.phone
                        ? "border-red-300 bg-red-50"
                        : "border-gray-300"
                    }`}
                    placeholder="9876543210"
                  />
                </div>
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* College/Organization */}
              <div>
                <label
                  htmlFor="college"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  College / Organization <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="college"
                    name="college"
                    value={formData.college}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
                      errors.college
                        ? "border-red-300 bg-red-50"
                        : "border-gray-300"
                    }`}
                    placeholder="University Name"
                  />
                </div>
                {errors.college && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.college}
                  </p>
                )}
              </div>

              {/* Year of Study */}
              <div>
                <label
                  htmlFor="yearOfStudy"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Year of Study <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select
                    id="yearOfStudy"
                    name="yearOfStudy"
                    value={formData.yearOfStudy}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
                      errors.yearOfStudy
                        ? "border-red-300 bg-red-50"
                        : "border-gray-300"
                    }`}
                  >
                    <option value="">Select Year</option>
                    <option value="1st">1st Year</option>
                    <option value="2nd">2nd Year</option>
                    <option value="3rd">3rd Year</option>
                    <option value="4th">4th Year</option>
                    <option value="5th">5th Year</option>
                    <option value="graduate">Graduate</option>
                    <option value="faculty">Faculty/Staff</option>
                  </select>
                </div>
                {errors.yearOfStudy && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.yearOfStudy}
                  </p>
                )}
              </div>

              {/* Comments / Questions (full width) */}
              <div className="md:col-span-2">
                <label
                  htmlFor="comments"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Comments or Questions (Optional)
                </label>
                <textarea
                  id="comments"
                  name="comments"
                  rows={3}
                  value={formData.comments}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="Any special requirements or questions?"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Register for Event
                  </>
                )}
              </button>
            </div>

            {/* Note */}
            <p className="text-xs text-gray-500 text-center">
              By registering, you agree to receive event updates and
              communications from the organizers.
            </p>
          </form>
        </div>

        {/* Quick Tips */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4">
          <h3 className="font-semibold text-blue-800 mb-2">
            📝 Registration Tips
          </h3>
          <ul className="text-sm text-blue-700 list-disc pl-5 space-y-1">
            <li>
              Make sure your email is correct – we'll send your confirmation
              there.
            </li>
            <li>
              Some events have limited seats; register early to secure your
              spot.
            </li>
            <li>
              If you need to cancel or modify your registration, please contact
              the event organizer.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EventRegistrationPage;
