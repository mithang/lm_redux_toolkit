import axios from 'axios';
export const requestInterceptor = config => {
    const accessToken = "";
    if (accessToken !== null) {
        config.headers['x-auth'] = accessToken;
    }
    return config;
}

export const responseInterceptor = config => {
    return config;
}

export const requestErrorHandler = error => {
    const originalConfig = error.config;
    if (error?.response?.status === 401 && !originalConfig._retry) {
        
    }
    return Promise.reject(error);
}
export const responseErrorHandler = error => {
    return Promise.reject(error);
}

