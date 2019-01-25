var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'Harry Potter';
        var text = 'wtf';
        var message = generateMessage(from, text);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from,text});
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'Bejos';
        var latitude = 48.235213;
        var longitude = 17.0345543;
        var url = 'https://www.google.com/maps?q=48.235213,17.0345543';
        var locationMessage = generateLocationMessage(from, latitude, longitude);

        expect(typeof locationMessage.createdAt).toBe('number');
        expect(locationMessage).toMatchObject({from, url});
    });
});