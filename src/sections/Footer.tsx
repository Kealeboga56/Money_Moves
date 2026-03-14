
import OwlMascot from '@/components/ui/OwlMascot';
import { colors } from '@/styles/duolingo-theme';


// Footer
export const Footer = () => {
  return (
    /*
    <footer className="bg-gray-950 text-gray-400 py-12 border-t border-gray-900">
      <div className="max-w-6xl mx-auto px-6">*/
    <footer className="px-4 sm:px-6 lg:px-8 pb-8 text-gray-400">
     <div className="max-w-6xl mx-auto bg-gradient-to-br from-gray-900 to-gray-950 rounded-[2.5rem] py-12 px-8 md:px-12 border border-gray-800 shadow-xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div 
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: colors.green.DEFAULT }}
              >
                <OwlMascot emotion="happy" size="md" />
              </div>
              <span className="font-bold text-white text-lg">FinLearn</span>
            </div>
            <p className="text-sm">Making financial literacy accessible and fun for everyone.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mobile App</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-900 text-center text-sm">
          © 2026 FinLearn. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;