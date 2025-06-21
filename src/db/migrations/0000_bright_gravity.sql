CREATE TABLE "favorites" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"recipe_id" integer NOT NULL,
	"title" text,
	"cook_time" text,
	"serving" text,
	"created_at" timestamp DEFAULT now()
);
