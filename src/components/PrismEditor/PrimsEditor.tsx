import { memo, useEffect, useId, useLayoutEffect, useRef } from "react";
import styles from "./PrismEditor.module.scss";
import "@/assets/scripts/prism/prism-live.js";
import {
  PrismThemes,
  themes,
} from "@/components/PrismEditor/PrismEditor.consts.tsx";

const PRISM_RENDERING_TIMEOUT = 50;
export interface CodeEditorProps {
  readonly language?: string;
  readonly theme?: PrismThemes;
  readonly fontSize?: number;
}
const PrismEditor = ({
  language = "javascript",
  theme = "default",
  fontSize = 14,
}: CodeEditorProps) => {
  const previousTheme = useRef<PrismThemes>("default");

  const id = useId();

  useLayoutEffect(() => {
    updateFontSize();
  }, [fontSize]);

  useLayoutEffect(() => {
    updateTheme();
  }, [theme]);

  useLayoutEffect(() => {
    updateLanguage();
  }, [language]);

  useEffect(() => {
    setTimeout(() => {
      updateBackgroundColor();
    }, PRISM_RENDERING_TIMEOUT);
  }, [theme]);
  const updateBackgroundColor = () => {
    const editorWrapper = document.getElementById(id);
    if (!editorWrapper) return;
    const pre = editorWrapper.querySelector("pre");
    if (pre) {
      const computedStyle = window.getComputedStyle(pre);
      editorWrapper.style.backgroundColor = computedStyle.backgroundColor;
      editorWrapper.style.backgroundImage = computedStyle.backgroundImage;
    }
  };
  const updateFontSize = () => {
    const editorWrapper = document.getElementById(id);
    if (!editorWrapper) return;
    const [code, textArea] = [
      editorWrapper.querySelector("code"),
      editorWrapper.querySelector("textarea"),
    ];
    if (textArea && code) {
      code.style.fontSize = `${fontSize}px`;
      code.style.lineHeight = `${fontSize * 1.5}px`;

      textArea.style.fontSize = `${fontSize}px`;
      textArea.style.lineHeight = `${fontSize * 1.5}px`;
    }
  };
  const activateTheme = (theme: PrismThemes) => {
    const link = document.getElementById(
      themes[theme]["id"],
    ) as HTMLLinkElement;
    if (link) {
      link.disabled = false;
    }
  };
  const deactivateTheme = (theme: PrismThemes) => {
    const link = document.getElementById(
      themes[theme]["id"],
    ) as HTMLLinkElement;
    if (link) {
      link.disabled = true;
    }
  };
  const updateTheme = () => {
    deactivateTheme(previousTheme.current);
    activateTheme(theme);
    previousTheme.current = theme;
  };
  const updateLanguage = () => {
    const editorWrapper = document.getElementById(id);
    if (!editorWrapper) return;

    const [code, pre, textArea] = [
      editorWrapper.querySelector("code"),
      editorWrapper.querySelector("pre"),
      editorWrapper.querySelector("textarea"),
    ];

    if (!code || !pre || !textArea) return;

    const oldLanguageClass = [...code.classList].find((cls) =>
      cls.startsWith("language-"),
    );
    if (oldLanguageClass) {
      code.classList.remove(oldLanguageClass);
      pre.classList.remove(oldLanguageClass);
    }

    const newLanguageClass = `language-${language}`;
    code.classList.add(newLanguageClass);
    pre.classList.add(newLanguageClass);

    // @ts-ignore
    Prism.highlightAll();
  };

  return (
    <div id={id} className={` ${styles.wrapper}`}>
      <div className={styles.dots}>
        <span className={styles.redDot}></span>
        <span className={styles.yellowDot}></span>
        <span className={styles.greenDot}></span>
      </div>
      <textarea
        className={`prism-live language-${language} ${styles.component}`}
      ></textarea>
    </div>
  );
};

export default memo(PrismEditor);
