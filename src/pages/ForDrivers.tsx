
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Clock, Shield, Smartphone, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ForDrivers = () => {
  const features = [
    {
      icon: DollarSign,
      title: "Earn While You Drive",
      description: "Generate passive income from your daily commute without changing your routine."
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "No fixed hours or quotas. Earn money whenever you drive, whether it's daily commuting or weekend trips."
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Guaranteed weekly payments directly to your account. No chasing payments or unreliable advertisers."
    },
    {
      icon: Smartphone,
      title: "Easy Management",
      description: "Simple mobile app to track earnings, manage campaigns, and communicate with our support team."
    }
  ];

  const requirements = [
    "Valid driver's license and insurance",
    "Vehicle model 2015 or newer",
    "Clean driving record",
    "Drive at least 25 miles per day",
    "Vehicle in good condition",
    "Smartphone for app access"
  ];

  const steps = [
    {
      step: "1",
      title: "Apply & Get Approved",
      description: "Submit your application with vehicle and driving information. We'll review and approve qualified drivers within 24 hours."
    },
    {
      step: "2",
      title: "Get Matched with Brands",
      description: "Our AI matches you with relevant brands based on your driving routes and demographics."
    },
    {
      step: "3",
      title: "Install & Start Earning",
      description: "We handle professional installation of advertising materials. Start earning immediately after installation."
    }
  ];

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
            <Link to="/for-drivers" className="text-purple-600 font-semibold">
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
            🚗 For Drivers
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-purple-800 to-blue-800 bg-clip-text text-transparent">
            Turn Your Car Into
            <span className="block text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text">
              A Money Machine
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Earn up to $2,500 per month by advertising premium brands on your vehicle. No extra driving required - just your normal routine.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button size="lg" className="h-12 px-8 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-xl transition-all duration-200 hover:scale-105">
                Start Earning Today
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="h-12 px-8 border-2 border-purple-200 hover:border-purple-500 rounded-xl">
              Calculate Earnings
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Why Drive with <span className="text-purple-600">Drively?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We've made earning from your vehicle simple, profitable, and completely hassle-free.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-purple-50">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              How It <span className="text-purple-600">Works</span>
            </h2>
            <p className="text-xl text-gray-600">
              Get started in three simple steps and begin earning within days.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-purple-50 to-white relative">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-2xl">{step.step}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="px-6 py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Driver <span className="text-purple-600">Requirements</span>
            </h2>
            <p className="text-xl text-gray-600">
              Make sure you meet our simple requirements to start earning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {requirements.map((requirement, index) => (
              <div key={index} className="flex items-center space-x-3 group">
                <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg text-gray-700">{requirement}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Earnings Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-gray-900">
            Your Earning <span className="text-purple-600">Potential</span>
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
                $30K
              </div>
              <p className="text-gray-600 text-lg">Annual earning potential</p>
            </div>
            
            <div className="group">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">
                0
              </div>
              <p className="text-gray-600 text-lg">Extra miles required</p>
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
            Join thousands of drivers already earning passive income with Drively.
          </p>
          <Link to="/">
            <Button size="lg" className="h-12 px-8 bg-white text-purple-600 hover:bg-gray-100 rounded-xl transition-all duration-200 hover:scale-105">
              Apply Now
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ForDrivers;
