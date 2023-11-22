function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw new Error(
      `please check ${selection} selector, no such element exists`
    );
  }
}

function Counter(element, value) {
  this.counter = element;
  this.value = value;

  this.increaseBtn = element.querySelector(".increase");
  this.decreaseBtn = element.querySelector(".decrease");
  this.resetBtn = element.querySelector(".reset");

  this.valueDom = element.querySelector(".value");
  this.valueDom.textContent = this.value;
  this.increase = this.increase.bind(this);
  this.increaseBtn.addEventListener("click", this.increase);
  this.decrease = this.decrease.bind(this);
  this.decreaseBtn.addEventListener("click", this.decrease);
  this.reset = this.reset.bind(this);
  this.resetBtn.addEventListener("click", this.reset);
}

Counter.prototype.increase = function () {
  this.value++;
  this.valueDom.textContent = this.value;
};
Counter.prototype.decrease = function () {
  this.value--;
  this.valueDom.textContent = this.value;
};
Counter.prototype.reset = function () {
  this.value = 0;
  this.valueDom.textContent = this.value;
};

const firstCounter = new Counter(getElement(".first-counter"), 100);
const secondCounter = new Counter(getElement(".second-counter"), 200);
