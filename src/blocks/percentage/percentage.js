const constants = {
  SIZE_THICKNESS_RATIO: 19,
};

class Percentage {
  constructor(elem, id) {
    this._id = id;
    this._$block = $(elem);
    this._$circleProgress = this._$block.children('.js-percentage__circle-progress');
    this._$value = this._$block.children('.js-percentage__value');
  }

  initElement() {
    const percentageValue = parseInt(this._$value.text(), 10) / 100;
    const percentageSize = parseInt(this._$block.css('height'), 10);
    const percentageThickness = percentageSize / constants.SIZE_THICKNESS_RATIO;
    const getFillColor = () => {
      if (this._$block.hasClass('percentage_color_red')) return '#e75735';
      if (this._$block.hasClass('percentage_color_blue')) return '#4e6ea3';
      return '#000000';
    };
    this._$block.circleProgress({
      canvas: this._$circleProgress[0],
      value: percentageValue,
      size: percentageSize,
      fill: getFillColor(),
      thickness: percentageThickness,
      emptyFill: '#ffffff',
      startAngle: -Math.PI / 2,
    });

    return this;
  }
}

const $percentage = $('.js-percentage');
let id = 0;
$percentage.each((index, elem) => {
  const percentage = new Percentage(elem, id);
  percentage.initElement();
  id += 1;
});
