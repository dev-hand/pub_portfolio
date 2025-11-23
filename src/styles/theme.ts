export type ThemeType = 'light' | 'dark';

export interface Theme {
    type: ThemeType;
    colors: {
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

export const lightTheme: Theme = {
    type: 'light',
    colors: {
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
        fontFamily: "'Inter', 'Spoqa Han Sans Neo', sans-serif",
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

export const darkTheme: Theme = {
    type: 'dark',
    colors: {
        primary: {
            main: '#a89bff',
            light: '#c2baff',
            dark: '#6c63ff',
            contrast: '#ffffff',
        },
        secondary: {
            main: '#fff176',
            light: '#fff59d',
            dark: '#fdd835',
            contrast: '#000000',
        },
        background: {
            default: '#121212',
            paper: '#1a1a1a',
            elevated: '#262626',
        },
        text: {
            primary: '#ffffff',
            secondary: '#c2c2c2',
            disabled: '#666666',
            hint: '#aaaaaa',
        },
        border: {
            light: '#444444',
            main: '#404040',
            dark: '#555555',
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
    spacing: lightTheme.spacing,
    typography: lightTheme.typography,
    shadows: {
        sm: '0 2px 4px rgba(0, 0, 0, 0.2)',
        md: '0 4px 8px rgba(0, 0, 0, 0.2)',
        lg: '0 8px 16px rgba(0, 0, 0, 0.2)',
    },
};