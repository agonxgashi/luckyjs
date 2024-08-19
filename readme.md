# LuckyJs

#### A lightweight JavaScript library to generate a random boolean value

## Installation

You can install the library via npm

```bash
npm install luckyjs
```

## Usage

```Javascript
const lucky = require('luckyjs');

const bool = lucky(); // Returns either true or false randomly
console.log(bool);
```



## API


`lucky(probability)` - Returns a random boolean value (true or false). Probability is optional and can be a numeric value from 0 to 100. If not provided. default is value is 50.