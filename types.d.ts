import { CustomerPromiseExceeded } from "./types/event/CustomerPromiseExceeded";
import { Delay } from "./types/event/Delay";
import { DelayedDispatch } from "./types/event/DelayedDispatch";
import { Delivered } from "./types/event/Delivered";
import { DeliveryStatus } from "./types/event/DeliveryStatus";
import { Dispatch } from "./types/event/Dispatch";
import { Escalation } from "./types/event/Escalation";
import { Exception } from "./types/event/Exception";
import { FailedAttempt } from "./types/event/FailedAttempt";
import { Forgotten } from "./types/event/Forgotten";
import { Invalid } from "./types/event/Invalid";
import { LastMileHandover } from "./types/event/LastMileHandover";
import { LeadTimeExceeded } from "./types/event/LeadTimeExceeded";
import { OrderCreated } from "./types/event/OrderCreated";
import { OrderUpdated } from "./types/event/OrderUpdated";
import { PickupReady } from "./types/event/PickupReady";
import { Return } from "./types/event/Return";
import { ReturnWarning } from "./types/event/ReturnWarning";
import { Scheduled } from "./types/event/Scheduled";
import { TrackingCreated } from "./types/event/TrackingCreated";
import { TrackingUpdated } from "./types/event/TrackingUpdated";

declare type DateISOString = string;

declare type Matching = {
  Message: string;
  DeliveryStatus: string;
  event_timestamp: DateISOString;
  status_details: string;
};

// Represents a checkpoint in a tracking journey
declare type Checkpoint = {
  created: DateISOString; // Date the checkpoint was created, defaults to current date
  status: string;
  status_details: string;
  status_label: string;
  status_next: string;
  event_timestamp: DateISOString;
  event_location: string;
  country: string;
  country_iso3: string;
  zip_code: string;
  city: string;
  courier: string;
  matching: Matching; // Could contain various types of data, flexible schema
};

// Information about a delivery tour, such as remaining stops and tour identification
declare type TourInfo = {
  tourOpenStops: number; // Number of stops open until the current tracking
  tourId: string; // Unique and primary ID of the truck on a specific day
  tourOrder: number; // Position of this delivery in the tour schedule
};

// Represents a combined transport consisting of multiple individual shipments
declare type TransportInfo = {
  courier: string;
  tracking_number: string;
};

// Additional information about the courier service, e.g., number of parcels, signature requirement
declare type CourierInfo = {
  numOfParcels: number;
  requiresSignature: boolean;
};

// Detailed information about the delivery, including addresses, dates, and shipment details
declare type DeliveryInfo = {
  xid: string; // Alternative identifier supplied by the online shop
  orderNo: string; // Order number
  deliveryNo: string; // Delivery number
  customerNo: string; // Customer number
  consignmentNo: string; // Consignment number
  transportNo: string; // Transport number
  invoiceNo: string; // Invoice number
  paymentMethod: string; // Payment method used
  recipient: string; // Name of the customer
  recipient_notification: string; // Name of customer used in notifications (e.g., only first name)
  street: string; // Street address of delivery
  city: string; // City of delivery
  region: string; // Region code of the delivery
  timezone: string; // Timezone of the destination
  email: string; // Email address of the recipient
  phone: string; // Phone number of the recipient
  language_iso3: string; // ISO3 language code for delivery notifications
  isDropshipment: boolean; // If the record is shipped not from the retailer but a partner (dropshipper)
  origin_country_iso3: string;
  origin_region: string;
  origin_zip_code: string;
  articles: any[]; // List of articles included in the shipment
  articlesOpen: any[]; // List of articles not included in the shipment but to be shipped later
  articlesOrder: any[]; // Order of articles in the shipment
  weight: string; // Weight of the shipment with unit
  complete: boolean; // Whether the shipment is complete without missing items, defaults to true
  upgrade: boolean; // Whether there is an additional upgrade or refinement, defaults to false
  cashOnDelivery: number; // Amount for cash on delivery, defaults to 0
  doorstepDelivery: boolean; // Whether delivery is directly to the recipient or to a parcel locker/shop, defaults to true
  branchDelivery: boolean; // Whether this delivery is to a branch/store or directly to a customer, defaults to false
  client: string; // The issuing shop of a notification
  courierServiceLevel: string; // Service level offered by the courier
  warehouse: string; // Warehouse from which the delivery was dispatched
  market: string; // Marketplace of sale, e.g., Amazon or eBay
  courierContactName: string; // Contact name at the courier (e.g., name of the depot)
  courierContactPhone: string; // Phone number for courier contact
  courierContactEmail: string; // Email for courier contact
  reviewlink: string; // Individual review link
  statuslink: string; // Proprietary status link maintained by the shop
  supportPhone: string; // Phone number for shop support
  collectionCode: string; // Code required to collect a package (e.g., UPS PCR)
  customFields: any; // Any other fields, flexible schema
  order_date: DateISOString; // Date when the customer ordered the delivery
  send_date: DateISOString; // Date when the delivery is scheduled to be sent
  announced_delivery_date_min: DateISOString; // Minimum expected delivery date
  announced_delivery_date: DateISOString; // Primary expected delivery date, used to evaluate SLA
  return: boolean; // Whether the delivery is a return label, sent from a customer, defaults to false
  cancelled: boolean; // Whether this delivery has been cancelled (Storno)
  cancelled_date: DateISOString; // Date when the tracking was marked as cancelled
  notificationsInactive: boolean; // If true, notifications are not sent

  courier_change_url: string; // URL assigned by the courier where trackings can be changed by the recipient
  courier_delivery_method: string; // Unstructured string from the carrier describing the "delivery method" or "product code"

  pod_identifier: string; // Name of the POD (Proof of Delivery) image
  pod_signature: string; // Signature on the POD image
  pod_date: string; // Date of the POD image
};

// Represents a billing information structure
declare type BillingInfo = {
  name: string; // Full name of the billing recipient
  phone: string; // Phone number of the billing recipient
  email: string; // Email address of the billing recipient
  street: string; // Street of the billing recipient
  city: string; // City of the billing recipient
  zip_code: string; // Postal code of the billing recipient
  region: string; // Region/province/state of the billing recipient
  country_iso3: string; // Country of the billing recipient
};

// Represents marketplace information, especially in the context of dropshipping
declare type MarketplaceInfo = {
  is_dropship: boolean; // "True" indicates that the product is dropshipped
  name: string; // Pretty name of the marketplace
};

// Contains detailed reporting information about the delivery status and analysis
declare type ReportingInfo = {
  invalid: boolean; // Indicates if the tracking number is unknown to the courier, defaults to false
  forgotten: boolean; // Marks whether the tracking hasn't been updated, defaults to false
  delayed: boolean; // Indicates if the delivery is delayed, defaults to false
  failedAttempt: boolean; // Indicates at least one failed delivery attempt, defaults to false
  dispatchDelayed: boolean; // Indicates if the delivery dispatch was delayed, defaults to false
  leadTimeExceeded: boolean; // Indicates if the predefined lean time (SLA) was exceeded, defaults to false
  timeWindowMissed: boolean; // Indicates if the specified time window for delivery was missed, defaults to false
  escalated: boolean; // Whether the tracking escalated on an exception, defaults to false
  returned: boolean; // Indicates if the delivery is returned to sender, defaults to false
  trendingLateProbability: number; // Probability that the delivery will be late, defaults to null
  trendingLateStatus: string; // Status description for late trending deliveries, defaults to null
  returned_date: DateISOString; // Date of return, null if not returned yet
  return_reason: string; // Reason for return, if applicable, with predefined values
  customerPromiseExceeded: boolean; // Indicates if the promise to the customer was not met, defaults to false

  contacted: boolean; // Indicates if the customer was contacted, defaults to false
  contactedWithMessages: string[]; // Messages that have been sent to the customer
  contactedAndBounce: boolean; // Indicates if any message sent to the customer bounced, defaults to false

  pickup_date: DateISOString; // Date when the shipment was picked up by the carrier
  in_transit_date: DateISOString; // Date when the shipment was sorted by the carrier in their hub
  courier_dropoff_date: DateISOString; // Date when the delivery was first attempted by the courier
  delivery_date: DateISOString; // Date when the shipment was delivered

  lead_time: number; // Actual lead time: time from pickup to delivery
  lead_time_door_to_door: number; // Door-to-door lead time from the perspective of the courier
  lead_time_first_attempt: number; // Lead time for the first delivery attempt from the perspective of the courier
  lead_time_dispatch_delta: number; // Time from announced dispatch date to in_transit_date
  lead_time_since_order: number; // Lead time from order creation to courier dropoff
  lead_time_to_inbound: number; // Lead time from pickup to in_transit
  lead_time_door_to_door_sla: number; // Lead time minus SLA
  lead_time_failed_till_delivered: number; // Time from first qualified delivery attempt to actual delivery
  lead_time_till_collection: number; // Time from being ready for pickup until actual delivery
  lead_time_order_till_inbound: number; // Time from order until inbound processing
  lead_time_order_till_send: number; // Time from order date until send date
  lead_time_expected_delivery_vs_dropoff: number; // Difference between announced delivery date and courier dropoff
  lead_time_expected_delivery_vs_delivery: number; // Difference between announced delivery date and actual delivery date

  exceptions: boolean; // Indicates if there were exceptions during delivery
  exception_messages: string[]; // List of exception messages received

  delivery_location: string; // Location where the shipment was delivered (e.g., direct or packstation)
};

// Combines various schemas into a tracking schema
declare type Tracking = {
  tracking_number: string; // Tracking number provided by parcel delivery company
  foreign_tracking_number: string; // Tracking number provided by parcel delivery company in destination country
  courier: string; // Code of parcel delivery company, e.g., DHL
  destination_country_courier: string; // Parcel delivery company code in the destination country
  uniqueness: string; // Unique, sparse index as virtual compound of courier and tracking_number

  user_id: number; // ID of owning user
  recipient_id: string; // Recipient's identifier (currently calculated from email)
  securityHash: string; // A random 8 char string to append to URLs as auth token
  created: DateISOString; // Timestamp of creation of tracking on parcelLab
  createdTs: number; // Numeric value for sorting in Atlas Search
  expiresAt: DateISOString; // Timestamp of expiration of tracking

  refreshed: DateISOString; // Timestamp of last check for updates
  updated: DateISOString; // Timestamp of last update of tracking on parcelLab
  service: string; // Service used to track: {aftership, private, ...}
  foreign_courier_service: string; // Service used to track the last mile courier updates
  destination_country_iso3: string; // Destination country
  zip_code: string; // Destination zip code of delivery
  tour: TourInfo; // Information about a delivery tour
  isReturnsPortal: boolean; // If a record has been created through our returns portal, we mark it as such
  claimed: DateISOString; // Timestamp of claim
  claimReason: string; // Reason for claim

  isTransport: boolean; // Whether this record is a pseudo-tracking generated for multiple orders shipped with one parcel
  transport: TransportInfo; // Information about the transport
  courier_info: CourierInfo; // Additional information about the courier service
  delivery_info: DeliveryInfo; // Detailed information about the delivery
  billing_info: BillingInfo; // Stores all related billing information
  marketplace: MarketplaceInfo; // Represents marketplace information, especially in the context of dropshipping

  reporting: ReportingInfo; // Contains detailed reporting information about the delivery status and analysis
  checkpoints: Checkpoint[]; // List of checkpoints associated with the tracking

  activity_monitor: {
    last_update: DateISOString; // Date of the last update to the tracking status
    current_stage: string; // Top-level lifecycle stage of tracking
    current_delivery_status: string; // Delivery status that occurred last
    delayed_at: DateISOString; // Date when the delivery was marked as delayed
    escalated_at: DateISOString; // Date when the tracking escalated on an exception
  };
};

declare type LifecycleEvent =
  | CustomerPromiseExceeded
  | Delay
  | DelayedDispatch
  | Delivered
  | DeliveryStatus
  | Dispatch
  | Escalation
  | Exception
  | FailedAttempt
  | Forgotten
  | Invalid
  | LastMileHandover
  | LeadTimeExceeded
  | OrderCreated
  | OrderUpdated
  | PickupReady
  | Return
  | ReturnWarning
  | Scheduled
  | TrackingCreated
  | TrackingUpdated;

declare type RenderContext = {
  tracking: Tracking;
  event: LifecycleEvent;
};

declare type EventContext = {
  tracking: Tracking;
  event: LifecycleEvent;
};

type PayloadContext = {
  payload: any;
};

declare type InvokeOpts<T> = {
  command: "invoke" | string;
  args: Record<any, any>;
  mode: "test" | "live";
  config: T;
};
