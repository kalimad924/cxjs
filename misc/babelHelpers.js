var babelHelpers = {};

babelHelpers.typeof =
   typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
      ? function (obj) {
         return typeof obj;
      }
      : function (obj) {
         return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype
            ? "symbol"
            : typeof obj;
      };

babelHelpers.classCallCheck = function (instance, Constructor) {
   if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
   }
};

babelHelpers.extends =
   Object.assign ||
   function (target) {
      for (var i = 1; i < arguments.length; i++) {
         var source = arguments[i];

         for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
               target[key] = source[key];
            }
         }
      }

      return target;
   };

babelHelpers.inheritsLoose = function (subClass, superClass) {
   subClass.prototype = Object.create(superClass.prototype);
   subClass.prototype.constructor = subClass;
   subClass.__proto__ = superClass;
}

babelHelpers.inherits = function (subClass, superClass) {
   if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
   }

   subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
         value: subClass,
         enumerable: false,
         writable: true,
         configurable: true
      }
   });
   if (superClass)
      Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : (subClass.__proto__ = superClass);
};

babelHelpers.possibleConstructorReturn = function (self, call) {
   if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
   }

   return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

babelHelpers.createClass = (function () {
   function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
         var descriptor = props[i];
         descriptor.enumerable = descriptor.enumerable || false;
         descriptor.configurable = true;
         if ("value" in descriptor) descriptor.writable = true;
         Object.defineProperty(target, descriptor.key, descriptor);
      }
   }

   return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
   };
})();

babelHelpers.objectSpread = function objectSpread(target) {
   for (var i = 1; i < arguments.length; i++) {
      var source = (arguments[i] != null) ? arguments[i] : {};
      var ownKeys = Object.keys(source);
      if (typeof Object.getOwnPropertySymbols === 'function') {
         ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
         }));
      }
      ownKeys.forEach(function (key) {
         babelHelpers.defineProperty(target, key, source[key]);
      });
   }
   return target;
};

babelHelpers.defineProperty = function defineProperty(obj, key, value) {
   if (key in obj) {
      Object.defineProperty(obj, key, {
         value: value,
         enumerable: true,
         configurable: true,
         writable: true
      });
   } else {
      obj[key] = value;
   }
   return obj;
};

window.babelHelpers = babelHelpers;