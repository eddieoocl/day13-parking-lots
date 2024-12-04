import { instance } from "./client";

instance.interceptors.request.use(
    (config) => {
        config.metadata = { startTime: Date.now() };
        return config;
    },
    (error) => {
        return error;
    }
);

instance.interceptors.response.use(
    (response) => {
        const config = response.config;
        const method = config.method.toUpperCase();
        const url = config.url;
        const duration = Date.now() - config.metadata.startTime;

        console.log(`${method} ${url} ${duration} ms`);
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 404) {
            window.location.href = "/not-found";
        }
        if (error.response && error.response.status === 500) {
            window.location.href = "/hard-stop";
        }
        return error;
    }
);

export default instance;
