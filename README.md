# README

# chat-space DB設計



## usersテーブル

|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|name|string|null: false|
|id|integer|null: false, foreign_key: true|

### Association
- has_many :posts
- has_many :groups, through: :groups_users
- has_many :groups



## postsテーブル

|Column|Type|Options|
|------|----|-------|
|text|text||
|image|text||
|id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group



## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true|
|name|string|null: false|

### Association
- has_many :posts
- has_many :users, through: :groups_users
- has_many :group_users



## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group
