/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Delivered {
	_id: string;
	type: "Delivered";
	trackingId: string;
	tracking_number: string;
	user_id: number;
	client?: string;
	destination_country_iso3?: null | string;
	courier: string;
	details: {
		trackingId: string;
		deliveryStatus: string;
		matching: {
			checkpointId: string;
			Message: string;
			DeliveryStatus: string;
			DeliveryLocation: string;
			event_timestamp: string;
			status_details: string;
			_internal_timestamp: number;
			Specifics?: string;
			scan_location?: string;
			ReturnDeliveryStatus?: string;
			IsInboundScan?: boolean;
			[k: string]: unknown;
		};
		latestFingerprint: string;
		_internal_timestamp: number;
		eventId: string;
		trigger: string;
		message?: {
			Trigger: string;
			Channel: string;
			Message: string;
			LocaleMessage?: boolean;
			Delay: number;
			Recipient: {
				customer?: boolean;
				support?: boolean;
				test?: boolean;
				plTest?: boolean;
				courierContact?: boolean;
				theirs?: boolean | number | null;
				[k: string]: unknown;
			};
			Filter: string;
			deduplicationId: string;
			OncePerOrder?: boolean;
			CompletelyDelivered?: boolean;
			OncePerDeliveryInOrder?: boolean;
			FilterOnSendId?: string;
			ActivateOrderPlaceholders?: boolean;
			PushNotification?: boolean;
			Account?: number;
			Id?: number;
			SlotType?: string;
			EventTypes?: string;
			Name?: string;
			SendOnlyIfMultipleTracking?: boolean;
			SendOnlyIfSingleTracking?: boolean;
			OnlyWithSpecifics?: boolean;
			OnlyWithSpecificsTime?: boolean;
			AllowedNextAction?: null;
			ShortenUrls?: boolean;
			OnlyOncePer?: null | string;
			OncePerTracking?: boolean;
			SendToUnsubscribed?: boolean;
			IsServiceNotice?: boolean;
			[k: string]: unknown;
		};
		delay?: number;
		event?: string;
		user_id?: number;
		[k: string]: unknown;
	};
	filter?: string;
	trigger?: string;
	channel?: string;
	message?: string;
	delay?: number;
	created: string;
	createdTs: number;
	__v: number;
	[k: string]: unknown;
}
