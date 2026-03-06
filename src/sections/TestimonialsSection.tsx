
import {motion} from 'framer-motion';

// Testimonials Section
export const TestimonialsSection = () => {
  const testimonials = [
    { name: 'Sarah K.', role: 'College Student', text: 'I finally understand credit cards thanks to this app! The scenarios feel so real.', avatar: '👩‍🎓' },
    { name: 'Mike R.', role: 'Young Professional', text: 'Paid off $10k in debt using the strategies I learned here. Game changer!', avatar: '👨‍💼' },
    { name: 'Lisa T.', role: 'Parent', text: 'Teaching my kids about money has never been easier. We learn together!', avatar: '👩‍👧' },
  ];

  return (
    <section className="py-24 bg-white from-green-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-gray-800 mb-16"
        >
          Loved by Learners
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100"
            >
              <div className="text-4xl mb-4">{t.avatar}</div>
              <p className="text-gray-700 mb-6 leading-relaxed">"{t.text}"</p>
              <div>
                <div className="font-bold text-gray-800">{t.name}</div>
                <div className="text-sm text-gray-500">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;