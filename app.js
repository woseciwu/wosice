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
  
  getFilms() {
    return this.films;
  }
  
  setFilms(films) {
    this.films = films;
  }
  
  getMusic(music) {
    return this.music;
  }
  
  setMusic(music) {
    this.music = music;
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

class Test {
  constructor() {
    this.server = new Server();
  }
}

module.exports = Server;
