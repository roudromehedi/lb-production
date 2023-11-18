// Uncomment these imports to begin using these cool features!

import {get} from '@loopback/rest';

// import {inject} from '@loopback/core';

export class HelloController {
  @get('/hello')
  hello(): Object {
    return {
      greeting: 'Hello from LoopBack',
      date: new Date(),
      url: 'www.smroudro.com',
    };
  }
}
