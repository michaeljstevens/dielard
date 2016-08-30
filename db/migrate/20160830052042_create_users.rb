class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :profile_picture
      t.text :description
      t.date :birthdate
      t.string :sex
      t.integer :height
      t.integer :weight
      t.string :activity_level
      t.integer :daily_calories

      t.timestamps null: false
    end
    add_index :users, :username, unique: true
    add_index :users, :session_token, unique: true
  end
end
