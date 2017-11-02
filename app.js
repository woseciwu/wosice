const server = require('express');
const md5 = require('md5')
const client = require('./models/client')


class Server {

  constructor(user, music, films, player) {
    this.user = user;
    this.music = music;
    this.player = player;
    this.films = films;
  }
  
  getUser() {
    return this.user;
  }

  setUser(user) {
    this.user = user;
  }
  serialize() {
    return {
      user: this.user,
      music: this.music,
      films: this.films,
      player: this.player
    }; 
  }
}

module.exports = Server;
