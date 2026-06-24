"use client"

import { ShaderLabComposition, type ShaderLabConfig } from "@basementstudio/shader-lab"

type ImageSource = { fileName: string; src: string }

// The composition is a single ASCII effect filtering one image source. The
// source image (and ASCII cell size) is swapped per viewport: a landscape
// 16:9 plate on desktop, a 9:16 portrait crop on mobile.
function buildConfig({
  cellSize,
  source,
}: {
  cellSize: number
  source: ImageSource
}): ShaderLabConfig {
  return {
    layers: [
      {
        blendMode: "normal",
        compositeMode: "filter",
        maskConfig: { invert: false, mode: "multiply", source: "luminance" },
        hue: 0,
        id: "ed66164c-fa71-41e4-ad1d-cf5d26b957b0",
        kind: "effect",
        name: "ASCII",
        opacity: 1,
        params: {
          cellSize,
          charset: "light",
          customChars: " .:-=+*#%@",
          fontWeight: "regular",
          colorMode: "monochrome",
          monoColor: "#f5f5f0",
          bgOpacity: 0,
          invert: false,
          toneMapping: "none",
          glyphSignalMode: "luminance",
          colorSignalMode: "luminance",
          signalBlackPoint: 0,
          signalWhitePoint: 1,
          signalGamma: 1,
          presenceThreshold: 0,
          presenceSoftness: 0,
          shimmerAmount: 0,
          shimmerSpeed: 1,
          directionBias: 0,
          bloomEnabled: true,
          bloomIntensity: 1.25,
          bloomThreshold: 0.6,
          bloomRadius: 6,
          bloomSoftness: 0.35,
        },
        saturation: 1,
        type: "ascii",
        visible: true,
      },
      {
        blendMode: "normal",
        compositeMode: "filter",
        maskConfig: { invert: false, mode: "multiply", source: "luminance" },
        hue: 0,
        id: "ce875140-2a79-4448-8773-6116859134ed",
        kind: "source",
        name: "Image",
        opacity: 1,
        params: {
          fitMode: "cover",
          scale: 1,
          offset: [0, 0],
          svgRasterResolution: "2048",
        },
        saturation: 1,
        type: "image",
        visible: true,
        asset: {
          fileName: source.fileName,
          kind: "image",
          src: source.src,
        },
      },
    ],
    timeline: { duration: 8, loop: false, tracks: [] },
  }
}

const config = buildConfig({
  cellSize: 12,
  source: { fileName: "desktop.webp", src: "/assets/images/desktop.webp" },
})

// Mobile gets the 9:16 portrait crop and a tighter ASCII grid so the narrower
// viewport still resolves plenty of glyph detail across the subjects.
const mobileConfig = buildConfig({
  cellSize: 9,
  source: { fileName: "mobile.webp", src: "/assets/images/mobile.webp" },
})

export function AsciiShader({
  className,
  variant = "desktop",
}: {
  className?: string
  variant?: "desktop" | "mobile"
}) {
  return (
    <ShaderLabComposition
      // key forces a clean remount when the source swaps across the breakpoint
      key={variant}
      config={variant === "mobile" ? mobileConfig : config}
      className={className}
      style={{ width: "100%", height: "100%" }}
    />
  )
}
