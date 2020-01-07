// Declare function to check if a string is a palindrome
const palindrome = str => {
  // Declare empty array to use later when reversing letters
  let reverse = []
  // Declare array to compare to reverse array
  let forward = str
    // Remove all non-alphanumeric chars from the string using the replace method
    .replace(/[^0-9a-z]/gi, '')
    // Convert string to lower case using the toLowerCase method
    .toLowerCase()
    // Convert the string to an array by splitting the string at each char
    .split('')

  // Loop through the forward array and reverse it by pushing each char to the front of the reverse array using the unshift method
  forward.forEach(x => reverse.unshift(x))

  // Convert the forward array to a string to compare using the join method
  forward = forward.join('')

  // Convert the reverse array to a string to compare using the join method
  reverse = reverse.join('')

  // Compare the two strings to determine if they are equal and if they are, return true
  if (reverse === forward) return true

  // Else, return false
  return false
}

palindrome('eye')
