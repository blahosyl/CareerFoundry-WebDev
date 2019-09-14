def fav_foods
  food_array = [] # instead of the brackets, you can also use Array.new to make a new empty array
  3.times do
    puts "Name a favorite food."
    food_array << gets.chomp # add input tp end of array (removing newline at the end of input)
    p food_array
    puts "Your favorite foods are #{food_array.join(", ")}."
  end
  food_array.each do |food| # do something to each element in food_array; that element is to be referred to as food
    puts "I like #{food} too!" # the thing we're doing
  end # ends the loop
end

fav_foods
