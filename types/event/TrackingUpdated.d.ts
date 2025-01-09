/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface TrackingUpdated {
	_id: string;
	type: "TrackingUpdated";
	trackingId: string;
	tracking_number: string;
	user_id: number;
	client?: string;
	destination_country_iso3: string;
	courier: string;
	details: {
		_internal_timestamp: number;
		trackingId: string;
		trigger: string;
		eventId: string;
		message?: {
			Trigger: string;
			Channel: string;
			Message: string;
			LocaleMessage: boolean;
			Delay: number;
			ActivateOrderPlaceholders: boolean;
			Recipient: {
				customer: boolean;
				support: boolean;
				test: boolean;
				plTest: boolean;
				[k: string]: unknown;
			};
			Filter: string;
			deduplicationId: string;
			FilterOnSendId?: string;
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
	filter?: string;
	trigger?: string;
	channel?: string;
	message?: string;
	delay?: number;
	[k: string]: unknown;
}
