// 
// function show() {
//   let time = /(..)(:..)/.exec(new Date());     // The prettyprinted time.
//   let hour = time[1] % 12 || 12;               // The prettyprinted hour.
//   let period = time[1] < 12 ? 'a.m.' : 'p.m.'; // The period of the day.
//   new Notification(hour + time[2] + ' ' + period, {
//     icon: 'icon.jpg',
//     body: 'Time to text someone!'
//   });
// }
// // Test for notification support.
// if (window.Notification) {
//   let days = 86400000;
//   let date_added = new Date('January 10, 18 00:20:18 GMT+00:00')
//   let text_interval = 1;
//   if(Date.now() - date_added.getTime() >= text_interval * days){
//     show();
//     text_interval *= 2;
//   }
// }
