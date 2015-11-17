# Schema Information

## events
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      | not null
location    | string    | not null
cost        | string    | not null
author_id   | integer   | not null, foreign key (references users), indexed

## users_events
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
event_id    | integer   | not null, foreign key (references events), indexed

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
event_id    | integer   | not null, foreign key (references events), indexed, unique [tag_id]
tag_id      | integer   | not null, foreign key (references tags), indexed

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique


