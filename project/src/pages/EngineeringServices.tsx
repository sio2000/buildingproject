import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';
import { CheckCircle2 } from 'lucide-react';

const EngineeringServices = () => {
  const { t } = useTranslation();

  const services = [
    'Αρχιτεκτονικός σχεδιασμός και αρχιτεκτονική μελέτη – επίβλεψη',
    'Έκδοση πλήρους φακέλου οικοδομικής άδειας και επίβλεψη του έργου',
    'Έκδοση αδειών λειτουργίας υγειονομικού ενδιαφέροντος παντός τύπου',
    'Ενεργειακή επιθεώρηση – ένταξη στο πρόγραμμα "εξοικονομώ κατ\'οίκον"',
    'Ελεγκτής δόμησης',
    'Ανακαινίσεις διαμερισμάτων και καταστημάτων',
    'Διακόσμηση εσωτερικών χώρων',
    'Φωτορεαλισμός και virtual video'
  ];

  const experience = [
    '17 ετής συνεχής εμπειρία στον Τομέα Στατικών Μελετών',
    '5 ετής εμπειρία στον τομέα του Ενεργειακού Σχεδιασμού',
    'Πιστοποιημένος Ελεγκτής Δόμησης',
    '17 ετής εμπειρία στην Κατασκευή Ιδιωτικών Έργων',
    '8 ετής εμπειρία στον Τομέα Εκτιμήσεων Ακινήτων',
    'Εμπειρία σε Τεχνικές Πραγματογνωμοσύνες',
    'Μέλος της Μόνιμης Επιτροπής Χωροταξίας και Περιβάλλοντος του ΤΕΕ Θράκης'
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
          backgroundImage: 'url("https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <motion.div 
            className="text-white"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              {t('engineeringServices.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl text-gray-200">
              {t('engineeringServices.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* About Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h2 className="text-3xl font-bold mb-6 gradient-text">
                {t('engineeringServices.about.title')}
              </h2>
              <div className="prose prose-lg">
                <p className="text-gray-600 whitespace-pre-line">
                  {t('engineeringServices.about.description')}
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow transform hover:scale-[1.02] duration-300"
            >
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                alt="Engineering Office"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 gradient-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t('engineeringServices.services.title')}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(t('engineeringServices.services.items') as string[]).map((service, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-3 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <CheckCircle2 className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
                <span>{service}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 gradient-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t('engineeringServices.experience.title')}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(t('engineeringServices.experience.items') as string[]).map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-3 bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngineeringServices; 