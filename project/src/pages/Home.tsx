import { Link } from 'react-router-dom';
import { Building2, Calculator, Building, Ruler } from 'lucide-react';
import { motion, useScroll } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';

interface FeatureItem {
  title: string;
  description: string;
}

const Home = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Building2,
      title: t('home.services.architectural.title'),
      description: t('home.services.architectural.description'),
      link: '/architectural-office'
    },
    {
      icon: Calculator,
      title: t('home.services.valuation.title'),
      description: t('home.services.valuation.description'),
      link: '/real-estate-valuation'
    },
    {
      icon: Building,
      title: t('home.services.engineering.title'),
      description: t('home.services.engineering.description'),
      link: '/engineering-services'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with background image */}
      <motion.div 
        className="relative h-[600px] bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
          backgroundAttachment: 'fixed'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4 glow"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                type: "spring",
                stiffness: 100 
              }}
            >
              {t('home.hero.title')}
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                delay: 0.2,
                type: "spring",
                stiffness: 100 
              }}
            >
              {t('home.hero.subtitle')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                delay: 0.4,
                type: "spring",
                stiffness: 100 
              }}
            >
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
              >
                {t('home.hero.cta')}
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Construction Services Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 gradient-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t('home.constructionServices.title')}
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              {/* Work Plan Design */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold mb-6">
                  {t('home.constructionServices.planning.title')}
                </h3>
                <ul className="space-y-3">
                  {(t('home.constructionServices.planning.items') as string[]).map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Ruler className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Specialized Works */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold mb-6">
                  {t('home.constructionServices.specialized.title')}
                </h3>
                <ul className="space-y-3">
                  {(t('home.constructionServices.specialized.items') as string[]).map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Building2 className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-full min-h-[500px] rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                alt="Construction and Architecture"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {t('home.constructionServices.construction.title')}
                  </h3>
                  <p className="text-gray-200 mb-4">
                    {t('home.constructionServices.construction.description')}
                  </p>
                  <p className="text-gray-300 text-sm">
                    {t('home.constructionServices.construction.quality')}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Services Section with fixed layout */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t('home.services.title')}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg hover-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <motion.div
                  className="floating"
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <service.icon className="h-12 w-12 text-blue-600 mb-4" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  to={service.link}
                  className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                >
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 gradient-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t('home.whyChooseUs.title')}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {(t('home.whyChooseUs.features') as FeatureItem[]).map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 gradient-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t('home.certifications.title')}
          </motion.h2>

          {/* Expert Valuer Section */}
          <motion.div
            className="mb-12 bg-gray-50 p-8 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4">
              {t('home.certifications.expertValuer.title')}
            </h3>
            <ul className="space-y-3">
              {(t('home.certifications.expertValuer.items') as string[]).map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Professional Memberships Section */}
          <motion.div
            className="bg-gray-50 p-8 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4">
              {t('home.certifications.professionalMemberships.title')}
            </h3>
            <ul className="space-y-3">
              {(t('home.certifications.professionalMemberships.items') as string[]).map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-700">
              {t('home.contact.info')} <span className="font-semibold">{t('home.contact.phone')}</span>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;