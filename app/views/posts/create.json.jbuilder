json.(@post, :content, :image)
json.created_at @post.created_at.strftime("%Y年%m月%d日 %H時%M分")
json.user_name @post.user.name
json.id @post.id