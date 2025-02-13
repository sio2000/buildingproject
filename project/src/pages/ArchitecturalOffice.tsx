import React from 'react';
import { motion } from 'framer-motion';
import { Ruler, PencilRuler, Building2, Compass, CheckCircle2 } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const ArchitecturalOffice = () => {
  const { t } = useTranslation();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const architecturalServices = {
    title: 'Αρχιτεκτονικές Υπηρεσίες',
    description: 'Παρέχουμε ολοκληρωμένες αρχιτεκτονικές λύσεις για κάθε έργο',
    services: [
      {
        title: 'Αρχιτεκτονικός Σχεδιασμός',
        description: 'Δημιουργικές και λειτουργικές λύσεις για κάθε χώρο'
      },
      {
        title: 'Μελέτες Κατασκευής',
        description: 'Λεπτομερείς μελέτες για την άρτια υλοποίηση του έργου'
      },
      {
        title: 'Ανακαινίσεις',
        description: 'Ανανέωση και αναβάθμιση υφιστάμενων χώρων'
      },
      {
        title: 'Εσωτερική Διακόσμηση',
        description: 'Σχεδιασμός εσωτερικών χώρων με αισθητική και λειτουργικότητα'
      }
    ]
  };

  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      title: 'Σύγχρονη Κατοικία',
      location: 'Κομοτηνή',
      type: 'Κατοικία'
    },
    {
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      title: 'Εμπορικό Συγκρότημα',
      location: 'Αλεξανδρούπολη',
      type: 'Εμπορικό'
    },
    {
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      title: 'Πολυτελές Διαμέρισμα',
      location: 'Καβάλα',
      type: 'Κατοικία'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.div 
        className="relative h-[400px] bg-cover bg-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")'
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
              {t('architecturalOffice.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl">
              {t('architecturalOffice.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Services Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 gradient-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t('architecturalOffice.services.title')}
          </motion.h2>
          <motion.p 
            className="text-center text-gray-600 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t('architecturalOffice.services.description')}
          </motion.p>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {t('architecturalOffice.services.items').map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover-card"
                variants={itemVariants}
              >
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 gradient-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t('architecturalOffice.projects.title')}
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover-card"
                variants={itemVariants}
              >
                <motion.div 
                  className="h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-2">{project.location}</p>
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                    {project.type}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 gradient-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t('architecturalOffice.whyChooseUs.title')}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t('architecturalOffice.whyChooseUs.reasons').map((item, index) => (
              <motion.div 
                key={index} 
                className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover-card"
                variants={itemVariants}
              >
                <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchitecturalOffice;