var mainVue = new Vue({
  el:'#vue-app',
  data: {
    age: 20,
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
    updateXY: function(event){
      console.log(event);
      this.x = '('+event.offsetX+',';
      this.y = event.offsetY+')';
    }
  }
});
