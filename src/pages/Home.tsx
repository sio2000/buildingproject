import { Link } from 'react-router-dom';
import { Building2, Calculator, Building, Ruler, FileText } from 'lucide-react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';
import { useState } from 'react';

interface FeatureItem {
  title: string;
  description: string;
}

const Home = () => {
  const { t, language } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);

  const services = [
    {
      icon: Building2,
      title: t('home.services.architectural.title'),
      description: t('home.services.architectural.description'),
      link: '/architectural-office'
    },
    {
      icon: Building,
      title: t('home.services.engineering.title'),
      description: t('home.services.engineering.description'),
      link: '/engineering-services'
    },
    {
      icon: FileText,
      title: t('home.services.projects.title'),
      description: t('home.services.projects.description'),
      link: '/projects'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const popUpVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  const serviceCardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.645, 0.045, 0.355, 1]
      }
    }
  };

  const cardContentVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.4
      }
    }
  };

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

      {/* Services Section */}
      <motion.div 
        className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              {t('home.services.title')}
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="relative bg-white rounded-2xl p-8 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-sm border border-gray-100"
                variants={serviceCardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                {/* Icon */}
                <motion.div
                  className="mb-8"
                  variants={cardContentVariants}
                >
                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center">
                    <service.icon className="h-7 w-7 text-blue-600" />
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  className="space-y-4"
                  variants={cardContentVariants}
                >
                  <h3 className="text-2xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed min-h-[80px]">
                    {service.description}
                  </p>
                  
                  {/* Updated Learn More Link */}
                  <Link
                    to={service.link}
                    className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold group mt-4"
                  >
                    <span className="relative">
                      Learn more...
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    </span>
                  </Link>
                </motion.div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-50 to-transparent opacity-50 rounded-tr-2xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-50 to-transparent opacity-50 rounded-bl-2xl pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

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
        </div>
      </div>
    </div>
  );
};

export default Home;