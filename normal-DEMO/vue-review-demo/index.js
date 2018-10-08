Vue.component("product-item", {
    props: ["product"],
    template: "<li>{{ product.name }}</li>"
});

var obj = {
  freezeText: "foo"
};
Object.freeze(obj);


var coolfe = new Vue({
  el: "#app",
  data: {
    one: {
      message: "Hello, Welcome to back.",
      time: "load in " + new Date().toLocaleDateString(),
      products: [],
      reverseText: "Hello, Welcome to back.",
      modelText: "Try to type some thins."
    },
    two: {
      obj,
      a: 1,
      rawHtml: '<span style="color: blue;">blue text</span>',
      computedMessage: 'Hello'
    },
    three: {
      isActive: true,
      hasError: true
    }
  },
  created() {  
    // 1.html
    fetch("https://api.myjson.com/bins/74l63")
      .then(response => {
        console.log(response, "response");
        return response.json();
      })
      .then(json => {
        this.one.products = json.products;
        console.log(json, "json");
      });
  },
  methods: {
    // 1.html
    reverseText: function() {
      this.one.reverseText = this.one.reverseText
        .split("")
        .reverse()
        .join("");
    }
  },
  created: function () {
    console.log('a is: ' + this.two.a)
  },
  // 计算属性
  computed: {
    reversedComputedMessage: function() {
      return this.two.computedMessage.split('').reverse().join('');
    }
  }
});
