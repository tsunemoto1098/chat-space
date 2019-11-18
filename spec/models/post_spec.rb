require 'rails_helper'

RSpec.describe post, type: :model do
  describe '#create' do
    context 'can save' do
      it 'is valid with content' do
        expect(build(:post, image: nil)).to be_valid
      end

      it 'is valid with image' do
        expect(build(:post, content: nil)).to be_valid
      end

      it 'is valid with content and image' do
        expect(build(:post)).to be_valid
      end
    end

    context 'can not save' do
      it 'is invalid without content and image' do
        post = build(:post, content: nil, image: nil)
        post.valid?
        expect(post.errors[:content]).to include('を入力してください')
      end

      it 'is invalid without group_id' do
        post = build(:post, group_id: nil)
        post.valid?
        expect(post.errors[:group]).to include('を入力してください')
      end

      it 'is invaid without user_id' do
        post = build(:post, user_id: nil)
        post.valid?
        expect(post.errors[:user]).to include('を入力してください')
      end
    end
  end
end