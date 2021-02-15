function showSalary(users, age) {
  return users.filter(function(user){if (user.age<=age){return user;}})
.map(function(user){return user.name + ", " + user.balance})
.join('\n');
}
