import React from "react";
import { Global, css } from "@emotion/core";
import { useTheme } from "emotion-theming";
import { lighten } from "polished";

export default function GlobalStyle() {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap");
        *,
        *::after,
        *::before {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        *::selection {
          background: ${lighten("0.35", "#737380")}!important;
        }
        body {
          font-size: 16px;
          font-family: "Noto Sans KR", sans-serif;
          background-color: ${theme.colors.background};
          text-rendering: optimizelegibility;
        }
        h1 {
          font-size: 32px;
          color: #333;
          font-weight: black;
          margin-bottom: 24px;
          padding-bottom: 5px;
        }
        h2,
        h3,
        h4,
        h5,
        h6 {
          color: #333;
          margin: 24px 0 12px 0;
          font-weight: normal;
        }
        h2 {
          font-size: 24px;
          font-weight: bold;
          padding-bottom: 5px;
          border-bottom: 1px solid #eee;
        }
        h3 {
          font-size: 18px;
          font-weight: bold;
        }
        h4 {
          font-size: 16px;
          font-weight: bold;
        }
        p {
          color: #444;
          font-size: 16px;
          line-height: 28px;
          margin-bottom: 8px;
          font-weight: 400;
        }
        code.inline-code {
          display: inline-block;
          vertical-align: middle;
          line-height: 1;
          padding: 0.2em 0.2em 0.3em 0.2em;
          background-color: #eff6fc;
          color: #00a2ff;
          font-size: 14px;
          border-radius: 5px;
          border: 1.2px solid #00a2ff;
          font-family: Menlo, Monaco, "Noto Sans KR", sans-serif;
          font-feature-settings: "clig" 0, "calt" 0;
          font-variant: no-common-ligatures no-discretionary-ligatures
            no-historical-ligatures no-contextual;
        }
        a {
          color: #0687f0;
          font-weight: bold;
          &:hover {
            color: ${theme.colors.primary}!important;
            transition: all 100ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
            opacity: 1 !important;
          }
        }
        blockquote {
          margin: 0;
          p {
            padding: 1rem;
            background: #f5f5fa;
            border-radius: 5px;
          }
        }
        hr {
          border: 0;
          height: 0;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
          border-bottom: 1px solid rgba(255, 255, 255, 0.3);
        }
        table {
          border-collapse: collapse;
          border-spacing: 0;
          width: 100%;
          margin-bottom: 16px;
          color: #444;
        }
        th,
        td {
          text-align: left;
          padding: 12px;
        }
        tr:nth-of-type(2n) td {
          background-color: ${theme.colors.sidebar.itemActive};
        }
        tr {
          background-color: #ffffff;
        }
        iframe {
          margin-bottom: 16px;
        }
        img {
          max-width: 100%;
        }
        ul,
        ol {
          color: #444;
          padding-left: 16px;
          margin-bottom: 2px;
          margin-left: 6px;
          li {
            line-height: 28px;
          }
        }
        .gatsby-highlight {
          position: relative;
          .token {
            font-style: normal !important;
          }
        }
        pre[class*="language-"]::before {
          background: #d9d7e0;
          border-radius: 0 0 4px 4px;
          color: #232129;
          font-size: 12px;
          font-family: SFMono-Regular, Menlo, Monaco, Consolas,
            "Liberation Mono", "Courier New", monospace;
          letter-spacing: 0.075em;
          line-height: 1;
          padding: 0.25rem 0.5rem;
          position: absolute;
          left: 1rem;
          text-align: right;
          text-transform: uppercase;
          top: 0;
        }
        pre[class*="language-"] code {
          font-family: Menlo, Monaco, "Noto Sans KR";
          font-variant: no-common-ligatures no-discretionary-ligatures
            no-historical-ligatures no-contextual;
        }
        pre[class~="language-js"]::before,
        pre[class~="language-javascript"]::before {
          content: "js";
          background: #f7df1e;
        }
        pre[class~="language-jsx"]::before {
          content: "jsx";
          background: #61dafb;
        }
        pre[class~="language-typescript"]::before,
        pre[class~="language-ts"]::before {
          content: "ts";
          background: #294e80;
          color: #fff;
        }
        pre[class~="language-tsx"]::before {
          content: "tsx";
          background: #294e80;
          color: #fff;
        }
        pre[class~="language-graphql"]::before {
          content: "GraphQL";
          background: #e10098;
          color: #fff;
        }
        pre[class~="language-html"]::before {
          content: "html";
          background: #005a9c;
          color: #fff;
        }
        pre[class~="language-css"]::before {
          content: "css";
          background: #ff9800;
          color: #fff;
        }
        pre[class~="language-mdx"]::before {
          content: "mdx";
          background: #f9ac00;
          color: #fff;
        }
        pre[class~="language-shell"]::before {
          content: "shell";
        }
        pre[class~="language-sh"]::before {
          content: "sh";
        }
        pre[class~="language-bash"]::before {
          content: "bash";
        }
        pre[class~="language-yaml"]::before {
          content: "yaml";
          background: #ffa8df;
        }
        pre[class~="language-markdown"]::before {
          content: "md";
        }
        pre[class~="language-json"]::before,
        pre[class~="language-json5"]::before {
          content: "json";
          background: linen;
        }
        pre[class~="language-diff"]::before {
          content: "diff";
          background: #e6ffed;
        }
        pre[class~="language-text"]::before {
          content: "text";
          background: #fff;
        }
        pre[class~="language-flow"]::before {
          content: "flow";
          background: #e8bd36;
        }
        pre > div:first-child {
          font-family: "Noto Sans KR", sans-serif;
        }
      `}
    />
  );
}
