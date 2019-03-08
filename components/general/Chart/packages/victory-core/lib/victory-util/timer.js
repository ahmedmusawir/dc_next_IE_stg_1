function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

import { timer, now } from "d3-timer";

var Timer =
/*#__PURE__*/
function () {
  function Timer() {
    _classCallCheck(this, Timer);

    this.shouldAnimate = true;
    this.subscribers = [];
    this.loop = this.loop.bind(this);
    this.timer = timer(this.loop);
  }

  _createClass(Timer, [{
    key: "bypassAnimation",
    value: function bypassAnimation() {
      this.shouldAnimate = false;
    }
  }, {
    key: "resumeAnimation",
    value: function resumeAnimation() {
      this.shouldAnimate = true;
    }
  }, {
    key: "loop",
    value: function loop() {
      this.subscribers.forEach(function (s) {
        s.callback(now() - s.startTime, s.duration);
      });
    }
  }, {
    key: "start",
    value: function start() {
      this.timer.start();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.timer.stop();
    }
  }, {
    key: "subscribe",
    value: function subscribe(callback, duration) {
      duration = this.shouldAnimate ? duration : 0;
      return this.subscribers.push({
        startTime: now(),
        callback: callback,
        duration: duration
      });
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(id) {
      if (id !== null) {
        delete this.subscribers[id - 1];
      }
    }
  }]);

  return Timer;
}();

export { Timer as default };