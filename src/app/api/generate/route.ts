import { NextRequest, NextResponse } from "next/server";
import * as fal from "@fal-ai/serverless-client";

fal.config({ credentials: process.env.FAL_KEY });

interface FalResult {
  images: { url: string }[];
}

export async function POST(req: NextRequest) {
  const { prompt, model, image_size, seed, num_images, enable_safety_checker, safety_tolerance } = await req.json();

  try {
    const result = await fal.subscribe(model, {
      input: {
        prompt,
        image_size,
        seed: seed ? parseInt(seed) : undefined,
        num_images: parseInt(num_images),
        enable_safety_checker,
        safety_tolerance,
      },
      logs: true,
      onQueueUpdate: (update) => {
        if (update.status === "IN_PROGRESS" && update.logs) {
          update.logs.forEach((log) => console.log(log.message));
        }
      },
    }) as FalResult;

    if (!result.images || result.images.length === 0) throw new Error("No image generated");

    const imageUrls = result.images.map((image) => image.url);
    return NextResponse.json({ imageUrls });
  } catch (error) {
    console.error("Error generating image:", error);
    return NextResponse.json({ error: "Failed to generate image. Please try again." }, { status: 500 });
  }
}