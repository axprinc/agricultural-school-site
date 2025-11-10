"use client"

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { saveMembershipUid } from '@/lib/membership';

/**
 * Client component that monitors URL query parameters
 * and saves membership_uid to cookies when present
 */
export default function MembershipHandler() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const membershipUid = searchParams.get('membership_uid');
    
    if (membershipUid) {
      saveMembershipUid(membershipUid);
      console.log('Membership UID saved to cookies:', membershipUid);
    }
  }, [searchParams]);

  // This component doesn't render anything
  return null;
}
