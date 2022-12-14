import {
  extractorSvelte,
  presetIcons,
  presetUno,
  presetAttributify,
  transformerDirectives,
  transformerVariantGroup,
  type UserConfig as UnoConfig,
} from "unocss";

import { handler as h, variantGetParameter } from "@unocss/preset-mini/utils";

// https://github.com/unocss/unocss/tree/main/packages/vite
// https://github.com/unocss/unocss/tree/main/packages/vite#svelte
// https://github.com/unocss/unocss/tree/main/packages/preset-uno
// https://github.com/unocss/unocss/tree/main/packages/preset-attributify
// https://github.com/unocss/unocss/tree/main/packages/preset-icons
// https://github.com/unocss/unocss/tree/main/packages/transformer-directives
// https://github.com/unocss/unocss/tree/main/packages/transformer-variant-group

// https://github.com/unocss/unocss#configurations
export const unoConfig: UnoConfig = {
  extractors: [extractorSvelte],

  // https://github.com/unocss/unocss#extend-theme
  theme: {},

  // https://github.com/unocss/unocss#custom-rules
  rules: [],

  // https://github.com/unocss/unocss#shortcuts
  shortcuts: [],

  preflights: [
    {
      getCSS: () => `
      :root {
        -webkit-tap-highlight-color: transparent;        
      }

      html,
      body {
        overflow-x: hidden;
        height: 100%;
      }
      `,
    },
  ],

  variants: [
    {
      // adds support for "@min-[width]:class" and "@max-[width]:class"
      // or
      // "@min-width:class" and "@max-width:class"
      name: "arbitrary-media-query",
      match(matcher) {
        // prefix with @ to specify that it's a media query
        const minVariant = variantGetParameter("@min-", matcher, [":"]);
        const maxVariant = variantGetParameter("@max-", matcher, [":"]);
        const minHeightVariant = variantGetParameter("@min-h-", matcher, [":"]);
        const maxHeightVariant = variantGetParameter("@max-h-", matcher, [":"]);

        // the order that we check the variants is important
        // because we want to match the most specific one
        const matched =
          (minHeightVariant && {
            type: "min-h",
            variant: minHeightVariant,
          }) ||
          (maxHeightVariant && {
            type: "max-h",
            variant: maxHeightVariant,
          }) ||
          (minVariant && {
            type: "min",
            variant: minVariant,
          }) ||
          (maxVariant && {
            type: "max",
            variant: maxVariant,
          });

        if (matched?.variant) {
          const [match, rest] = matched.variant;
          // this is for extracting the value from the match and
          // makes sure it either has no brackets or has brackets
          const extractedValue =
            h.bracket(match) || (!match.startsWith("[") && !match.endsWith("]") && match) || "";
          const endsWithUnit = /^\d+(em|px|rem)$/.test(extractedValue);
          const isOnlyNum = /^\d+$/.test(extractedValue);

          if (endsWithUnit || isOnlyNum) {
            return {
              matcher: rest,
              handle: (input, next) =>
                next({
                  ...input,
                  parent: `${input.parent ? `${input.parent} $$ ` : ""}@media (${
                    matched.type == "min"
                      ? "min-width"
                      : matched.type == "max"
                      ? "max-width"
                      : matched.type == "min-h"
                      ? "min-height"
                      : "max-height"
                  }:${endsWithUnit ? extractedValue : extractedValue + "px"})`,
                }),
            };
          }
        }

        return void 0;
      },
    },

    matcher => {
      const [m1, m2, m3] = ["scrollbar:", "scrollbar-track:", "scrollbar-thumb:"];
      let matchedStr = "";

      if (matcher.startsWith(m1)) {
        matchedStr = m1;
      } else if (matcher.startsWith(m2)) {
        matchedStr = m2;
      } else if (matcher.startsWith(m3)) {
        matchedStr = m3;
      } else {
        return matcher;
      }

      return {
        matcher: matcher.slice(matchedStr.length),
        selector: s =>
          `${s}::-webkit-scrollbar${
            matchedStr == m2 ? "-track" : matchedStr == m3 ? "-thumb" : ""
          }`,
      };
    },
  ],

  // https://github.com/unocss/unocss#using-presets
  presets: [presetUno(), presetIcons({ scale: 1.2 }), presetAttributify()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
};
