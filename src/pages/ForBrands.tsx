
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, MapPin, BarChart3, Users, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ForBrands = () => {
  const features = [
    {
      icon: MapPin,
      title: "Geo-Targeted Reach",
      description: "Target specific neighborhoods, cities, or routes where your ideal customers live and work."
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Track impressions, engagement, and ROI with detailed analytics and reporting dashboards."
    },
    {
      icon: Users,
      title: "Audience Insights",
      description: "Access demographic data and behavior patterns to optimize your advertising strategy."
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "AI-powered recommendations to improve campaign performance and maximize your advertising spend."
    }
  ];

  const benefits = [
    "Higher engagement rates than traditional billboards",
    "Cost-effective compared to digital advertising",
    "Mobile advertising that follows your target audience",
    "Measurable results with detailed analytics",
    "Flexible campaign duration and budgets",
    "Premium vehicle selection for brand alignment"
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
            <Link to="/for-brands" className="text-purple-600 font-semibold">
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
            🎯 For Brands & Companies
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-purple-800 to-blue-800 bg-clip-text text-transparent">
            Reach Your Audience
            <span className="block text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text">
              Where They Drive
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform vehicles into powerful mobile billboards. Reach your target audience with precision geo-targeting and measurable results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button size="lg" className="h-12 px-8 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-xl transition-all duration-200 hover:scale-105">
                Get Early Access
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="h-12 px-8 border-2 border-purple-200 hover:border-purple-500 rounded-xl">
              Schedule Demo
            </Button>
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
              Advanced advertising technology meets real-world mobility for maximum impact.
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

      {/* Benefits Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Advertising <span className="text-purple-600">Benefits</span>
            </h2>
            <p className="text-xl text-gray-600">
              Experience the advantages of mobile vehicle advertising with Drively.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 group">
                <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-gray-900">
            Proven <span className="text-purple-600">Results</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">
                3.2x
              </div>
              <p className="text-gray-600 text-lg">Higher engagement vs. static billboards</p>
            </div>
            
            <div className="group">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">
                68%
              </div>
              <p className="text-gray-600 text-lg">Cost reduction vs. digital ads</p>
            </div>
            
            <div className="group">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">
                94%
              </div>
              <p className="text-gray-600 text-lg">Brand recall improvement</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Launch Your Campaign?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join leading brands already leveraging vehicle advertising for better results.
          </p>
          <Link to="/">
            <Button size="lg" className="h-12 px-8 bg-white text-purple-600 hover:bg-gray-100 rounded-xl transition-all duration-200 hover:scale-105">
              Get Started Today
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ForBrands;
