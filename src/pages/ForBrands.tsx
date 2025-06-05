import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, MapPin, BarChart3, Users, ArrowRight, CheckCircle, Target, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

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
            <Link to="/for-brands" className="text-purple-600 font-semibold">
              For Brands & Companies
            </Link>
            <Link to="/for-drivers" className="text-gray-700 hover:text-purple-600 transition-colors">
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
          <Badge className="mb-6 bg-purple-600 text-white">For Brands & Companies</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Reach Your Audience<br />
            <span className="text-purple-600">Where They Drive</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform vehicles into powerful mobile billboards. Reach your target audience with precision geo-targeting and measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Get Early Access
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Button variant="outline" size="lg">
              Schedule Demo
            </Button>
          </div>
        </div>

        {/* Platform Features */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Advertising Platform</h2>
            <p className="text-lg text-gray-600">Cutting-edge technology meets real-world mobility for maximum impact.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Benefits List */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Mobile Vehicle Advertising?</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Campaign Performance</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Engagement Rate</span>
                    <span className="text-2xl font-bold text-purple-600">3.2x</span>
                  </div>
                  <p className="text-sm text-gray-500">vs. traditional billboards</p>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Cost Efficiency</span>
                    <span className="text-2xl font-bold text-blue-600">68%</span>
                  </div>
                  <p className="text-sm text-gray-500">reduction vs. digital ads</p>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Brand Recall</span>
                    <span className="text-2xl font-bold text-green-600">94%</span>
                  </div>
                  <p className="text-sm text-gray-500">improvement rate</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How It Works for Brands</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="text-xl font-semibold mb-2">Define Your Campaign</h3>
              <p className="text-gray-600">Set your target audience, budget, and campaign objectives through our intuitive dashboard.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="text-xl font-semibold mb-2">Get Matched</h3>
              <p className="text-gray-600">Our AI matches your campaign with the most relevant drivers in your target locations.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="text-xl font-semibold mb-2">Track Results</h3>
              <p className="text-gray-600">Monitor real-time analytics and optimize your campaign for maximum ROI.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Launch Your Campaign?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join leading brands already leveraging vehicle advertising for better results.
            </p>
            <Link to="/">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                Get Started Today
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

export default ForBrands;
