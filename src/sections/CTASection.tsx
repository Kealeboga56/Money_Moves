import { motion } from 'framer-motion';


// CTA Section
export const CTASection = ({ onStart }: { onStart: () => void }) => {
  return (
<section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
  <div className="max-w-4xl mx-auto">
    <motion.div
      className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-[2.5rem] p-10 md:p-16 shadow-2xl text-center"
    >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-gray-400 text-xl mb-10 max-w-2xl mx-auto">
            Join 50,000+ learners mastering their finances today. 
            No credit card required. No hidden fees.
          </p>
          <motion.button
            onClick={() => onStart?.()}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 rounded-2xl text-gray-900 font-bold text-xl bg-white hover:bg-gray-100 transition-colors shadow-xl"
          >
            Get Started For Free
          </motion.button>
          <p className="text-gray-500 mt-6 text-sm">Available on iOS, Android, and Web</p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;