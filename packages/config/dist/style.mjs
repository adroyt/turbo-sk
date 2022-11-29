import {
  extractorSvelte,
  presetUno,
  presetIcons,
  presetAttributify,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

const unoConfig = {
  extractors: [extractorSvelte],
  theme: {},
  rules: [],
  shortcuts: {},
  presets: [presetUno(), presetIcons({ scale: 1.2 }), presetAttributify()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
};

export { unoConfig };
