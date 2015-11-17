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

ActiveRecord::Schema.define(version: 20151117201347) do

  create_table "destination_taggings", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "destinations", force: :cascade do |t|
    t.string   "title",       null: false
    t.text     "description", null: false
    t.string   "location",    null: false
    t.string   "cost",        null: false
    t.integer  "author_id",   null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.string   "picture_url"
  end

  add_index "destinations", ["author_id"], name: "index_destinations_on_author_id"

  create_table "groups", force: :cascade do |t|
    t.string   "description",    null: false
    t.integer  "destination_id", null: false
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  add_index "groups", ["destination_id"], name: "index_groups_on_destination_id"

  create_table "tags", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_taggings", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "tag_id",     null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "user_taggings", ["tag_id"], name: "index_user_taggings_on_tag_id"
  add_index "user_taggings", ["user_id", "tag_id"], name: "index_user_taggings_on_user_id_and_tag_id", unique: true

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.text     "bio"
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true
  add_index "users", ["username"], name: "index_users_on_username", unique: true

  create_table "users_destinations", force: :cascade do |t|
    t.integer  "user_id",        null: false
    t.integer  "destination_id", null: false
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  add_index "users_destinations", ["destination_id"], name: "index_users_destinations_on_destination_id"
  add_index "users_destinations", ["user_id", "destination_id"], name: "index_users_destinations_on_user_id_and_destination_id", unique: true

  create_table "users_groups", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "group_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "users_groups", ["group_id"], name: "index_users_groups_on_group_id"
  add_index "users_groups", ["user_id", "group_id"], name: "index_users_groups_on_user_id_and_group_id", unique: true

end
