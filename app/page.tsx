"use client"

import { useState, useEffect } from "react"

export default function UpsellPage() {
  const [seconds, setSeconds] = useState(59)

  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => setSeconds(seconds - 1), 1000)
      return () => clearTimeout(timer)
    }
  }, [seconds])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-red-900 text-white flex flex-col items-center justify-center px-4">
      <div className="text-center space-y-8 max-w-md mx-auto">
        <h3 className="text-xl font-bold text-yellow-400 mb-4">ARE YOU SURE YOU DON'T WANT TO DISCOVER THE TRUTH?</h3>

        {/* SPY3 Title */}
        <h1 className="text-5xl font-bold text-white tracking-wider">SPY 3</h1>

        {/* Broken Heart Icon and Title */}
        <div className="space-y-4">
          <div className="text-6xl">💔</div>
          <h2 className="text-2xl font-bold text-white">FEELING BETRAYED?</h2>
        </div>

        {/* Main Quote */}
        <p className="text-lg text-gray-300 italic leading-relaxed">
          "You deserve to know the truth. Even the conversations he tried to hide..."
        </p>

        {/* Timer */}
        <div className="text-4xl font-bold text-red-500 bg-black/30 rounded-lg py-4 px-6">
          00:00:{seconds.toString().padStart(2, "0")}
        </div>

        {/* Subtitle */}
        <p className="text-base text-gray-300">Discover hidden profiles, private messages, and suspicious likes on:</p>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-8 py-4">
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-2">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.073-1.689-.073-4.949 0-3.204.013-3.583.072-4.948.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </div>
            <span className="text-sm text-white">Instagram</span>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-2">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </div>
            <span className="text-sm text-white">Facebook</span>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-2">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.21 10.08c0-.46.04-.85.13-1.18.09-.33.23-.6.4-.82.18-.21.4-.37.65-.47.26-.1.55-.15.86-.15.64 0 1.12.18 1.45.54.33.36.49.88.49 1.56 0 .27-.03.52-.08.75-.05.23-.13.43-.24.6-.11.17-.25.3-.42.4-.17.1-.37.15-.6.15-.23 0-.43-.05-.6-.15-.17-.1-.31-.23-.42-.4-.11-.17-.19-.37-.24-.6-.05-.23-.08-.48-.08-.75zm7.92 5.05c.1-.08.21-.12.33-.12.12 0 .23.04.33.12.1.08.15.19.15.33 0 .14-.05.25-.15.33l-4.83 4.83c-.08.1-.19.15-.33.15-.14 0-.25-.05-.33-.15l-4.83-4.83c-.1-.08-.15-.19-.15-.33 0-.14.05-.25.15-.33.08-.1.19-.15.33-.15.14 0 .25.05.33.15l4.5 4.5 4.5-4.5z" />
              </svg>
            </div>
            <span className="text-sm text-white">Tinder</span>
          </div>
        </div>

        <div className="text-2xl font-bold text-green-400 mb-2">20% DISCOUNT</div>

        {/* CTA Button */}
        <a
          href="https://pay.mundpay.com/01988fcf-5c38-7282-aeff-b9851683fc11?ref="
          className="block w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105"
          target="_blank"
          rel="noopener noreferrer"
        >
          🔍 START SCANNING
        </a>

        {/* Downsell Button */}
        <a
          href="https://pay.mundpay.com/0198903a-cb3b-72a1-bd10-5210f87265a2?ref="
          className="block w-full bg-yellow-700/60 hover:bg-yellow-600/70 text-white font-medium py-3 px-6 rounded-lg text-sm transition-colors mt-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          💔 I DON'T WANT
        </a>
      </div>
    </div>
  )
}
