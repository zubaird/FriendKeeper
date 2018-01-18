// create notifcation array
 // add objects with a timestamp, and function to execute
 // add a notFired property set to true
// create set interval
 // loop through notifications
 // check if time is up (Date.now() > timestamp && notFired)
 // if times up, then fire function



 // function Notification(name, options) {
 //   this.name  = name;
 //   this.title = options.title;
 // }
 //
 // let notifications = [
 //   {
 //     timestamp: Date.now()+2000,
 //     note: function(){
 //       console.log( new Notification("first", {title: "I am quick"}) )
 //     },
 //     notFired: true
 //   },
 //   {
 //     timestamp: Date.now()+5000,
 //     note: function(){
 //       console.log( new Notification("second", {title: "Wait for it..."}) )
 //     },
 //     notFired: true
 //   },
 //   {
 //     timestamp: Date.now()+10000,
 //     note: function(){
 //       console.log( new Notification("third", {title: "Booyah, 10 seconds"}) )
 //     },
 //     notFired: true
 //   }
 // ]
 //
 //
 // setInterval(function(){
 //   notifications.forEach( el => {
 //     if ( Date.now() >= el.timestamp && el.notFired) {
 //       console.log(  el.note() );
 //       el.notFired = false;
 //     }
 //   })
 //
 // },100)

// 
//  $http.get('/friends')
//    .then( res => {
//      let friends = res.data;
//      let notifications = friends.map( friend => {
//        return createNotifyObject( friend.title, friend.name, friend.birthday)
//      })
//
//      setInterval(function(){
//
//        notifications.forEach( thing => {
//          if ( Date.now() >= thing.timestamp && thing.notFired) {
//            console.log(  thing.note() );
//            thing.notFired = false;
//          }
//        })
//
//      },1000)
//
//    })
//
//
// function createNotifyObject(title, name, birthday) {
//  return   {
//      timestamp: birthday,
//      note: function() {
//        return new Notification(name,{
//          title: title
//        })
//      },
//      notFired: true
//    }
// }
