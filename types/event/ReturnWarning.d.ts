/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface ReturnWarning {
	_id: string;
	type: "ReturnWarning";
	trackingId: string;
	tracking_number: string;
	user_id: number;
	client: string;
	courier: string;
	details: {
		type: string;
		netDaysWaited: number;
		maxDaysWaiting: number;
		storageTimes: {
			days: number;
			type: number[];
			lastDay: string;
			[k: string]: unknown;
		};
		eventId: string;
		[k: string]: unknown;
	};
	created: string;
	createdTs: number;
	__v: number;
	destination_country_iso3?: string;
	[k: string]: unknown;
}
