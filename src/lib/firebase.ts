// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported, logEvent, type Analytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJ5qPWCCMBezhwP2KG7dbDzWgEdOChCi4",
  authDomain: "saumya-kumar.firebaseapp.com",
  projectId: "saumya-kumar",
  storageBucket: "saumya-kumar.firebasestorage.app",
  messagingSenderId: "525126500878",
  appId: "1:525126500878:web:0e56b2440270f3e86e325f",
  measurementId: "G-0SMVLGSSZY"
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
