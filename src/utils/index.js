import { orderBy } from 'lodash';

const path = require('path')
// export const isBrowser = () => typeof document !== "undefined"
export const isBrowser = () => typeof window !== "undefined"
export const jsonDirectory = path.join(process.cwd(), 'src/json');

export const isEven = (indexNumber) => indexNumber % 2 == 0

// export const sortByDate = (posts, field = 'date') => sortBy(posts, field, 'desc')

export const filteredPosts = (posts, field = 'date') => {
   return orderBy(posts, field, 'desc')
}
export const filteredTestimonials = (items, field = 'date') => {
   return orderBy(items, field, 'desc')
}
export const filteredResearchPapers = (items, field = 'date') => {
   return orderBy(items, field, 'desc')
}
export const filteredNews = (items, field = 'date') => {
   return orderBy(items, field, 'desc')
}

export const dateFormat = (date) => {
   if (!date) {
      return date
   }
   return new Intl.DateTimeFormat('en-GB', { dateStyle: 'medium',  timeZone: 'Asia/Kolkata' }).format(new Date(date))
}

export const loadImage = ({ src, width, quality }) => {
   // return import()
}
