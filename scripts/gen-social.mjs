#!/usr/bin/env node
// Generates social / OG share images for HACKTANDIL.
// Crops the ASCII "Piedra Movediza" surveillance still into each aspect ratio
// and overlays only the HACKTANDIL wordmark + tagline (image + title, nothing else).
//
//   node scripts/gen-social.mjs
//
// Requires: ImageMagick (magick) and rsvg-convert on PATH, plus the Inter and
// GeistMono Nerd Font families available to fontconfig. Outputs land in public/social.

import { execFileSync } from 'node:child_process'
import { mkdtempSync, writeFileSync, rmSync, mkdirSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const SRC_LANDSCAPE = join(ROOT, 'public/assets/images/og-ascii.jpg')
const SRC_PORTRAIT = join(ROOT, 'public/assets/images/mobile.jpg')
const OUT_DIR = join(ROOT, 'public/social')
const tmp = mkdtempSync(join(tmpdir(), 'hacktandil-social-'))

mkdirSync(OUT_DIR, { recursive: true })

// ── brand tokens ──────────────────────────────────────────────────────────
const HUD = '#77eb94' // surveillance accent
const INK = '#f2f1ec' // near-white foreground
const SANS = 'Inter'
const TAGLINE = 'COMUNIDAD TECH DE TANDIL'

const sh = (cmd, args) => execFileSync(cmd, args, { stdio: ['ignore', 'pipe', 'inherit'] })
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

// Legibility scrim only: bottom-weighted darkening + soft vignette. No HUD chrome.
function scrim(w, h) {
  return `
  <defs>
    <linearGradient id="scrimY" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0"    stop-color="#000" stop-opacity="0"/>
      <stop offset="0.5"  stop-color="#000" stop-opacity="0"/>
      <stop offset="1"    stop-color="#000" stop-opacity="0.85"/>
    </linearGradient>
    <radialGradient id="vig" cx="0.5" cy="0.45" r="0.78">
      <stop offset="0.6" stop-color="#000" stop-opacity="0"/>
      <stop offset="1"   stop-color="#000" stop-opacity="0.45"/>
    </radialGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#vig)"/>
  <rect width="${w}" height="${h}" fill="url(#scrimY)"/>`
}

// Centered wordmark + tagline, sitting in the lower third.
function title(w, baseY, wfs, tfs) {
  const cx = w / 2
  return `
  <g text-anchor="middle">
    <text x="${cx}" y="${baseY}" font-family="${SANS}" font-weight="800"
          font-size="${wfs}" letter-spacing="${wfs * 0.02}" fill="${INK}">HACKTANDIL</text>
    <text x="${cx}" y="${baseY + tfs * 2.1}" font-family="${SANS}" font-weight="500"
          font-size="${tfs}" letter-spacing="${tfs * 0.34}" fill="${HUD}">${esc(TAGLINE)}</text>
  </g>`
}

function svgDoc(w, h, body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${scrim(w, h)}\n${body}\n</svg>`
}

// ── per-format layouts ──────────────────────────────────────────────────────
function landscape() {
  const w = 1200, h = 630
  return { name: 'og', w, h, src: SRC_LANDSCAPE, svg: svgDoc(w, h, title(w, 520, 104, 22)) }
}
function square() {
  const w = 1200, h = 1200
  return { name: 'og-square', w, h, src: SRC_LANDSCAPE, svg: svgDoc(w, h, title(w, 1040, 120, 26)) }
}
function portrait() {
  const w = 1080, h = 1920
  return { name: 'og-story', w, h, src: SRC_PORTRAIT, svg: svgDoc(w, h, title(w, 1640, 132, 30)) }
}

// ── render pipeline ─────────────────────────────────────────────────────────
function build({ name, w, h, src, svg }) {
  const bg = join(tmp, `${name}-bg.png`)
  const ov = join(tmp, `${name}-ov.png`)
  const svgPath = join(tmp, `${name}.svg`)
  const out = join(OUT_DIR, `${name}.png`)

  // 1. crop+resize the still to the exact frame (cover, centered), grade down a touch.
  sh('magick', [
    src,
    '-resize', `${w}x${h}^`,
    '-gravity', 'center',
    '-extent', `${w}x${h}`,
    '-modulate', '96,108,100',
    bg,
  ])

  // 2. rasterize the wordmark overlay.
  writeFileSync(svgPath, svg)
  sh('rsvg-convert', ['-w', String(w), '-h', String(h), svgPath, '-o', ov])

  // 3. composite + flatten onto the near-black brand background.
  sh('magick', [bg, ov, '-composite', '-background', '#060709', '-flatten', out])
  console.log(`  ✓ public/social/${name}.png  (${w}×${h})`)
  return out
}

console.log('Generating HACKTANDIL social images…')
const outs = [landscape(), square(), portrait()].map(build)

// A lightweight JPG of the landscape OG for platforms that prefer it small.
const ogJpg = join(OUT_DIR, 'og.jpg')
sh('magick', [outs[0], '-quality', '88', ogJpg])
console.log('  ✓ public/social/og.jpg   (compressed landscape)')

rmSync(tmp, { recursive: true, force: true })
console.log('Done.')
