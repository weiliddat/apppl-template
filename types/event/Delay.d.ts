/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Delay {
	_id: string;
	type: "Delay";
	trackingId: string;
	tracking_number: string;
	user_id: number;
	destination_country_iso3: string;
	courier: string;
	details: {
		trackingId: string;
		deliveryStatus: string;
		matching: {
			checkpointId: string;
			Message: string;
			DeliveryStatus: string;
			Exception: string[];
			event_timestamp: string;
			scan_location?: string;
			status_details: string;
			_internal_timestamp: number;
			NextAction?: string;
			[k: string]: unknown;
		};
		latestFingerprint: string;
		_internal_timestamp: number;
		eventId: string;
		reason: string;
		trigger?: string;
		message?: {
			Trigger: string;
			Channel: string;
			Message: string;
			OncePerOrder?: boolean;
			LocaleMessage?: boolean;
			Delay: number;
			Recipient: {
				customer?: boolean;
				support?: boolean;
				test?: boolean;
				plTest?: boolean;
				theirs?: boolean | number;
				courierContact?: boolean;
				[k: string]: unknown;
			};
			Filter: string;
			deduplicationId: string;
			ActivateOrderPlaceholders?: boolean;
			OncePerTracking?: boolean;
			[k: string]: unknown;
		};
		delay?: number;
		event?: string;
		user_id?: number;
		[k: string]: unknown;
	};
	created: string;
	createdTs: number;
	__v: number;
	client?: string;
	filter?: string;
	trigger?: string;
	channel?: string;
	message?: string;
	delay?: number;
	[k: string]: unknown;
}
