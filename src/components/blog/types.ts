export interface WPResponse {
  featured: Post
  posts: Post[]
}

export interface Title {
  rendered: string
}

export interface Excerpt {
  rendered: string
}

export interface Author {
  link: string
  name: string
}
export interface Embedded {
  "wp:featuredmedia": Featuredmedum[]
  "wp:term": WpTerm[][]
  author: Author[]
}

export interface Featuredmedum {
  source_url: string
}

export interface WpTerm {
  link: string
  name: string
}

export interface Post {
  id: number
  link: string
  title: Title
  excerpt: Excerpt
  _embedded: Embedded
  date: string
}
