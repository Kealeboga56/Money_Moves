import { motion } from 'framer-motion';
import { colors } from '@/styles/duolingo-theme';






// How It Works Section
export const HowItWorksSection = () => {
  const steps = [
    { step: '01', title: 'Choose Your Path', desc: 'Select from budgeting, investing, saving, or debt management tracks.' },
    { step: '02', title: 'Play & Learn', desc: 'Make decisions in realistic scenarios and see the outcomes instantly.' },
    { step: '03', title: 'Build Habits', desc: 'Daily streaks and reminders keep you on track to financial freedom.' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">How It Works</h2>
          <p className="text-gray-600 text-lg">Three simple steps to financial confidence</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 z-0" />
          
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative z-10 bg-white p-8 rounded-3xl border-2 border-gray-100 text-center"
            >
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6 shadow-lg"
                style={{ backgroundColor: colors.green.DEFAULT }}
              >
                {item.step}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
