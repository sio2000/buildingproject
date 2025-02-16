import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../context/LanguageContext';
import { Calendar, User, Clock, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Εισαγωγές εικόνων
import f1 from '../assets/images/f1.jpg';
import f2 from '../assets/images/f2.jpg';
import f3 from '../assets/images/f3.jpg';
import q1 from '../assets/images/q1.jpg';
import q2 from '../assets/images/q2.jpg';
import q3 from '../assets/images/q3.jpg';
import q4 from '../assets/images/q4.jpg';
import q5 from '../assets/images/q5.jpg';
import q6 from '../assets/images/q6.jpg';
import q7 from '../assets/images/q7.jpg';
import q8 from '../assets/images/q8.jpg';
import q9 from '../assets/images/q9.jpg';
import r1 from '../assets/images/r1.jpg';
import r2 from '../assets/images/r2.jpg';
import r3 from '../assets/images/r3.jpg';
import r4 from '../assets/images/r4.jpg';
import r5 from '../assets/images/r5.jpg';
import r6 from '../assets/images/r6.jpg';
import r7 from '../assets/images/r7.jpg';
import r8 from '../assets/images/r8.jpg';
import r9 from '../assets/images/r9.jpg';
import r10 from '../assets/images/r10.jpg';
import r11 from '../assets/images/r11.jpg';
import to from '../assets/images/to.png';
import to1 from '../assets/images/to1.jpg';
import e1 from '../assets/images/e1.jpg';
import e2 from '../assets/images/e2.jpg';
import e3 from '../assets/images/e3.jpg';
import e4 from '../assets/images/e4.jpg';
import t1 from '../assets/images/t1.jpg';
import t2 from '../assets/images/t2.jpg';
import t3 from '../assets/images/t3.jpg';
import t4 from '../assets/images/t4.jpg';
import t5 from '../assets/images/t5.jpg';
import t6 from '../assets/images/t6.jpg';
import t7 from '../assets/images/t7.jpg';
import t8 from '../assets/images/t8.jpg';
import t9 from '../assets/images/t9.jpg';
import t10 from '../assets/images/t10.jpg';

interface BlogPost {
  id: number;
  title: {
    el: string;
    en: string;
  };
  excerpt: {
    el: string;
    en: string;
  };
  date: string;
  author: string;
  readTime: string;
  images: string[];
}

const Blog = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: {
        el: 'Μονοκατοικία στην Παραλία Αρωγής',
        en: 'House in Arogi Beach'
      },
      excerpt: {
        el: `Aρχιτεκτονική μελέτη, Στατική μελέτη, ισόγειας μονοκατοικίας 50 τμ. με σοφίτα 25 τμ. σε οικόπεδο στην Παραλία Αρωγής Ροδόπης. 

Νίκη Μαυρίδου ARCHInima αρχιτεκτονικό γραφείο, Ιωάννης Μαυρίδης MSc Civil Engineer 

#architecture #architect #civilengineering #komotini #arogi #fanari`,
        en: `Architectural and structural study of a 50 sq.m. single-story house with a 25 sq.m. loft in Arogi Beach, Rodopi.

Niki Mavridou ARCHInima architectural office, Ioannis Mavridis MSc Civil Engineer

#architecture #architect #civilengineering #komotini #arogi #fanari`
      },
      date: '2024-02-15',
      author: 'Νίκη Μαυρίδου & Ιωάννης Μαυρίδης',
      readTime: '3 min',
      images: [f1, f2, f3]
    },
    {
      id: 2,
      title: {
        el: 'Τεχνικές Μελέτες & Υπηρεσίες',
        en: 'Technical Studies & Services'
      },
      excerpt: {
        el: `Σύμβουλοι μηχανικοι:
@Yiannis Mavridis πολιτικός μηχανικός
@Νίκη Μαυρίδου αρχιτέκτων μηχανικός

Αρχιτεκτονικό Γραφείο, Γραφείο Πολιτικού Μηχανικού MSc Civil Engineer. 

Αρχιτεκτονικές μελέτες, Στατικές μελέτες, Ενεργειακές μελέτες (ΚΕΝΑΚ), Μελέτες Ενίσχυσης & ΚΑΝΕΠΕ, Εφαρμογές Penetron, Μελέτες αποτίμησης φέρουσας ικανότητας υπάρχοντος κτιρίου, Μελέτες αποτίμησης για Προσθήκη ορόφου/ων, Πλήρεις Επιβλέψεις ανεγέρσεων με λεπτομέρειες κατασκευής και κοστολογήσεις σταδίων, Πλήρης διαχείριση εργοταξίου ως την αποπεράτωση.

Ενεργειακές μελέτες, Εκτιμήσεις REV ακινήτων, Νομιμοποιήσεις Αυθαιρέτων Κατασκευών, Άδειες Λειτουργίας επιχειρήσεων και καταστημάτων, Άδειες εργασιών Μικρής κλίμακας, Άδειες κατηγορίας 3, & όλων των κατηγοριών, Ελεγκτές Δόμησης, Ελεγκτές Προσβασιμότητας, Ταυτότητα κτιρίου, Βεβαίωση - έλεγχος νομιμότητας για μεταβιβάσεις ακινήτων - συμβόλαια, Ενεργειακές επιθεωρήσεις & Ενεργειακά Πιστοποιητικά, Επιθεωρητής Καταλυμάτων, Υποβολή επενδυτικών σχεδίων ΕΣΠΑ - LEADER, Κατασκευή Ιδιωτικών Έργων, Ανακαινίσεις, Μονώσεις ταρατσών - εξωστών - υπογείων

http://www.in-mavridis.gr
https://www.instagram.com/komotini_architecture_engineer/

#eadeia #ektimiseis #taftotitaktiriou #ktimatologio #afthereta #propertyresearchgreece #buildingpermitsgreece #maronia #fanari #komotini`,
        en: `Engineering consultants:
@Yiannis Mavridis civil engineer
@Niki Mavridou architect engineer

Architectural Office, Civil Engineer Office MSc Civil Engineer.

Architectural studies, Structural studies, Energy studies (KENAK), Reinforcement & KANEPE studies, Penetron applications, Existing building load-bearing capacity assessment studies, Floor addition assessment studies, Complete construction supervision with construction details and stage costing, Complete construction site management until completion.

Energy studies, REV property valuations, Legalization of Unauthorized Constructions, Business and shop Operating Licenses, Small-scale work permits, Category 3 permits, & all categories, Building Inspectors, Accessibility Inspectors, Building Identity, Certification - legality check for property transfers - contracts, Energy inspections & Energy Certificates, Accommodation Inspector, Submission of ESPA - LEADER investment plans, Private Project Construction, Renovations, Waterproofing of terraces - balconies - basements

http://www.in-mavridis.gr
https://www.instagram.com/komotini_architecture_engineer/

#eadeia #ektimiseis #taftotitaktiriou #ktimatologio #afthereta #propertyresearchgreece #buildingpermitsgreece #maronia #fanari #komotini`
      },
      date: '2024-02-01',
      author: 'Νίκη Μαυρίδου & Ιωάννης Μαυρίδης',
      readTime: '6 min',
      images: [e1, e2, e3, e4]
    },
    {
      id: 3,
      title: {
        el: 'Διώροφη Μονοκατοικία με Σοφίτα στην Εκτενεπόλ',
        en: 'Two-story House with Attic in Ektenepol'
      },
      excerpt: {
        el: `Ανέγερση διώροφου μονοκατοικίας με Σοφιτα- αρχιτεκτονική μελέτη- Εκτενεπολ ΖΕΠ Κομοτηνης

Σύμβουλοι μηχανικοι:
@Yiannis Mavridis πολιτικός μηχανικός
@Νίκη Μαυρίδου αρχιτέκτων μηχανικός

Αρχιτεκτονικό Γραφείο, Γραφείο Πολιτικού Μηχανικού MSc Civil Engineer. 

Αρχιτεκτονικές μελέτες, Στατικές μελέτες, Ενεργειακές μελέτες (ΚΕΝΑΚ), Μελέτες Ενίσχυσης & ΚΑΝΕΠΕ, Εφαρμογές Penetron, Μελέτες αποτίμησης φέρουσας ικανότητας υπάρχοντος κτιρίου, Μελέτες αποτίμησης για Προσθήκη ορόφου/ων, Πλήρεις Επιβλέψεις ανεγέρσεων με λεπτομέρειες κατασκευής και κοστολογήσεις σταδίων, Πλήρης διαχείριση εργοταξίου ως την αποπεράτωση.

Ενεργειακές μελέτες, Εκτιμήσεις REV ακινήτων, Νομιμοποιήσεις Αυθαιρέτων Κατασκευών, Άδειες Λειτουργίας επιχειρήσεων και καταστημάτων, Άδειες εργασιών Μικρής κλίμακας, Άδειες κατηγορίας 3, & όλων των κατηγοριών, Ελεγκτές Δόμησης, Ελεγκτές Προσβασιμότητας, Ταυτότητα κτιρίου, Βεβαίωση - έλεγχος νομιμότητας για μεταβιβάσεις ακινήτων - συμβόλαια, Ενεργειακές επιθεωρήσεις & Ενεργειακά Πιστοποιητικά, Επιθεωρητής Καταλυμάτων, Υποβολή επενδυτικών σχεδίων ΕΣΠΑ - LEADER, Κατασκευή Ιδιωτικών Έργων, Ανακαινίσεις, Μονώσεις ταρατσών - εξωστών - υπογείων

http://www.in-mavridis.gr
https://www.instagram.com/komotini_architecture_engineer/

#eadeia #ektimiseis #taftotitaktiriou #ktimatologio #afthereta #propertyresearchgreece #buildingpermitsgreece #maronia #fanari #komotini`,
        en: `Construction of a two-story house with attic - architectural study - Ektenepol ZEP Komotini

Engineering consultants:
@Yiannis Mavridis civil engineer
@Niki Mavridou architect engineer

Architectural Office, Civil Engineer Office MSc Civil Engineer.

Architectural studies, Structural studies, Energy studies (KENAK), Reinforcement & KANEPE studies, Penetron applications, Existing building load-bearing capacity assessment studies, Floor addition assessment studies, Complete construction supervision with construction details and stage costing, Complete construction site management until completion.

Energy studies, REV property valuations, Legalization of Unauthorized Constructions, Business and shop Operating Licenses, Small-scale work permits, Category 3 permits, & all categories, Building Inspectors, Accessibility Inspectors, Building Identity, Certification - legality check for property transfers - contracts, Energy inspections & Energy Certificates, Accommodation Inspector, Submission of ESPA - LEADER investment plans, Private Project Construction, Renovations, Waterproofing of terraces - balconies - basements

http://www.in-mavridis.gr
https://www.instagram.com/komotini_architecture_engineer/

#eadeia #ektimiseis #taftotitaktiriou #ktimatologio #afthereta #propertyresearchgreece #buildingpermitsgreece #maronia #fanari #komotini`
      },
      date: '2024-01-30',
      author: 'Νίκη Μαυρίδου & Ιωάννης Μαυρίδης',
      readTime: '5 min',
      images: [to, to1]
    },
    {
      id: 4,
      title: {
        el: 'Ολοκληρωμένες Υπηρεσίες Συμβούλων Μηχανικών',
        en: 'Comprehensive Engineering Consulting Services'
      },
      excerpt: {
        el: `Ολοκληρωμένες υπηρεσίες συμβούλων μηχανικών, Αρχιτεκτονική μελέτη, Νομοθεσία δόμησης, αδειών λειτουργίας καταστημάτων, αυθαιρέτων, Ταυτότητα Κτιρίου, Πιστοποιημένες εκτιμήσεις REV, Στατικές Μελέτες, Εφαρμογή, Κοστολόγηση κατά στάδιο, Επίβλεψη με χρονικό προγραμματισμό, Διαχείριση εργοταξίου ανέγερσης - ανακαίνισης επιχειρήσεων/κατοικιών, Ειδίκευση σε διάβρωση σκυροδέματος, επεμβάσεις σε παλαιότερα κτίσματα, Επισκευές κτιρίων.

Νίκη Μαυρίδου Αρχιτέκτονάς Μηχανικός Α.Π.Θ.
Ιωάννης Μαυρίδης, MSc Civil Engineer (αντιστ. Ε.Μ.Π.)

#mavridis_architecture_engineer #mavridiskomotini #archinima #nikimavridou #ioannismavridis #civilengineering #architecture #komotini`,
        en: `Comprehensive engineering consulting services, Architectural design, Building legislation, business operation permits, unauthorized buildings, Building Identity, Certified REV valuations, Structural Studies, Implementation, Stage-by-stage costing, Supervision with time scheduling, Construction site management for business/residential construction - renovation, Specialization in concrete corrosion, interventions in older buildings, Building repairs.

Niki Mavridou Architect Engineer AUTH
Ioannis Mavridis, MSc Civil Engineer (equiv. NTUA)

#mavridis_architecture_engineer #mavridiskomotini #archinima #nikimavridou #ioannismavridis #civilengineering #architecture #komotini`
      },
      date: '2024-01-20',
      author: 'Νίκη Μαυρίδου & Ιωάννης Μαυρίδης',
      readTime: '4 min',
      images: [q1, q2, q3, q4, q5, q6, q7, q8, q9]
    },
    {
      id: 5,
      title: {
        el: 'Εξειδικευμένες Κατασκευαστικές Λύσεις',
        en: 'Specialized Construction Solutions'
      },
      excerpt: {
        el: `Ολοκληρωμένες υπηρεσίες συμβούλων μηχανικών, Αρχιτεκτονική μελέτη, Νομοθεσία δόμησης, αδειών λειτουργίας καταστημάτων, αυθαιρέτων, Ταυτότητα Κτιρίου, Πιστοποιημένες εκτιμήσεις REV, Στατικές Μελέτες, Εφαρμογή, Κοστολόγηση κατά στάδιο, Επίβλεψη με χρονικό προγραμματισμό, Διαχείριση εργοταξίου ανέγερσης - ανακαίνισης επιχειρήσεων/κατοικιών, Ειδίκευση σε διάβρωση σκυροδέματος, επεμβάσεις σε παλαιότερα κτίσματα, Επισκευές κτιρίων.

Νίκη Μαυρίδου Αρχιτέκτονάς Μηχανικός Α.Π.Θ.
Ιωάννης Μαυρίδης, MSc Civil Engineer (αντιστ. Ε.Μ.Π.)

#mavridis_architecture_engineer #mavridiskomotini #archinima #nikimavridou #ioannismavridis #civilengineering #architecture #komotini`,
        en: `Comprehensive engineering consulting services, Architectural design, Building legislation, business operation permits, unauthorized buildings, Building Identity, Certified REV valuations, Structural Studies, Implementation, Stage-by-stage costing, Supervision with time scheduling, Construction site management for business/residential construction - renovation, Specialization in concrete corrosion, interventions in older buildings, Building repairs.

Niki Mavridou Architect Engineer AUTH
Ioannis Mavridis, MSc Civil Engineer (equiv. NTUA)

#mavridis_architecture_engineer #mavridiskomotini #archinima #nikimavridou #ioannismavridis #civilengineering #architecture #komotini`
      },
      date: '2024-01-10',
      author: 'Νίκη Μαυρίδου & Ιωάννης Μαυρίδης',
      readTime: '4 min',
      images: [r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11]
    },
    {
      id: 6,
      title: {
        el: 'Πολυώροφα Κτίρια Κατοικιών στην Κομοτηνή',
        en: 'Past Multi Storey Residential Projects in Komotini'
      },
      excerpt: {
        el: `Past multi storey residential projects. Komotini.

#mavridiskomotini #mavridis_architecture_engineer #archinima #nikimavridou #ioannismavridis #civilengineering #architecture #komotini`,
        en: `Past multi storey residential projects. Komotini.

#mavridiskomotini #mavridis_architecture_engineer #archinima #nikimavridou #ioannismavridis #civilengineering #architecture #komotini`
      },
      date: '2024-01-05',
      author: 'Νίκη Μαυρίδου & Ιωάννης Μαυρίδης',
      readTime: '3 min',
      images: [t1, t2, t3, t4, t5, t6, t7, t8, t9, t10]
    }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    nextArrow: (
      <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer">
        <ChevronRight className="w-10 h-10 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all" />
      </div>
    ),
    prevArrow: (
      <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer">
        <ChevronLeft className="w-10 h-10 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all" />
      </div>
    ),
    customPaging: (i: number) => (
      <div className="w-3 h-3 mx-1 rounded-full bg-white bg-opacity-50 hover:bg-opacity-100 transition-all" />
    ),
    dotsClass: "slick-dots absolute bottom-4 flex justify-center items-center w-full"
  };

  const modalSliderSettings = {
    ...sliderSettings,
    initialSlide: currentImageIndex,
    nextArrow: (
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-10 cursor-pointer">
        <ChevronRight className="w-12 h-12 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all" />
      </div>
    ),
    prevArrow: (
      <div className="absolute left-8 top-1/2 -translate-y-1/2 z-10 cursor-pointer">
        <ChevronLeft className="w-12 h-12 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all" />
      </div>
    ),
  };

  const openImageModal = (images: string[], startIndex: number) => {
    setSelectedImages(images);
    setCurrentImageIndex(startIndex);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeImageModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.div 
        className="relative h-[400px] bg-cover bg-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')`
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
              {language === 'el' ? 'Το Ιστολόγιο μας' : 'Our Blog'}
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              {language === 'el' 
                ? 'Ανακαλύψτε τα τελευταία νέα, άρθρα και συμβουλές σχετικά με την αρχιτεκτονική και τις κατασκευές'
                : 'Discover our latest news, articles and tips about architecture and construction'
              }
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Blog Content */}
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                {post.images.length > 0 && (
                  <div className="relative w-full h-96">
                    <Slider {...sliderSettings}>
                      {post.images.map((image, index) => (
                        <div key={index} className="outline-none h-96">
                          <div
                            className="w-full h-full cursor-pointer"
                            onClick={() => openImageModal(post.images, index)}
                          >
                            <img
                              src={image}
                              alt={`${post.title[language]} ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                )}
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900 hover:text-blue-600 transition-colors">
                    {post.title[language]}
                  </h2>
                  <p className="text-gray-600 mb-4 whitespace-pre-line">
                    {post.excerpt[language]}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(post.date).toLocaleDateString(language === 'el' ? 'el-GR' : 'en-US')}
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Component */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center"
        >
          <button
            onClick={closeImageModal}
            className="absolute top-4 right-4 text-white z-50 p-2 hover:text-blue-400 transition-colors"
          >
            <X className="h-8 w-8" />
          </button>
          
          <div className="w-full h-full flex items-center justify-center p-4">
            <div className="w-full max-w-7xl">
              <Slider {...modalSliderSettings}>
                {selectedImages.map((image, index) => (
                  <div key={index} className="outline-none">
                    <div className="flex items-center justify-center h-[80vh]">
                      <img
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Blog; 