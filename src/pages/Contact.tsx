import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Building2, Phone, Mail, Clock, MapPin, Facebook, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import 'leaflet/dist/leaflet.css';

// Διορθώνουμε το πρόβλημα με τα εικονίδια του Leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import L from 'leaflet';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const Contact = () => {
  const { language } = useLanguage();

  const officeLocation = {
    lat: 41.1171,
    lng: 25.4048,
    address: {
      el: 'Λεωφόρος Ηρώων 12, Κομοτηνή, 69100',
      en: '12 Heroes Avenue, Komotini, 69100'
    }
  };

  const contactInfo = [
    {
      icon: Building2,
      title: language === 'el' ? 'Διεύθυνση' : 'Address',
      content: officeLocation.address[language]
    },
    {
      icon: Phone,
      title: language === 'el' ? 'Τηλέφωνο' : 'Phone',
      content: '+30 6976999811'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@in-mavridis.gr'
    },
    {
      icon: Clock,
      title: language === 'el' ? 'Ωράριο Λειτουργίας' : 'Business Hours',
      content: (
        <>
          {language === 'el' ? 'Δευτέρα - Παρασκευή: 9:00 - 18:00' : 'Monday - Friday: 9:00 - 18:00'}<br />
          {language === 'el' ? 'Σάββατο: 10:00 - 14:00' : 'Saturday: 10:00 - 14:00'}<br />
          {language === 'el' ? 'Κυριακή: Κλειστά' : 'Sunday: Closed'}
        </>
      )
    }
  ];

  const socialMedia = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/mavridiskomotini',
      color: 'bg-[#1877F2] hover:bg-[#0d6efd]'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/mavridis_architecture_engineer/',
      color: 'bg-[#E4405F] hover:bg-[#d62e4c]'
    },
    {
      name: 'TikTok',
      icon: ({ className }: { className?: string }) => (
        <svg 
          className={className} 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      ),
      url: 'https://www.tiktok.com/@mavridis.architec',
      color: 'bg-black hover:bg-gray-900'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.div 
        className="relative h-[300px] bg-cover bg-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <motion.div 
            className="text-white"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              {language === 'el' ? 'Επικοινωνήστε μαζί μας' : 'Contact Us'}
            </h1>
            <p className="text-xl max-w-2xl">
              {language === 'el' ? 'Είμαστε εδώ για να σας βοηθήσουμε' : 'We are here to help you'}
            </p>
          </motion.div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold mb-6 gradient-text">
                {language === 'el' ? 'Στοιχεία Επικοινωνίας' : 'Contact Information'}
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-4"
                  >
                    <item.icon className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <div className="text-gray-600">{item.content}</div>
                    </div>
                  </div>
                ))}

                {/* Social Media Links */}
                <div className="pt-4 border-t">
                  <h3 className="font-semibold mb-4">
                    {language === 'el' ? 'Ακολουθήστε μας' : 'Follow Us'}
                  </h3>
                  <div className="flex space-x-4">
                    {socialMedia.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2 rounded-full text-white ${social.color} transition-transform`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <social.icon className="h-6 w-6" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold mb-6 gradient-text">
                {language === 'el' ? 'Φόρμα Επικοινωνίας' : 'Contact Form'}
              </h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {language === 'el' ? 'Ονοματεπώνυμο' : 'Full Name'}
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder={language === 'el' ? 'Εισάγετε το ονοματεπώνυμό σας' : 'Enter your full name'}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder={language === 'el' ? 'Εισάγετε το email σας' : 'Enter your email'}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {language === 'el' ? 'Θέμα' : 'Subject'}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder={language === 'el' ? 'Εισάγετε το θέμα' : 'Enter subject'}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {language === 'el' ? 'Μήνυμα' : 'Message'}
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder={language === 'el' ? 'Γράψτε το μήνυμά σας...' : 'Write your message...'}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {language === 'el' ? 'Αποστολή' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-bold mb-6 flex items-center gradient-text">
              <MapPin className="h-6 w-6 text-blue-600 mr-2" />
              {language === 'el' ? 'Η Τοποθεσία μας' : 'Our Location'}
            </h2>
            
            <div className="h-[400px] rounded-lg overflow-hidden">
              <MapContainer
                center={[officeLocation.lat, officeLocation.lng]}
                zoom={13}
                scrollWheelZoom={false}
                className="h-full w-full"
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[officeLocation.lat, officeLocation.lng]}>
                  <Popup>
                    <div className="text-center">
                      <h3 className="font-semibold">IN-MAVRIDIS</h3>
                      <p className="text-sm">{officeLocation.address[language]}</p>
                    </div>
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;