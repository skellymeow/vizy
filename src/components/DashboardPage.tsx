"use client"

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Camera, Image as ImageIcon, Wand2, Clock, Settings, HelpCircle } from "lucide-react";

const DashboardPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#1E1E1E] text-white p-8">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-2 text-gradient">Welcome back, User!</h1>
        <p className="text-gray-400">Here&apos;s an overview of your AI image generation journey.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Card className="bg-[#2A2A2A] shadow-lg hover:shadow-xl transition-shadow duration-300 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center text-red-500">
                <Camera className="w-6 h-6 mr-2" />
                New Generation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">Start a new AI image generation project.</p>
            </CardContent>
            <CardFooter>
              <Link href="/generate" passHref>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white transition-colors duration-300">
                  Create New
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Card className="bg-[#2A2A2A] shadow-lg hover:shadow-xl transition-shadow duration-300 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center text-red-500">
                <Clock className="w-6 h-6 mr-2" />
                Recent Projects
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <ImageIcon className="w-4 h-4 mr-2 text-gray-400" aria-hidden="true" />
                  <span className="text-gray-300">Cyberpunk City</span>
                  <Badge className="ml-auto bg-red-900 text-red-100">2 days ago</Badge>
                </li>
                <li className="flex items-center">
                  <ImageIcon className="w-4 h-4 mr-2 text-gray-400" aria-hidden="true" />
                  <span className="text-gray-300">Fantasy Landscape</span>
                  <Badge className="ml-auto bg-red-900 text-red-100">1 week ago</Badge>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full text-gray-300 border-gray-700 hover:bg-gray-700">View All</Button>
            </CardFooter>
          </Card>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Card className="bg-[#2A2A2A] shadow-lg hover:shadow-xl transition-shadow duration-300 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center text-red-500">
                <Wand2 className="w-6 h-6 mr-2" />
                Quick Tools
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" className="flex items-center text-gray-300 border-gray-700 hover:bg-gray-700">
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </Button>
                <Button variant="outline" className="flex items-center text-gray-300 border-gray-700 hover:bg-gray-700">
                  <HelpCircle className="w-4 h-4 mr-2" />
                  Help
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <Separator className="my-12 bg-gray-700" />

      <footer className="text-center text-sm text-gray-500">
        <p>© 2023 IMAIGZ. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default DashboardPage;