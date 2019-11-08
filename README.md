# README

# chat-space DB設計



## usersテーブル

|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|username|string|null: false|
|id|integer|null: false, foreign_key: true|

### Association
- has_many :posts
- has_many :groups, through: :groups_users
- has_many :groups



## postsテーブル

|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
|image|text|null: false|
|id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :users
- has_many :groups



## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true|
|groupname|string|null: false|

### Association
- belongs_to :posts
- has_many :users, through: :groups_users
- has_many :group_users



## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :posts
- belongs_to :groups

