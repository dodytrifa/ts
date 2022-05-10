//  RECORD UTILITY
// from Kamal Sharif channel

// get from https://docs.github.com/en/rest/activity/feeds

type Links = {
  timeline:{
    href: string
    type: string
  }
}


type TimelineValues = {
  href: string
  type: string
}

const links = {
  "timeline": {
    "href": "https://github.com/timeline",
    "type": "application/atom+xml"
  },
  "user": {
    "href": "https://github.com/{user}",
    "type": "application/atom+xml"
  },
  "current_user_public": {
    "href": "https://github.com/octocat",
    "type": "application/atom+xml"
  },
  "current_user": {
    "href": "https://github.com/octocat.private?token=abc123",
    "type": "application/atom+xml"
  },
}