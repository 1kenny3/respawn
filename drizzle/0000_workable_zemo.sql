CREATE TABLE `payment_orders` (
	`id` text PRIMARY KEY NOT NULL,
	`request_key` text NOT NULL,
	`owner` text NOT NULL,
	`amount` integer NOT NULL,
	`items` text NOT NULL,
	`email` text NOT NULL,
	`delivery` text NOT NULL,
	`status` text NOT NULL,
	`payment_id` text,
	`payment_url` text,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `payment_orders_request_key_unique` ON `payment_orders` (`request_key`);