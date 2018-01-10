
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('friends').del()
    .then(function () {
      // Inserts seed entries
      return knex('friends').insert([
        {name: "Josh Currie", phone_number: '(925) 286-9709', email: 'josh@currie.com', birthday: null, anniversary: null, email_duration: null, phone_duration: 14, text_duration: 7},
        {name: "Kevin Adams", phone_number: '(281) 330-8004', email: 'kevin@adams.com', birthday: null, anniversary: null, email_duration: 30, phone_duration: 21, text_duration: 5},
        {name: "Stanton Morrow", phone_number: '(214) 263-9709', email: 'stanton@morrow.com', birthday: null, anniversary: null, email_duration: 60, phone_duration: 30, text_duration: 10},
        {name: "Cameron Alspaw", phone_number: '(469) 369-2230', email: 'cameron@al.com', birthday: null, anniversary: null, email_duration: null, phone_duration: 14, text_duration: 3},
        {name: "Jason Jones", phone_number: '(310) 283-9912', email: 'jason@jones.com', birthday: null, anniversary: null, email_duration: null, phone_duration: 5, text_duration: 2},
        {name: "Adam Hundley", phone_number: '(832) 586-7459', email: 'adam@hundley.com', birthday: null, anniversary: null, email_duration: null, phone_duration: 10, text_duration: 2},
        {name: "Steve Rizzotto", phone_number: '(281) 416-9341', email: 'steve@rizzotto.com', birthday: null, anniversary: null, email_duration: 30, phone_duration: 30, text_duration: 10},
        {name: "Dane Thorwaldson", phone_number: '(832) 622-9709', email: 'dane@thorwaldson.com', birthday: null, anniversary: null, email_duration: null, phone_duration: 14, text_duration: 5},
        {name: "Reid Curry", phone_number: '(713) 286-5214', email: 'reid@curry.com', birthday: null, anniversary: null, email_duration: null, phone_duration: 25, text_duration: 9},
        {name: "Josh Marx", phone_number: '(214) 190-1153', email: 'josh@marx.com', birthday: null, anniversary: null, email_duration: 60, phone_duration: 45, text_duration: 3}
      ]);
    });
};
