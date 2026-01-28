import React, { useState } from 'react';
import { migrateBlogsToSupabase } from '../services/migrationService';

const MigrateBlogs: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [errorDetails, setErrorDetails] = useState('');

  const handleMigrate = async () => {
    setIsLoading(true);
    setMessage('Migrating blogs...');
    setErrorDetails('');

    try {
      await migrateBlogsToSupabase();
      setMessage('✓ All blogs migrated successfully!');
    } catch (error: any) {
      const errorMsg = error?.message || JSON.stringify(error);
      setMessage('✗ Migration failed');
      setErrorDetails(errorMsg);
      console.error('Full error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-8 bg-slate-900 rounded-lg border border-slate-700">
      <h3 className="text-xl font-bold text-white mb-4">Migrate Blogs to Supabase</h3>
      <p className="text-slate-400 mb-6">
        This will upload all your existing blog posts from constants to Supabase.
      </p>
      
      <button
        onClick={handleMigrate}
        disabled={isLoading}
        className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {isLoading ? 'Migrating...' : 'Migrate Blogs'}
      </button>

      {message && (
        <div className={`mt-4 p-4 rounded-lg ${message.includes('✓') ? 'bg-green-900 text-green-200' : 'bg-red-900 text-red-200'}`}>
          {message}
        </div>
      )}

      {errorDetails && (
        <div className="mt-4 p-4 bg-slate-800 rounded-lg border border-red-700">
          <p className="text-red-400 text-sm font-mono">{errorDetails}</p>
          <p className="text-slate-400 text-xs mt-2">Check browser console (F12) for full details</p>
        </div>
      )}
    </div>
  );
};

export default MigrateBlogs;
