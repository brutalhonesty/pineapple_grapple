'use strict';

var should = require('should');
var app = require('../../../app');
var request = require('supertest');

describe('POST /api/dns/spf', function() {

  it('should respond with JSON object', function(done) {
    request(app)
      .post('/api/dns/spf')
      .send({domain: 'google.com'})
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Object);
        done();
      });
  });
});