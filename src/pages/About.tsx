
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
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
            <Link to="/about" className="text-purple-600 font-semibold">
              About Us
            </Link>
            <Link to="/for-brands" className="text-gray-700 hover:text-purple-600 transition-colors">
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

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Page Title */}
        <div className="mb-16">
          <Badge className="mb-4 bg-purple-600 text-white">About Drively</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionizing Vehicle Advertising
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We're transforming how brands connect with audiences while helping drivers earn passive income from their daily commutes.
          </p>
        </div>

        {/* Story Content */}
        <div className="prose prose-lg max-w-none mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Founded in 2024, Drively was born from a simple observation: millions of vehicles travel the same routes daily, representing untapped advertising potential. Traditional billboard advertising is expensive and static, while digital ads are often ignored.
            </p>
            <p>
              We saw an opportunity to bridge this gap by creating a platform that connects drivers with premium brands, turning everyday commutes into income-generating opportunities while providing brands with dynamic, location-based advertising solutions.
            </p>
            <p>
              Our team of technology experts, marketing professionals, and automotive enthusiasts came together with one goal: to revolutionize the advertising industry while empowering drivers to earn passive income.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Mission-Driven</h3>
              <p className="text-gray-600">Creating win-win opportunities for drivers and brands through innovative technology.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community First</h3>
              <p className="text-gray-600">Building a supportive ecosystem where everyone benefits from our platform.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">Committed to delivering the highest quality experience for all our users.</p>
            </div>
          </div>
        </div>

        {/* Vision Statement */}
        <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-0 mb-16">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              A world where every vehicle becomes a valuable advertising asset, creating opportunities for drivers and brands alike. We envision a future where mobile advertising is seamless, profitable, and beneficial for communities everywhere.
            </p>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Join Our Mission?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Be part of the future of vehicle advertising and start earning today.
          </p>
          <Link to="/">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              Join the Waitlist
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
