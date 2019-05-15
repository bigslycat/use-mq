# use-mq

[![Build Status][status-img]][status-url]
[![Greenkeeper badge](https://badges.greenkeeper.io/bigslycat/use-mq.svg)](https://greenkeeper.io/)

matchMedia React hook

## Installation

- npm: `npm install --save use-mq`
- yarn: `yarn add use-mq`

## Usage

```jsx
import { useMQ } from 'use-mq';

const MyComponent = () => {
  const matches = useMQ('(min-width: 400px)');

  return matches
    ? <div>Matches!</div>
    : null;
}
```

[status-url]: https://travis-ci.org/bigslycat/use-mq
[status-img]: https://travis-ci.org/bigslycat/use-mq.svg?branch=master
