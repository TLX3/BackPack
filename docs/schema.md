# Schema Information

## destinations
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      | not null
picture_url | string    | not null
location    | string    | not null
cost        | string    | not null
author_id   | integer   | not null, foreign key (references users), indexed

## users_destinations
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
destination_id    | integer   | not null, foreign key (references events), indexed

## groups
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
description | string    | not null
destination_id| integer | not null, foreign key (references destinations), indexed

## users_groups
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
group_id    | integer   | not null, foreign key (references groups), indexed

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## group_taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
group_id    | integer   | not null, foreign key (references groups), indexed, unique [tag_id]
tag_id      | integer   | not null, foreign key (references tags), indexed

## user_taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed, unique [tag_id]
tag_id      | integer   | not null, foreign key (references tags), indexed

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
bio             | text      | not null
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
