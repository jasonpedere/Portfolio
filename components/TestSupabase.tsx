import React, { useState } from 'react';
import { getSupabaseClient } from '../services/supabaseService';

const TestSupabase: React.FC = () => {
  const [status, setStatus] = useState('Not tested');
  const [details, setDetails] = useState<any>({});

  const testConnection = async () => {
    setStatus('Testing...');
    
    try {
      // Check environment variables
      const envCheck = {
        VITE_SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL,
        VITE_SUPABASE_ANON_KEY: import.meta.env.VITE_SUPABASE_ANON_KEY ? 'Present' : 'Missing',
        MODE: import.meta.env.MODE
      };
      
      console.log('Environment Check:', envCheck);
      setDetails(prev => ({ ...prev, env: envCheck }));

      // Test Supabase connection
      const client = getSupabaseClient();
      console.log('Client created');

      // Try to fetch from projects table
      const { data, error } = await client
        .from('projects')
        .select('*')
        .limit(1);

      if (error) {
        console.error('Supabase Error:', error);
        setStatus('❌ Connection Failed');
        setDetails(prev => ({ ...prev, error: error.message, code: error.code }));
      } else {
        console.log('Success! Data:', data);
        setStatus('✅ Connection Successful');
        setDetails(prev => ({ ...prev, rowCount: data.length, sample: data[0] }));
      }
    } catch (err: any) {
      console.error('Test Error:', err);
      setStatus('❌ Test Failed');
      setDetails(prev => ({ ...prev, exception: err.message }));
    }
  };

  return (
    <div className="p-8 bg-slate-900 rounded-lg border border-slate-700">
      <h3 className="text-xl font-bold text-white mb-4">Test Supabase Connection</h3>
      
      <button
        onClick={testConnection}
        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
      >
        Run Test
      </button>

      <div className="mt-6">
        <div className="text-lg font-bold text-white mb-2">Status: {status}</div>
        
        {Object.keys(details).length > 0 && (
          <pre className="bg-black/50 p-4 rounded-lg text-xs text-slate-300 overflow-auto max-h-96">
            {JSON.stringify(details, null, 2)}
          </pre>
        )}
      </div>
    </div>
  );
};

export default TestSupabase;
