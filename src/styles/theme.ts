export interface Theme {
    colors: {
        // Key Color
        key: string;
        // Primary Colors
        primary: {
            main: string;
            light: string;
            dark: string;
            contrast: string;
        };
        // Secondary Colors
        secondary: {
            main: string;
            light: string;
            dark: string;
            contrast: string;
        };
        // Background Colors
        background: {
            default: string;
            paper: string;
            elevated: string;
        };
        // Text Colors
        text: {
            primary: string;
            secondary: string;
            disabled: string;
            hint: string;
        };
        // Border Colors
        border: {
            light: string;
            main: string;
            dark: string;
        };
        // Status Colors
        status: {
        success: string;
            warning: string;
            error: string;
            info: string;
        };
        // Common Colors
        common: {
            black: string;
            white: string;
            transparent: string;
        };
    };
    // Spacing
    spacing: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    // Typography
    typography: {
        fontFamily: string;
        fontSize: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        };
        fontWeight: {
        light: number;
        regular: number;
        medium: number;
        bold: number;
        };
    };
    // Shadows
    shadows: {
        sm: string;
        md: string;
        lg: string;
    };
}

export const theme: Theme = {
    colors: {
        key: '#2563EB',
        primary: {
            main: '#6c63ff',
            light: '#a89bff',
            dark: '#534bdf',
            contrast: '#ffffff',
        },
        secondary: {
            main: '#fdd835',
            light: '#fff176',
            dark: '#c6a700',
            contrast: '#000000',
        },
        background: {
            default: '#ffffff',
            paper: '#f5f5f5',
            elevated: '#ffffff',
        },
        text: {
            primary: '#333333',
            secondary: '#666666',
            disabled: '#b0b0b0',
            hint: '#aaaaaa',
        },
        border: {
            light: '#e0e0e0',
            main: '#cccccc',
            dark: '#aaaaaa',
        },
        status: {
            success: '#66bb6a',
            warning: '#ffa726',
            error: '#ef5350',
            info: '#42a5f5',
        },
        common: {
            black: '#000000',
            white: '#ffffff',
            transparent: 'transparent',
        },
    },
    spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
    },
    typography: {
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif",
        fontSize: {
            xs: '12px',
            sm: '14px',
            md: '16px',
            lg: '18px',
            xl: '20px',
        },
        fontWeight: {
            light: 300,
            regular: 400,
            medium: 500,
            bold: 700,
        },
    },
    shadows: {
        sm: '0 2px 4px rgba(0, 0, 0, 0.1)',
        md: '0 4px 8px rgba(0, 0, 0, 0.1)',
        lg: '0 8px 16px rgba(0, 0, 0, 0.1)',
    },
};