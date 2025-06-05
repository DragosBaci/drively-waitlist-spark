
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
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
            <Link to="/about" className="text-purple-600 font-semibold">
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
            🚀 Our Story
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-purple-800 to-blue-800 bg-clip-text text-transparent">
            Revolutionizing
            <span className="block text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text">
              Vehicle Advertising
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to transform how brands connect with audiences while helping drivers earn passive income from their daily commutes.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-6 py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-purple-50 to-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To create a seamless ecosystem where drivers monetize their vehicles and brands reach their target audience effectively.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  A world where every vehicle becomes a valuable advertising asset, creating opportunities for drivers and brands alike.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-indigo-50 to-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Values</h3>
                <p className="text-gray-600 leading-relaxed">
                  Transparency, innovation, and mutual benefit drive everything we do. We believe in fair partnerships for all.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
            The Story Behind <span className="text-purple-600">Drively</span>
          </h2>
          <div className="text-lg text-gray-600 leading-relaxed space-y-6">
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
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Join Our Mission?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Be part of the future of vehicle advertising and start earning today.
          </p>
          <Link to="/">
            <Button size="lg" className="h-12 px-8 bg-white text-purple-600 hover:bg-gray-100 rounded-xl transition-all duration-200 hover:scale-105">
              Join the Waitlist
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
