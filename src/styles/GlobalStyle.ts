import { createGlobalStyle, DefaultTheme } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    /* Reset CSS */
    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        font-size: 16px;
        -webkit-text-size-adjust: 100%;
    }

    body {
        font-family: ${({ theme }) => theme.typography.fontFamily};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        line-height: 1.5;
        color: ${({ theme }) => theme.colors.text.primary};
        background-color: ${({ theme }) => theme.colors.background.default};
    }

    /* Remove list styles */
    ul, ol {
        list-style: none;
    }

    /* Remove default button styles */
    button {
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
        font: inherit;
        color: inherit;
    }

    /* Remove default link styles */
    a {
        color: inherit;
        text-decoration: none;
    }

    /* Remove default input styles */
    input, textarea, select {
        font: inherit;
        color: inherit;
    }

    /* Remove default table styles */
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    /* Remove default image styles */
    img {
        max-width: 100%;
        height: auto;
        display: block;
    }

    /* Remove default fieldset styles */
    fieldset {
        border: none;
        padding: 0;
        margin: 0;
    }

    /* Remove default legend styles */
    legend {
        padding: 0;
    }

    /* Remove default hr styles */
    hr {
        border: none;
        border-top: 1px solid ${({ theme }) => theme.colors.border.main};
        margin: ${({ theme }) => theme.spacing.md} 0;
    }

    /* Remove default blockquote styles */
    blockquote {
        margin: 0;
    }

    /* Remove default pre styles */
    pre {
        font-family: monospace;
        white-space: pre-wrap;
    }

    /* Remove default code styles */
    code {
        font-family: monospace;
    }

    /* Remove default sub and sup styles */
    sub, sup {
        font-size: ${({ theme }) => theme.typography.fontSize.xs};
        line-height: 0;
        position: relative;
        vertical-align: baseline;
    }

    sup {
        top: -8px;
    }

    sub {
        bottom: -4px;
    }
`;