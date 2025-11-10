import Cookies from 'js-cookie';

const MEMBERSHIP_COOKIE_NAME = 'membership_uid';
const COOKIE_EXPIRY_DAYS = 30;
const DEFAULT_MEMBERSHIP_ID = 'ms_smashkovmdwhladc';

/**
 * Save membership_uid to cookies for 30 days
 */
export function saveMembershipUid(uid: string): void {
  Cookies.set(MEMBERSHIP_COOKIE_NAME, uid, { expires: COOKIE_EXPIRY_DAYS });
}

/**
 * Get membership_uid from cookies
 */
export function getMembershipUid(): string | undefined {
  return Cookies.get(MEMBERSHIP_COOKIE_NAME);
}

/**
 * Generate the membership subscription URL based on cookie value
 * Falls back to default membership ID if no cookie is set
 */
export function getMembershipUrl(): string {
  const membershipUid = getMembershipUid() || DEFAULT_MEMBERSHIP_ID;
  return `https://order.awaji-smilefarm.com/memberships/${membershipUid}/subscriptions/new`;
}
