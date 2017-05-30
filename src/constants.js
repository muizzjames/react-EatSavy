const constants = {
  Businesses: [
    { id : 1, business_name : "Pita Pan", rating : 76, coordinate : {latitude: 51.528216, longitude: -0.072660}, address: "36 Columbia Rd, London", },
    { id : 2, business_name : "Burned Ends", rating : 82, coordinate : {latitude: 51.531453, longitude: -0.065609}, address: "337 Hackney Rd, London", }
  ],
  Meals:[
    { id : 1, meal_name : "Tabbouleh", business_id : 1, quantity : 5, cost: 4.75, time_start: "16:25", time_finish: "18:30", },
    { id : 2, meal_name : "Fattoush", business_id : 1, quantity : 6, cost: 3.35, time_start: "16:22", time_finish: "18:30", },
    { id : 3, meal_name : "Tabbouleh", business_id : 2, quantity : 5, cost: 5.20, time_start: "16:27", time_finish: "18:30", },
    { id : 4, meal_name : "Grilled Cheese", business_id : 2, quantity : 10, cost: 6, time_start: "15:17", time_finish: "19:00", }
  ]
};

export default constants;
