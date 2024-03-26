type CommonFields = {
  id?: string;
  created_at?: string;
}; //these two fields are common in every supabase table
export const CampaignStatusArray = ['Draft', 'Sent', 'Archived'];
export const EmailStatusArray = ['Draft', 'Completed'];
export const SubscriberStatusArray = ['Draft', 'Completed'];
type CampaignStatus = (typeof CampaignStatusArray)[number];
type EmailStatus = (typeof EmailStatusArray)[number];
type SubscriberStatus = (typeof SubscriberStatusArray)[number];
export type Campaign = {
  name: string;
  from: string | undefined;
  subject: string | undefined;
  user_id?: string | undefined;
  email_id?: string | undefined;
  status: CampaignStatus | undefined;
} & CommonFields;
export type Email = {
  title: string;
  content: string;
  status: EmailStatus | undefined;
} & CommonFields;
export type Subscriber = {
  email: string;
  owner_id: string;
  status: SubscriberStatus | undefined;
} & CommonFields;
export type User = {
  email: string;
} & CommonFields;
