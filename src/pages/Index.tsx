import { Activity, AlertCircle, DollarSign } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import EmailForm from '@/components/EmailForm';
import FeatureCard from '@/components/FeatureCard';

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <ParticleBackground />
      
      {/* Hero Section */}
      <main className="container mx-auto px-4 py-24 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            ObservIQ
          </h1>
          <div className="inline-block px-4 py-2 bg-primary/20 rounded-full mb-6">
            <span className="text-primary font-semibold">🚀 Launching Soon</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-primary/90">
            Monitor Your Logs Smarter, Faster, and Cheaper!
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Get real-time log insights, anomaly detection, and seamless integration in one powerful platform. 
            Join the waitlist to be notified when we launch!
          </p>
          <div className="flex justify-center mt-12">
            <EmailForm />
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-12 mt-32 animate-fade-in-up">
          <FeatureCard
            icon={Activity}
            title="Real-time Monitoring"
            description="Monitor your logs in real-time with advanced filtering and search capabilities."
            className="transform transition-all hover:scale-105"
          />
          <FeatureCard
            icon={AlertCircle}
            title="AI-Powered Alerts"
            description="Get intelligent alerts powered by machine learning to detect anomalies early."
            className="transform transition-all hover:scale-105"
          />
          <FeatureCard
            icon={DollarSign}
            title="Cost-Efficient"
            description="Pay only for what you use with our flexible pricing model."
            className="transform transition-all hover:scale-105"
          />
        </div>
      </main>

      {/* Footer 
      
      <footer className="absolute bottom-0 w-full py-8 text-center text-sm text-muted-foreground bg-background/80 backdrop-blur-sm border-t border-border/10">
        <div className="flex justify-center space-x-8">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300">
            Twitter
          </a>
          <a href="https://www.linkedin.com/in/sujithvl/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300">
            LinkedIn
          </a>
          <a href="https://wa.me/+918870712193" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300">
            Whatsapp
          </a>
        </div>
      </footer> */}{/* Footer Section */}
      <footer className="bg-background text-foreground py-8 mt-24">
        <div className="container mx-auto text-center">
          <p className="text-lg font-semibold">Connect with me:</p>
          <div className="flex justify-center space-x-6 mt-4">
            
            <a
              href="https://www.linkedin.com/in/sujithvl/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition duration-300"
            >
              LinkedIn
            </a>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            &copy; 2025 ObservIQ. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;