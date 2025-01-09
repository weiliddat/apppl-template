/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface CustomerPromiseExceeded {
	_id: string;
	type: "CustomerPromiseExceeded";
	trackingId: string;
	tracking_number: string;
	user_id: number;
	client: string;
	destination_country_iso3: string;
	courier: string;
	details: {
		checkpointId: string;
		Message: string;
		DeliveryStatus: string;
		event_timestamp: string;
		status_details: string;
		IsInboundScan: boolean;
		_internal_timestamp: number;
		eventId: string;
		trigger: string;
		matching: {
			DeliveryStatus: string;
			Exception: string[];
			[k: string]: unknown;
		};
		Format?: {
			startDay: string;
			[k: string]: unknown;
		};
		Specifics?: string;
		ParsedSpecifics?: {
			startDay: string;
			endDay: null;
			[k: string]: unknown;
		};
		[k: string]: unknown;
	};
	created: string;
	createdTs: number;
	__v: number;
	[k: string]: unknown;
}
