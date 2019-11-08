# README

# chat-space DB設計



## usersテーブル

|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|username|string|null: false|

### Association
- has_many :posts
- has_many :groups, through: :groups_tags



## postsテーブル

|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
|image|text|null: false|

### Association
- belongs_to :users
- has_many :groups



## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|groupname|string|null: false|
|member|string|null: false|

### Association
- belongs_to :posts
- has_many :users, through: :groups_tags



## groups_tagsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :posts
- belongs_to :groups

