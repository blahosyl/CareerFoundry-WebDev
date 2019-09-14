def greeting #define method
  puts "Please enter your name:" #quotes will not be shown
  name = gets.chomp #store user input in variable and remove new line
  puts "Hello" + " " + name
end

greeting #call method
