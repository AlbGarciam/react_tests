import React  from 'react';

export default class User {
    constructor(name, age, genre) {
        this.name = name;
        this.age = age;
        this.genre = genre;
    }

    formatHTML() {
        return <tr key={`${this.name}-${this.age}-${this.genre}`}><td>{this.name}</td><td>{this.age}</td><td>{this.genre}</td></tr>;
    }
}