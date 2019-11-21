json.id @post.id
json.user_name @post.user.name
json.date @post.created_at.strftime("%Y/%m/%d %H:%M")
json.content @post.content
json.image @post.image_url