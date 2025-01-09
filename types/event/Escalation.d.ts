/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Escalation {
	_id: string;
	type: "Escalation";
	trackingId: string;
	tracking_number: string;
	user_id: number;
	client?: string;
	destination_country_iso3?: string;
	courier: string;
	details: {
		trackingId: string;
		matching: {
			checkpointId: string;
			Message: string;
			DeliveryStatus: string;
			Exception: string[];
			event_timestamp: string;
			status_details: string;
			_internal_timestamp: number;
			NextAction?: string;
			scan_location?: string;
			[k: string]: unknown;
		};
		trigger: string;
		details: {
			trackingId: string;
			deliveryStatus: string;
			matching: {
				checkpointId: string;
				Message: string;
				DeliveryStatus: string;
				Exception: string[];
				event_timestamp: string;
				status_details: string;
				_internal_timestamp: number;
				NextAction?: string;
				scan_location?: string;
				[k: string]: unknown;
			};
			latestFingerprint: string;
			_internal_timestamp: number;
			eventId: string;
			reason: string;
			trigger: string;
			[k: string]: unknown;
		};
		reason: string;
		eventId: string;
		[k: string]: unknown;
	};
	created: string;
	createdTs: number;
	__v: number;
	[k: string]: unknown;
}
