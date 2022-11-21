const path = require('path')
// export const isBrowser = () => typeof document !== "undefined"
export const isBrowser = () => typeof window !== "undefined"
export const jsonDirectory = path.join(process.cwd(), 'src/json');

export const isEven = (indexNumber) => indexNumber % 2 == 0

export const loadImage = ({ src, width, quality }) => {
   // return import()
}
