import React from 'react';
import { Building2, Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { language } = useLanguage();

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
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Building2 className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">IN-MAVRIDIS</span>
            </div>
            <p className="text-gray-400">
              {language === 'el' 
                ? 'Επαγγελματικές υπηρεσίες ακινήτων και αρχιτεκτονικές λύσεις στην Ελλάδα.'
                : 'Professional real estate services and architectural solutions in Greece.'
              }
            </p>

            {/* Social Media Links */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4">
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
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {language === 'el' ? 'Στοιχεία Επικοινωνίας' : 'Contact Info'}
            </h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-2" />
                <span>+30 6976999811</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-2" />
                <span>info@in-mavridis.gr</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-blue-400 mr-2" />
                <span>
                  {language === 'el' 
                    ? 'Λεωφόρος Ηρώων 12, Κομοτηνή, 69100'
                    : '12 Heroes Avenue, Komotini, 69100'
                  }
                </span>
              </div>
            </div>
          </div>
          
          {/* Office Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {language === 'el' ? 'Ωράριο Λειτουργίας' : 'Office Hours'}
            </h3>
            <div className="space-y-2 text-gray-400">
              <p>{language === 'el' ? 'Δευτέρα - Παρασκευή: 9:00 - 18:00' : 'Monday - Friday: 9:00 - 18:00'}</p>
              <p>{language === 'el' ? 'Σάββατο: 10:00 - 14:00' : 'Saturday: 10:00 - 14:00'}</p>
              <p>{language === 'el' ? 'Κυριακή: Κλειστά' : 'Sunday: Closed'}</p>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} IN-MAVRIDIS. {language === 'el' ? 'Με επιφύλαξη παντός δικαιώματος.' : 'All rights reserved.'}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;