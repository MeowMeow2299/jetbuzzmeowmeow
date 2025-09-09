import { useEffect, useState } from 'react';

const FirebaseErrorHandler = () => {
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    // Listen for Firebase errors
    const handleFirebaseError = (error) => {
      console.warn('Firebase Error (handled):', error);
      setErrors(prev => [...prev, {
        id: Date.now(),
        message: error.message,
        code: error.code
      }]);
    };

    // Listen for unhandled promise rejections
    const handleUnhandledRejection = (event) => {
      if (event.reason?.code?.includes('firebase') || 
          event.reason?.message?.includes('permission') ||
          event.reason?.message?.includes('Firebase')) {
        handleFirebaseError(event.reason);
        event.preventDefault(); // Prevent console error
      }
    };

    // Listen for console errors
    const originalError = console.error;
    console.error = (...args) => {
      const errorMessage = args.join(' ');
      if (errorMessage.includes('Firebase') || 
          errorMessage.includes('permission') ||
          errorMessage.includes('firestore')) {
        handleFirebaseError({ message: errorMessage, code: 'console-error' });
        return; // Don't show in console
      }
      originalError.apply(console, args);
    };

    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
      console.error = originalError;
    };
  }, []);

  // Don't render anything, just handle errors silently
  return null;
};

export default FirebaseErrorHandler;
