"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import AnimatedCircularProgressBar from "@/components/ui/animated-circular-progress-bar";
import { Home, ImageIcon, Zap, Sliders } from "lucide-react";

const GeneratorPage: React.FC = () => {
  const [prompt, setPrompt] = useState("");
  const [model, setModel] = useState("fal-ai/flux-pro/v1.1");
  const [imageSize, setImageSize] = useState("portrait_4_3");
  const [generatedImages, setGeneratedImages] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleGenerate = async () => {
    setIsGenerating(true);
    setProgress(0);

    try {
      const interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 20));
      }, 500);

      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
          model,
          image_size: imageSize,
          num_images: 1,
        }),
      });

      clearInterval(interval);
      setProgress(100);

      if (!response.ok) throw new Error("Failed to generate image");

      const data = await response.json();
      setGeneratedImages(data.imageUrls);
    } catch (error) {
      console.error("Error generating image:", error);
    } finally {
      setIsGenerating(false);
      setProgress(0);
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-gray-100 p-8">
      <Breadcrumb className="text-sm text-gray-300 mb-8">
        <BreadcrumbList className="flex items-center gap-2">
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="text-gray-400 hover:text-white transition">
              <Home className="w-4 h-4 mr-1" /> Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>/</BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage className="text-gray-300">Generate</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <section className="max-w-3xl mx-auto mb-12 p-6 bg-[#2A2A2A] rounded-lg shadow-lg">
        <div className="mb-8">
          <label htmlFor="prompt" className="block text-sm font-medium text-gray-400 mb-2">
            <ImageIcon className="w-5 h-5 inline-block mr-2 text-red-500" />
            Describe Your Idea
          </label>
          <Input
            id="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Type a description..."
            className="w-full text-base bg-[#3A3A3A] text-white border-gray-600 focus:border-red-500 focus:ring-red-500"
            required
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-6 mb-8">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-400 mb-2">
              <Zap className="w-5 h-5 inline-block mr-2 text-red-500" />
              Select Model
            </label>
            <Select value={model} onValueChange={setModel}>
              <SelectTrigger className="w-full bg-[#3A3A3A] text-white border-gray-600 focus:border-red-500 focus:ring-red-500">
                <SelectValue placeholder="Choose a model" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fal-ai/flux-pro/v1.1">Flux Pro v1.1</SelectItem>
                <SelectItem value="fal-ai/aura-flow">Aura Flow</SelectItem>
                <SelectItem value="fal-ai/flux-lora">Flux LoRA</SelectItem>
                <SelectItem value="fal-ai/flux-realism">Flux Realism</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="w-full">
            <label className="block text-sm font-medium text-gray-400 mb-2">
              <Sliders className="w-5 h-5 inline-block mr-2 text-red-500" />
              Image Size
            </label>
            <Select value={imageSize} onValueChange={setImageSize}>
              <SelectTrigger className="w-full bg-[#3A3A3A] text-white border-gray-600 focus:border-red-500 focus:ring-red-500">
                <SelectValue placeholder="Select size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="square_hd">Square HD</SelectItem>
                <SelectItem value="portrait_4_3">Portrait 4:3</SelectItem>
                <SelectItem value="landscape_16_9">Landscape 16:9</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {isGenerating ? (
          <div className="flex flex-col items-center mb-8">
            <AnimatedCircularProgressBar
              max={100}
              min={0}
              value={progress}
              gaugePrimaryColor="rgb(79 70 229)"
              gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
            />
          </div>
        ) : (
          <Button
            onClick={handleGenerate}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-full transition-transform duration-300 transform hover:scale-105 red-glow"
          >
            Generate Image
          </Button>
        )}
      </section>

      {generatedImages.length > 0 && (
        <section className="gallery grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {generatedImages.map((url, index) => (
            <Card key={index} className="relative overflow-hidden rounded-lg bg-[#2A2A2A] border-gray-700">
              <Image src={url} alt={`Generated Image ${index + 1}`} width={400} height={400} className="w-full h-auto object-cover" />
            </Card>
          ))}
        </section>
      )}
    </div>
  );
};

export default GeneratorPage;
