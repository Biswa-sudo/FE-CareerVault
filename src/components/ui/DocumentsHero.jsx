// components/DocumentsHero.jsx
import React from 'react';
import { useAuth } from '../../context/AuthContext';

export default function DocumentsHero() {
  const { user } = useAuth();

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 mb-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            My Documents
          </h1>
          <p className="text-gray-600 mt-2 max-w-2xl">
            Upload your essential documents – resumes, cover letters, portfolios, 
            certificates, and more. Access them anytime, anywhere, from any device.
            Log in and download instantly whenever you need them for your next job hunt.
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            <span className="inline-flex items-center gap-1.5 text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11.5V9.5h2l-3-4-3 4h2v4h2z"/></svg>
              Upload from Desktop/Mobile
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm bg-green-50 text-green-700 px-3 py-1 rounded-full">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm5 1v10l3-2.5L12 5H9z"/></svg>
              Download anywhere
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm bg-purple-50 text-purple-700 px-3 py-1 rounded-full">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 14H9v-2h2v2zm0-4H9V7h2v5z"/></svg>
              Secure & encrypted
            </span>
          </div>
        </div>
        <div className="mt-4 md:mt-0 md:ml-6 flex-shrink-0">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 text-center">
            <svg className="w-16 h-16 mx-auto text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 2v4h4" />
            </svg>
            <p className="text-xs text-gray-500 mt-1">Quick access</p>
            <p className="text-xs font-medium text-gray-700">{user?.name || 'Guest'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}