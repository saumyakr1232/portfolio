// Firebase configuration for saumya-kumar project
// Replace with your actual Firebase config from Firebase Console
// Go to: Firebase Console > Project Settings > Your apps > Web app

import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent, isSupported } from 'firebase/analytics';
import type { Analytics } from 'firebase/analytics';

// Your web app's Firebase configuration
// TODO: Replace these values with your actual Firebase config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "saumya-kumar.firebaseapp.com",
  projectId: "saumya-kumar",
  storageBucket: "saumya-kumar.firebasestorage.app",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Analytics instance (will be null on server-side)
let analytics: Analytics | null = null;

// Initialize analytics only in browser
export async function initAnalytics(): Promise<Analytics | null> {
  if (typeof window !== 'undefined') {
    const supported = await isSupported();
    if (supported) {
      analytics = getAnalytics(app);
      console.log('Firebase Analytics initialized');
      return analytics;
    }
  }
  return null;
}

// Track page views
export function trackPageView(pageName: string) {
  if (analytics) {
    logEvent(analytics, 'page_view', {
      page_title: pageName,
      page_location: window.location.href,
      page_path: window.location.pathname
    });
  }
}

// Track section views (for scroll-based tracking)
export function trackSectionView(sectionName: string) {
  if (analytics) {
    logEvent(analytics, 'section_view', {
      section_name: sectionName
    });
  }
}

// Track button clicks
export function trackClick(buttonName: string, category: string = 'engagement') {
  if (analytics) {
    logEvent(analytics, 'select_content', {
      content_type: category,
      content_id: buttonName
    });
  }
}

// Track external link clicks
export function trackExternalLink(linkName: string, url: string) {
  if (analytics) {
    logEvent(analytics, 'click', {
      link_name: linkName,
      link_url: url,
      link_domain: new URL(url).hostname
    });
  }
}

// Track resume download (if you add that feature)
export function trackDownload(fileName: string) {
  if (analytics) {
    logEvent(analytics, 'file_download', {
      file_name: fileName
    });
  }
}

export { app, analytics };
