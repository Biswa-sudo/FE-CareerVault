import React, { useEffect, useState } from 'react';
import { SpokenEnglishProvider } from '../spokenEnglish/context';
import { SpokenEnglishDashboard } from '../spokenEnglish';
import SpokenEnglishPrePurchase from '../spokenEnglish/pages/SpokenEnglishBeforeBuy';
import { getSubscriptionStatus } from '../lib/localStorage';

const SpokenEnglishPage = () => {
  const [hasAccess, setHasAccess] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const check = async () => {
      try {
        const ok = await getSubscriptionStatus(2, 'spoken-english');
        if (!cancelled) setHasAccess(Boolean(ok));
      } catch (err) {
        if (!cancelled) setHasAccess(false);
      }
    };

    check();

    return () => {
      cancelled = true;
    };
  }, []);

  if (hasAccess === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-sm text-gray-500">Loading...</p>
      </div>
    );
  }

  if (!hasAccess) {
    return <SpokenEnglishPrePurchase />;
  }

  return (
    <SpokenEnglishProvider>
      <SpokenEnglishDashboard />
    </SpokenEnglishProvider>
  );
};

export default SpokenEnglishPage;