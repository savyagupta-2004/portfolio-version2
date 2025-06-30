import { useReducedMotion, useSpring } from "framer-motion";
import { memo, useEffect, useRef } from "react";
import { delay } from "../utils/delay";
import { classes } from "../utils/style";
import styles from "./decoder-text.module.css";

// prettier-ignore
const glyphs = [
  'ア', 'イ', 'ウ', 'エ', 'オ',
  'カ', 'キ', 'ク', 'ケ', 'コ',
  'サ', 'シ', 'ス', 'セ', 'ソ',
  'タ', 'チ', 'ツ', 'テ', 'ト',
  'ナ', 'ニ', 'ヌ', 'ネ', 'ノ',
  'ハ', 'ヒ', 'フ', 'ヘ', 'ホ',
  'マ', 'ミ', 'ム', 'メ', 'モ',
  'ヤ', 'ユ', 'ヨ', 'ー',
  'ラ', 'リ', 'ル', 'レ', 'ロ',
  'ワ', 'ヰ', 'ヱ', 'ヲ', 'ン',
  'ガ', 'ギ', 'グ', 'ゲ', 'ゴ',
  'ザ', 'ジ', 'ズ', 'ゼ', 'ゾ',
  'ダ', 'ヂ', 'ヅ', 'デ', 'ド',
  'バ', 'ビ', 'ブ', 'ベ', 'ボ',
  'パ', 'ピ', 'プ', 'ペ', 'ポ',
];

const CharType = {
  Glyph: "glyph",
  Value: "value",
};

function shuffle(content, output, position) {
  return content.map((value, index) => {
    if (index < position) {
      return { type: CharType.Value, value };
    }

    if (position % 1 < 0.5) {
      const rand = Math.floor(Math.random() * glyphs.length);
      return { type: CharType.Glyph, value: glyphs[rand] };
    }

    return { type: CharType.Glyph, value: output[index].value };
  });
}

export const DecoderText = memo(
  ({ text, start = true, delay: startDelay = 0, className, ...rest }) => {
    const output = useRef([{ type: CharType.Glyph, value: "" }]);
    const container = useRef();
    const reduceMotion = useReducedMotion();
    const decoderSpring = useSpring(0, { stiffness: 8, damping: 5 });

    useEffect(() => {
      if (reduceMotion) {
        // Just show text without animation
        const content = text.split("");
        output.current = content.map((value) => ({
          type: CharType.Value,
          value,
        }));
        if (container.current) {
          const characterMap = output.current.map((item) => {
            return `<span class="${styles[item.type]}">${item.value}</span>`;
          });
          container.current.innerHTML = characterMap.join("");
        }
        return;
      }

      let isCancelled = false;

      const containerInstance = container.current;
      const content = text.split("");

      const renderOutput = () => {
        const characterMap = output.current.map((item) => {
          return `<span class="${styles[item.type]}">${item.value}</span>`;
        });
        containerInstance.innerHTML = characterMap.join("");
      };

      const unsubscribeSpring = decoderSpring.on("change", (value) => {
        output.current = shuffle(content, output.current, value);
        renderOutput();
      });

      const loopAnimation = async () => {
        while (!isCancelled) {
          // Reset the spring instantly to 0
          decoderSpring.set(0);
          await delay(100); // small gap

          // Animate to text length
          await delay(startDelay);
          decoderSpring.set(text.length);

          // Wait before next cycle
          await delay(2000);
        }
      };

      loopAnimation();

      return () => {
        isCancelled = true;
        unsubscribeSpring?.();
      };
    }, [decoderSpring, reduceMotion, startDelay, text]);

    return (
      <span className={classes(styles.text, className)} {...rest}>
        {/* <VisuallyHidden className={styles.label}>{text}</VisuallyHidden> */}
        <span aria-hidden className={styles.content} ref={container} />
      </span>
    );
  }
);
