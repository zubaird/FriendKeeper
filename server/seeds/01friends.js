
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('friends').del()
    .then(function () {
      // Inserts seed entries
      return knex('friends').insert([
        {name: "Josh Currie", phone_number: '(925) 286-9709', email: 'josh@currie.com', birthday: '12/19/1989', anniversary: '02/08/1990', date_added: Math.floor(Date.now()/100000), email_interval: 9000000, phone_interval: 1000004, text_interval: 700000},
        {name: "Kevin Adams", phone_number: '(281) 330-8004', email: 'kevin@adams.com', birthday: '05/21/1990', anniversary: '02/08/1990', date_added: Math.floor(Date.now()/100000), email_interval: 6000000, phone_interval: 2000001, text_interval: 500000},
        {name: "Stanton Morrow", phone_number: '(214) 263-9709', email: 'stanton@morrow.com', birthday: '12/19/1989', anniversary: '02/08/1990', date_added: Math.floor(Date.now()/100000), email_interval: 3000000, phone_interval: 3000000, text_interval: 1000000},
        {name: "Cameron Alspaw", phone_number: '(469) 369-2230', email: 'cameron@al.com', birthday: '02/08/1990', anniversary: '02/08/1990', date_added: Math.floor(Date.now()/100000), email_interval: 4000000, phone_interval: 1000004, text_interval: 300000},
        {name: "Jason Jones", phone_number: '(310) 283-9912', email: 'jason@jones.com', birthday: '12/19/1999', anniversary: '02/08/1990', date_added: Math.floor(Date.now()/100000), email_interval: 5000000, phone_interval: 500000, text_interval: 200000},
        {name: "Adam Hundley", phone_number: '(832) 586-7459', email: 'adam@hundley.com', birthday: '12/19/1980', anniversary: '02/08/1990', date_added: Math.floor(Date.now()/100000), email_interval: 6000000, phone_interval: 1000000, text_interval: 200000},
        {name: "Steve Rizzotto", phone_number: '(281) 416-9341', email: 'steve@rizzotto.com', birthday: '01/05/1989', anniversary: '02/08/1990', date_added: Math.floor(Date.now()/100000), email_interval: 7000000, phone_interval: 3000000, text_interval: 1000000},
        {name: "Dane Thorwaldson", phone_number: '(832) 622-9709', email: 'dane@thorwaldson.com', birthday: '09/19/1985', anniversary: '02/08/1990', date_added: Math.floor(Date.now()/100000), email_interval: 8000000, phone_interval: 1000004, text_interval: 500000},
        {name: "Reid Curry", phone_number: '(713) 286-5214', email: 'reid@curry.com', birthday: '09/22/1989', anniversary: '02/08/1990', date_added: Math.floor(Date.now()/100000), email_interval: 9000000, phone_interval: 2000005, text_interval: 900000},
        {name: "Josh Marx", phone_number: '(214) 190-1153', email: 'josh@marx.com', birthday: '12/19/1989', anniversary: '02/08/1990', date_added: Math.floor(Date.now()/100000), email_interval: 10000000, phone_interval: 4000005, text_interval: 300000}
      ]);
    });
};
