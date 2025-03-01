/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface TrackingCreated {
	_id: string;
	type: "TrackingCreated";
	trackingId: string;
	tracking_number: string;
	user_id: number;
	client?: string;
	destination_country_iso3?: string;
	courier: string;
	details: {
		_internal_timestamp: number;
		trackingId: string;
		trigger: string;
		eventId?: string;
		message?: {
			Trigger: string;
			Channel: string;
			Message: string;
			SendToUnsubscribed?: boolean;
			ActivateOrderPlaceholders?: boolean;
			LocaleMessage?: boolean;
			Delay?: number;
			Recipient: {
				customer?: boolean;
				support?: boolean;
				test?: boolean;
				plTest?: boolean;
				theirs?: boolean | number | null;
				courierContact?: boolean;
				[k: string]: unknown;
			};
			Filter: string;
			RecheckFilterId?: string;
			deduplicationId: string;
			PushNotification?: boolean;
			OncePerDeliveryInOrder?: boolean;
			FilterOnSendId?: string;
			DelayOfWorkingHours?: number;
			FilterOnSend?: {
				$and?: {
					$not?: {
						"reporting.contactedWithMessages"?: {
							$regex: string;
							[k: string]: unknown;
						};
						"reporting.in_transit_date"?: {
							$ne: null;
							[k: string]: unknown;
						};
						"delivery_info.customFields.Centiro-Shipment_WOCancelledComp"?: {
							$ne: null;
							[k: string]: unknown;
						};
						[k: string]: unknown;
					};
					"reporting.delivery_date"?: null;
					user_id?: {
						$in: number[];
						[k: string]: unknown;
					};
					checkpoints?: unknown[];
					"delivery_info.customFields.Centiro-Shipment_WODepComp"?: null;
					"delivery_info.customFields.Centiro-Shipment_WOUpdatedComp"?: {
						$ne: null;
						[k: string]: unknown;
					};
					"delivery_info.customFields.Centiro-Shipment_CloseTripPickResult"?: null;
					"delivery_info.customFields.Centiro-Shipment_Status40"?: null;
					"reporting.courier_dropoff_date"?: null;
					"reporting.in_transit_date"?: null;
					$or?: {
						"delivery_info.customFields.Centiro-Shipment_WODepComp"?: {
							$ne: null;
							[k: string]: unknown;
						};
						"delivery_info.customFields.Centiro-Shipment_WOUpdatedComp"?: {
							$ne: null;
							[k: string]: unknown;
						};
						"delivery_info.customFields.Centiro-Shipment_SCR"?: {
							$ne: null;
							[k: string]: unknown;
						};
						"delivery_info.customFields.Centiro-Shipment_CloseTripPickResult"?: {
							$ne: null;
							[k: string]: unknown;
						};
						"delivery_info.customFields.Centiro-Shipment_Status40"?: {
							$ne: null;
							[k: string]: unknown;
						};
						[k: string]: unknown;
					}[];
					"checkpoints.matching.DeliveryStatus"?: {
						$not?: {
							$in: string[];
							[k: string]: unknown;
						};
						$ne?: string;
						[k: string]: unknown;
					};
					"delivery_info.return"?: {
						$ne: boolean;
						[k: string]: unknown;
					};
					destination_country_iso3?: string;
					[k: string]: unknown;
				}[];
				$or?: {
					"reporting.contactedWithMessages":
						| unknown[]
						| {
								$regex: string;
								$size: number;
								[k: string]: unknown;
						  };
					[k: string]: unknown;
				}[];
				[k: string]: unknown;
			};
			DelayByReference?: {
				Key: string;
				Offset: number;
				IgnoreTime?: boolean;
				[k: string]: unknown;
			};
			OncePerTracking?: boolean;
			OncePerOrder?: boolean;
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
			CompletelyDelivered?: boolean;
			ShortenUrls?: boolean;
			OnlyOncePer?: null | string;
			IsServiceNotice?: boolean;
			DelayByOffsetReference?: {
				Key: string;
				TimeUnitInValueField: string;
				ConsiderWorkingHours: boolean;
				Offset?: number;
				[k: string]: unknown;
			};
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
