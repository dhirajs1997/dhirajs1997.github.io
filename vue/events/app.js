var mainVue = new Vue({
  el:'#vue-app',
  data: {
    age: 20,
    // will change to coordinates after on hovering over canvas
    x: 'Hover mouse ',
    y: 'to view co-ordinates'
  },
  methods:{
    add: function(inc){
      this.age += inc;
    },
    sub: function(dec){
      this.age -= dec;
    },
    //This event will update xy parameters
    updateXY: function(event){
      //To see parameters on console
      console.log(event);
      // get x and y coordinates and display as (x,y)
      this.x = '('+event.offsetX+',';
      this.y = event.offsetY+')';
    }
  }
});
