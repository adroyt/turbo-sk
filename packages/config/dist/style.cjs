"use strict";

const unocss = require("unocss");

const unoConfig = {
  extractors: [unocss.extractorSvelte],
  theme: {},
  rules: [],
  shortcuts: {},
  presets: [unocss.presetUno(), unocss.presetIcons({ scale: 1.2 }), unocss.presetAttributify()],
  transformers: [unocss.transformerDirectives(), unocss.transformerVariantGroup()],
};

exports.unoConfig = unoConfig;
