# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160905221132) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "exercises", force: :cascade do |t|
    t.integer  "user_id",      null: false
    t.string   "title",        null: false
    t.text     "description",  null: false
    t.string   "muscle_group", null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "exercises", ["user_id"], name: "index_exercises_on_user_id", using: :btree

  create_table "routes", force: :cascade do |t|
    t.integer  "user_id",       null: false
    t.string   "title",         null: false
    t.text     "description",   null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.string   "distance",      null: false
    t.string   "duration",      null: false
    t.float    "start_lat",     null: false
    t.float    "start_lng",     null: false
    t.float    "end_lat",       null: false
    t.float    "end_lng",       null: false
    t.string   "activity_type"
  end

  add_index "routes", ["user_id"], name: "index_routes_on_user_id", using: :btree

  create_table "static_workouts", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.date     "date",       null: false
    t.integer  "duration",   null: false
    t.string   "focus"
    t.integer  "calories",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text     "notes"
  end

  add_index "static_workouts", ["user_id"], name: "index_static_workouts_on_user_id", using: :btree

  create_table "travel_workouts", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "route_id",   null: false
    t.date     "date",       null: false
    t.integer  "calories",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text     "notes"
  end

  add_index "travel_workouts", ["route_id"], name: "index_travel_workouts_on_route_id", using: :btree
  add_index "travel_workouts", ["user_id"], name: "index_travel_workouts_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.string   "profile_picture"
    t.text     "description"
    t.date     "birthdate"
    t.string   "sex"
    t.integer  "height"
    t.integer  "weight"
    t.string   "activity_level"
    t.integer  "daily_calories"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
