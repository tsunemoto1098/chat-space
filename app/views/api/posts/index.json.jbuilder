json.array! @posts do |post|
  json.content post.content
  json.image post.image
  json.created_at post.created_at.strftime("%Y/%m/%d %H:%M")
  json.user_name post.user.name
  json.id post.id
end