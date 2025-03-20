function domainName(url) {
  // make regex
  // handle urls that do not begin with // so use a non capturing group for http https & www.
  let urlRegex = /(?:https?:\/\/)?(?:www\.)?([^.\/]+)\./;
  // match equals the captured group
  let match = url.match(urlRegex);
  if (match) {
    // return the first captured group
    return match[1];
  } else {
    // or null
    return null;
  }
}