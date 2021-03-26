var app = new Vue(
  {
    el: '#root',
    data: {
      newItem: "",
      lista: ["comprare pane", "pagare bolleta luce", "chiamare luigi"]
    },
    methods: {
      addItem: function(){
        if (this.newItem !== "") {
          this.lista.push(this.newItem);
          this.newItem = "";
        }
      },
      deleteItem: function(itemIndex){
        this.lista.splice(itemIndex, 1);
      }
    }
  }
);
