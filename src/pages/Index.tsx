
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Zap, Shield, ArrowRight, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const Index = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      toast({
        title: "Welcome to the waitlist! 🎉",
        description: "We'll notify you as soon as Drively launches.",
      });
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="px-6 py-4 backdrop-blur-sm bg-white/80 border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Drively
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              About Us
            </Link>
            <Link to="/for-brands" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              For Brands & Companies
            </Link>
            <Link to="/for-drivers" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              For Drivers
            </Link>
          </nav>

          <Badge variant="secondary" className="bg-purple-100 text-purple-700 hover:bg-purple-200">
            Coming Soon
          </Badge>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700">
            🚀 Early Access Available
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-purple-800 to-blue-800 bg-clip-text text-transparent animate-fade-in">
            Transform Your Drive Into
            <span className="block text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text">
              Passive Income
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Join thousands of drivers earning extra income by advertising with their vehicles. 
            Get matched with premium brands and start earning while you drive.
          </p>

          {/* Waitlist Form */}
          <div className="max-w-md mx-auto mb-8 animate-scale-in">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-12 text-lg border-2 border-purple-200 focus:border-purple-500 rounded-xl"
                  required
                />
                <Button 
                  type="submit" 
                  size="lg"
                  className="h-12 px-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-xl transition-all duration-200 hover:scale-105"
                >
                  Join Waitlist
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </form>
            ) : (
              <div className="flex items-center justify-center gap-2 text-green-600 bg-green-50 p-4 rounded-xl border border-green-200">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">You're on the list! Check your email for confirmation.</span>
              </div>
            )}
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-6 text-gray-500 text-sm">
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>2,847+ drivers waiting</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span>Trusted by 500+ brands</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Why Choose <span className="text-purple-600">Drively?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We've reimagined vehicle advertising to make it simple, profitable, and hassle-free for drivers everywhere.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-purple-50 to-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Instant Matching</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our AI-powered platform instantly connects you with relevant brands based on your driving patterns and location.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Guaranteed Payments</h3>
                <p className="text-gray-600 leading-relaxed">
                  Weekly payments directly to your account. No chasing payments or dealing with unreliable advertisers.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-indigo-50 to-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Premium Brands</h3>
                <p className="text-gray-600 leading-relaxed">
                  Partner with Fortune 500 companies and premium brands that value quality advertising partnerships.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-gray-900">
            Join the <span className="text-purple-600">Movement</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">
                $2,500
              </div>
              <p className="text-gray-600 text-lg">Average monthly earnings</p>
            </div>
            
            <div className="group">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">
                500+
              </div>
              <p className="text-gray-600 text-lg">Partner brands</p>
            </div>
            
            <div className="group">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">
                98%
              </div>
              <p className="text-gray-600 text-lg">Driver satisfaction rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Earning?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Be among the first to access our platform when we launch.
          </p>
          
          {!isSubmitted && (
            <div className="max-w-md mx-auto">
              <form onSubmit={handleSubmit} className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-12 text-lg bg-white/20 border-white/30 placeholder:text-white/70 text-white rounded-xl"
                  required
                />
                <Button 
                  type="submit" 
                  size="lg"
                  className="h-12 px-6 bg-white text-purple-600 hover:bg-gray-100 rounded-xl transition-all duration-200 hover:scale-105"
                >
                  Join Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <span className="text-2xl font-bold">Drively</span>
          </div>
          
          <p className="text-gray-400 mb-6">
            Transforming vehicles into income-generating assets, one drive at a time.
          </p>
          
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500 text-sm">
              © 2024 Drively. All rights reserved. • Privacy Policy • Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
