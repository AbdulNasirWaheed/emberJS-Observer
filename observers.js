import Ember from 'ember';

export default function() {
   var Person = Ember.Object.extend ({
      Name: null,
      
      //Defining the Details1 and Details2 computed property function
      Details1: Ember.computed('Name', function() {
         
         //get the Name value
         var Name = this.get('Name');
         //return the Name value
         return Name;
      }),

      Details2: Ember.observer('Details1', function() {
         this.set('Name','Steve Waugh');
      })
   });

   //initializing the Person details
   var person = Person.create ({
      //initial value of Name varialble
      Name: 'Mark Waugh'
   });

   //updating the value for 'firstName' using set() method
   document.write('<strong>The updated name : </strong>' +person.get('Details1'));
}
