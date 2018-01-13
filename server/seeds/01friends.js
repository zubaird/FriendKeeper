
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('friends').del()
    .then(function () {
      // Inserts seed entries
      return knex('friends').insert([
        {name: "Josh Currie", phone_number: '(925) 286-9709', email: 'josh@currie.com', birthday: null, anniversary: null, date_added: Math.floor(Date.now()/100000), email_interval: null, phone_interval: 14*864, text_interval: 7*864},
        {name: "Kevin Adams", phone_number: '(281) 330-8004', email: 'kevin@adams.com', birthday: null, anniversary: null, date_added: Math.floor(Date.now()/100000), email_interval: 30*864, phone_interval: 21*864, text_interval: 5*864},
        {name: "Stanton Morrow", phone_number: '(214) 263-9709', email: 'stanton@morrow.com', birthday: null, anniversary: null, date_added: Math.floor(Date.now()/100000), email_interval: 60*864, phone_interval: 30*864, text_interval: 10*864},
        {name: "Cameron Alspaw", phone_number: '(469) 369-2230', email: 'cameron@al.com', birthday: null, anniversary: null, date_added: Math.floor(Date.now()/100000), email_interval: null, phone_interval: 14*864, text_interval: 3*864},
        {name: "Jason Jones", phone_number: '(310) 283-9912', email: 'jason@jones.com', birthday: null, anniversary: null, date_added: Math.floor(Date.now()/100000), email_interval: null, phone_interval: 5*864, text_interval: 2*864},
        {name: "Adam Hundley", phone_number: '(832) 586-7459', email: 'adam@hundley.com', birthday: null, anniversary: null, date_added: Math.floor(Date.now()/100000), email_interval: null, phone_interval: 10*864, text_interval: 2*864},
        {name: "Steve Rizzotto", phone_number: '(281) 416-9341', email: 'steve@rizzotto.com', birthday: null, anniversary: null, date_added: Math.floor(Date.now()/100000), email_interval: 30*864, phone_interval: 30*864, text_interval: 10*864},
        {name: "Dane Thorwaldson", phone_number: '(832) 622-9709', email: 'dane@thorwaldson.com', birthday: null, anniversary: null, date_added: Math.floor(Date.now()/100000), email_interval: null, phone_interval: 14*864, text_interval: 5*864},
        {name: "Reid Curry", phone_number: '(713) 286-5214', email: 'reid@curry.com', birthday: null, anniversary: null, date_added: Math.floor(Date.now()/100000), email_interval: null, phone_interval: 25*864, text_interval: 9*864},
        {name: "Josh Marx", phone_number: '(214) 190-1153', email: 'josh@marx.com', birthday: null, anniversary: null, date_added: Math.floor(Date.now()/100000), email_interval: 60*864, phone_interval: 45*864, text_interval: 3*864}
      ]);
    });
};
