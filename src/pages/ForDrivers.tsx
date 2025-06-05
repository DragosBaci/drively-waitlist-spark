import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Clock, Shield, Smartphone, ArrowRight, CheckCircle, Calculator } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="px-6 py-4 bg-white border-b border-gray-200 sticky top-0 z-50">
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
            <Link to="/about" className="text-gray-700 hover:text-purple-600 transition-colors">
              About Us
            </Link>
            <Link to="/for-brands" className="text-gray-700 hover:text-purple-600 transition-colors">
              For Brands & Companies
            </Link>
            <Link to="/for-drivers" className="text-purple-600 font-semibold">
              For Drivers
            </Link>
          </nav>

          <Badge variant="secondary" className="bg-purple-100 text-purple-700">
            Coming Soon
          </Badge>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-purple-600 text-white">For Drivers</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Turn Your Car Into<br />
            <span className="text-purple-600">A Money Machine</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Earn up to $2,500 per month by advertising premium brands on your vehicle. No extra driving required - just your normal routine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Start Earning Today
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Button variant="outline" size="lg">
              Calculate Earnings
            </Button>
          </div>
        </div>

        {/* Earning Potential */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Earning Potential</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our drivers earn competitive rates based on their driving patterns, vehicle type, and campaign duration. The more you drive in high-traffic areas, the more you earn.
              </p>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                  <span className="font-medium">Average Monthly</span>
                  <span className="text-2xl font-bold text-purple-600">$2,500</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                  <span className="font-medium">Annual Potential</span>
                  <span className="text-2xl font-bold text-blue-600">$30,000</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                  <span className="font-medium">Extra Miles Required</span>
                  <span className="text-2xl font-bold text-green-600">0</span>
                </div>
              </div>
            </div>
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Calculator className="w-6 h-6 text-purple-600 mr-2" />
                  <h3 className="text-xl font-semibold">Earnings Calculator</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Daily Miles</label>
                    <div className="text-3xl font-bold text-purple-600">50 miles</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Estimate</label>
                    <div className="text-3xl font-bold text-green-600">$2,200</div>
                  </div>
                  <p className="text-sm text-gray-500">Based on average campaign rates in your area</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="text-xl font-semibold mb-2">Apply & Get Approved</h3>
              <p className="text-gray-600">Submit your application with vehicle and driving information. We'll review and approve qualified drivers within 24 hours.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="text-xl font-semibold mb-2">Get Matched with Brands</h3>
              <p className="text-gray-600">Our AI matches you with relevant brands based on your driving routes and demographics.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="text-xl font-semibold mb-2">Install & Start Earning</h3>
              <p className="text-gray-600">We handle professional installation of advertising materials. Start earning immediately after installation.</p>
            </div>
          </div>
        </section>

        {/* Features & Requirements */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Drive with Drively?</h2>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Driver Requirements</h2>
              <Card className="bg-white shadow-lg">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {requirements.map((requirement, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700">{requirement}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-700">
                      <strong>Good news!</strong> Most drivers already meet these requirements. Apply now to see if you qualify.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Earning?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of drivers already earning passive income with Drively.
            </p>
            <Link to="/">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                Apply Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ForDrivers;
