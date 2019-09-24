function hashPass(email) {
  let chunk = email.substring(0, email.length - 3);
  let hashed = email.replace(
    chunk,
    chunk
      .split("")
      .map(i => "*")
      .join("")
  );
  return hashed;
}

module.exports = hashPass;
