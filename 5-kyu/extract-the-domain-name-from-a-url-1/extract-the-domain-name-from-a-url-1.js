function domainName(url){
   const regex = /(www.|http(s)?:\/\/(www.)?|)(?<domain>[^.]+)./
   console.log(regex.test(url))
    return url.match(regex).groups.domain
}