'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { ArrowRight, Upload, Paintbrush, Image as ImageIcon, Mail } from "lucide-react";

export default function LandingPage() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-[#1E1E1E] text-white font-sans">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="h-[75vh] flex flex-col justify-center items-center text-center relative">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Badge
              variant="secondary"
              className="mb-4 sm:mb-6 bg-red-900 text-red-100 border-red-800 text-sm sm:text-base z-10"
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Transform Your Thoughts
            </Badge>
          </motion.div>
          <motion.h1 
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-gradient leading-tight z-10"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Turn Your Ideas
            <br />
            into Visuals
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-2xl md:text-3xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed z-10"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Stop imagining—start creating. With IMAIGZ, you can
            transform your thoughts into stunning visuals in minutes. No design
            skills needed, just your unique ideas.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/generate" passHref>
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white text-base sm:text-xl px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 z-10 red-glow"
              >
                Start Your Creative Journey
                <ArrowRight className="ml-2 w-5 h-5 sm:w-6 sm:h-6" />
              </Button>
            </Link>
          </motion.div>
        </section>

        <Separator className="bg-gray-800 my-12 sm:my-16" />

        <section className="max-w-5xl mx-auto mb-12 sm:mb-16">
          <motion.h2 
            className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 text-center text-gradient"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            How It Works
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: <Upload className="w-10 h-10 sm:w-16 sm:h-16 text-red-500" />,
                title: 'Describe',
                description:
                  'Share your vision with us. Give the details that make it yours.',
              },
              {
                icon: <Paintbrush className="w-10 h-10 sm:w-16 sm:h-16 text-red-500" />,
                title: 'Choose Your Style',
                description:
                  'Pick from a variety of styles and themes to match your vibe.',
              },
              {
                icon: <ImageIcon className="w-10 h-10 sm:w-16 sm:h-16 text-red-500" />,
                title: 'Generate',
                description:
                  'Instantly see your ideas come to life as AI crafts a high-quality image based on your input.',
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="bg-[#2A2A2A] border-gray-700 hover:shadow-lg transition-shadow duration-300 rounded-xl overflow-hidden group hover-scale h-full">
                  <CardContent className="p-6 sm:p-8 text-center flex flex-col items-center justify-center h-full">
                    <div className="mb-4 sm:mb-6 transform transition-transform duration-300 group-hover:scale-110">{step.icon}</div>
                    <h3 className="text-lg sm:text-2xl font-semibold mb-2 sm:mb-4 text-white">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-lg text-gray-300">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <motion.section 
          className="text-center max-w-4xl mx-auto mb-12 sm:mb-16"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-gradient">
            Ready to Bring Your Vision to Life?
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
            Create exactly what you imagine and make it your own.
          </p>
          <Link href="/generate" passHref>
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white text-base sm:text-xl px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 group red-glow"
            >
              Start Creating Now
              <ArrowRight className="ml-2 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.section>

        <motion.section 
          className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-[#2A2A2A] rounded-2xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6 text-gradient">
            Stay Updated
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
            Don&apos;t miss out on new features and exclusive offers.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:w-96 text-base sm:text-lg bg-[#3A3A3A] text-white border-gray-600 focus:border-red-500 focus:ring-red-500"
              required
            />
            <Button
              type="submit"
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white text-base sm:text-lg px-6 py-3 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 red-glow"
            >
              Subscribe
              <Mail className="ml-2 w-5 h-5 sm:w-6 sm:h-6" />
            </Button>
          </form>
        </motion.section>
      </main>
    </div>
  );
}